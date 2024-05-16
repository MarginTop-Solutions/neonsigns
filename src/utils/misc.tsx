
export const topBarItems = [
    "NeonText",
    "FrameAdmin",
    "FrameUser"
];

export const fontData = [
    "neonhimala",
    "plasma03",
    "neonbines",
]

export const colorData = [
    "#ff0000",
    "#00ff00",
    "#0000ff"
]

export const downloadElementRender = (ref: any) => {
    const dataURL = ref.current.toDataURL();
    const link = document.createElement('a');
    link.download = 'render.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export const getGradient = (startColor: string, endColor: string, steps: number): string[] => {

    const start = parseInt(startColor.slice(1), 16);
    const end = parseInt(endColor.slice(1), 16);

    const stepR = ((end >> 16) - (start >> 16)) / steps;
    const stepG = (((end >> 8) & 0xff) - ((start >> 8) & 0xff)) / steps;
    const stepB = ((end & 0xff) - (start & 0xff)) / steps;

    const colors = [];

    for (let i = 0; i < steps; i++) {
        const r = Math.round((start >> 16) + stepR * i);
        const g = Math.round(((start >> 8) & 0xff) + stepG * i);
        const b = Math.round((start & 0xff) + stepB * i);

        const hexColor = "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
        colors.push(hexColor);
    }

    return colors;
};

export const getNeonShadowCSS = (color: string): string => {
    const delta = 8;
    const colors = getGradient("#ffffff", color, 8);

    var size = delta;
    var shadow = "";

    for (let i = 0; i < 8; i++) {
        size += delta * i;
        const sh = `0 0 ${size}px ${colors[i]}${i < 7 ? "," : ""}`;
        shadow = shadow.concat(sh);
    }

    return shadow;
}


export class Curve {

    points: number[] = [];

    addPoint(x: number, y: number) {
        this.points.push(x);
        this.points.push(y);
    }

    clear() {
        this.points = [];
    }

    updatePoint(index: number, x: number, y: number) {
        this.points[2 * index] = x;
        this.points[2 * index + 1] = y;
    }

    getCount() {
        return this.points.length / 2;
    }

    // hasPoints() {
    //     return this.points.length > 0;
    // }
}

export class FrameRect {
    static _id: number = 0;

    x: number;
    y: number;
    w: number;
    h: number;
    image: File | null;
    id: number;


    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = null;
        this.id = ++FrameRect._id;
    }
}
