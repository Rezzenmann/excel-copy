import { DomListener } from "./DomListener";
import { IOptions } from "../types";
import { Dom } from "./dom";

export class ExcelComponent extends DomListener {
    constructor(
        $root: Dom,
        options: IOptions = { name: "NO", listeners: ["no listeners passed"] }
    ) {
        super($root, options.listeners);
    }

    toHTML(): string {
        return "";
    }

    init() {
        this.initDOMListeners();
    }

    destroy() {
        this.removeDOMListeners();
    }
}
