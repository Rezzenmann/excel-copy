import { Dom } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";
import { resizeCol, resizeRow } from "./table.resizer";
import { setTable } from "./table.template";

export class Table extends ExcelComponent {
    static className = "excel__table";

    constructor($root: any) {
        super($root, {
            name: "Table",
            listeners: ["input", "mousedown"],
        });
    }

    toHTML() {
        return setTable();
    }
    onInput(e: { target: HTMLDivElement }) {}

    onMousedown(e: { target: HTMLDivElement }) {
        let that = this;

        if (e.target.dataset.resize === "col") {
            resizeCol(e, that);
        } else if (e.target.dataset.resize === "row") {
            resizeRow(e, that);
        }
    }
}
