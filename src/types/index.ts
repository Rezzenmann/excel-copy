import { Formula } from "../components/formula/Formula";
import { Table } from "../components/table/Table";
import { Toolbar } from "../components/toolbar/Toolbar";
import { Header } from "../components/header/Header";

export type TExcelComp = (
    | typeof Formula
    | typeof Table
    | typeof Toolbar
    | typeof Header
)[];
export type TExcelCompInstances = (Formula | Table | Toolbar | Header)[];

export interface IOptions {
    name: string;
    listeners: string[];
}
