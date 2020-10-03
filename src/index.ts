import { Excel } from "./components/excel/Excel";
import "./scss/index.scss";

import { Formula } from "./components/formula/Formula";
import { Table } from "./components/table/Table";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Header } from "./components/header/Header";

const excel = new Excel("#app", {
    // we pushes to Excel instances of every Excel component
    components: [new Header(), new Toolbar(), new Formula(), new Table()],
});

excel.render();
