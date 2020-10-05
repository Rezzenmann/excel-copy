import { ExcelComponent } from "../../core/ExcelComponent";
import { setTable } from "./table.template";

export class Table extends ExcelComponent {
    static className = "excel__table";
    constructor($root: any) {
        super($root, {
            name: "Table",
            listeners: ["input"],
        });
    }
    toHTML() {
        return setTable();
    }
    onInput(e: { target: HTMLDivElement }) {
        console.log("onInput", e.target.textContent?.trim());
    }
}
