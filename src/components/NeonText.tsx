'use client';

import { IProps } from "@/utils/Interfaces"
import { getGradient, getNeonShadowCSS } from "@/utils/misc";
import { useRef, useState } from "react";
import image1 from '../assets/Images/lounge1.jpg'
import { Group, Image, Layer, Stage, Text } from "react-konva";

export default function NeonText({ props }: { props: IProps }) {
    const bgimage = new window.Image();
    bgimage.src = image1.src;

    const [neonOn, setNeonOn] = useState(true);
    const shadow = getGradient("#ffffff", props.color, 10);

    return (
        <div className="relative flex-grow flex flex-col items-center justify-center p-12 shadow-lg rounded-xl">
            <button
                onClick={_ => setNeonOn(!neonOn)}
                className="absolute top-2 left-2 rounded-md px-4 py-2 font-bold"
                style={{
                    background: neonOn ? "#000" : "#aaa",
                    color: neonOn ? "#fff" : "000"
                }}
            > Toggle </button>

            <Stage
                width={window.innerWidth * 0.65}
                height={window.innerHeight * 0.7}
            >

                <Layer>
                    <Image
                        image={bgimage}
                        width={window.innerWidth}
                        height={window.innerHeight}
                    />
                </Layer>


                <Layer>
                    <Group
                        draggable
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
                        <Text
                            text={props.text || "Your Text"}
                            fontSize={90} fontFamily={props.font}
                            shadowEnabled={neonOn}

                            fill="#fff4" stroke={props.color} strokeWidth={1}
                            shadowColor={props.color}
                            shadowBlur={30}
                        />
                        <Text
                            text={props.text || "Your Text"}
                            fontSize={90} fontFamily={props.font}
                            shadowEnabled={neonOn}

                            fill="#fffa" stroke={props.color} strokeWidth={2}
                            shadowColor={props.color}
                            shadowBlur={30}
                        />
                    </Group>
                </Layer>

            </Stage>
        </div>
    )
}


/* <img src={image1.src} className="w-full h-full absolute" style={{zIndex:-1}}/>
            <button
                onClick={_ => setNeonOn(!neonOn)}
                className="absolute top-2 left-2 rounded-md px-4 py-2 font-bold"
                style={{
                    background: neonOn ? "#000" : "#aaa",
                    color: neonOn ? "#fff" : "000"
                }}
            > Toggle </button>
            <p
                style={neonOn ?
                    {
                        fontFamily: props.font,
                        // color: "#fff",
                        color: props.color,
                        fontSize: "5.5rem",
                        textShadow: shadow
                    } : {
                        fontFamily: props.font,
                        fontSize: "5.5rem",
                        color: props.color,
                    }}
            >
                {props.text || "Your Text"}
            </p> */