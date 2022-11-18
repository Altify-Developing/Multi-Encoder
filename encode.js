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
	let txt0 = fs.readFileSync(argv.script+'.txt', 'utf-').replace(/a/gi, "诶").replace(/b/gi, "比").replace(/c/gi, "西").replace(/d/gi, "迪").replace(/e/gi, "伊").replace(/f/gi, "艾").replace(/g/gi, "弗").replace(/h/gi, "吉").replace(/i/gi, "尺").replace(/j/gi, "杰").replace(/k/gi, "开").replace(/l/gi, "勒").replace(/m/gi, "马").replace(/n/gi, "娜").replace(/o/gi, "哦").replace(/p/gi, "屁").replace(/q/gi, "吾").replace(/r/gi, "一个").replace(/s/gi, "电子").replace(/t/gi, "一世").replace(/u/gi, "升").replace(/v/gi, "米").replace(/w/gi, "秒").replace(/x/gi, "吨").replace(/y/gi, "你").replace(/z/gi, "是");
	fs.appendFile('encoded.txt', txt0, function(error) {
			if (error) return log.error(error);
	})
}
if (argv.type == 'decoder') {
	let txt0 = fs.readFileSync('encoded.txt', 'utf-').replace(/诶/gi, "a").replace(/比/gi, "b").replace(/西/gi, "c").replace(/迪/gi, "d").replace(/伊/gi, "e").replace(/艾/gi, "f").replace(/弗/gi, "g").replace(/吉/gi, "h").replace(/尺/gi, "i").replace(/杰/gi, "j").replace(/开/gi, "k").replace(/勒/gi, "l").replace(/马/gi, "m").replace(/娜/gi, "n").replace(/哦/gi, "o").replace(/屁/gi, "p").replace(/吾/gi, "q").replace(/一个/gi, "r").replace(/电子/gi, "s").replace(/一世/gi, "t").replace(/升/gi, "u").replace(/米/gi, "v").replace(/秒/gi, "w").replace(/吨/gi, "x").replace(/你/gi, "y").replace(/是/gi, "z");
	fs.appendFile('decoded.txt', txt0, function(error) {
			if (error) return log.error(error);
	})
}