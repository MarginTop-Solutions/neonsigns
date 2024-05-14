'use client';

import { FrameContext } from "@/utils/FrameContext";
import { useContext } from "react";
import { Group, Image, Layer, Rect, Stage } from "react-konva";

export default function ImgFrameUser() {

    const { rects, frameImage, addNewImage } = useContext(FrameContext);

    return (
        <div className="relative p-12 w-full bg-slate-200 flex-grow rounded-xl">

            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                draggable
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
                                stroke="#aa0" fill="#aa0"
                                strokeWidth={4}
                                onClick={e => addNewImage(r)}
                            />
                        ))}
                    </Group>
                </Layer>

            </Stage>
        </div>
    )
}