;@Ahk2Exe-Set CompanyName, Altify LLC\n;@Ahk2Exe-Set Copyright, Altify 2022\n;@Ahk2Exe-Set Description, Altify Encoder
;@Ahk2Exe-Set FileVersion, 0.1.3
;@Ahk2Exe-Set InternalName, encode.exe
;@Ahk2Exe-Set LegalTrademarks, Altify LLC © 2022
;@Ahk2Exe-Set Name, Altify Encoder
;@Ahk2Exe-Set OrigFilename, encode.exe
;@Ahk2Exe-Set ProductName, Altify Encoder
;@Ahk2Exe-Set ProductVersion, 0.1.3
;@Ahk2Exe-Set Version, 0.1.3
#SingleInstance, Force
StringCaseSense, On
SetBatchLines, -1
Process, Priority,, Realtime
Critical On
IfExist,settings/def.ini
{
	IniRead,ttype,settings/def.ini,Section1,Option1
	IniRead,ttype2,settings/def.ini,Section2,Option1
}
IfNotExist,settings/def.ini
{
	ttype := "1"
	ttype2 := "input.txt"
}
Gui, Add, Button, Default, Help
Gui, Add, Button, Default, Discord
Gui, Add, Button, Default, Github
Gui, Add, Button, Default, Website
Gui, Add, Button, Default, SaveOptions
Gui, Add, Text,ym, Encode `(1`) or Decode `(2`):
Gui, Add, Text,ym, filename:
Gui, Add, Edit, vtype ym ym, %ttype%
Gui, Add, Edit, vtype2 ym ym, %ttype2%
Gui, Add, Button, default, Submit
Gui, Add, Picture, x0 y0 w610 h385 +0x4000000, config.png
Gui, Show,, Encoder By Altify#0016
return
ButtonHelp:
Run,Helper.exe
ExitApp
ButtonDiscord:
Run,https://discord.gg/alts
ExitApp
ButtonGithub:
Run,https://github.com/Altify-Developing/Altify-Developing-Main
ExitApp
ButtonWebsite:
Run,https://www.altifydeveloping.com/
ExitApp
ButtonSaveOptions:
Gui, Submit
FileDelete,settings/def.ini
FileRemoveDir,settings
FileCreateDir,settings
IniWrite,%type%,settings/def.ini,Section1,Option1
Run,encoder.exe
ExitApp
ButtonSubmit:
Gui, Submit
if type = 1
{
	TrayTip, Starting`,Welcome To Altify`'s Encoder, Created By Altify#0016`nDiscord: https://discord.altifydeveloping.com/,,17
	Sleep, 2000
	TrayTip
	FileCreateDir,output
	FileCreateDir,temp
	FileAppend,`n`r,%type2%
	Loop, Read, %type2%
	{
		total_lines = %A_Index%
		scrinst = %A_Index%
	}
	Loop, %total_lines%
	{
		scrinst -= 1
		FileReadLine,towrite,%type2%,%scrinst%
		FileAppend,%towrite%`n,temp/script.txt
	}
	FileRead,alsotowrite,temp/script.txt
	FileRead,string1,%type2%
	string2 := StrReplace(string1, "a", "¢¡¢")
	string3 := StrReplace(string2, "b", "¢¡¡¢")
	string4 := StrReplace(string3, "c", "¢¡²¢")
	string := StrReplace(stringer, "d", "¢²¡¢")
	stringer := StrReplace(string, "e", "¢²¢")
	string := StrReplace(stringer, "f", "¢•¢")
	stringer := StrReplace(string, "g", "¢»•¢")
	string := StrReplace(stringer, "h", "¢•£¢")
	stringer := StrReplace(string, "i", "¢²£¢")
	string := StrReplace(stringer, "j", "¢•²¢")
	stringer := StrReplace(string, "k", "¢£¢")
	string := StrReplace(stringer, "l", "¢°£¢")
	stringer := StrReplace(string, "m", "¢£°¢")
	string := StrReplace(stringer, "n", "¢£²¢")
	stringer := StrReplace(string, "o", "¢²°¢")
	string := StrReplace(stringer, "p", "¢°²¢")
	stringer := StrReplace(string, "q", "¢°¢")
	string := StrReplace(stringer, "r", "¢°º¢")
	stringer := StrReplace(string, "s", "¢º°¢")
	string := StrReplace(stringer, "t", "¢º²¢")
	stringer := StrReplace(string, "u", "¢²º¢")
	string := StrReplace(stringer, "v", "¢º»¢")
	stringer := StrReplace(string, "w", "¢¼»¢")
	string := StrReplace(stringer, "x", "¢»¼¢")
	stringer := StrReplace(string, "y", "¢ºº¢")
	string := StrReplace(stringer, "z", "¢º©¢")
	stringer := StrReplace(string, "A", "¢¡³¢")
	string := StrReplace(stringer, "B", "¢³¡¢")
	stringer := StrReplace(string, "C", "¢¡•¢")
	string := StrReplace(stringer, "D", "¢•¡¢")
	stringer := StrReplace(string, "E", "¢¡€¢")
	string := StrReplace(stringer, "F", "¢×£¢")
	stringer := StrReplace(string, "G", "¢£•¢")
	string := StrReplace(stringer, "H", "¢•€¢")
	stringer := StrReplace(string, "I", "¢€•¢")
	string := StrReplace(stringer, "J", "¢¤¢")
	stringer := StrReplace(string, "K", "¢£×¢")
	string := StrReplace(stringer, "L", "¢»£¢")
	stringer := StrReplace(string, "M", "¢£°¤¢")
	string := StrReplace(stringer, "N", "¢£¤¢")
	stringer := StrReplace(string, "O", "¢¤£¢")
	string := StrReplace(stringer, "P", "¢°×¢")
	stringer := StrReplace(string, "Q", "¢°¤¢")
	string := StrReplace(stringer, "R", "¢¤°¢")
	stringer := StrReplace(string, "S", "¢º¤¢")
	string := StrReplace(stringer, "T", "¢¤º¢")
	stringer := StrReplace(string, "U", "¢×º¢")
	string := StrReplace(stringer, "V", "¢º¢")
	stringer := StrReplace(string, "W", "¢¼º¢")
	string := StrReplace(stringer, "X", "¢º¼¢")
	stringer := StrReplace(string, "Y", "¢»º¢")
	string := StrReplace(stringer, "Z", "¢º¾¥¢")
	stringer := StrReplace(string, "1", "¢¼¢")
	string := StrReplace(stringer, "2", "¢‹¢")
	stringer := StrReplace(string, "3", "¢‹¼¢")
	string := StrReplace(stringer, "4", "¢¼¥¢")
	stringer := StrReplace(string, "5", "¢‹¥¢")
	string := StrReplace(stringer, "6", "¢½¢")
	stringer := StrReplace(string, "7", "¢½‹¢")
	string := StrReplace(stringer, "8", "¢‹½¢")
	stringer := StrReplace(string, "9", "¢½¥¢")
	string := StrReplace(stringer, "0", "¢¥½¢")
	stringer := StrReplace(string, "``", "¢¾¢")
	string := StrReplace(stringer, "~", "¢‹¾¢")
	stringer := StrReplace(string, "!", "¢¾‹¢")
	string := StrReplace(stringer, "@", "¢¾¥¢")
	stringer := StrReplace(string, "#", "¢¥¾¢")
	string := StrReplace(stringer, "$", "¢‹¾¢")
	stringer := StrReplace(string, "`%", "¢¼¾¢")
	string := StrReplace(stringer, "`^", "¢¾¼¢")
	stringer := StrReplace(string, "*", "¢ª¢")
	string := StrReplace(stringer, "`(", "¢¼©¢")
	stringer := StrReplace(string, "`)", "¢¿¢")
	string := StrReplace(stringer, "-", "¢¿›¢")
	stringer := StrReplace(string, "_", "¢›¿¢")
	string := StrReplace(stringer, "=", "¢ª¿¢")
	stringer := StrReplace(string, "+", "¢¿ª¢")
	string := StrReplace(stringer, "`[", "¢¼ª¢")
	stringer := StrReplace(string, "`]", "¢¾ª¢")
	string := StrReplace(stringer, "`{", "¢ª¾¢")
	stringer := StrReplace(string, "`}", "¢ª¼¢")
	string := StrReplace(stringer, "\", "¢³¼¢")
	stringer := StrReplace(string, "|", "¢¼³¢")
	string := StrReplace(stringer, ";", "¢¾³¢")
	stringer := StrReplace(string, "`:", "¢³½¢")
	string := StrReplace(stringer, "`'", "¢½³¢")
	stringer := StrReplace(string, """", "¢º³¢")
	string := StrReplace(stringer, "<", "¢¿³¢")
	stringer := StrReplace(string, ">", "¢³›¢")
	string := StrReplace(stringer, ",", "¢›³¢")
	stringer := StrReplace(string, ".", "¢³¿¢")
	string := StrReplace(stringer, "/", "¢¹¢")
	stringer := StrReplace(string, "?", "¢¹•¢")
	string := StrReplace(stringer, "`n", "¢•¹¢")
	stringer := StrReplace(string, "`r", "¢¿¹¢")
	FileDelete,%type2%
	FileAppend,%stringer%,output/output.txt
	FileDelete,temp/script.txt
	FileRemoveDir,temp
	ExitApp
}
if type = 2
{
	TrayTip, Starting`,Welcome To Altify`'s Decoder, Created By Altify#0016`nDiscord: https://discord.altifydeveloping.com/,,17
	Sleep, 2000
	TrayTip
	FileCreateDir,output
	FileCreateDir,temp
	FileAppend,`n`r,%type2%
	Loop, Read, %type2%
	{
		total_lines = %A_Index%
		scrinst = %A_Index%
	}
	Loop, %total_lines%
	{
		scrinst -= 1
		FileReadLine,towrite,%type2%,%scrinst%
		FileAppend,%towrite%`n,temp/script.txt
	}
	FileRead,alsotowrite,temp/script.txt
	FileRead,string,%type2%
	stringer := StrReplace(string, "¢¡¢", "a")
	string := StrReplace(stringer, "¢¡¡¢", "b")
	stringer := StrReplace(string, "¢¡²¢", "c")
	string := StrReplace(stringer, "¢²¡¢", "d")
	stringer := StrReplace(string, "¢²¢", "e")
	string := StrReplace(stringer, "¢•¢", "f")
	stringer := StrReplace(string, "¢»•¢", "g")
	string := StrReplace(stringer, "¢•£¢", "h")
	stringer := StrReplace(string, "¢²£¢", "i")
	string := StrReplace(stringer, "¢•²¢", "j")
	stringer := StrReplace(string, "¢£¢", "k")
	string := StrReplace(stringer, "¢°£¢", "l")
	stringer := StrReplace(string, "¢£°¢", "m")
	string := StrReplace(stringer, "¢£²¢", "n")
	stringer := StrReplace(string, "¢²°¢", "o")
	string := StrReplace(stringer, "¢°²¢", "p")
	stringer := StrReplace(string, "¢°¢", "q")
	string := StrReplace(stringer, "¢°º¢", "r")
	stringer := StrReplace(string, "¢º°¢", "s")
	string := StrReplace(stringer, "¢º²¢", "t")
	stringer := StrReplace(string, "¢²º¢", "u")
	string := StrReplace(stringer, "¢º»¢", "v")
	stringer := StrReplace(string, "¢¼»¢", "w")
	string := StrReplace(stringer, "¢»¼¢", "x")
	stringer := StrReplace(string, "¢ºº¢", "y")
	string := StrReplace(stringer, "¢º©¢", "z")
	stringer := StrReplace(string, "¢¡³¢", "A")
	string := StrReplace(stringer, "¢³¡¢", "B")
	stringer := StrReplace(string, "¢¡•¢", "C")
	string := StrReplace(stringer, "¢•¡¢", "D")
	stringer := StrReplace(string, "¢¡€¢", "E")
	string := StrReplace(stringer, "¢×£¢", "F")
	stringer := StrReplace(string, "¢£•¢", "G")
	string := StrReplace(stringer, "¢•€¢", "H")
	stringer := StrReplace(string, "¢€•¢", "I")
	string := StrReplace(stringer, "¢¤¢", "J")
	stringer := StrReplace(string, "¢£×¢", "K")
	string := StrReplace(stringer, "¢»£¢", "L")
	stringer := StrReplace(string, "¢£°¤¢", "M")
	string := StrReplace(stringer, "¢£¤¢", "N")
	stringer := StrReplace(string, "¢¤£¢", "O")
	string := StrReplace(stringer, "¢°×¢", "P")
	stringer := StrReplace(string, "¢°¤¢", "Q")
	string := StrReplace(stringer, "¢¤°¢", "R")
	stringer := StrReplace(string, "¢º¤¢", "S")
	string := StrReplace(stringer, "¢¤º¢", "T")
	stringer := StrReplace(string, "¢×º¢", "U")
	string := StrReplace(stringer, "¢º¢", "V")
	stringer := StrReplace(string, "¢¼º¢", "W")
	string := StrReplace(stringer, "¢º¼¢", "X")
	stringer := StrReplace(string, "¢»º¢", "Y")
	string := StrReplace(stringer, "¢º¾¥¢", "Z")
	stringer := StrReplace(string, "¢¼¢", "1")
	string := StrReplace(stringer, "¢‹¢", "2")
	stringer := StrReplace(string, "¢‹¼¢", "3")
	string := StrReplace(stringer, "¢¼¥¢", "4")
	stringer := StrReplace(string, "¢‹¥¢", "5")
	string := StrReplace(stringer, "¢½¢", "6")
	stringer := StrReplace(string, "¢½‹¢", "7")
	string := StrReplace(stringer, "¢‹½¢", "8")
	stringer := StrReplace(string, "¢½¥¢", "9")
	string := StrReplace(stringer, "¢¥½¢", "0")
	stringer := StrReplace(string, "¢¾¢", "``")
	string := StrReplace(stringer, "¢‹¾¢", "~")
	stringer := StrReplace(string, "¢¾‹¢", "!")
	string := StrReplace(stringer, "¢¾¥¢", "@")
	stringer := StrReplace(string, "¢¥¾¢", "#")
	string := StrReplace(stringer, "¢‹¾¢", "$")
	stringer := StrReplace(string, "¢¼¾¢", "`%")
	string := StrReplace(stringer, "¢¾¼¢", "`^")
	stringer := StrReplace(string, "¢ª¢", "*")
	string := StrReplace(stringer, "¢¼©¢", "`(")
	stringer := StrReplace(string, "¢¿¢", "`)")
	string := StrReplace(stringer, "¢¿›¢", "-")
	stringer := StrReplace(string, "¢›¿¢", "_")
	string := StrReplace(stringer, "¢ª¿¢", "=")
	stringer := StrReplace(string, "¢¿ª¢", "+")
	string := StrReplace(stringer, "¢¼ª¢", "`[")
	stringer := StrReplace(string, "¢¾ª¢", "`]")
	string := StrReplace(stringer, "¢ª¾¢", "`{")
	stringer := StrReplace(string, "¢ª¼¢", "`}")
	string := StrReplace(stringer, "¢³¼¢", "\")
	stringer := StrReplace(string, "¢¼³¢", "|")
	string := StrReplace(stringer, "¢¾³¢", ";")
	stringer := StrReplace(string, "¢³½¢", "`:")
	string := StrReplace(stringer, "¢½³¢", "`'")
	stringer := StrReplace(string, "¢º³¢", """")
	string := StrReplace(stringer, "¢¿³¢", "<")
	stringer := StrReplace(string, "¢³›¢", ">")
	string := StrReplace(stringer, "¢›³¢", ",")
	stringer := StrReplace(string, "¢³¿¢", ".")
	string := StrReplace(stringer, "¢¹¢", "/")
	stringer := StrReplace(string, "¢¹•¢", "?")
	string := StrReplace(stringer, "¢•¹¢", "`n")
	stringer := StrReplace(string, "¢¿¹¢", "`r")
	FileDelete,%type2%
	FileAppend,%stringer%,output/output.txt
	FileDelete,temp/script.txt
	FileRemoveDir,temp
	ExitApp
}