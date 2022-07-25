const less3 = {};

const less3Diff = (str1, str2, i = 0, no = 0) => {
    if (no > 2) {
        return false
    }
    if (i === str1.length) {
        return true
    }
    if (str1[i] !== str2[i]) {
        no = no + 1
    }
    return less3Diff(str1, str2, i + 1, no)
};

less3.less3Diff = less3Diff;
module.exports = less3;