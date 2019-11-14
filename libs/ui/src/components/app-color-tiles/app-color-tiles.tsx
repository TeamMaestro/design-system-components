import { Component, h, State, Prop } from "@stencil/core";
import { isHexColor } from "../../utils/colors";

@Component({
    tag: 'sb-app-color-tiles',
    styleUrl: 'app-color-tiles.scss',
    shadow: true
})
export class AppColorTiles {

    /**
     * The pattern to filter the matched CSS variables by.
     * Used to target only the names of the CSS variables available from your projects/lib/app.
     */
    @Prop() pattern: string;

    @State() private colorVariables: any[] = [];

    componentWillLoad() {
        var cssVars = this.getAllCSSVariableNames();
        const variables = this.getElementCSSVariables(cssVars, document.documentElement);
        Object.keys(variables).forEach(variableName => {
            const value = variables[variableName];
            if (isHexColor(value)) {
                this.colorVariables.push(variableName);
            }
        });
    }

    private getAllCSSVariableNames(styleSheets = document.styleSheets) {
        var cssVars = [];
        for (var i = 0; i < styleSheets.length; i++) {
            const styleSheet = styleSheets[i] as any;
            try {
                for (var j = 0; j < styleSheet.cssRules.length; j++) {
                    try {
                        for (var k = 0; k < styleSheet.cssRules[j].style.length; k++) {
                            let name = styleSheet.cssRules[j].style[k];
                            if (name.startsWith('--') && cssVars.indexOf(name) == -1) {
                                // Checks if a pattern was supplied
                                if (this.pattern) {
                                    // Checks if the pattern matches
                                    const pattern = new RegExp(this.pattern);
                                    if (pattern.test(name)) {
                                        cssVars.push(name);
                                    }
                                } else {
                                    cssVars.push(name);
                                }
                            }
                        }
                    } catch (error) { }
                }
            } catch (error) { }
        }
        return cssVars;
    }

    private getElementCSSVariables(allCSSVars, element = document.body, pseudo?: any) {
        var elStyles = window.getComputedStyle(element, pseudo);
        var cssVars = {};
        for (var i = 0; i < allCSSVars.length; i++) {
            let key = allCSSVars[i];
            let value = elStyles.getPropertyValue(key)
            if (value) { cssVars[key] = value; }
        }
        return cssVars;
    }

    renderColorTiles() {
        const tiles = [];
        this.colorVariables.forEach(variableName => {
            tiles.push(
                <sb-color-tile variable={variableName}></sb-color-tile>
            )
        });
        return tiles;
    }

    render() {
        return (
            this.renderColorTiles()
        );
    }
}
