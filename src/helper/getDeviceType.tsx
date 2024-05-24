import { DeviceType } from "../typescript/Types";

export let deviceWidth = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
}

export const getDeviceType = (): DeviceType => {
    const width = window.innerWidth;
    if (width <= deviceWidth.sm) return "sm"
    if (width <= deviceWidth.md) return "md"
    if (width <= deviceWidth.lg) return "lg"
    return "xl"
};