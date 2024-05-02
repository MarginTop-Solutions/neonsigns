export const topBarItems = [
    // "Home",
    // "Design your own sign",
    // "Get a Quote",
    // "Custom Neon",
    // "Shop",
    // "Business Logos",
    // "OutDoor Signs"
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