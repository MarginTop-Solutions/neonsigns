import { Group, Image, Layer, Rect, Stage } from "react-konva";
import { useState, useEffect } from "react";
import _frame from "@/assets/Images/family.png";

export default function ImgFrameAdmin() {
    const [rects, setRects] = useState([]);
    const [drawMode, setDrawMode] = useState(false);
    const [tempRect, setTempRect] = useState(null);
    const [frameImage, setFrameImage] = useState(null);

    useEffect(() => {
        // Load the frame image when the component mounts
        const frame = new window.Image();
        frame.onload = () => {
            setFrameImage(frame);
        };
        frame.src = _frame.src;
    }, []);

    const onCanvasMouseMove = (e) => {
        if (!drawMode || !tempRect) return;

        const pos = e.target.getStage().getRelativePointerPosition();
        setTempRect((prevRect) => ({
            ...prevRect,
            ex: pos.x,
            ey: pos.y,
        }));
    };

    const onCanvasMouseDown = (e) => {
        if (!drawMode) return;

        const pos = e.target.getStage().getRelativePointerPosition();
        if (tempRect) {
            // // add new rect
            setRects((p) => [...p, { x: tempRect.x, y: tempRect.y, w: tempRect.ex - tempRect.x, h: tempRect.ey - tempRect.y }]);
            setTempRect(null);
        } else {
            // add temp rect
            setTempRect({ x: pos.x, y: pos.y, ex: pos.x, ey: pos.y });
        }
    };

    const onCanvasMouseUp = e => {
        if (!drawMode || !tempRect) return;
        setRects((p) => [...p, { x: tempRect.x, y: tempRect.y, w: tempRect.ex - tempRect.x, h: tempRect.ey - tempRect.y }]);
        setTempRect(null);
    }

    return (
        <div className="relative flex items-start w-full flex-grow rounded-xl">
            <button
                className="z-10 p-2 bg-zinc-500 hover:invert rounded-xl"
                onClick={() => setDrawMode(!drawMode)}
            >
                DrawMode : {drawMode ? "on" : "off"}
            </button>

            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                className="absolute top-0 left-0 bg-slate-200 rounded-xl"
                draggable={!drawMode}
            >
                <Layer>
                    <Group
                        onMouseDown={onCanvasMouseDown}
                        onMouseMove={onCanvasMouseMove}
                        onMouseUp={onCanvasMouseUp}
                    >
                        {frameImage && (
                            <Image
                                image={frameImage}
                                x={0}
                                y={0}
                            />
                        )}

                        {rects.map((r, i) => (
                            <Rect
                                key={i} x={r.x} y={r.y}
                                width={r.w} height={r.h}
                                stroke="#aa0"
                                strokeWidth={4}
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
