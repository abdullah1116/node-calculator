function cal(fn) {
    try {
        return new Function('return ' + fn)();
    }
    catch (e) {
        return 'err'
    }
}

console.log(cal(process.argv.slice(2).join(' ')));