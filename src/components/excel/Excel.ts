import { TExcelComp, TExcelCompInstances } from "../../types/index";
import { $ } from "../../core/dom";

export class Excel {
    $el: HTMLDivElement;
    componentsClasses: TExcelComp;
    componentsInstances: TExcelCompInstances | null;

    constructor(
        selector: string = "#App",
        options: { componentsClasses: TExcelComp }
    ) {
        this.$el = document.querySelector(selector) as HTMLDivElement;
        this.componentsClasses = options.componentsClasses;
        this.componentsInstances = null;
    }

    getRoot(): HTMLDivElement {
        const $root = $.create("div", "excel");

        this.componentsInstances = this.componentsClasses.map((Component) => {
            const $excelComp = $.create("div", Component.className);
            const component = new Component($excelComp);
            $excelComp.HTML(component.toHTML());
            $root.append($excelComp);
            return component;
        });
        return $root.HTML() as HTMLDivElement;
    }

    render(): void {
        this.$el.append(this.getRoot());
        this.componentsInstances!.forEach((component) => {
            component.init();
        });

        // this.componentsInstances!.forEach((component) => {
        //     component.destroy();
        // });
    }
}
