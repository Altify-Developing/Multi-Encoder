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