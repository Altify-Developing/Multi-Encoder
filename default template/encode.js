const fs = require('fs');
const yargs = require('yargs');
const argv = yargs
	.option('clear', {
		description: 'Deletes encoded.txt & encoded.txt using \"node encoder.js -c\"',
		alias: 'c',
		type: 'string'
	})
	.option('type', {
		description: 'chose between encoder/decoder',
		alias: ['t'],
		choices: ['encoder', 'decoder']
	})
	.option('script', {
		description: 'name of script/file \( only for encoding, decoder defaults to encoded.txt\)',
		alias: ['s'],
		type: 'string'
	})
	.help()
	.alias('help', 'h').argv;
if (argv.type == 'encoder') {
	let txt1 = fs.readFileSync(argv.script+'.txt', 'utf-8').replace(/a/gi, "1").replace(/b/gi, "2").replace(/c/gi, "3").replace(/d/gi, "4").replace(/e/gi, "5").replace(/f/gi, "6").replace(/g/gi, "7").replace(/h/gi, "8").replace(/i/gi, "9").replace(/j/gi, "10").replace(/k/gi, "11").replace(/l/gi, "12").replace(/m/gi, "13").replace(/n/gi, "14").replace(/o/gi, "15").replace(/p/gi, "16").replace(/q/gi, "17").replace(/r/gi, "18").replace(/s/gi, "19").replace(/t/gi, "20").replace(/u/gi, "21").replace(/v/gi, "22").replace(/w/gi, "23").replace(/x/gi, "24").replace(/y/gi, "25").replace(/z/gi, "26");
	fs.appendFile('encoded.txt', txt1, function(error) {
			if (error) return log.error(error);
	})
}
if (argv.type == 'decoder') {
	let txt1 = fs.readFileSync('encoded.txt', 'utf-8').replace(/1/gi, "a").replace(/2/gi, "b").replace(/3/gi, "c").replace(/4/gi, "d").replace(/5/gi, "e").replace(/6/gi, "f").replace(/7/gi, "g").replace(/8/gi, "h").replace(/9/gi, "i").replace(/10/gi, "j").replace(/11/gi, "k").replace(/12/gi, "l").replace(/13/gi, "m").replace(/14/gi, "n").replace(/15/gi, "o").replace(/16/gi, "p").replace(/17/gi, "q").replace(/18/gi, "r").replace(/19/gi, "s").replace(/20/gi, "t").replace(/21/gi, "u").replace(/22/gi, "v").replace(/23/gi, "w").replace(/24/gi, "x").replace(/25/gi, "y").replace(/26/gi, "z");
	fs.appendFile('decoded.txt', txt1, function(error) {
			if (error) return log.error(error);
	})
}