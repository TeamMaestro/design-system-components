import { Color } from '../interface';

export function createColorClasses(color: Color | undefined | null): any | undefined {
    return (color != null) ? {
        [`abbott-color-${color}`]: true
    } : undefined;
}

/**
 * Checks if a color is a hex color.
 */
export function isHexColor(value: string) {
    return value.match(/^#[0-9a-f]{3,6}$/i);
}
