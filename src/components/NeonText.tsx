'use client';

import { IProps } from "@/utils/Interfaces"
import { getGradient, Curve } from "@/utils/misc";
import { useState } from "react";
import image1 from '../assets/Images/lounge1.jpg'
import { Group, Image, Layer, Line, Stage, Text } from "react-konva";
import Konva from "konva";

export default function NeonText({ props }: { props: IProps }) {
    const bgimage = new window.Image();
    bgimage.src = image1.src;

    const [neonOn, setNeonOn] = useState(true);
    const [dragMode, setDragMode] = useState(false);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    // const shadow = getGradient("#ffffff", props.color, 10);

    const [curves, setCurves] = useState<Curve[]>([]);
    const [tempCurve, setTCurve] = useState<number[]>([]);


    const canvasMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
        if (dragMode) return;
        const pos = e.target.getStage()?.getPointerPosition();
        if (!pos) return;
        setCursor(pos);

        if (e.evt.button === 0) {
            setTCurve([...tempCurve, pos.x, pos.y]);
        } else if (tempCurve) {
            if (tempCurve.length >= 4) {
                const nc = new Curve;
                nc.points = [...tempCurve];
                setCurves([...curves, nc]);
            }
            setTCurve([]);
        }
    }

    const canvasMouseMove = (e: Konva.KonvaEventObject<MouseEvent>) => {
        if (dragMode) return;
        const pos = e.target.getStage()?.getPointerPosition();
        if (!pos) return;
        setCursor(pos);
    }

    return (
        <div className="relative flex-grow flex flex-col items-center justify-center p-12 shadow-lg rounded-xl">
            <div className="absolute top-2 left-2 flex gap-2">
                <button
                    onClick={_ => setNeonOn(!neonOn)}
                    className=" rounded-md px-4 py-2 font-bold"
                    style={{
                        background: neonOn ? "#000" : "#aaa",
                        color: neonOn ? "#fff" : "000"
                    }}
                > Neon Toggle </button>

                <button
                    onClick={_ => setDragMode(!dragMode)}
                    className=" rounded-md px-4 py-2 font-bold"
                    style={{
                        background: dragMode ? "#000" : "#aaa",
                        color: dragMode ? "#fff" : "000"
                    }}
                > DragMode Toggle </button>
            </div>

            <img src={bgimage.src} width={window.innerWidth} height={window.innerHeight} className="absolute -z-10" />

            <Stage
                width={window.innerWidth * 0.65}
                height={window.innerHeight * 0.7}
                onMouseDown={canvasMouseDown}
                onMouseMove={canvasMouseMove}
            >

                {/* <Layer>
                    <Image
                        image={bgimage}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                </Layer> */}


                <Layer>
                    <Group
                        draggable={dragMode}
                        x={300} y={200}
                    >
                        <Text
                            text={props.text || "Your Text"}
                            fontSize={90} fontFamily={props.font}
                            shadowEnabled={neonOn}

                            fill={props.color}
                            shadowColor={props.color}
                            shadowBlur={40}
                        />

                        {neonOn && <Text
                            text={props.text || "Your Text"}
                            fontSize={90} fontFamily={props.font}
                            shadowEnabled={neonOn} opacity={0.6}

                            fill="#ffffff" stroke={props.color} strokeWidth={2}
                            shadowColor={props.color}
                            shadowBlur={30}
                        />}
                    </Group>
                </Layer>

                <Layer>
                    {curves.map((c, i) => <Group
                        draggable={dragMode}
                        x={0} y={0} key={i}
                    >
                        <Line
                            points={c.points}
                            shadowEnabled={neonOn} tension={0.5}

                            stroke={props.color} strokeWidth={8}
                            shadowColor={props.color}
                            shadowBlur={40}
                        />

                        {neonOn && <Line
                            points={c.points}
                            shadowEnabled={neonOn} tension={0.5}

                            stroke="#ffffff" strokeWidth={4} opacity={0.6}
                            shadowColor={props.color}
                            shadowBlur={30}
                        />}
                    </Group>)}
                </Layer>

                <Layer>
                    {tempCurve.length >= 2 &&
                        <Line
                            x={0} y={0}
                            points={[...tempCurve, cursor.x, cursor.y]}
                            tension={0.5}
                            stroke="#ffffff" strokeWidth={2}
                        />
                    }
                </Layer>

            </Stage>
        </div>
    )
}