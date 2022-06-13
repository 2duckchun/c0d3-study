console.log('[Start]');

try {
    nothing();
} catch (err) {
    console.error(err);
} finally {
    console.log('finally');
}
console.log('[end]');