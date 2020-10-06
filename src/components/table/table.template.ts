interface ITable {
    start: number;
    end: number;
}

const colsChar: ITable = {
    start: "A".charCodeAt(0),
    end: "Z".charCodeAt(0),
};

function createRowInfo(rowNum: number | string): string {
    return `<div class='row-info' data-type='resizeRow'  data-col='${rowNum}'>${
        rowNum > 0
            ? rowNum + `<div class='resize-row' data-resize='row'></div>`
            : ""
    }
    </div>`;
}

function createRowDataCell(colNumber: number, rowNum: number): string {
    return `<div class="cell" contenteditable="" data-num="${colNumber}" data-col='${rowNum}'></div>`;
}

function createRowDataCol(colNumber: number) {
    return `<div class="column" data-type='resizeCol' data-num="${colNumber}">${String.fromCharCode(
        colNumber
    )}
    <div class='resize-col' data-resize='col'></div></div>`;
}

function createRowData(rowNum: number) {
    const rows: string[] = [];

    if (rowNum < 1) {
        for (let i = colsChar.start; i < colsChar.end + 1; i++) {
            rows.push(createRowDataCol(i));
        }
    } else {
        for (let i = colsChar.start; i < colsChar.end + 1; i++) {
            rows.push(createRowDataCell(i, rowNum));
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
