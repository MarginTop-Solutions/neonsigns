'use client';

import { IProps } from "@/utils/Interfaces"
import { getNeonShadow } from "@/utils/misc";
import { useState } from "react";

export default function NeonText({ props }: { props: IProps }) {
    const [neonOn, setNeonOn] = useState(true);
    const shadow = getNeonShadow(props.color);
    console.log(props.color);

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
            <p
                style={neonOn ?
                    {
                        fontFamily: props.font,
                        color: "#fff",
                        fontSize: "5.5rem",
                        textShadow: shadow
                    } : {
                        fontFamily: props.font,
                        fontSize: "5.5rem",
                        color: props.color
                    }}
            >
                {props.text || "Your Text"}
            </p>
        </div>
    )
}