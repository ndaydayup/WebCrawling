var vm = require('vm2')
var fs = require('fs')
var documentall = require('D:\\pycharm\\code\\Release\\addon.node');
const {VM,VMScript} = vm
var myvm = new VM()

myvm.setGlobals({
    'documentall': documentall,
    'token' : '4f398b73a6798170e77494440e0e819d',
    'distance' : 164,
    'trace' : [[7, 0, 50], [5, 0, 77], [10, 0, 77], [15, 0, 79], [20, 0, 81], [25, 0, 82], [29, 0, 82], [33, 0, 84], [37, 0, 86], [41, 0, 86], [44, 0, 86], [48, 0, 87], [51, 0, 87], [55, 0, 87], [58, 0, 88], [61, 0, 89], [63, 0, 90], [66, 0, 92], [69, 0, 93], [71, 0, 94], [74, 0, 96], [76, 0, 98], [78, 0, 100], [80, 0, 100], [82, 0, 100], [84, 0, 101], [86, 0, 101], [88, 0, 103], [89, 0, 104], [91, 0, 106], [93, 0, 108], [94, 0, 110], [96, 0, 111], [97, 0, 111], [98, 0, 112], [100, 0, 112], [101, 0, 113], [102, 0, 113], [103, 0, 113], [104, 0, 115], [105, 0, 116], [106, 0, 118], [107, 0, 120], [108, 0, 121], [109, 0, 123], [110, 0, 125], [111, 0, 125], [112, 0, 129], [113, 0, 130], [114, 0, 132], [115, 0, 132], [116, 0, 133], [117, 0, 135], [118, 0, 137], [119, 0, 141], [120, 0, 143], [121, 0, 146], [122, 0, 148], [123, 0, 151], [124, 0, 158], [125, 0, 163], [126, 0, 169], [127, 0, 176], [128, 0, 190], [129, 0, 214], [129, 0, 214]],
});

var code = fs.readFileSync('D:\\pycharm\\code\\易盾滑块\\js\\env.js')
code += fs.readFileSync('D:\\pycharm\\code\\易盾滑块\\js\\code.js')

debugger;;

const script = new VMScript(code,`${__dirname}/NOWDEBUG.js`);

function get_result(){
    var res = myvm.run(script);
    return res;
}

// console.log(get_result())

debugger;;
