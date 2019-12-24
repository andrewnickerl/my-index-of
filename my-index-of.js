const myIndexOf = (source, searchValue, startIdx) => {
    strLength = source.length;  //length of source string
    compStr = ''; //to hold value of string from source if search is more than single char
    if (startIdx === undefined) startIdx = 0;
    for(let i = startIdx; i < strLength; i++) {
        compStr = source.slice(i, (i + searchValue.length))
        if(compStr === searchValue) return i;
    }
    return -1;
}