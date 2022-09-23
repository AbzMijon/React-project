export const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max - min + 1);
    return Math.round(rand);
}