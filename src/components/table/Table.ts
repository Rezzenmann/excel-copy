import { Dom } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";
import { setTable } from "./table.template";

export class Table extends ExcelComponent {
    static className = "excel__table";

    constructor($root: any) {
        super($root, {
            name: "Table",
            listeners: ["input", "mousedown", "mouseup"],
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

    onMouseup() {
        document.onmousemove = null;
    }
}

const resizeCol = (e: { target: HTMLDivElement }, that: any) => {
    const $parent = e.target.closest(
        `[data-type="resizeCol"]`
    ) as HTMLDivElement;

    const parentCoords = $parent!.getBoundingClientRect();
    const cells = that.$root.getAll(`[data-num="${$parent.dataset.num}"]`);
    document.onmousemove = (event) => {
        const mouseX = event.pageX;
        const delta = mouseX! - parentCoords.right;
        const width = parentCoords.width + delta;
        // $parent.style.width = width + "px";
        cells.forEach((elem: HTMLDivElement) => {
            elem.style.width = width + "px";
        });
    };
};

const resizeRow = (e: { target: HTMLDivElement }, that: any) => {
    const $parent = e.target.closest(
        `[data-type="resizeRow"]`
    ) as HTMLDivElement;

    const parentCoords = $parent!.getBoundingClientRect();
    const rows = that.$root.getAll(`[data-col="${$parent.dataset.col}"]`);

    document.onmousemove = (event) => {
        const mouseY = event.pageY;
        const delta = mouseY! - parentCoords.bottom;
        const height = parentCoords.height + delta;
        // $parent.style.height = height + "px";
        rows.forEach((elem: HTMLDivElement) => {
            elem.style.height = height + "px";
        });
    };
};

// 122 msScripting
// 1495 msRendering
// 355 msPainting
// 290 msSystem
// 2907 msIdle
// 5170 msTotal
