const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'Manu-MD&q9AnhIia#a_6ljawdMgBVKF7ARM0qCSz1k7yXtan-e-AwK8BN1UA', // Put your session id here ( after linked check your number and get session id it need start with Manu-MD& ) 🤍
PORT: process.env.PORT || '3000',
MONGODB: process.env.MONGODB || 'mongodb+srv://lelumanjana1:IrzKBkH1OXFr6Vhs@cluster0.5bizj.mongodb.net/' // අනිවාරෙන් Mongodb Url එකක් ඕනි දන්නෙ නැත්නම් මගෙ වීඩියෝ එක බලලා හදාගන්න.🔥
};
