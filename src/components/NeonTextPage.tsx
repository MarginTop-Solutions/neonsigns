import dynamic from 'next/dynamic';
import PropsSelector from "@/components/PropsSelector";
import { IProps } from "@/utils/Interfaces";
import { downloadElementRender } from "@/utils/misc";
import React, { useRef, useState } from "react";


const NeonText = dynamic(() => import('@/components/NeonText'), { ssr: false });

export default function NeonTextPage() {
    const stageRef = useRef(null);
    const [props, setProps] = useState<IProps>({
        text: "",
        font: "neonhimala",
        color: "#ff0000"
    });
    return (
        <div className="relative flex gap-24 w-full flex-grow justify-end p-6">
            <NeonText props={props} stageRef={stageRef} />
            <PropsSelector props={props} setProps={setProps} onSubmit={() => downloadElementRender(stageRef)} />
        </div>
    )

}