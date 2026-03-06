/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    s = s.toLowerCase();
    let vowel_obj = {};
    let consonants_obj = {};

    for (let i = 0; i < s.length; i++) {
        if (s[i]>= "a" && s[i]<="z") {
            if ((s[i]=="a")||(s[i]=="e")||(s[i]=="i")||(s[i]=="o")||(s[i]=="u")) {
                if(!vowel_obj[s[i]]){
                    vowel_obj[s[i]]=1;
                }
                else{
                    vowel_obj[s[i]]++;
                }
            }
            else{
                if(!consonants_obj[s[i]]){
                    consonants_obj[s[i]]=1;
                }
                else{
                    consonants_obj[s[i]]++;
                }
            }
        }
    }
    let v_max = 0;
    for (const key in vowel_obj) {
        if (vowel_obj[key] > v_max) {
            v_max = vowel_obj[key];
        }
    }
    let c_max = 0;
    for (const key in consonants_obj) {
        if (consonants_obj[key] > c_max) {
            c_max = consonants_obj[key];
        }
    }

    return v_max + c_max;
};