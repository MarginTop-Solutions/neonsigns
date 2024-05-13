'use client';

import React, { createContext, useEffect, useState } from "react";
import { Frame } from "./misc";
import _frame from "@/assets/Images/family.png";


export const FrameContext = createContext();

export const FrameProvider = ({ children }) => {
    // const [rects, setRects] = useState([]);

    const [frame, setFrame] = useState(new Frame);
    const [frameImage, setFrameImage] = useState(null);

    useEffect(() => {
        // Load the frame image when the component mounts
        const frame = new window.Image();
        frame.onload = () => {
            setFrameImage(frame);
        };
        frame.src = _frame.src;
    }, []);


    const addImage = (e, r) => {
        r.setImage();
    }
    const addNewRect = r => frame.rects.push(r);
    const rects = frame.rects;

    return (
        <FrameContext.Provider value={{ frameImage, rects, addNewRect, addImage }}>
            {children}
        </FrameContext.Provider>
    );
};
