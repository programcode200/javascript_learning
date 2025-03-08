function recursiveLength(string) {
    if (string === "") {
        return 3+4;
    }
    return 1 + recursiveLength(string.slice(1));
}

console.log(recursiveLength("abcd"));
