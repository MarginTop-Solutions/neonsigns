'use client';

import NeonText from "@/components/NeonText";
import PropsSelector from "@/components/PropsSelector";
import { IProps } from "@/utils/Interfaces";
import { downloadElementRender, topBarItems } from "@/utils/misc";
import { Search, ShoppingBag } from "lucide-react";
import React, { useRef, useState } from "react";


const Home: React.FC = () => {
  const stageRef = useRef(null);
  const [props, setProps] = useState<IProps>({
    text: "",
    font: "neonhimala",
    color: "#ff0000"
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-12">

      {/* <div className="flex w-full justify-between gap-12 p-4">
        <div />

        <div className="flex items-center gap-12 justify-between p-6 shadow-md rounded-xl">
          {topBarItems.map((n, i) => (
            <button className="font-bold text-xl" key={i}>{n}</button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Search className="cursor-pointer" />
          <button className="relative">
            <ShoppingBag />
            <p className="absolute -top-2 -right-2 text-sm bg-black rounded-xl text-white px-1">0</p>
          </button>
        </div>

      </div> */}

      <div className="relative flex gap-24 w-full flex-grow justify-end p-6">
        <NeonText props={props} stageRef={stageRef} />
        <PropsSelector props={props} setProps={setProps} onSubmit={() => downloadElementRender(stageRef)} />
      </div>

    </main>
  );
}
export default Home;