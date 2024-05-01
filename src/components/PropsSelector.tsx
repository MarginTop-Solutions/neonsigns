'use client';

import { IProps, IPropswSetState } from "@/utils/Interfaces";
import { fontData, colorData } from "@/utils/misc";

const PropsSelector: React.FC<IPropswSetState> = ({ props, setProps }) => {

    return (
        <div className="card-big p-12 space-y-8">
            <div className="flex flex-col gap-2">
                <p>Enter your Text Here</p>
                <input
                    value={props.text} placeholder="Your Text"
                    onChange={e => setProps({ ...props, text: e.target.value })}
                    className="rounded-xl p-4 outline-none border-2 border-black"
                />
            </div>

            <div className="flex flex-col gap-2">
                <p>Choose font</p>
                <select value={props.font}
                    onChange={e => setProps({ ...props, font: e.target.value })}
                    className={`px-12 py-4 text-xl`}
                    style={{ fontFamily: props.font }}
                >
                    {fontData.map((font, i) => (
                        <option
                            key={i} value={font}
                            className={`px-12 py-4 text-sm`}
                            style={{ fontFamily: font }}
                        >
                            {font}
                        </option>
                    ))}
                </select>
            </div>


            <div className="flex flex-col gap-2">
                <p>Choose Color</p>
                <div className="flex flex-wrap gap-4">
                    {colorData.map((color, i) => (
                        <div
                            onClick={_ => setProps({ ...props, color: color })}
                            style={{ background: color }} key={i}
                            className={`w-[2rem] h-[2rem] rounded-full cursor-pointer`}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default PropsSelector;