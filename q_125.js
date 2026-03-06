/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z") || (s[i] >= "0" && s[i] <= "9")) {
            res += s[i]
        }
    }

    res = res.toLowerCase();
    let reversed_res = "";
    for(let i = res.length-1 ; i >= 0 ; i--){
        reversed_res += res[i];
    }

    if (res == reversed_res) {
        return true;
    }
    else{
        return false;
    }

};