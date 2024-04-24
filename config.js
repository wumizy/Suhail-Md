const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_04_04_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDg1LFxuICAgICAgICA2OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjksXG4gICAgICAgIDY0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0NixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAzMixcbiAgICAgICAgMzksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDksXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJLeW1keVdrREgyS3JnWDcweHFFL0k1NU9hZTVRUDVRS2R0SmhmRGJQdzdNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTAyNjAwOTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjlCNzY1NEIzNzAwNkY1QzNDREZBN0E2NkQ0MEIzMUM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxMzk4MTg1MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMTAyNjAwOTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMyOEE0NkY3QTc3NzNBNjVCMzE1N0JFMkNENUEzNTM1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxMzk4MTg1MVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVUkhfaGZLUlQtS1RWTzhJSEhKaDdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzMDdhZmEyLWIyNzQtNGY1Mi04NTU4LWRhYjNkZDYwNjhkZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICA4MCxcbiAgICAgIDE0NyxcbiAgICAgIDE2MSxcbiAgICAgIDIyNixcbiAgICAgIDEzNCxcbiAgICAgIDE2MCxcbiAgICAgIDI0LFxuICAgICAgOTQsXG4gICAgICAxOTIsXG4gICAgICAxOSxcbiAgICAgIDIzMCxcbiAgICAgIDI1LFxuICAgICAgOTYsXG4gICAgICAyMyxcbiAgICAgIDI0NyxcbiAgICAgIDIzOCxcbiAgICAgIDEwMCxcbiAgICAgIDYwLFxuICAgICAgMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDYsXG4gICAgICAxMTgsXG4gICAgICAxMixcbiAgICAgIDcsXG4gICAgICAzMixcbiAgICAgIDY0LFxuICAgICAgNjcsXG4gICAgICAyMzcsXG4gICAgICAxMDAsXG4gICAgICA2OCxcbiAgICAgIDgzLFxuICAgICAgNTYsXG4gICAgICAxODIsXG4gICAgICA0OCxcbiAgICAgIDI1MCxcbiAgICAgIDEwNSxcbiAgICAgIDE1MSxcbiAgICAgIDEwMyxcbiAgICAgIDE3MyxcbiAgICAgIDE1OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3MVczUzhLVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxMDI2MDA5NTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTcxNjE2MzY2MTAxNjE6N0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLZTAxT0VFRUphVHBiRUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9GVURRR2xISzlBOWhVb1BLUy9VcXF4MXp5Y2dLZFBFOExMdVRqZXY5RmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieGpncE1RNzlxVllUdm5RTEdNenRFTHYweFZuVFE4ZXlseVVDVnpVYWNTSmI3WGNSYmp2YXV0WDlITVNDbzZJRHM4NnhQZFNWdkRvaGhJQ08yWmZzRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibWtTWnF4UmNneWU2NnBvQk91cDVkbi9HalVsY2VSQ2h1L0lCTWgvZDdZM1pGN1M2M2E0MThCRW95Qm80Rms4UkJPdTNPcjJid0orSW0zcDJaSWtLamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxMDI2MDA5NTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxMzk4MTg0OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU53YVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTndhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMUg2K25xSFFPUm1kR2VFSC92QWtTc1Yyd0hBaFdjOGhQNG5KMUt6NmJxMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjc4NTQ4NTE3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTI4MTczMTg2NjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
