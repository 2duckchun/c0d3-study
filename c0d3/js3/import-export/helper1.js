const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong'
}

module.exports = {
    data: info,
    getData: key => {
        return info[key]
    }
}