/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let candies = [1];

    for (let i = 1; i < ratings.length; i++) {
        const last = candies[candies.length - 1];
        if (ratings[i] > ratings[i - 1]) {
            candies.push(last + 1);
        } else {
            candies.push(1);
        }

    }

    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i + 1] + 1, candies[i])
        }
    }

    return candies.reduce((acc, curr) => acc + curr, 0)
};