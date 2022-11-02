const yargs = require('yargs');
const fs = require('fs');
function randomString(length, chars) {
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

const argv = yargs
	.option('clear', {
		description: 'Deletes decode & encode.js using \"node index.js -c\"',
		alias: 'c',
		type: 'string'
	})
	.option('ec', {
		description: 'View the exit codes via \"node index.js -C\"',
		alias: 'C',
		type: 'string'
	})
	.option('security', {
		description: 'level of security, 1-3',
		alias: ['s', 'sec', 'lv'],
		type: 'number'
	})
	.option('language', {
		description: 'python, ahk, javascript, or default',
		alias: ['l', 'lang'],
		choices: ['python', 'ahk', 'javascript', 'default']
	})
	.option('script', {
		description: 'example for python, \"-S main.py\"',
		alias: ['S', 'src', 'in'],
		type: 'string'
	})
	.help()
	.alias('help', 'h').argv;
if (argv.clear == '') {
	fs.unlink('./decode.js', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./encode.js', (err) => {
		if (err) console.log('not found');
	});
	fs.unlink('./temp.txt', (err) => {
		if (err) console.log('not found');
	});
	throw new Error(`Complete, Exiting Script\nExit Code: 200\nFor References to error codes: \"node index.js -C\"`);
}
if (argv.ec == '') {
	console.log(`Exit Codes:\n200: OK/Working/Completed\n400: Bad Request \( Wrong Syntax \)\n404: Couldn\'t find object\n423: Locked Location \( Could either be blocked or simply was unfunctional and blocked from use because of it not working \)\n429: Too many requests \( Server Error / Internet Connection Failed \)\n498: Invalid Token/Criteria\n503: Couldn\'t load object`);
}
if (argv.script == 'undefined') {
	console.log(`Error Code: 400\n` + ' Python example of correct command line usage: \"-S main.py\"');
}
if (argv.language == 'python' && argv.script !== 'undefined') {
	console.log(argv.security + 2);
	let txt1 = `const fs = require('fs');\n` + "let txt1 = fs.readFileSync('" + argv.script + "', 'utf-8')"
	let txt2 = `const fs = require('fs');\n` + "let txt1 = fs.readFileSync('encoded.txt', 'utf-8')"
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.js"
	fs.appendFile(fp4, txt2, function(error) {
		if (error) return log.error(error);
	})
	var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪');
	for (let e = 0; e < 369; e++) {
		var characters = ['abs', 'apply', 'callable', 'chr', 'cmp', 'coerce', 'compile', 'dir', 'divmod', 'eval', 'filter', 'float', 'getattr', 'globals', 'hasattr', 'hash', 'hex', 'id', 'input', 'int', 'len', 'local', 'long', 'map', 'max', 'min', 'oct', 'open', 'ord', 'pow', 'range', 'raw_input', 'reduce', 'reload', 'repr', 'round', 'setattr', 'str', 'tuple', 'type', 'vars', 'xrange', 'argv', 'builtin_module_names', 'check_interval', 'exc_type', 'exc_value', 'exc_traceback', 'exitfunc', 'last_type', 'last_value', 'last_traceback', 'modules', 'path', 'platform', 'ps1', 'ps2', 'stdin', 'stdout', 'stderr', 'tracebacklimit', 'exit', 'settrace', 'setprofile', 'name', 'path', 'curdir', 'pardir', 'sep', 'environ', 'error', 'chdir', 'close', '_exit', 'execv', 'fork', 'kill', 'listdir', 'open', 'pipe', 'popen', 'read', 'stat', 'system', 'unlink', 'wait', 'waitpid', 'write', 'exists', 'expanduser', 'isabs', 'isfile', 'isdir', 'islink', 'isfile', 'ismount', 'split', 'splitext', 'walk', 'pi', 'acos', 'asin', 'atan', 'atan2', 'ceil', 'cos', 'cosh', 'exp', 'fabs', 'floor', 'fmod', 'frexp', 'ldexp', 'log', 'log10', 'modf', 'pow', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'getopt', 'digits', 'uppercase', 'lowercase', 'whitespace', 'index_error', 'index', 'lower', 'splitfields', 'joinfields', 'strip', 'upper', 'match', 'search', 'set_syntax', 'symcomp', 'RE_NO_BK_PARENS', 'RE_NO_BK_VBAR', 'RE_BK_PLUS_QM', 'RE_TIGHT_VBAR', 'RE_NEWLINE_OR', 'RE_CONTEXT_INDEP_OPS', 'RE_SYNTAX_AWK', 'RE_SYNTAX_EGREP', 'RE_SYNTAX_GREP', 'RE_SYNTAX_EMACS', 'gsub', 'sub', 'sys', '__built-in__', '__main__', 'array', 'math', 'time', 'regex', 'marshal', 'struct', 'getopt', 'os', 'rand', 'regsub', 'string', 'whrandom', 'dbm', 'grp', 'posixpath', 'posix', 'pwd', 'select', 'socket', 'thread', 'tkinter', 'audioop', 'imageop', 'jpeg', 'rgbimg', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F', 'g', 'G', 'h', 'H', 'i', 'I', 'j', 'J', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'q', 'Q', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'v', 'V', 'w', 'W', 'x', 'X', 'y', 'Y', 'z', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '$', '%', '^', '&', '*', "(", ")", '-', '_', '=', '+', ',', '<', '.', '>', '/', '?', ';', ':', "'", '\"', "[", "]", "{", "}", "|"];
		let txt = ".replace(/[\"" + `${characters[e]}` + "\"]/g, \"" + `¢${rand}¢` + "\")"
		let fp3 = "./encode.js"
		fs.appendFile(fp3, txt, function(error) {
			if (error) return log.error(error);
		})
		let txt2 = ".replace(/['" + `¢${rand}¢` + "']/g, \"" + `${characters[e]}` + "\")"
		let fp4 = "./decode.js"
		fs.appendFile(fp4, txt2, function(error) {
			if (error) return log.error(error);
		})
	}
}
if (argv.language == 'default' && argv.script !== 'undefined') {
	console.log(argv.security + 2);
	let fp5 = "./encode.txt"
	let fp6 = "./decode.txt"
	let txt1 = `const fs = require('fs');\nlet path = \"${fp5}\";\n` + "let txt1 = fs.readFileSync('" + argv.script + "', 'utf-8')"
	let txt2 = `const fs = require('fs');\nlet path = \"${fp6}\";\n` + "let txt1 = fs.readFileSync('encoded.txt', 'utf-8')"
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.js"
	fs.appendFile(fp4, txt2, function(error) {
		if (error) return log.error(error);
	})
	for (let e = 0; e < 53; e++) {
		if (e == 52) {
			setTimeout(repp2, 1000);
		}
		setTimeout(repp1, 100);
		function repp1() {
		var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪');
		// var characters = ['Abs', 'AutoTrim', 'Asc', 'ASin', 'ACos', 'ATan', 'BlockInput', 'Break', 'Catch', 'Ceil', 'Chr', 'Click', 'ClipWait', 'ComObjActive', 'ComObjArray', 'ComObjConnect', 'ComObjCreate', 'ComObject', 'ComObjEnwrap', 'ComObjUnwrap', 'ComObjError', 'ComObjFlags', 'ComObjGet', 'ComObjMissing', 'ComObjParameter', 'ComObjQuery', 'ComObjType', 'ComObjValue', 'Continue', 'ControlClick', 'ControlFocus', 'ControlGetFocus', 'ControlGetPos', 'ControlGetText', 'ControlGet', 'ControlMove', 'ControlSendRaw', 'ControlSend', 'ControlSetText', 'CoordMode', 'Control', 'Cos', 'Critical', 'DetectHiddenText', 'DetectHiddenWindows', 'DllCall', 'DriveGet', 'DriveSpaceFree', 'Edit', 'Else', 'EnvAdd', 'EnvDiv', 'EnvGet', 'EnvMult', 'EnvSet', 'EnvSub', 'EnvUpdate', 'Exception', 'ExitApp', 'Exit', 'Exp', 'FileAppend', 'FileCopyDir', 'FileCopy', 'FileCreateDir', 'FileCreateShortcut', 'FileDelete', 'FileEncoding', 'FileExist', 'FileInstall', 'FileGetAttrib', 'FileGetShortcut', 'FileGetSize', 'FileGetTime', 'FileGetVersion', 'FileMoveDir', 'FileMove', 'FileOpen', 'FileReadLine', 'FileRead', 'FileRecycleEmpty', 'FileRecycle', 'FileRemoveDir', 'FileSelectFile', 'FileSelectFolder', 'FileSetAttrib', 'FileSetTime', 'Finally', 'Floor', 'For', 'FormatTime', 'Format', 'Func', 'GetKeyName', 'GetKeyVK', 'GetKeySC', 'GetKeyState', 'Gosub', 'Goto', 'GroupActivate', 'GroupAdd', 'GroupClose', 'GroupDeactivate', 'GuiControlGet', 'GuiControl', 'Gui', 'Hotkey', 'Hotstring', 'IfWinExist', 'IfWinNotExist', 'IfWinNotActive', 'IfWinActive', 'IfMsgBox', 'IfLessOrEqual', 'IfLess', 'IfNotInString', 'IfInString', 'IfGreaterOrEqual', 'IfGreater', 'IfNotExist', 'IfExist', 'IfNotEqual', 'IfEqual', 'if', 'in', 'not', 'contains', 'IL_Create', 'IL_Add', 'IL_Destroy', 'ImageSearch', 'IniDelete', 'IniRead', 'IniWrite', 'InputHook', 'InputBox', 'Input', 'InStr', 'IsByRef', 'IsFunc', 'IsLabel', 'IsObject', 'KeyHistory', 'KeyWait', 'ListHotkeys', 'ListLines', 'ListVars', 'LoadPicture', 'Log', 'Ln', 'Loop', 'LV_Add', 'LV_Delete', 'LV_DeleteCol', 'LV_GetCount', 'LV_GetNext', 'LV_GetText', 'LV_Insert', 'LV_InsertCol', 'LV_Modify', 'LV_ModifyCol', 'LV_SetImageList', 'MenuGetName', 'MenuGetHandle', 'Menu', 'Mod', 'MouseClickDrag', 'MouseClick', 'MouseGetPos', 'MouseMove', 'MsgBox', 'NumGet', 'NumPut', 'ObjAddRef', 'ObjRelease', 'ObjBindMethod', 'ObjClone', 'ObjCount', 'ObjDelete', 'ObjGetAddress', 'ObjGetCapacity', 'ObjHasKey', 'ObjInsertAt', 'ObjInsert', 'ObjLength', 'ObjMaxIndex', 'ObjMinIndex', 'Min', 'Max', 'ObjNewEnum', 'ObjPop', 'ObjPush', 'ObjRemoveAt', 'ObjRemove', 'ObjSetCapacity', 'ObjGetBase', 'ObjGetBase', 'ObjRawSet', 'ObjSetBase', 'OnClipboardChange', 'OnError', 'OnExit', 'OnExit', 'OnMessage', 'Ord', 'OutputDebug', 'Pause', 'PixelGetColor', 'PixelSearch', 'PostMessage', 'Process', 'Progress', 'Random', 'RegExMatch', 'RegExReplace', 'RegDelete', 'RegRead', 'RegWrite', 'RegisterCallback', 'Reload', 'Return', 'Round', 'RunWait', 'RunAs', 'Run', 'SB_SetText', 'SB_SetParts', 'SB_SetIcon', 'SendEvent', 'SendPlay', 'SendInput', 'SendRaw', 'SendLevel', 'SendMessage', 'SendMode', 'Send', 'SetBatchLines', 'SetCapsLockState', 'SetControlDelay', 'SetDefaultMouseSpeed', 'SetEnv', 'SetFormat', 'SetKeyDelay', 'SetMouseDelay', 'SetNumLockState', 'SetScrollLockState', 'SetRegView', 'SetStoreCapsLockMode', 'SetTimer', 'SetTitleMatchMode', 'SetWinDelay', 'SetWorkingDir', 'Shutdown', 'Sin', 'Sleep', 'Sort', 'SoundBeep', 'SoundGetWaveVolume', 'SoundGet', 'SoundPlay', 'SoundSetWaveVolume', 'SoundSet', 'SplashImage', 'SplashTextOn', 'SplashTextOff', 'SplitPath', 'Sqrt', 'StatusBarGetText', 'StatusBarWait', 'StringGetPos', 'StrGet', 'StringCaseSense', 'StringLeft', 'StringLen', 'StringLower', 'StringMid', 'StringReplace', 'StringRight', 'StringSplit', 'StringTrimLeft', 'StringTrimRight', 'StringUpper', 'StrLen', 'StrPut', 'StrReplace', 'StrSplit', 'SubStr', 'Suspend', 'Switch', 'SysGet', 'Tan', 'Thread', 'Throw', 'ToolTip', 'Transform', 'TrayTip', 'Trim', 'Try', 'TV_Add', 'TV_Delete', 'TV_Get', 'TV_GetChild', 'TV_GetCount', 'TV_GetNext', 'TV_GetParent', 'TV_GetPrev', 'TV_GetSelection', 'TV_GetText', 'TV_Modify', 'TV_SetImageList', 'Until', 'UrlDownloadToFile', 'VarSetCapacity', 'While-loop', 'WinActivateBottom', 'WinActivate', 'WinClose', 'WinExist', 'WinGetActiveStats', 'WinGetActiveTitle', 'WinGetClass', 'WinGetText', 'WinGetPos', 'WinGetTitle', 'WinGet', 'WinHide', 'WinKill', 'WinMaximize', 'WinMenuSelectItem', 'WinMinimizeAllUndo', 'WinMinimizeAll', 'WinMinimize', 'WinMove', 'WinRestore', 'WinSet', 'WinSetTitle', 'WinShow', 'WinWaitActive', 'WinWaitNotActive', 'WinWaitClose', 'WinWait', 'ClipboardTimeout', 'ClipboardTimeout', 'CommentFlag', 'Delimiter', 'DerefChar', 'ErrorStdOut', 'EscapeChar', 'HotkeyInterval', 'HotkeyModifierTimeout', 'Hotstring', 'If', 'IfTimeout', 'IfWinActive', 'IfWinNotActive', 'IfWinExist', 'IfWinNotExist', 'Include', 'IncludeAgain', 'InputLevel', 'InstallKeybdHook', 'InstallMouseHook', 'KeyHistory', 'LTrim', 'MaxHotkeysPerInterval', 'MaxMem', 'MaxThreads', 'MaxThreadsBuffer', 'MaxThreadsPerHotkey', 'MenuMaskKey', 'NoEnv', 'NoTrayIcon', 'Persistent', 'Requires', 'SingleInstance', 'UseHook', 'Warn', 'WinActivateForce', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '$', '%', '^', '&', '-', '_', '=', ',', '<', '.', '>', '?', ';', ':', "|"];
		var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':', "{", "}"];
		let txt = ".replace(/" + `${characters[e]}` + "/g, \"" + `¢${rand}¢` + "\")"
		let fp3 = "./encode.js"
		fs.appendFile(fp3, txt, function(error) {
			if (error) return log.error(error);
		})
		let txt2 = ".replace(/" + `¢${rand}¢` + "/g, \"" + `${characters[e]}` + "\")"
		let fp4 = "./decode.js"
		fs.appendFile(fp4, txt2, function(error) {
			if (error) return log.error(error);
		})
	}
			function repp2() {
			let txt3 = `;\nfs.appendFile(path, txt1, function(error) {\n		if (error) return log.error(error);\n	})\n`
			let txt4 = `;\nfs.appendFile(path, txt1, function(error) {\n		if (error) return log.error(error);\n	})\n`
			fs.appendFile('./decode.js', txt4, function(error) {
			if (error) return log.error(error);
		})
			fs.appendFile('./encode.js', txt3, function(error) {
			if (error) return log.error(error);
		})
		}
	}
}

if (argv.language == 'ahk' && argv.script !== 'undefined') {
	console.log(argv.security + 2);
	let fp5 = "./encode.txt"
	let fp6 = "./decode.txt"
	let txt1 = `const fs = require('fs');\nlet path = \"${fp5}\";\n` + "let txt1 = fs.readFileSync('" + argv.script + "', 'utf-8')"
	let txt2 = `const fs = require('fs');\nlet path = \"${fp6}\";\n` + "let txt1 = fs.readFileSync('encoded.txt', 'utf-8')"
	let fp3 = "./encode.js"
	fs.appendFile(fp3, txt1, function(error) {
		if (error) return log.error(error);
	})
	let fp4 = "./decode.js"
	fs.appendFile(fp4, txt2, function(error) {
		if (error) return log.error(error);
	})
	var f = '1'
	for (let e = 0; e < 527; e++) {
		if (e == 526) {
			setTimeout(repp2, 1000);
		}
		if (e == 66 || 132 || 198 || 264 || 330 || 396 || 462) {
			setTimeout(repp3, 100)
		}
		setTimeout(repp1, 100);
		function repp1() {
		var rand = randomString(argv.s + 2, '¡€£¤¥ª°¹²³·®÷ǁ¼½¾⁵¿×ȼˢ⁶⁷⁸⁹⁺ø•◦∙‣⁃∞₹₨₱₩฿₫₪');
		var characters = ['Abs', 'AutoTrim', 'Asc', 'ASin', 'ACos', 'ATan', 'BlockInput', 'Break', 'Catch', 'Ceil', 'Chr', 'Click', 'ClipWait', 'ComObjActive', 'ComObjArray', 'ComObjConnect', 'ComObjCreate', 'ComObject', 'ComObjEnwrap', 'ComObjUnwrap', 'ComObjError', 'ComObjFlags', 'ComObjGet', 'ComObjMissing', 'ComObjParameter', 'ComObjQuery', 'ComObjType', 'ComObjValue', 'Continue', 'ControlClick', 'ControlFocus', 'ControlGetFocus', 'ControlGetPos', 'ControlGetText', 'ControlGet', 'ControlMove', 'ControlSendRaw', 'ControlSend', 'ControlSetText', 'CoordMode', 'Control', 'Cos', 'Critical', 'DetectHiddenText', 'DetectHiddenWindows', 'DllCall', 'DriveGet', 'DriveSpaceFree', 'Edit', 'Else', 'EnvAdd', 'EnvDiv', 'EnvGet', 'EnvMult', 'EnvSet', 'EnvSub', 'EnvUpdate', 'Exception', 'ExitApp', 'Exit', 'Exp', 'FileAppend', 'FileCopyDir', 'FileCopy', 'FileCreateDir', 'FileCreateShortcut', 'FileDelete', 'FileEncoding', 'FileExist', 'FileInstall', 'FileGetAttrib', 'FileGetShortcut', 'FileGetSize', 'FileGetTime', 'FileGetVersion', 'FileMoveDir', 'FileMove', 'FileOpen', 'FileReadLine', 'FileRead', 'FileRecycleEmpty', 'FileRecycle', 'FileRemoveDir', 'FileSelectFile', 'FileSelectFolder', 'FileSetAttrib', 'FileSetTime', 'Finally', 'Floor', 'For', 'FormatTime', 'Format', 'Func', 'GetKeyName', 'GetKeyVK', 'GetKeySC', 'GetKeyState', 'Gosub', 'Goto', 'GroupActivate', 'GroupAdd', 'GroupClose', 'GroupDeactivate', 'GuiControlGet', 'GuiControl', 'Gui', 'Hotkey', 'Hotstring', 'IfWinExist', 'IfWinNotExist', 'IfWinNotActive', 'IfWinActive', 'IfMsgBox', 'IfLessOrEqual', 'IfLess', 'IfNotInString', 'IfInString', 'IfGreaterOrEqual', 'IfGreater', 'IfNotExist', 'IfExist', 'IfNotEqual', 'IfEqual', 'if', 'in', 'not', 'contains', 'IL_Create', 'IL_Add', 'IL_Destroy', 'ImageSearch', 'IniDelete', 'IniRead', 'IniWrite', 'InputHook', 'InputBox', 'Input', 'InStr', 'IsByRef', 'IsFunc', 'IsLabel', 'IsObject', 'KeyHistory', 'KeyWait', 'ListHotkeys', 'ListLines', 'ListVars', 'LoadPicture', 'Log', 'Ln', 'Loop', 'LV_Add', 'LV_Delete', 'LV_DeleteCol', 'LV_GetCount', 'LV_GetNext', 'LV_GetText', 'LV_Insert', 'LV_InsertCol', 'LV_Modify', 'LV_ModifyCol', 'LV_SetImageList', 'MenuGetName', 'MenuGetHandle', 'Menu', 'Mod', 'MouseClickDrag', 'MouseClick', 'MouseGetPos', 'MouseMove', 'MsgBox', 'NumGet', 'NumPut', 'ObjAddRef', 'ObjRelease', 'ObjBindMethod', 'ObjClone', 'ObjCount', 'ObjDelete', 'ObjGetAddress', 'ObjGetCapacity', 'ObjHasKey', 'ObjInsertAt', 'ObjInsert', 'ObjLength', 'ObjMaxIndex', 'ObjMinIndex', 'Min', 'Max', 'ObjNewEnum', 'ObjPop', 'ObjPush', 'ObjRemoveAt', 'ObjRemove', 'ObjSetCapacity', 'ObjGetBase', 'ObjGetBase', 'ObjRawSet', 'ObjSetBase', 'OnClipboardChange', 'OnError', 'OnExit', 'OnExit', 'OnMessage', 'Ord', 'OutputDebug', 'Pause', 'PixelGetColor', 'PixelSearch', 'PostMessage', 'Process', 'Progress', 'Random', 'RegExMatch', 'RegExReplace', 'RegDelete', 'RegRead', 'RegWrite', 'RegisterCallback', 'Reload', 'Return', 'Round', 'RunWait', 'RunAs', 'Run', 'SB_SetText', 'SB_SetParts', 'SB_SetIcon', 'SendEvent', 'SendPlay', 'SendInput', 'SendRaw', 'SendLevel', 'SendMessage', 'SendMode', 'Send', 'SetBatchLines', 'SetCapsLockState', 'SetControlDelay', 'SetDefaultMouseSpeed', 'SetEnv', 'SetFormat', 'SetKeyDelay', 'SetMouseDelay', 'SetNumLockState', 'SetScrollLockState', 'SetRegView', 'SetStoreCapsLockMode', 'SetTimer', 'SetTitleMatchMode', 'SetWinDelay', 'SetWorkingDir', 'Shutdown', 'Sin', 'Sleep', 'Sort', 'SoundBeep', 'SoundGetWaveVolume', 'SoundGet', 'SoundPlay', 'SoundSetWaveVolume', 'SoundSet', 'SplashImage', 'SplashTextOn', 'SplashTextOff', 'SplitPath', 'Sqrt', 'StatusBarGetText', 'StatusBarWait', 'StringGetPos', 'StrGet', 'StringCaseSense', 'StringLeft', 'StringLen', 'StringLower', 'StringMid', 'StringReplace', 'StringRight', 'StringSplit', 'StringTrimLeft', 'StringTrimRight', 'StringUpper', 'StrLen', 'StrPut', 'StrReplace', 'StrSplit', 'SubStr', 'Suspend', 'Switch', 'SysGet', 'Tan', 'Thread', 'Throw', 'ToolTip', 'Transform', 'TrayTip', 'Trim', 'Try', 'TV_Add', 'TV_Delete', 'TV_Get', 'TV_GetChild', 'TV_GetCount', 'TV_GetNext', 'TV_GetParent', 'TV_GetPrev', 'TV_GetSelection', 'TV_GetText', 'TV_Modify', 'TV_SetImageList', 'Until', 'UrlDownloadToFile', 'VarSetCapacity', 'While-loop', 'WinActivateBottom', 'WinActivate', 'WinClose', 'WinExist', 'WinGetActiveStats', 'WinGetActiveTitle', 'WinGetClass', 'WinGetText', 'WinGetPos', 'WinGetTitle', 'WinGet', 'WinHide', 'WinKill', 'WinMaximize', 'WinMenuSelectItem', 'WinMinimizeAllUndo', 'WinMinimizeAll', 'WinMinimize', 'WinMove', 'WinRestore', 'WinSet', 'WinSetTitle', 'WinShow', 'WinWaitActive', 'WinWaitNotActive', 'WinWaitClose', 'WinWait', 'ClipboardTimeout', 'ClipboardTimeout', 'CommentFlag', 'Delimiter', 'DerefChar', 'ErrorStdOut', 'EscapeChar', 'HotkeyInterval', 'HotkeyModifierTimeout', 'Hotstring', 'If', 'IfTimeout', 'IfWinActive', 'IfWinNotActive', 'IfWinExist', 'IfWinNotExist', 'Include', 'IncludeAgain', 'InputLevel', 'InstallKeybdHook', 'InstallMouseHook', 'KeyHistory', 'LTrim', 'MaxHotkeysPerInterval', 'MaxMem', 'MaxThreads', 'MaxThreadsBuffer', 'MaxThreadsPerHotkey', 'MenuMaskKey', 'NoEnv', 'NoTrayIcon', 'Persistent', 'Requires', 'SingleInstance', 'UseHook', 'Warn', 'WinActivateForce', 'the', 'of', 'and', 'to', 'in', 'is', 'you', 'that', 'it', 'he', 'was', 'for', 'on', 'are', 'as', 'with', 'his', 'they', 'at', 'be', 'this', 'have', 'from', 'or', 'one', 'had', 'by', 'word', 'but', 'not', 'what', 'all', 'were', 'we', 'when', 'your', 'can', 'said', 'there', 'use', 'an', 'each', 'which', 'she', 'do', 'how', 'their', 'if', 'will', 'up', 'other', 'about', 'out', 'many', 'then', 'them', 'these', 'so', 'some', 'her', 'would', 'make', 'like', 'him', 'into', 'time', 'has', 'look', 'two', 'more', 'write', 'go', 'see', 'number', 'no', 'way', 'could', 'people', 'my', 'than', 'first', 'water', 'been', 'call', 'who', 'oil', 'its', 'now', 'find', 'long', 'down', 'day', 'did', 'get', 'come', 'made', 'may', 'part', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "`", "~", '!', '@', '#', '%', '&', '-', '_', '=', ',', '<', '>', ';', ':'];
		let txt = ".replace(/" + `${characters[e]}` + "/g, \"" + `¢${rand}¢` + "\")"
		let fp3 = "./encode.js"
		fs.appendFile(fp3, txt, function(error) {
			if (error) return log.error(error);
		})
		let txt2 = ".replace(/" + `¢${rand}¢` + "/g, \"" + `${characters[e]}` + "\")"
		let fp4 = "./decode.js"
		fs.appendFile(fp4, txt2, function(error) {
			if (error) return log.error(error);
		})
	}
			function repp2() {
			let txt3 = `;\nfs.appendFile(path, txt1, function(error) {\n		if (error) return log.error(error);\n	})\n`
			let txt4 = `;\nfs.appendFile(path, txt1, function(error) {\n		if (error) return log.error(error);\n	})\n`
			fs.appendFile('./decode.js', txt4, function(error) {
			if (error) return log.error(error);
		})
			fs.appendFile('./encode.js', txt3, function(error) {
			if (error) return log.error(error);
		})
		}
		function repp3() {
			f++
			let txt3 = `;\nfs.appendFile(path, txt${f}, function(error) {\n		if (error) return log.error(error);\n	})\n`
			let txt4 = `;\nfs.appendFile(path, txt${f}, function(error) {\n		if (error) return log.error(error);\n	})\n`
			fs.appendFile('./decode.js', txt4, function(error) {
			if (error) return log.error(error);
		})
			fs.appendFile('./encode.js', txt3, function(error) {
			if (error) return log.error(error);
		})
		}
	}
}