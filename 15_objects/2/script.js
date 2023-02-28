function isEmpty(obj) {
    for (let prop in obj) {
        return true;
    }
    return false;
}