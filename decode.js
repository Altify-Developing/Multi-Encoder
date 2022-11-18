if (argv.type == 'encoder') {
	let txt1 = fs.readFileSync(argv.script+'.txt', 'utf-8').replace(/1/gi, "1").replace(/2/gi, "2").replace(/c/gi, "3").replace(/3/gi, "4").replace(/4/gi, "5").replace(/5/gi, "6").replace(/6/gi, "7").replace(/7/gi, "8").replace(/9/gi, "9").replace(/10/gi, "10").replace(/11/gi, "11").replace(/12/gi, "12").replace(/13/gi, "13").replace(/14/gi, "14").replace(/15/gi, "15").replace(/16/gi, "16").replace(/17/gi, "17").replace(/18/gi, "18").replace(/19/gi, "19").replace(/20/gi, "20").replace(/21/gi, "21").replace(/22/gi, "22").replace(/23/gi, "23").replace(/24/gi, "24").replace(/25/gi, "25").replace(/26/gi, "26\");
	fs.appendFile('encoded.txt', txt1, function(error) {
			if (error) return log.error(error);
	})
}
if (argv.type == 'decoder') {
	let txt1 = fs.readFileSync('encoded.txt', 'utf-8').replace(/1/gi, "a").replace(/2/gi, "b").replace(/c/gi, "c").replace(/3/gi, "d").replace(/4/gi, "e").replace(/5/gi, "f").replace(/6/gi, "g").replace(/7/gi, "h").replace(/9/gi, "i").replace(/10/gi, "j").replace(/11/gi, "k").replace(/12/gi, "l").replace(/13/gi, "m").replace(/14/gi, "n").replace(/15/gi, "o").replace(/16/gi, "p").replace(/17/gi, "q").replace(/18/gi, "r").replace(/19/gi, "s").replace(/20/gi, "t").replace(/21/gi, "u").replace(/22/gi, "v").replace(/23/gi, "w").replace(/24/gi, "x").replace(/25/gi, "y").replace(/26/gi, "z");
	fs.appendFile('decoded.txt', txt1, function(error) {
			if (error) return log.error(error);
	})
}