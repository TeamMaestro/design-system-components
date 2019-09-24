export namespace ClipboardUtils {

    export function copyToClipboard() {
        if (window.getSelection) {
            const selection = window.getSelection();
            if (selection) {
                document.execCommand('copy');
            }
        }
    }

    export function autoSelect(element: HTMLElement) {
        if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    export function autoDeselect() {
        if (window.getSelection) {
            const selection = window.getSelection();
            selection.removeAllRanges();
        }
    }

}
