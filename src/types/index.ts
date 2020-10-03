import { Formula } from "../components/formula/Formula";
import { Table } from "../components/table/Table";
import { Toolbar } from "../components/toolbar/Toolbar";
import { Header } from "../components/header/Header";

export type TExcelComp = (Formula | Table | Toolbar | Header)[];
