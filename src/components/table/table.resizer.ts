export const resizeCol = (e: { target: HTMLDivElement }, that: any) => {
    const $parent = e.target.closest(
        `[data-type="resizeCol"]`
    ) as HTMLDivElement;

    const parentCoords = $parent!.getBoundingClientRect();
    const cells = that.$root.getAll(`[data-num="${$parent.dataset.num}"]`);

    document.onmousemove = (event) => {
        const mouseX = event.pageX;
        const delta = mouseX! - parentCoords.right;
        const width = parentCoords.width + delta;
        setMoveStyles(e.target, true);
        $parent.style.width = width + "px";
    };

    document.onmouseup = () => {
        setUpStyles(e.target, true);
        document.onmousemove = null;
        document.onmouseup = null;
        cells.forEach((elem: HTMLDivElement) => {
            elem.style.width = $parent!.getBoundingClientRect().width + "px";
        });
    };
};

export const resizeRow = (e: { target: HTMLDivElement }, that: any) => {
    const $parent = e.target.closest(
        `[data-type="resizeRow"]`
    ) as HTMLDivElement;

    const parentCoords = $parent!.getBoundingClientRect();

    document.onmousemove = (event) => {
        const mouseY = event.pageY;
        const delta = mouseY! - parentCoords.bottom;
        const height = parentCoords.height + delta;
        setMoveStyles(e.target, false);
        $parent.style.height = height + "px";
    };
    document.onmouseup = () => {
        setUpStyles(e.target, false);
        document.onmousemove = null;
        document.onmouseup = null;
    };
};



function setMoveStyles(elem: HTMLDivElement, cols: Boolean = true) {
    elem.style.opacity = "0.4";
    if (cols) {
        elem.style.height = "2000px";
    } else {
        elem.style.width = "2000px";
    }
}

function setUpStyles(elem: HTMLDivElement, cols: Boolean = true) {
    elem.style.opacity = "0";
    if (cols) {
        elem.style.height = "";
    } else {
        elem.style.width = "";
    }
}
