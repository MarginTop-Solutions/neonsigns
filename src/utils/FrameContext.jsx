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

    const setRectImage = (r, img) => {
        r.image = img;
        setRects({ ...rects, [r.id]: r });
    }

    return (
        <FrameContext.Provider value={{ rects, setRects, removeRect, setRectImage, frameImage }}>
            {children}
        </FrameContext.Provider>
    );
};
