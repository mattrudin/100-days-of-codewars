// origin:
const mxdiflg = (a1, a2) => {
    const array1Max = Math.max(...a1.map(item => item.length));
    const array1Min = Math.min(...a1.map(item => item.length));
    const array2Max = Math.max(...a2.map(item => item.length));
    const array2Min = Math.min(...a2.map(item => item.length));
    const arrayMaxDifference1 = array1Max - array2Min;
    const arrayMaxDifference2 = array2Max - array1Min;
    return a1.length === 0 || a2.length === 0 ? -1 : arrayMaxDifference1 > arrayMaxDifference2 ? arrayMaxDifference1 : arrayMaxDifference2;
}