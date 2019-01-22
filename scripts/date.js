const makeDate = () => {
    const d = new Date();
    let formattedDate = "";

    formattedDate += `${(d.getMonth() + 1)}_`;
    formattedDate += `${d.getDate()}_`;
    formattedDate += d.getFullYear();

    return formattedDate;
};

module.exports = makeDate;
//Used by controller->river.js