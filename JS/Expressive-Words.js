/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var expressiveWords = function (s, words) {
    // iterate over s and count it's char occurs. so if s = "heeellooo" we make it "1h3e2l3o"
    // do the same with word "hello" -> "1h1e2l1o"
    // so we have "1h3e2l3o" and "1h1e2l1o", we then compare
    // const count = (str) => {
    //     const res = [];
    //     let cnt = 1;

    //     for (let i = 1; i < str.length; i++) {
    //         if (str[i] !== str[i - 1]) {
    //             res.push(cnt + str[i - 1]);
    //             cnt = 0;
    //         }
    //         cnt++;
    //     }
    //     res.push(cnt + str.at(-1));

    //     return res;
    // }

    // const sCount = count(s);
    // let nqs = 0;

    // for (const word of words) {
    //     const wordCount = count(word);

    //     if (sCount.length !== wordCount.length) continue;

    //     let flag = false;

    //     for (let i = 0; i < sCount.length; i++) {
    //         const [sChar, sCharCnt] = [sCount[i].slice(-1), parseInt(sCount[i].slice(0, -1))];
    //         const [wordChar, wordCharCnt] = [wordCount[i].slice(-1), parseInt(wordCount[i].slice(0, -1))];

    //         if (sChar !== wordChar) {
    //             flag = true;
    //             break;
    //         }
    //         if (sCharCnt < wordCharCnt) {
    //             flag = true;
    //             break;
    //         }
    //         if (sCharCnt > wordCharCnt && sCharCnt < 3) {
    //             flag = true;
    //             break;
    //         }
    //     }

    //     if (!flag) nqs++;
    // }

    // return nqs;

    // same thing above can be approached with two pointers that would do the counting as we loop instead of before it
    const isStretchy = (sStr, wordStr) => {
        let i = 0; // Pointer for sStr
        let j = 0; // Pointer for wordStr

        while (i < sStr.length && j < wordStr.length) {
            if (sStr[i] !== wordStr[j]) {
                return false;
            }

            let sChar = sStr[i];
            let sCount = 0;
            while (i < sStr.length && sStr[i] === sChar) {
                sCount++;
                i++;
            }

            let wordChar = wordStr[j]; // Should be same as sChar, but for clarity
            let wordCount = 0;
            while (j < wordStr.length && wordStr[j] === wordChar) {
                wordCount++;
                j++;
            }

            if (sCount < wordCount) {
                return false;
            }

            if (sCount > wordCount && sCount < 3) {
                return false;
            }
        }

        return i === sStr.length && j === wordStr.length;
    };

    let nqs = 0;

    for (const word of words) {
        if (isStretchy(s, word)) {
            nqs++;
        }
    }

    return nqs;
};