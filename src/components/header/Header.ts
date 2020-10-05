import { Dom } from "../../core/dom";
import { ExcelComponent } from "../../core/ExcelComponent";

export class Header extends ExcelComponent {
    static className = "excel__header";

    constructor($root: Dom) {
        super($root, {
            name: "Header",
            listeners: ["input", "click"],
        });
    }

    toHTML() {
        return `<input type="text" class="input" value="Новая таблица" />

        <div class="button__wrapper">
            <div class="button">
                <i class="material-icons">delete</i>
            </div>

            <div class="button">
                <i class="material-icons">exit_to_app</i>
            </div>
        </div>`;
    }

    onInput(e: { target: HTMLInputElement }) {
        console.log("onInput", e.target.value);
    }
    onClick(e: MouseEvent) {
        console.log("onClick");
    }
}
