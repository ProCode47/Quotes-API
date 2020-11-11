
    const capitalize = (str) => {
        var word = str.slice(1).toLowerCase();
        var fullWord = str.charAt(0).toUpperCase() + word;
        return fullWord;
}
      

module.exports = capitalize;