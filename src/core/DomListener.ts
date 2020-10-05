import { Dom } from "./dom";
import { capitalize } from "./utils";

export class DomListener {
    $root: Dom;
    listeners: string[];
    constructor($root: Dom, listeners: string[]) {
        if (!$root) {
            console.log("No $root provided for Dom Lisitener");
        }
        this.listeners = listeners;
        this.$root = $root;
    }

    initDOMListeners() {
        this.listeners.forEach((listener) => {
            const method = methodName(listener);
            console.log(Object.getPrototypeOf(this)[method].bind(this));

            this.$root.on(
                listener,
                Object.getPrototypeOf(this)[method].bind(this)
            );
        });
    }

    removeDOMListeners() {
        this.listeners.forEach((listener) => {
            this.$root.off(listener);
        });
    }
}

function methodName(str: string) {
    return "on" + capitalize(str);
}
