module.exports = {
    root: true,
    extends: [
        'airbnb-base',
    ],
    plugins: [
        'html',
    ],
    parserOptions: {
        // parser: 'babel-eslint',
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: {
            legacyDecorators: true,
        }
    },
    // parserOptions: {
    //     parser: '@typescript-eslint/parser',
    //     ecmaFeatures: {
    //         jsx: true,
    //         legacyDecorators: true,
    //     },
    //     useJSXTextNode: true,
    //     project: './tsconfig.json',
    //     tsconfigRootDir: './',
    //     extraFileExtensions: ['.vue'],
    //     ecmaVersion: 2019,
    //     sourceType: 'module',
    // },
    env: {
        browser: true,
        node: true,
        jquery: true,
    },
    rules: {
        // 不校验
        'prefer-template': 0,                   // 要求使用模板字面量而非字符串连接
        'prefer-const': 0,                      // 要求使用 const 声明那些声明后不再被修改的变量
        'object-curly-spacing': 0,              // 强制在花括号中使用一致的空格
        'new-cap': 0,                           // 要求构造函数首字母大写
        'no-plusplus': 0,                       // 禁止使用一元操作符 ++ 和 --
        'consistent-return': 0,                 // 要求使用一致的 return 语句
        'array-callback-return': 0,             // 强制数组方法的回调函数中有 return 语句
        'no-param-reassign': 0,                 // 禁止对函数参数再赋值
        'no-underscore-dangle': 0,              // 禁止标识符中有悬空下划线
        'class-methods-use-this': 0,            // 强制类方法使用 this
        'prefer-destructuring': 0,              // 优先使用数组和对象解构
        'no-nested-ternary': 0,                 // 禁止使用嵌套的三元表达式
        'prefer-rest-params': 0,                // 用...args代替arguments
        'no-useless-escape': 0,                 // 多余的转译
        'max-classes-per-file': 0,              // 强制每个文件中包含的的类的最大数量

        // 警告
        'max-len': [1, {                        // 强制一行的最大长度
            code: 120,                          // 强制行的最大长度
            ignoreComments: true,               // 忽略所有拖尾注释和行内注释
            ignoreTrailingComments: true,       // 忽略拖尾注释
        }],
        'no-unused-vars': 1,                    // 禁止未使用过的变量


        // 错误
        'semi': [2, 'never'],                   // 行末不加分号，除非下一行以[、(、/、+ 或 - 开头
        'indent': [2, 4, {                      // 强制使用一致的缩进
            SwitchCase: 1,                      // switch 语句中的 case 子句的缩进级别
        }],
        'no-multi-spaces': [2, {                // 禁止使用多个空格
            ignoreEOLComments: true,            // 忽略行尾注释前的多个空格
        }],
        'arrow-parens': [2,                     // 要求箭头函数的参数使用圆括号
            'as-needed',                        // 在可以省略括号的地方强制不使用括号
        ],
        'no-use-before-define': [2, {           // 禁止定义前使用
            functions: false,                   // 这个参数表示该规则是否要检测函数的声明
        }],
        'no-return-assign': [2,                 // 禁止在返回语句中赋值
            'except-parens',                    // 禁止出现赋值语句，除非使用括号把它们括起来
        ],
        'eqeqeq': [2,                           // 要求使用 === 和 !==
            'smart',                            // 除了比较两个字面量的值、比较 typeof 的值、与 null 进行比较，其他的强制使用 === 和 !==
        ],
    },
    globals: {              // 全局变量白名单
        window: true,
        Vue: true,
    }
}
