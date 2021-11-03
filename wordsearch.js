const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    result = false; 
    for (l of horizontalJoin) {
        if (l.includes(word)){
            result = true;
        } 
    }
    return result;
}   

module.exports = wordSearch