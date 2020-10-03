export class Dom {
    $elem: HTMLDivElement;

    constructor(selector: string | HTMLDivElement) {
        this.$elem =
            typeof selector === "string"
                ? (document.querySelector(selector) as HTMLDivElement)
                : selector;
    }

    HTML(html?: string): HTMLDivElement | string {
        if (html) {
            this.$elem.innerHTML = html;
        }
        return this.$elem;
    }

    append(node: HTMLDivElement | Dom) {
        if (node instanceof Dom) {
            node = node.$elem;
        }
        this.$elem.append(node);
    }
}

export function $(selector: string | HTMLDivElement) {
    return new Dom(selector);
}

$.create = (tag: string, classes: string = "") => {
    const $el = document.createElement(tag) as HTMLDivElement;
    if (classes) {
        $el.classList.add(classes);
    }
    return $($el);
};
