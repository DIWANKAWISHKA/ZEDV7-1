cmd.on('example3',['speed','response'],['other'],async(req, res) => {
timestamp = functions.Speed();
latensi = functions.Speed(); - timestamp
return client.sendText(req.from, "Speed Response is "+latensi.toFixed(4)+" Second", req);
});

cmd.on('btnrespon',['carapenggunaan'],['info'],async(msg, res) => {
  txt = `*HELLO I AM ZED WHATSAPP BOT MY CREATOR IS IMASH NIDUSHA*

*THANCK FOR USEING THIS BOT๐เฟโเผโโค๏ธแญ*

*OWNER NUMBER* - wa.me/94771323434

*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ
`
buttons = [{buttonId:".z2", buttonText:{displayText:"Back To Menu"},type:1}]
let buttonsMessage = {
  contentText:txt,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg})
});

cmd.on('Imash',['alive'],[],async(msg, res) => {
  txt = `*HELLO I AM ALIVE*

โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ

*I AM ZED WHATSAPP BOT MY CREATOR IS IMASH NIDUSHA*
*THANCK FOR USEING THIS BOT๐เฟโเผโโค๏ธแญ*
*OWNER NUMBER* - wa.me/94771323434
*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ
`

buttons = [{buttonId:".menu", buttonText:{displayText:"TAP TO MENU"},type:1}]
let buttonsMessage = {
  contentText:txt,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg})
});

cmd.on('Igmash',['allmenu'],[],async(msg, res) => {
  txt = `*MENU*

โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โฆ๐ฆ๐๐๐ฅ๐๐ ๐ ๐๐ก๐จโฆ

.๐๐๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต
.๐ฝ๐ถ๐ป๐๐ฒ๐ฟ๐ฒ๐๐
.๐ฎ๐น๐ฝ๐ต๐ฎ๐ฐ๐ผ๐ฑ๐ฒ๐ฟ๐
.๐๐ฎ๐น๐น๐ฝ๐ฎ๐ฝ๐ฒ๐ฟ๐ฐ๐ฎ๐๐ฒ
.๐ด๐ถ๐บ๐ฎ๐ด๐ฒ
.๐ด๐ผ๐ผ๐ด๐น๐ฒ๐ถ๐บ๐ฎ๐ด๐ฒ
.๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต๐ถ๐บ๐ฎ๐ด๐ฒ
.๐๐ฎ๐น๐น๐ฝ๐ฎ๐ฝ๐ฒ๐ฟ
.๐ด๐ฎ๐บ๐ฏ๐ต๐ฎ๐ฟ๐ต๐ฑ
.๐ฝ๐ถ๐๐ถ๐
.๐๐ฒ๐ฐ๐๐ผ๐ฟ
.๐๐ฒ๐ฐ๐๐ผ๐ฟ๐๐๐ผ๐ฐ๐ธ
.๐ฝ๐ฝ๐ฐ๐ฝ
.๐ฝ๐ฝ๐ฐ๐ผ๐๐ฝ๐น๐ฒ

โฆ๐๐ข๐ช๐ก๐๐ข๐๐๐ฅ ๐ ๐๐ก๐จโฆ

.๐๐๐บ๐ฝ3
.๐๐ถ๐ฑ๐ฒ๐ผ
.๐๐๐บ๐ฝ4
.๐๐ผ๐ป๐ด
.๐๐
.๐ฝ๐น๐ฎ๐
.๐๐ถ๐ธ๐๐ผ๐ธ
.๐ณ๐ฎ๐ฐ๐ฒ๐ฏ๐ผ๐ผ๐ธ๐ฑ๐น
.๐ณ๐ฏ
.๐ณ๐ฎ๐ฐ๐ฒ๐ฏ๐ผ๐ผ๐ธ
.๐ถ๐ด๐๐ถ๐ฑ๐ฒ๐ผ
.๐ถ๐ป๐๐๐ฎ๐ด๐ฟ๐ฎ๐บ
.๐๐๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต

โฆ๐๐จ๐ก ๐ ๐๐ก๐จโฆ

.๐ฑ๐ฎ๐ฟ๐ฒ
.๐๐ฟ๐๐๐ต
.๐ฏ๐ถ๐๐ฎ๐ธ๐ฎ๐ต
.๐ต๐ผ๐๐ด๐ฎ๐
.๐ธ๐ฎ๐ฝ๐ฎ๐ป๐ฎ๐ธ๐ฎ๐ต
.๐ต๐ผ๐๐ฏ๐๐ฐ๐ถ๐ป
.๐ต๐ผ๐๐๐๐ฟ๐ฒ๐๐
.๐๐ถ๐ฐ๐๐ฎ๐ฐ๐๐ผ๐ฒ
.๐๐๐

๐๐๐ก๐๐ฅ๐๐ง๐ข๐ฅ ๐ ๐๐ก๐จ

.๐๐๐ฎ๐ถ๐ณ๐
.๐๐ฎ๐ป๐ด๐
.๐ฝ๐ฟ๐ฒ๐ด๐ป๐ฎ๐ป๐
.๐๐ถ๐บ๐ฝ
.๐๐ต๐ฒ๐ฟ๐ธ
.๐ด๐ฒ๐บ๐ฒ๐๐ฒ๐ฟ๐ป
.๐ป๐ฒ๐ป๐ฒ๐ป
.๐ธ๐ผ๐ฏ๐ผ๐ถ

๐๐ฅ๐ข๐จ๐ฃ ๐ ๐๐ก๐จ

.๐ฎ๐ฑ๐ฑ
.๐ธ๐ถ๐ธ
.๐ฑ๐ฒ๐บ๐ผ๐๐ฒ
.๐ฝ๐ฟ๐ผ๐บ๐ผ๐๐ฒ
.๐๐ฒ๐๐ป๐ฎ๐บ๐ฒ๐ด๐ฟ๐ผ๐๐ฝ
.๐๐ฒ๐๐ฑ๐ฒ๐๐ด๐ฟ๐ผ๐๐ฝ
.๐น๐ฒ๐ฎ๐๐ฒ
.๐ฐ๐ฟ๐ฒ๐ฎ๐๐ฒ-๐ด๐ฟ๐ผ๐๐ฝ 
.๐ด๐ฟ๐ผ๐๐ฝ-๐น๐ถ๐ป๐ธ
.๐ด๐ฟ๐ผ๐๐ฝ-๐ฟ๐ฒ๐๐ผ๐ธ๐ฒ
.๐ด๐ฟ๐ผ๐๐ฝ-๐ท๐ผ๐ถ๐ป
.๐ด๐ฟ๐ผ๐๐ฝ-๐ฐ๐น๐ผ๐๐ฒ
.๐ด๐ฟ๐ผ๐๐ฝ-๐ผ๐ฝ๐ฒ๐ป
.๐ด๐ฟ๐ผ๐๐ฝ-๐น๐ผ๐ฐ๐ธ๐ฒ๐ฑ
.๐ด๐ฟ๐ผ๐๐ฝ-๐๐ป๐น๐ผ๐ฐ๐ธ
.๐๐ฒ๐-๐ฝ๐ฟ๐ผ๐ณ๐ถ๐น๐ฒ
.๐ต๐ถ๐ฑ๐ฒ๐๐ฎ๐ด
.๐ฒ๐๐ฒ๐ฟ๐๐ผ๐ป๐ฒ
.๐๐ฒ๐น๐ธ๐ผ๐บ
.๐๐ฒ๐น๐ฐ๐ผ๐บ๐ฒ
.๐๐ฒ๐น๐ฐ๐ผ๐บ
.๐๐ฒ๐๐๐ฒ๐น๐ฐ๐ผ๐บ๐ฒ
.๐๐ฒ๐๐๐ฒ๐น๐ธ๐ผ๐บ
.๐๐ฒ๐๐๐ฒ๐น๐ฐ๐ผ๐บ

๐ข๐ช๐ก๐๐ฅ ๐ ๐๐ก๐จ

.๐ฐ๐ฟ๐ฒ๐ฎ๐๐ฒ-๐ด๐ฟ๐ผ๐๐ฝ
.๐ด๐ฟ๐ผ๐๐ฝ-๐ท๐ผ๐ถ๐ป
.๐บ๐๐น๐๐ถ๐ฝ๐น๐ฒ๐ฐ๐น๐ถ๐ป๐
.$
.๐ฏ๐ฟ๐ผ๐ฎ๐ฑ๐ฐ๐ฎ๐๐
.๐ฏ๐ฟ๐ผ๐ฎ๐ฑ๐ฐ๐ฎ๐๐๐ด๐ฐ
.๐ฏ๐ฐ๐ด๐ฐ
.๐ฐ๐น๐ฒ๐ฎ๐ฟ๐ฎ๐น๐น
.๐๐ฒ๐๐๐ถ
.๐ฏ๐น๐ผ๐ฐ๐ธ๐น๐ถ๐๐

๐จ๐ฆ๐๐๐๐ฆ๐ฆ ๐ ๐๐ก๐จ

.๐๐ฒ๐น๐ธ๐ผ๐บ
.๐๐ฒ๐น๐ฐ๐ผ๐บ๐ฒ
.๐๐ฒ๐น๐ฐ๐ผ๐บ
.๐๐ฒ๐๐๐ฒ๐น๐ฐ๐ผ๐บ๐ฒ
.๐๐ฒ๐๐๐ฒ๐น๐ธ๐ผ๐บ
.๐๐ฒ๐๐๐ฒ๐น๐ฐ๐ผ๐บ

๐๐ ๐๐๐ ๐ ๐๐ก๐จ

.๐ฝ๐ถ๐ป๐๐ฒ๐ฟ๐ฒ๐๐
.๐ฎ๐น๐ฝ๐ต๐ฎ๐ฐ๐ผ๐ฑ๐ฒ๐ฟ๐
.๐๐ฎ๐น๐น๐ฝ๐ฎ๐ฝ๐ฒ๐ฟ๐ฐ๐ฎ๐๐ฒ
.๐ด๐ถ๐บ๐ฎ๐ด๐ฒ
.๐ด๐ผ๐ผ๐ด๐น๐ฒ๐ถ๐บ๐ฎ๐ด๐ฒ
.๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต๐ถ๐บ๐ฎ๐ด๐ฒ
.๐๐ฎ๐น๐น๐ฝ๐ฎ๐ฝ๐ฒ๐ฟ
.๐ด๐ฎ๐บ๐ฏ๐ฎ๐ฟ๐ต๐ฑ
.๐ฝ๐ถ๐๐ถ๐
.๐๐ฒ๐ฐ๐๐ผ๐ฟ
.๐๐ฒ๐ฐ๐๐ผ๐ฟ๐๐๐ผ๐ฐ๐ธ
.๐บ๐ถ๐น๐ณ
.๐๐ฎ๐ถ๐ณ๐
.๐ต๐๐๐ฏ๐
.๐ฐ๐ผ๐๐ฝ๐น๐ฎ๐
.๐ฝ๐ฝ๐ฐ๐ฝ
.๐ฝ๐ฝ๐ฐ๐ผ๐๐ฝ๐น๐ฒ

๐ฅ๐๐ก๐๐ข๐  ๐ ๐๐ก๐จ

.๐บ๐ถ๐น๐ณ
.๐๐ฎ๐ถ๐ณ๐
.๐ต๐๐๐ฏ๐
.๐ฐ๐ผ๐๐ฝ๐น๐ฎ๐
.๐ธ๐ฎ๐๐ฎ๐ด๐ฎ๐น๐ฎ๐
.๐พ๐๐ผ๐๐ฒ๐
.๐บ๐ผ๐๐ถ๐๐ฎ๐๐ถ
.๐บ๐ฒ๐บ๐ฒ
.๐ณ๐บ๐๐น๐ถ๐ณ๐ฒ
.๐ณ๐บ๐น

๐๐ก๐๐ข ๐ ๐๐ก๐จ

.๐ฐ๐ผ๐๐ถ๐ฑ๐ถ๐ป๐ฑ๐ผ
.๐ถ๐ป๐ณ๐ผ๐ด๐ฒ๐บ๐ฝ๐ฎ
.๐๐ฐ
.๐๐ฐ๐ฟ๐ถ๐ฝ๐
.๐ฐ๐ฎ๐ฟ๐ฎ๐ฝ๐ฒ๐ป๐ด๐ด๐๐ป๐ฎ๐ฎ๐ป
.๐ด๐ผ๐ผ๐ด๐น๐ฒ
.๐ด๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต
.๐๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต
.๐๐๐ถ๐ธ๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต
.๐ต๐ฎ๐ฝ๐ฝ๐๐บ๐ผ๐ฑ
.๐๐๐๐ฒ๐ฎ๐ฟ๐ฐ๐ต

๐๐ฆ๐๐๐ ๐๐ ๐ ๐๐ก๐จ

.๐ฎ๐๐ฎ๐บ๐ฎ๐๐น๐ต๐๐๐ป๐ฎ
.๐ฑ๐ผ๐ฎ๐๐ฒ๐ต๐ฎ๐ฟ๐ถ๐ฎ๐ป
.๐พ๐๐ฟ๐ฎ๐ป
.๐ฟ๐ฎ๐ป๐ฑ๐ผ๐บ๐พ๐๐ฟ๐ป

๐ ๐๐๐๐ฅ ๐ ๐๐ก๐จ

.๐๐๐ถ๐ฐ๐ธ๐ฒ๐ฟ
.๐๐๐ถ๐ฐ๐ธ๐ฒ๐ฟ
.๐๐ผ๐ถ๐บ๐ด
.๐๐ธ๐๐๐ฒ๐๐
.๐ด๐น๐ถ๐๐ฐ๐ต
.๐ป๐๐น๐ถ๐

๐ก๐๐ช๐ฆ ๐ ๐๐ก๐จ

.๐ฎ๐ป๐๐ฎ๐ฟ๐ฎ๐ป๐ฒ๐๐
.๐ฏ๐ฏ๐ฐ๐ป๐ฒ๐๐
.๐ฐ๐ป๐ฏ๐ฐ๐ป๐ฒ๐๐
.๐ฐ๐ป๐ป๐ป๐ฒ๐๐
.๐ฑ๐ฎ๐ถ๐น๐๐ป๐ฒ๐๐
.๐ฑ๐ฒ๐๐ถ๐ธ๐ป๐ฒ๐๐
.๐ณ๐ฎ๐ท๐ฎ๐ฟ๐ป๐ฒ๐๐
.๐ถ๐ป๐ฑ๐ผ๐๐ผ๐ป๐ฒ๐ป๐ฒ๐๐
.๐ธ๐ผ๐บ๐ฝ๐ฎ๐๐ป๐ฒ๐๐
.๐ธ๐ผ๐ป๐๐ฎ๐ป๐ป๐ฒ๐๐

๐ข๐ง๐๐๐ฅ ๐ ๐๐ก๐จ

.๐๐ฝ๐ฒ๐ฒ๐ฑ
.๐ฟ๐ฒ๐๐ฝ๐ผ๐ป๐๐ฒ
.๐ผ๐๐ป๐ฒ๐ฟ๐ฏ๐ผ๐
.๐๐ป๐ธ
.๐ฑ๐ผ๐ป๐ฎ๐๐ถ
.๐ฑ๐ผ๐ป๐ฎ๐๐ฒ
.๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
.๐น๐ฎ๐ฝ๐ผ๐ฟ๐ธ๐ฎ๐ป
.๐บ๐ฒ๐ป๐๐ถ๐ผ๐ป
.๐๐ฎ๐ด
.๐ฟ๐๐ป๐๐ถ๐บ๐ฒ
.๐ถ๐ณ๐ผ
.๐ฑ๐ฒ๐น
.๐ฑ๐ฒ๐น๐ฒ๐๐ฒ
.๐ด๐ฒ๐๐ฟ๐ฒ๐ฝ๐น๐
.๐พ

๐ฅ๐๐ก๐๐ข๐  ๐ง๐๐

.๐ณ๐๐ฟ๐ฟ๐
.๐ด๐ฎ๐
.๐๐๐ฟ๐ฒ๐๐
.๐ท๐ฎ๐ฑ๐ถ๐ฎ๐ป
.๐ด๐ฒ๐ป๐๐ฒ๐ป๐ด
.๐ฐ๐ฎ๐ป๐๐ถ๐ธ
.๐ฝ๐ฑ๐ธ๐
.๐ท๐ฒ๐น๐ฒ๐ธ
.๐ฏ๐๐ฟ๐ถ๐ธ
.๐๐ต๐ผ๐น๐ฒ๐ต
.๐ณ๐ฎ๐ป๐ฎ๐๐ถ๐ธ
.๐ธ๐๐ฟ๐๐
.๐ด๐ฒ๐บ๐๐ธ

๐ฆ๐ง๐๐๐ ๐ ๐๐ก๐จ

.๐ด๐ถ๐๐ต๐๐ฏ๐๐๐ฎ๐น๐ธ
.๐ถ๐ด๐๐๐ฎ๐น๐ธ
.๐๐ถ๐ธ๐๐ผ๐ธ๐๐๐ฎ๐น๐ธ

๐ง๐ข๐ข๐๐ฆ ๐ ๐๐ก๐จ

.๐ถ๐ป๐๐ฝ๐ฒ๐ฐ๐
.๐ถ๐ป๐๐ฝ๐ฒ๐ฐ๐๐ด๐ฐ
.๐๐ต๐ผ๐๐ฟ๐๐ฟ๐น
.๐๐ถ๐ป๐๐๐ฟ๐น
.๐๐ฟ๐ฎ๐ป๐๐น๐ฎ๐๐ฒ
.๐ด๐ฒ๐ป๐ฝ๐ฎ๐๐๐๐ผ๐ฟ๐ฑ
.๐ฝ๐๐ด๐ฒ๐ป๐ฎ๐ฟ๐ฎ๐๐ผ๐ฟ
.๐๐
.๐๐๐๐ฒ๐ฏ


๐ฃ๐ข๐ช๐๐ฅ๐ ๐๐ฌ ๐ญ๐๐ ๐๐ข๐ง๐ฉ7
๐๐ฅ๐๐๐ง๐๐ ๐๐ฌ ๐๐ ๐๐ฆ๐ ๐ก๐๐๐จ๐ฆ๐๐
wa.me/94771323434
ENJOY THE FAST MOMENTS
`
buttons = [{buttonId:".donate", buttonText:{displayText:"DONATE TO OWNER"},type:1}]
let buttonsMessage = {
  contentText:txt,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg})
});

cmd.on("ownerr",["ownerbot","owner"],["other"],async(msg,res) => {
  client.sendMessageFromContent(msg.from, {contactsArrayMessage: {
    "displayName": "Owner "+botinfo.botname,
    "contacts": [
    {
     "displayName": botinfo.ownername,
     "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;"+botinfo.ownername+";;;\nFN:"+botinfo.ownername+"\nitem1.TEL;waid="+botinfo.ownerNumber[0]+":"+botinfo.ownerNumber[0]+"\nitem1.X-ABLabel:Owner Bot\nitem2.URL:"+botinfo.website+"\nitem2.X-ABLabel:Website\nEND:VCARD"
    }
    ],
    }}, {quoted:msg})
    });

cmd.on('esenka',['snk'],["other"],async(msg, res) => {
  txxt = `*HELLO I AM ZED WHATSAPP BOT MY CREATOR IS IMASH NIDUSHA*

*THANCK FOR USEING THIS BOT๐เฟโเผโโค๏ธแญ*

*OWNER NUMBER* - wa.me/94771323434

*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ

CREATOR , @${botinfo.ownerNumber[0]}.`
  client.reply(msg, txxt, {contextInfo:{mentionedJid:functions.parseMention(txxt)}})
});

cmd.on("donate",["donasi","donate"],["other"],async(msg, res) => {
  dmsg = `_*DONATE FOR BOT ${botinfo.botname}*_

*- For Owner* 
DIALOG : 0771323434
เถเถญเท เทเถฝเทเถฝเท เถญเทเถบเท เถฑเถธเท เถเทเถบเถเท เทเถปเท เถเทเทเทเถญเท เถเทเทเถฝเถเท เถฑเท เถถเถฑเท๐ฅบ๐
`
return await client.sendText(msg.from, dmsg, msg);
});

cmd.on("lapor",["report","laporkan"],["other"],async(msg, {query,client}) => {
  let tet = `*Laporan!*\n\nโข Pengirim : @${msg.sender.jid.split("@")[0]}\nโข Pesan : ${query}`
  await client.sendMessage(botinfo.ownerNumber[0]+`@s.whatsapp.net`, tet, "conversation", {contextInfo:{mentionedJid:functions.parseMention(tet)}});
  return client.sendText(msg.from, "Laporan Sudah Terkirim Ke Owner Ya Kak!", msg);
  },{query:"Mau Lapor Apa Kak?",param:functions.needed("query")});

cmd.on("tag",["mention","tag"],["other"],async(msg, {query, client}) => {
	return await client.sendMessage(msg.from, query+" tagged!", "conversation",{contextInfo:{mentionedJid: functions.parseMention("@"+query)},quoted:msg});
	},{query:"Masukan Nomor!\nEx : .mention @0",param:functions.needed("number")});

cmd.on('runtime',['runtime'],['other'],(msg,{client,prefix}) => {
let data = functions.count(process.uptime())
return client.sendText(msg.from,functions.parseResult(data,{title: 'Runtime Bot'}))
});

cmd.on('info',['info'],['other'],(msg,{client,prefix}) => {
let data = functions.count(process.uptime())
let total = 0
for (let a of cmd._events){
for (let b of a.command) total++
}
inmsg = `*เถเถฉเท เทเทเถบเท ${msg.sender.name} เถถเทเถเทเถ*

CREATED BY เถญเถฑเทเถบเทเถธ เถญเถธเท เถถเถฑเท ๐ฅบ๐๐ป๐๐ป
Bot Name : ZED BOT V7
Library : Baileys
Language : JavaScript
Total Command : ${total}
Total User : ${Object.keys(userDb).length}
Runtime : ${data.day} Day ${data.hours} Hours ${data.minutes} Minutes ${data.seconds} Second

Group : https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ

Special thanks to :
โข wa.me/94711117547 (K2-99)
โข wa.me/94771323434 (ZED)`
let buttons = [{buttonId:".owner",buttonText:{displayText:"OWNER"},type:"RESPONSE"},{buttonId:".donasi",buttonText:{displayText:"DONATE"},type:"RESPONSE"}];
let btn = {
  contentText:inmsg,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage:btn});
});

cmd.on('delete',['del','delete'],['other'],async(msg,{client}) => {
if (!msg.quotedMsg.key.fromMe) return client.reply(msg,'harus dari bot')
client.deleteMessage(msg.from,msg.quotedMsg.key)
return client.reply(msg,'sukses')
},{quoted:true});

cmd.on("getrepl",["getreply","q"],["other"],async(msg,client) => {
await(await msg.quotedMsg.reloadMsg()).quotedMsg.resendMsg(msg.from)
},{param:functions.needed("reply chat")});
