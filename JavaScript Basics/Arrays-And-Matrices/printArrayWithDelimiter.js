function printArrayWithDelimiter(array) {
    let delimiter = array.pop()
    console.log(array.join(delimiter))
}