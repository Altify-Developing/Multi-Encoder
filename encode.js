const fs = require('fs');
let txt1 = fs.readFileSync('text3.txt', 'utf-8').replace(/a/gi, "@").replace(/b/gi, "|3").replace(/c/gi, "{").replace(/d/gi, "|]").replace(/e/gi, "3").replace(/f/gi, "F").replace(/g/gi, "6").replace(/h/gi, "|-|").replace(/i/gi, "1").replace(/j/gi, "J").replace(/k/gi, "|<").replace(/l/gi, "|_").replace(/m/gi, "|\\|/|").replace(/n/gi, "|\\|").replace(/o/gi, "0").replace(/p/gi, "P").replace(/q/gi, "Q").replace(/r/gi, "R").replace(/s/gi, "$").replace(/t/gi, "7").replace(/u/gi, "|_|").replace(/v/gi, "\\/").replace(/w/gi, "\\/\\/").replace(/x/gi, "><").replace(/y/gi, "Y").replace(/z/gi, "Z");
fs.appendFile('encoded.txt', txt1, function(error) {
		if (error) return log.error(error);
})