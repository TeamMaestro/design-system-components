import { Component, h, Prop, Host } from "@stencil/core";

@Component({
    tag: 'sb-search-bar',
    styleUrl: 'search-bar.scss',
    shadow: true
})
export class SearchBar {

    /**
     * The target selector to apply the search filtering against.
     */
    @Prop() target: string;

    private hostEl: HTMLElement;

    onKeyUp = ev => {
        const value = ev.target.value.toLowerCase().trim();
        const targetEl = this.hostEl.parentElement.querySelector(this.target);
        let children = Array.from(targetEl.children);
        // Attempt to pierce the shadow dom
        if (children.length === 0) {
            // Attempt to look inside the shadow root
            children = Array.from(targetEl.shadowRoot.children);
        }
        children.forEach((child: HTMLElement) => {
            const text = child.textContent || child.shadowRoot.textContent;
            if (text.toLowerCase().includes(value) || value.length === 0) {
                child.style.removeProperty('display');
            } else {
                child.style.display = 'none';
            }
        });
    }

    render() {
        return (
            <Host ref={ref => this.hostEl = ref}>
                <input class='search-input'
                    onKeyUp={this.onKeyUp}
                    type="search" placeholder="Search..." />
            </Host>
        )
    }
}
