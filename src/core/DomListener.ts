import { $ } from "./dom";

export class DomListener {
    $root: any;
    constructor($root?: any) {
        if ($root) {
            throw new Error("No $root provided for Dom Lsitener");
        }
        return (this.$root = $root);
    }
}
