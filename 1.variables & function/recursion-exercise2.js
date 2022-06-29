const countTo98 = (count = 0) => {
    if (count > 98) {
        return
    }
    console.log(count);
    return countTo98(count + 1)
}

countTo98()