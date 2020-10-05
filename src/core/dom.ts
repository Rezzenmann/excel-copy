export class Dom {
    $elem: HTMLDivElement;
    $$listeners: {
        [prop: string]: EventListener | EventListenerObject;
    };
    constructor(selector: string | HTMLDivElement) {
        this.$elem =
            typeof selector === "string"
                ? (document.querySelector(selector) as HTMLDivElement)
                : selector;
        this.$$listeners = {};
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

    on(eventName: any, eventFunc: EventListener | EventListenerObject) {
        this.$$listeners[eventName] = eventFunc;

        this.$elem.addEventListener(eventName, this.$$listeners[eventName]);
    }

    off(eventName: any) {
        this.$elem.removeEventListener(eventName, this.$$listeners[eventName]);
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
