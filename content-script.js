// expand video player
document.querySelector('.AAShwHdd-lnk').click();
// hide comment and news sections
const classNamesList = ["CpCnC", "WdgtCn:nth-child(4)", "ShrCnB"]
classNamesList.forEach(e => {
    document.querySelector(`.${e}`).hidden = true;
});