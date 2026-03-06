/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


var reverseStr = function(s, k) {
    s = s.split("");
    let last_word = s.splice(k);
    s = s.reverse();

    for (let i = 0; i < last_word.length; i++) {
        s.push(last_word[i]);
    }

    return s;

};
reverseStr("123456", 2)