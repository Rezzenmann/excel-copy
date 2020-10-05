import { Excel } from "./components/excel/Excel";
import "./scss/index.scss";

import { Formula } from "./components/formula/Formula";
import { Table } from "./components/table/Table";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Header } from "./components/header/Header";

const excel = new Excel("#app", {
    componentsClasses: [Header, Toolbar, Formula, Table],
    // componentsClasses: [Formula],
});

excel.render();
