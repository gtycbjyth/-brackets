module.exports = function check(str, bracketsConfig) {
    let test = bracketsConfig.map((elem)=> {
        return elem[0] + elem[1];
    })
    let open = [];
    for (const i of [...str]) {
        open.push(i);
        let contrBr = open[open.length - 2] + open[open.length - 1];
        if (test.indexOf(contrBr) !== -1) open.length = open.length - 2;
    }
    return open.length === 0;
}
