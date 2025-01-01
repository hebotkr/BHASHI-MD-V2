const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "VAJIRA-MD=6BdEyIrI#gkn6rr2dAb9WnhK3c2DEoZGfx2tRgcICtZJKmUO2mvM",
  MONGODB: process.env.MONGODB || "mongodb+srv://dragon:v11@cluster0.7tfnvps.mongodb.net/",
 
};
