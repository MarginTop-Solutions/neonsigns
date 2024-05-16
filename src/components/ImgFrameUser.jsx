'use client';

import { FrameContext } from "@/utils/FrameContext";
import React, { useContext, useState } from "react";
import { Group, Image, Layer, Rect, Stage } from "react-konva";


const modes = ["VIEW", "UPLOAD"];

export default function ImgFrameUser() {

    const [mode, setMode] = useState("VIEW");

    const { rects, setRectImage, frameImage } = useContext(FrameContext);

    const handleFileChange = (r) => {
        if (mode !== "UPLOAD") return;

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.style.display = 'none';

        const replaceImage = e => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const img = new window.Image();
                    img.src = e.target.result;
                    img.onload = () => setRectImage(r, img);
                };
                reader.readAsDataURL(file);
            }
        }

        fileInput.addEventListener('change', replaceImage);

        document.body.appendChild(fileInput);
        fileInput.click();

        fileInput.addEventListener('change', () => {
            document.body.removeChild(fileInput);
        });
    };

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
                className="absolute"
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
                            <Group
                                key={i} x={r.x} y={r.y}
                                width={r.w} height={r.h}
                                onClick={e => handleFileChange(r)}
                                clipWidth={r.w} clipHeight={r.h}
                            >
                                <Rect
                                    x={0} y={0} width={r.w} height={r.h}
                                    stroke="#aa03" fill="#aa03"
                                    strokeWidth={4}
                                />
                                {r.image && <Image
                                    draggable={mode === "VIEW"}
                                    image={r.image}
                                    onDblClick={e => setRectImage(r, null)}
                                />}
                            </Group>
                        ))}
                    </Group>
                </Layer>

            </Stage>
        </div>
    )
}