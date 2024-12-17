const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_03_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMzLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg4LFxuICAgICAgICA5NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY3LFxuICAgICAgICAxODEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICA0NixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDgwLFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDMwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODcsXG4gICAgICAgIDI0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcsXG4gICAgICAgIDg2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNixcbiAgICAgICAgMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInUzcHNRZUM0Z3ZlV3AxOHpBcE92NzJsR0ROb3JDd1R3M2k5dUVMUDB6TVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhObzk2WGktUThXd2xOdTNrOUpIWWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDBhMzBjNTgtN2QwYi00NWEyLWI2YjMtNDFkNjM5ZGI5OGVjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMTg4LFxuICAgICAgMTgxLFxuICAgICAgMTkzLFxuICAgICAgMTY2LFxuICAgICAgMTkxLFxuICAgICAgMTA2LFxuICAgICAgMzQsXG4gICAgICAxOTksXG4gICAgICAxOTQsXG4gICAgICAyMTQsXG4gICAgICAxNDYsXG4gICAgICA2NixcbiAgICAgIDg5LFxuICAgICAgMzMsXG4gICAgICAyMTEsXG4gICAgICAxNDYsXG4gICAgICAxOCxcbiAgICAgIDM0LFxuICAgICAgMTI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDU4LFxuICAgICAgNjMsXG4gICAgICAyMDMsXG4gICAgICAxMDgsXG4gICAgICAyMjUsXG4gICAgICA0OSxcbiAgICAgIDI1NCxcbiAgICAgIDIxNSxcbiAgICAgIDIzMixcbiAgICAgIDI0NixcbiAgICAgIDM3LFxuICAgICAgNDIsXG4gICAgICAxMDcsXG4gICAgICAxNTgsXG4gICAgICAxMjEsXG4gICAgICAxMixcbiAgICAgIDI0LFxuICAgICAgMjQsXG4gICAgICA4NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzVzNKTEVRSFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjEyNTAzOTc5OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWe8J2Vm/CdlZbwnZWj8J2VpvCdlZ7wnZWS8J2Vn/CdlZpf8J2VoPCdlZhcIixcbiAgICBcImxpZFwiOiBcIjE0MjI1NDUxNzkwMzg2OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHkzOS9zQkVLeWgvN29HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDYVFQbERDc0FnekFoUXZPYVRJTkM1RlMzSFpCUjJMWDErQWRyb1lYblZrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxlcDhmc3lQWDRlN3pRYUpHaVhrdmNiZGlZVzNjZllXQUI2M3FQNDVCOXZTbXRmWFJPUWtvNFFoYkQ1TjIvcENlNlM3SXVrTHQ4SWJ4VHNnSFBvbkFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkhOWUgvNDQ4V1RrSk03aG5DRFNFNmVpWC82bDJ0MkoxSXd4T05UeUh4YnI4MExSR0RxM2dLT3haUmV4UEpkU0tpSEs5WUFTZzNncEtLYzhZclgvakRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYxMjUwMzk3OToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0MzMyNTkyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTkxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFOTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3TGpSZThlWU5BYkdZdUtoclNOU1VKVTBZbEgrWXJCOVlFRk5YMVRCM280PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyODM0MjAxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNDc2NzYyMzE1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
