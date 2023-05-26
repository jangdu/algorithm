const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    result = ''
    for(var i = 0; i < str.length; i++){
        t = str[i]
        if(t === t.toUpperCase()){
            result += t.toLowerCase();
        }else{
            result += t.toUpperCase();
        }
    }
    console.log(result)
            
});