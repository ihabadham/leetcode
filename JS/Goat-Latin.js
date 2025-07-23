/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const words = sentence.split(" ");
    const vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (!vowels.includes(word[0].toLowerCase())) {
            word = word.slice(1) + word.slice(0, 1);
        }
        
        word += "ma";
        word += "a".repeat(i+1);

        words[i] = word;
    }

    return words.join(" ");
};