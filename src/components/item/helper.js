/**
 * Function calculates the index for image using only 3 images provided.
 * @returns {Number} Image index.
 */
export const getImageNumberFromId = (id) => {
    if (id > 3) {
        const reminder = id % 3;
        return reminder === 0 ? 3 : reminder;
    } else return id;
};
