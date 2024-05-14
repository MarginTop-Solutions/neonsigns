import { Group, Image, Layer, Rect, Stage } from "react-konva";
import { useState, useContext } from "react";
import { FrameContext } from "@/utils/FrameContext";
import { FrameRect } from "@/utils/misc";

const modes = ["VIEW", "DRAW", "DELETE"];

export default function ImgFrameAdmin() {
    const { rects, setRects, removeRect, frameImage } = useContext(FrameContext);
    const [mode, setMode] = useState("VIEW");
    const [tempRect, setTempRect] = useState(null);

    const onCanvasMouseMove = (e) => {
        if (mode !== "DRAW" || !tempRect) return;

        const pos = e.target.getStage().getRelativePointerPosition();
        setTempRect((prevRect) => ({
            ...prevRect,
            ex: pos.x,
            ey: pos.y,
        }));
    };

    const onCanvasMouseDown = (e) => {
        if (mode !== "DRAW") return;

        const pos = e.target.getStage().getRelativePointerPosition();
        console.log(pos);
        if (tempRect) {
            // // add new rect
            const nr = new FrameRect(tempRect.x, tempRect.y, tempRect.ex - tempRect.x, tempRect.ey - tempRect.y);
            setRects({ ...rects, [nr.id]: nr });
            setTempRect(null);
        } else {
            // add temp rect
            setTempRect({ x: pos.x, y: pos.y, ex: pos.x, ey: pos.y });
        }
    };

    // const onCanvasMouseUp = e => {
    //     if (!drawMode || !tempRect) return;
    //     setRects((p) => [...p, { x: tempRect.x, y: tempRect.y, w: tempRect.ex - tempRect.x, h: tempRect.ey - tempRect.y }]);
    //     setTempRect(null);
    // }


    return (
        <div className="relative flex gap-2 items-start w-full flex-grow rounded-xl">
            {modes.map(m => <button
                key={m} onClick={() => setMode(m)}
                className={`z-10 p-2 bg-zinc-300 rounded-xl ${m === mode && "invert"}`}
            >
                {m}
            </button>)}

            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                onMouseDown={onCanvasMouseDown}
                onMouseMove={onCanvasMouseMove}
                className="absolute top-0 left-0 bg-slate-200 rounded-xl"
                draggable={mode === "VIEW"}
            >
                <Layer>
                    <Group
                        className="bg-red-100"

                    // onMouseUp={onCanvasMouseUp}
                    >
                        {frameImage && (
                            <Image
                                image={frameImage}
                                x={0}
                                y={0}
                            />
                        )}

                        {Object.entries(rects).map(([i, r]) => (
                            <Rect
                                key={i} x={r.x} y={r.y}
                                width={r.w} height={r.h}
                                stroke="#aa0" strokeWidth={4} fill="#aa0"
                                onClick={_ => mode === "DELETE" && removeRect(i)}
                                draggable={mode === "VIEW"}
                                onDragEnd={e => { r.x = e.target.x(); r.y = e.target.y() }}
                            />
                        ))}
                    </Group>
                </Layer>

                <Layer>
                    {tempRect && (
                        <Rect
                            x={tempRect.x}
                            y={tempRect.y}
                            width={tempRect.ex - tempRect.x}
                            height={tempRect.ey - tempRect.y}
                            stroke="#0aa"
                            strokeWidth={4}
                        />
                    )}
                </Layer>
            </Stage>
        </div>
    );
}
