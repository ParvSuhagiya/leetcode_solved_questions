/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    
    s = s.replace(/\s/g, "");
    t = t.replace(/\s/g, "");
    if (s.length !== t.length) return false;

    let sortes_s = s.toLowerCase().split("").sort().join("");
    let sortes_t = t.toLowerCase().split("").sort().join("");

    if (sortes_s == sortes_t) {
        return true;
    }
    else{
        return false;
    }
};