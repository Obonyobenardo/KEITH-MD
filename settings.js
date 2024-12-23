/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU01STTFCTGhGVnBDaHpTU1dGb0k2UEVLZWd6RlNvOG5qTUpQV0t0VzhVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmhVY0dpS1c2Rk96VlIxRmJ1WGFSQVlSQkxFRWIrZnlZL2oyaDJLSVczST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0UEtKOTZ6ZmRRYUlSbzRJekxmTE14WkpZQ2pwVWdLdnVDY0xiV1dXN2xRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWOWxycVpxWUNGbmtXMzVTbG13QUc3ZHNoRWV4ZExIazd1U1A3SElGNXpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVORTZWQ1U2SzdCNUd2YitUU2g0Ny94ZG5pUjNGNEl6eW95TGgrSitnM2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJQZzVKelZGU3dzYlljeEFuR2VwYUN3YUltYitseHpZSW5lckxEOHB6eGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0ttSUJ1SmZEWHdiMnM4aHVzSzBWVmg4bVcyZEw3ckxEMU1LVktMcGUzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaW5VM2s3WDlyWjFDMDFpbEowV2owU2diQU16eFkzQzJ3ZUVLMVM3a2hHVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZVREh6Q1hXbUJOZG5wMU9oUEMvbW5pM1ZZMkFiREtTMHZxTHd0TnFUYjFtWXc0M1JXSHEyVlJCNjBrbUEwV3JjNzJ3TG5yZm1rYk4xZzFKUUpGWEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6ImplSzF5OGNkS2Y1TDJMU1RBeHZSMFRUYmNLOEdjL0dtTmRTMVQyU3dONU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5WQ0h0aklEVHltWGcxNVl1Ymc5c1EiLCJwaG9uZUlkIjoiZjhlNTA2ODYtZGY4NS00ZDU0LTgxNGItNmZjMzc0NjE3Njk5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdobDFINFNnMGtEUHZLN29ocy83WXFTcjE2TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzNXFVK2wrTnVWWmVrbWY4M2pPc05YbzY2Qk09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRkxHTEJGNjciLCJtZSI6eyJpZCI6IjI1NDc5OTQxNDI0Njo4MkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2Uvb0hzUXI3dW11d1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHQzTGhSSTZRalVPcEt1SFhQb29nZGZpMWY1Sis3OVpjM0dPVjdJVWVFdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUjRVQ3RwYjAyOXdGSE41dXg5Ri9GeVh4REdlTG1XVlBMTmM4a3RuMTRzdlV1L2NKcVRjSmQrdnRGNGlWNkJzR2NyNXZoaWwzVTFLM1NLWHZoMGZmQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6Imx1aUhXblpod2lxRTRrcTh6b2FNd21wQkcvR1VUaXdEMnM2dFZvSHg5TGNueFZ6Wk1WaUJOVW5sdkVrdThzcm1ibTIwamQ4bStKdWZsUWFoaDk2Z0JRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0Nzk5NDE0MjQ2OjgyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlY3ZHk0VVNPa0kxRHFTcmgxejZLSUhYNHRYK1NmdS9XWE54amxleUZIaE0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ5NzQ5MDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmhVIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254799414246';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'false';
const appname = process.env.APPNAME || 'false';
const antispam = process.env.ANTISPAM || 'false';
const chatbot = process.env.CHAT_BOT || 'false';
const antilink = process.env.ANTILINK || 'false';
const autoreact = process.env.AUTOREACT || 'false';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'false';
const antidelete = process.env.ANTIDELETE || 'fals';
const permit = process.env.PM_PERMIT || 'false';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  permit,
  api,
  appname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
