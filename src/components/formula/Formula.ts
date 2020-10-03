import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
    className: string;

    constructor() {
        super();
        this.className = "excel__formula";
    }
    toHTML() {
        return `<div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>`;
    }
}
