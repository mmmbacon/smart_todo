/**
 * Returns a filtered array of words that do not contain articles (the, as, a)
 * @param {string} sentence
 * @returns {array} array of words without articles
 */
const filteredArticles = function(sentence) {

  let filtered = undefined;
  const articles = ['the', 'as', 'a'];

  if (sentence) {
    let cleaned = sentence.replace(/^\s+/, '');
    cleaned = sentence.replace(/\s+$/, '');
    const lowerCase = cleaned.toLowerCase();
    const splitSentence = lowerCase.split(' ');

    filtered = splitSentence.filter((word)=>{
      for (const article in articles) {
        if (word === article) {
          return false;
        }
        return true;
      }
    });
  }

  return filtered;
};

module.exports = filteredArticles;
