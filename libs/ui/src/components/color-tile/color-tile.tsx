import { Component, h, Prop, Host, State } from "@stencil/core";

import ClipboardJS from 'clipboard';

@Component({
    tag: 'sb-color-tile',
    styleUrl: 'color-tile.scss',
    shadow: true
})
export class ColorTile {
    /**
     * The CSS variable to attempt to render.
     */
    @Prop() variable: string;
    /**
     * The hex value to render.
     */
    @Prop({ mutable: true}) hex: string;
    /**
     * The rgb value to render.
     */
    @Prop({ mutable: true }) rgb: string;
    /**
     * The hsl value to render.
     */
    @Prop({ mutable: true }) hsl: string;
    /**
     * The cmyk value to render.
     */
    @Prop({ mutable: true }) cmyk: string;

    /**
     * `true` if the color tile should attempt to detect the name from
     * an external API.
     */
    @Prop() nameDetect = true;

    @State() name: string;

    private nameDetectAPI = 'https://www.thecolorapi.com/id?';

    componentDidLoad() {
        if (this.nameDetect) {
            if (this.variable) {
                // Attempt to parse the CSS variable
                this.parseCSSVariable();
            }
            this.loadColorInformation();
        }
    }

    private parseCSSVariable() {
        const value = getComputedStyle(document.documentElement).getPropertyValue(this.variable);
        if (value.match(/^#[0-9a-f]{3,6}$/i)) {
            this.hex = value;
        }
    }

    private loadColorInformation() {
        if (this.hex || this.rgb || this.hsl) {
            fetch(this.getColorAPI()).then(function (response) {
                return response.json();
            }).then(data => {
                this.name = data.name.value;
                this.hex = data.hex.value;
                this.rgb = data.rgb.value;
                this.hsl = data.hsl.value;
            }).catch(err => {
                console.error('Error loading color information', err);
            });
        }
    }

    private getColorAPI() {
        let { hex, rgb, hsl, cmyk } = this;
        let options;
        if (hex) {
            hex = hex.replace('#', '');
            options = `hex=${hex}`;
        } else if (rgb) {
            options = `rgb=${rgb}`
        } else if (hsl) {
            options = `hsl=${hsl}`
        } else if (cmyk) {
            options = `cmyk=${cmyk}`;
        }
        return `${this.nameDetectAPI}${options}`;
    }

    onVariableLabelClick = ev => {
        new ClipboardJS(ev.path[0], {
            text: () => {
                return `var(${this.variable});`;
            }
        });
    }

    onLabelClick = (ev, content) => {
        new ClipboardJS(ev.path[0], {
            text: () => {
                return content;
            }
        });
    }

    render() {
        const style = {};
        if (this.hex) {
            style['--background-color'] = this.hex;
        }
        return (
            <Host style={style}>
                <div class='color'></div>
                <div class='color-info'>
                    <hive-ui-label sm>{this.name}</hive-ui-label>
                    {this.variable ? (
                        <hive-ui-label class='copy'
                            onClick={this.onVariableLabelClick}
                            xs color='medium-gray'>{this.variable}</hive-ui-label>
                    ) : null }
                    <hive-ui-label class='copy'
                        onClick={ev => this.onLabelClick(ev, this.hex)}
                        xs color='medium-gray'>{this.hex}</hive-ui-label>
                    <hive-ui-label class='copy'
                        onClick={ev => this.onLabelClick(ev, this.rgb)}
                        xs color='medium-gray'>{this.rgb}</hive-ui-label>
                    <hive-ui-label class='copy'
                        onClick={ev => this.onLabelClick(ev, this.hsl)}
                        xs color='medium-gray'>{this.hsl}</hive-ui-label>
                </div>
            </Host>
        );
    }

}
