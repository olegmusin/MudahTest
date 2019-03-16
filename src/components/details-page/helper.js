export const getImageNumberFromId = (id) => {
    if (id > 3) {
        const reminder = id % 3;
        return reminder === 0 ? 3 : reminder;
    } else return id;
};
