import { Component, h, Prop, Host } from '@stencil/core';
import { Color } from '../../interface';

@Component({
    tag: 'hive-ui-label',
    styleUrl: 'label.scss',
    shadow: true
})
export class Label {
    /**
     * The maximum lines to display before truncating the text.
     * Default behavior shows all lines of text with no truncation.
     */
    @Prop({ reflectToAttr: true }) maxLines: number;
    /**
     * The primary color of the label. Uses the branded CSS variables
     * that are globally available to the application.
     */
    @Prop() color: Color;

    @Prop({ reflectToAttr: true }) heading: boolean;

    /* Region: Type safety properties
    *
    * These exist for tsx compiler and jsx property reflection.
    * All logic is handled in css host attribute selectors.
    */
    @Prop({ reflect: true }) xxl: boolean;
    @Prop({ reflect: true }) xl: boolean;
    @Prop({ reflect: true }) lg: boolean;
    @Prop({ reflect: true }) base: boolean;
    @Prop({ reflect: true }) sm: boolean;
    @Prop({ reflect: true }) xs: boolean;
    @Prop({ reflect: true }) xxs: boolean;

    @Prop({ reflect: true }) xbold: boolean;
    @Prop({ reflect: true }) bold: boolean;
    @Prop({ reflect: true }) semibold: boolean;
    @Prop({ reflect: true }) medium: boolean;
    @Prop({ reflect: true }) book: boolean;

    @Prop({ reflect: true }) capitalize: boolean;
    @Prop({ reflect: true }) uppercase: boolean;
    @Prop({ reflect: true }) lowercase: boolean;

    @Prop({ reflect: true }) alignLeft: boolean;
    @Prop({ reflect: true }) alignCenter: boolean;
    @Prop({ reflect: true }) alignRight: boolean;
    /*
    * Region End: Type safety properties
    */

    render() {
        const style = {};
        if (this.maxLines) {
            style['--max-lines'] = this.maxLines;
        }
        if (this.color) {
            style['--label-color'] = `var(--app-color-${this.color})`;
        }
        return (
            <Host style={style}>
                <span>
                    <slot></slot>
                </span>
            </Host>
        );
    }
}
