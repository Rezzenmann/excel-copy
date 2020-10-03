import { TExcelComp } from "../../types/index";
import { $, Dom } from "../../core/dom";

export class Excel {
    $el: HTMLDivElement;
    components: TExcelComp;
    // components accept only instances of classes declared in types, not classes itself.
    constructor(
        selector: string = "#App",
        options: { components: TExcelComp }
    ) {
        this.$el = document.querySelector(selector) as HTMLDivElement;
        this.components = options.components;
    }

    getRoot(): Dom {
        const $root = $.create("div", "excel");

        this.components.forEach((Component) => {
            const $excelComp = $.create("div", Component.className);
            $excelComp.HTML(Component.toHTML());
            $root.append($excelComp);
        });
        return $root;
    }

    render(): void {
        this.$el.append(this.getRoot().HTML());
    }
}
