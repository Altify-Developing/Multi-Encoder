const fs = require('fs');
let txt1 = fs.readFileSync('encoded.txt', 'utf-8').replace(/@/gi, "a").replace(/\|3/gi, "b").replace(/{/gi, "c").replace(/\|\]/gi, "d").replace(/3/gi, "e").replace(/F/gi, "f").replace(/6/gi, "g").replace(/\|-\|/gi, "h").replace(/1/gi, "i").replace(/J/gi, "j").replace(/\|</gi, "k").replace(/\|_/gi, "l").replace(/|\\\|\/\|/gi, "m").replace(/\|\\\|/gi, "n").replace(/0/gi, "o").replace(/P/gi, "p").replace(/Q/gi, "q").replace(/R/gi, "r").replace(/\$/gi, "s").replace(/7/gi, "t").replace(/\|_\|/gi, "u").replace(/\\\//gi, "v").replace(/\\\/\\\//gi, "w").replace(/></gi, "x").replace(/Y/gi, "y").replace(/Z/gi, "z");
fs.appendFile('decoded.txt', txt1, function(error) {
		if (error) return log.error(error);
})