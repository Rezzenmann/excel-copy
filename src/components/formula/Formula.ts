import { ExcelComponent } from "../../core/ExcelComponent";

export class Formula extends ExcelComponent {
    static className = "excel__formula";
    constructor($root: any) {
        super($root, {
            name: "Formula",
            listeners: ["input"],
        });
    }
    toHTML() {
        return `<div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>`;
    }
    onInput(e: { target: HTMLDivElement }) {
        console.log("onInput", e.target.textContent?.trim());
    }
}
