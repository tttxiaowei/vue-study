// var repeat = function (str, n) {
//       var res = '';
//       while (n) {
//         if (n % 2 === 1) { res += str; }
//         if (n > 1) { str += str; }
//         n >>= 1;
//       }
//       return res
//     };

//     repeat('a', 5)

var obj = {}
Object.defineProperty(obj, 'aaa', {
    set() {
        obj.aaa = 12
    }
})
let end
