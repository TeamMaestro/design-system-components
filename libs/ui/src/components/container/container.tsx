import { Component, h } from "@stencil/core";

@Component({
    tag: 'sb-container',
    styleUrl: 'container.scss',
    shadow: true
})
export class Container {

    render() {
        return <slot />
    }
}
