const getUID = () => {
    return getHeadPart() + "-" + getMidPart() + "-" + getTailPart();
};

const getHeadPart = () => {
    const headPart1 = Date.now().toString(36).substring(0, 4);
    const headPart2 = Date.now().toString(36).substring(4);

    return headPart1 + "-" + headPart2;
};
const getMidPart = () => {
    const midPart = Math.random().toString(36).substring(2);

    return midPart;
};
const getTailPart = () => {
    const tailPart = performance.now().toString(36).replace(".", "");

    return tailPart;
};

module.exports = getUID;
