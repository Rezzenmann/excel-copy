interface ITable {
    start: number;
    end: number;
}

const colsChar: ITable = {
    start: "A".charCodeAt(0),
    end: "Z".charCodeAt(0),
};

function createRowInfo(rowNumber: number | string): string {
    return `<div class='row-info'>${rowNumber > 0 ? rowNumber : ""}</div>`;
}

function createRowDataCell(): string {
    return `<div class="cell" contenteditable=""></div>`;
}

function createRowDataCol(colNumber: number) {
    return `<div class="column">${String.fromCharCode(colNumber)}</div>`;
}

function createRowData(rowNum: number) {
    const rows: string[] = [];

    if (rowNum < 1) {
        for (let i = colsChar.start; i < colsChar.end + 1; i++) {
            rows.push(createRowDataCol(i));
        }
    } else {
        for (let i = colsChar.start; i < colsChar.end + 1; i++) {
            rows.push(createRowDataCell());
        }
    }

    return `<div class="row-data">${rows.join("")}</div>`;
}

function createRow(rowNum: number) {
    let rowInfo = createRowInfo(rowNum);
    let rowData = createRowData(rowNum);
    return `<div class="row">${rowInfo}${rowData}</div>`;
}

export function setTable(rowsCount = 25) {
    const table: string[] = [];

    for (let i = 0; i <= rowsCount; i++) {
        table.push(createRow(i));
    }

    return table.join("");
}
