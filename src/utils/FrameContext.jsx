'use client';

import React, { createContext, useEffect, useState } from "react";
import _frame from "@/assets/Images/family.png";


export const FrameContext = createContext();

export const FrameProvider = ({ children }) => {
    // const [rects, setRects] = useState([]);

    const [rects, setRects] = useState({});
    const [frameImage, setFrameImage] = useState(null);

    useEffect(() => {
        // Load the frame image when the component mounts
        const frame = new window.Image();
        frame.onload = () => {
            setFrameImage(frame);
        };
        frame.src = _frame.src;
    }, []);

    const removeRect = i => {
        const { [i]: _, ...rest } = rects;
        setRects(rest);
    }

    const addNewImage = (r) => {
        // image adding logic here
    }

    return (
        <FrameContext.Provider value={{ rects, setRects, removeRect, frameImage, addNewImage }}>
            {children}
        </FrameContext.Provider>
    );
};
