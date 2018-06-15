window.onload = function () {
    Vue.component('myComponent', {
        template: '<div>5555555555555</div>',
        props: ['aaa', 'cc-asd-as'],
        data: function () {
            return {
                zzz: 7778
            };
        },
        created() {
            console.log(1231312312)
        }

    })
    let app = new Vue({
        el: '#app',
        data: {
            message: 'hello world'
        },
    });
};

function testFunction(fn, type) {
    let obj = {
            undefined1: undefined,
            null1: null,
            string1: 'a',
            number1: 1,
            boolean1: true,

            object1: {a: 1, b: 'asd'},
            array1: [1, 2, 3],
            function1: function (aaa) {
            },
            reg1: /a/,
            class1: class bbb {
            },
            set1: new Set(),
            map1: new Map(),
            objFn: new (function ccc() {
            }),
            objClass: new (class nnn {
            }),
            symbol1: Symbol(12),
        }
    ;
    for (let key in obj) {
        if (type === 1) {
            console.log(key, fn.call(obj[key]));
        } else if (type === 2) {
            console.log(key, typeof obj[key]);
        } else {
            console.log(key, fn(obj[key]));
        }
    }
}

/*
function testUA() {
    let obj = {
      'Chrome':
    };
}*/
