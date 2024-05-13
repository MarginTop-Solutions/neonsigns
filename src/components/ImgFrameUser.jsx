'use client';

import { FrameContext } from "@/utils/FrameContext";
import { IProps } from "@/utils/Interfaces"
import { useContext } from "react";
import { Group, Image, Layer, Rect, Stage } from "react-konva";

export default function ImgFrameUser() {

    const { rects, frameImage, addImage } = useContext(FrameContext);

    return (
        <div className="relative p-12 w-full bg-slate-200 flex-grow rounded-xl">

            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
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

                        {rects.map((r, i) => (
                            <Rect
                                key={i} x={r.x} y={r.y}
                                width={r.w} height={r.h}
                                stroke="#aa0"
                                strokeWidth={4}
                                onClick={e => addImage(e, r)}
                            />
                        ))}
                    </Group>
                </Layer>

            </Stage>
        </div>
    )
}