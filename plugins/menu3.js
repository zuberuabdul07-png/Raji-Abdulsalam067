const fs = require('fs');
const config = require("../settings");
const { malvin, commands } = require("../malvin");
const { getPrefix } = require("../lib/prefix");

const commandInfo = {
  pattern: "menu3",
  react: '🤖',
  alias: ["allmenu"],
  desc: "Get command list",
  category: "main",
  filename: __filename
};

malvin(commandInfo, async (client, message, args, { from, quoted, pushname, reply }) => {
  try {
    // Organize commands by category
    const commandCategories = {
      download: '',
      group: '',
      fun: '',
      owner: '',
      ai: '',
      anime: '',
      convert: '',
      reaction: '',
      main: '',
      logo: '',
      settings: '',
      other: ''
    };

    commands.forEach(cmd => {
      if (cmd.pattern && !cmd.dontAddCommandList && commandCategories.hasOwnProperty(cmd.category)) {
        commandCategories[cmd.category] += `│ ☆ ${cmd.pattern}\n`;
      }
    });

    const prefix = getPrefix();
    
    // Build menu message
    const menuText = `
╭─❖ *${config.BOT_NAME}* ❖
│ 👤 User: ${pushname}
│ 🏷 Mode: [${config.MODE}]
│ ⚡ Prefix: [${prefix}]
│ 📚 Commands: ${commands.length}
│ 🏆 Dev: Lucky 218
│ 🔰 Version: ${config.version}-beta
╰─────────────✦
    
├───【 🏆 ᴍᴀɪɴ ᴄᴍᴅs 🏆 】─
${commandCategories.main || "│ (No commands found)"}
└─────────────────╼
    
├───【 📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅs 📥 】─
${commandCategories.download || "│ (No commands found)"}
└─────────────────╼
    
├───【 🧛‍♂️ ɢʀᴏᴜᴘ ᴄᴍᴅs 🧛‍♂️ 】─
${commandCategories.group || "│ (No commands found)"}
└─────────────────╼
    
├───【 🏴 ᴏᴡɴᴇʀ ᴄᴍᴅs 🏴 】─
${commandCategories.owner || "│ (No commands found)"}
└─────────────────╼
    
├───【 🤖 ᴀɪ ᴄᴍᴅs 🤖 】─
${commandCategories.ai || "│ (No commands found)"}
└─────────────────╼
    
├───【 🎭 ᴀɴɪᴍᴇ ᴄᴍᴅs 🎭 】─
${commandCategories.anime || "│ (No commands found)"}
└─────────────────╼
    
├───【 🔄 ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅs 🔄 】─
${commandCategories.convert || "│ (No commands found)"}
└─────────────────╼
    
├───【 😯 ʀᴇᴀᴄᴛɪᴏɴ ᴄᴍᴅs  😯 】─
${commandCategories.reaction || "│ (No commands found)"}
└─────────────────╼
    
├───【 🎨 ʟᴏɢᴏ ᴄᴍᴅs 🎨 】─
${commandCategories.logo || "│ (No commands found)"}
└─────────────────╼
    
├───【 ⚙ sᴇᴛᴛɪɴɢs ᴄᴍᴅs ⚙ 】─
${commandCategories.settings || "│ (No commands found)"}
└─────────────────╼
    
├───【 🎉 ғᴜɴ ᴄᴍᴅs 🎉 】─
${commandCategories.fun || "│ (No commands found)"}
└─────────────────╼
    
├───【 🧩 ᴏᴛʜᴇʀ ᴄᴍᴅs 🧩 】─
${commandCategories.convert || "│ (No commands found)"}
└─────────────────╼
    
> ${config.DESCRIPTION}
`;

    // Send menu with image
    await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363420656466131@newsletter',
                        newsletterName: 'Lucky Tech Hub',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    // Send audio greeting
    await client.sendMessage(from, {
      audio: fs.readFileSync("./autos/hello.m4a"),
      mimetype: "audio/mp4",
      ptt: true
    }, { quoted: message });

  } catch (error) {
    console.error(error);
    reply('' + error);
  }
});
