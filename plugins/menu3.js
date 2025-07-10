const _0x4e2848 = function () {
    let _0x70a01c = true;
    return function (_0x51569c, _0x423019) {
      const _0x4e0c91 = _0x70a01c ? function () {
        if (_0x423019) {
          const _0x4b68f9 = _0x423019.apply(_0x51569c, arguments);
          _0x423019 = null;
          return _0x4b68f9;
        }
      } : function () {};
      _0x70a01c = false;
      return _0x4e0c91;
    };
  }();
  (function () {
    _0x4e2848(this, function () {
      const _0x3fe5b4 = new RegExp("function *\\( *\\)");
      const _0x1d3880 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
      const _0x326d31 = _0x30adf7("init");
      if (!_0x3fe5b4.test(_0x326d31 + "chain") || !_0x1d3880.test(_0x326d31 + "input")) {
        _0x326d31('0');
      } else {
        _0x30adf7();
      }
    })();
  })();
  const fs = require('fs');
  const config = require("../settings");
  const {
    malvin,
    commands
  } = require("../malvin");
  const {
    getPrefix
  } = require("../lib/prefix");
  const _0x37d8e2 = {
    'pattern': "menu3",
    'react': '🤖',
    'alias': ["allmenu"],
    'desc': "Get command list",
    'category': "main",
    'filename': __filename
  };
  malvin(_0x37d8e2, async (_0x10c6eb, _0x1e8c54, _0x18a9fa, {
    from: _0x21db27,
    quoted: _0x4c0e0c,
    pushname: _0x3fdf4b,
    reply: _0x119222
  }) => {
    try {
      const _0x5c6945 = {
        'download': '',
        'group': '',
        'fun': '',
        'owner': '',
        'ai': '',
        'anime': '',
        'convert': '',
        'reaction': '',
        'main': '',
        'logo': '',
        'settings': '',
        'other': ''
      };
      for (let _0x369d54 = 0; _0x369d54 < commands.length; _0x369d54++) {
        let _0x3de392 = commands[_0x369d54];
        if (_0x3de392.pattern && !_0x3de392.dontAddCommandList && _0x5c6945.hasOwnProperty(_0x3de392.category)) {
          _0x5c6945[_0x3de392.category] += "│ ⬡ " + _0x3de392.pattern + "\n";
        }
      }
      const _0xc166c1 = getPrefix();
      let _0x51e64e = "\n╭─❍ 🤖 *" + config.BOT_NAME + "* ❍\n┆ 👤 ᴜsᴇʀ: " + _0x3fdf4b + "\n┆ 🌐 ᴍᴏᴅᴇ: [" + config.MODE + "]\n┆ ✨ ᴘʀᴇғɪx: [" + _0xc166c1 + "]\n┆ 📋 ᴛᴏᴛᴀʟ ᴄᴍᴅs: " + commands.length + "\n┆ 👑 ᴅᴇᴠ:  Lucky 218\n┆ 📌 ᴠᴇʀsɪᴏɴ: " + config.version + "-ᴀʟᴘʜᴀ\n╰─────────────✦\n\n┌──『 👑 ᴍᴀɪɴ ᴄᴍᴅs 👑  』\n"${commandCategories.main || "│ (No commands found)"}"\n└────────────✦\n\n┌──『 📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴍᴅs 📥 』\n" ${commandCategories.download || "│ (No commands found)"} "\n└────────────✦\n\n┌──『 🧑‍💻 ᴏᴡɴᴇʀ ᴄᴍᴅs 🧑‍💻 』\n" + ('' || "│ (No commands found)") + "\n└────────────✦\n\n┌──『 🧠 ᴀɪ ᴄᴍᴅs 🧠』\n" + ('' || "│ (No commands found)") + "\n└────────────✦\n\n┌──『 👥 ɢʀᴏᴜᴘ ᴄᴍᴅs 👥 』\n" + ('' || "│ (No commands found)") + "\n└────────────✦\n\n┌──『 ✨ ᴀɴɪᴍᴇ ᴄᴍᴅs ✨ 』\n" + ('' || "│ (No commands found)") + "\n└────────────✦\n\n┌──『 🔄 ᴄᴏɴᴠᴇʀᴛ ᴄᴍᴅs 🔄 』\n" + ('' || "│ (No commands found)") + "\n└────────────✦\n\n┌──『 🎭 ʀᴇᴀᴄᴛɪᴏɴ ᴄᴍᴅs 🎭 』\n" + ('' || "│ (No commands found)") + "\n└────────────✦\n\n┌──『 🎉 ғᴜɴ ᴄᴍᴅs 🎉 』\n" + ('' || "│ (No commands found)") + "\n└────────────✦\n\n┌──『 🎨 ʟᴏɢᴏ ᴄᴍᴅs 🎨 』\n" + ('' || "│ (No commands found)") + "\n└─────────────✦\n\n┌──『 🪄 sᴇᴛᴛɪɴɢs ᴄᴍᴅs 🪄 』\n" + ('' || "│ (No commands found)") + "\n└─────────────✦\n\n┌──『 🕵️‍♂️ ᴏᴛʜᴇʀ ᴄᴍᴅs 🕵️‍♂️ 』\n" + ('' || "│ (No commands found)") + "\n└─────────────✦\n\n> " + config.DESCRIPTION + "\n";
      const _0x4eabb5 = {
        'url': config.MENU_IMAGE_URL
      };
      const _0x1b544f = {
        'newsletterJid': "120363420656466131@newsletter",
        'newsletterName': "LUCKY-XD",
        'serverMessageId': 0x8f
      };
      const _0x47183d = {
        'mentionedJid': [_0x18a9fa.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': _0x1b544f
      };
      const _0x5eec7e = {
        'image': _0x4eabb5,
        'caption': _0x51e64e,
        'contextInfo': _0x47183d
      };
      const _0x2be38c = {
        'quoted': _0x1e8c54
      };
      await _0x10c6eb.sendMessage(_0x21db27, _0x5eec7e, _0x2be38c);
      const _0x1564f5 = {
        'quoted': _0x1e8c54
      };
      await _0x10c6eb.sendMessage(_0x21db27, {
        'audio': fs.readFileSync("./autos/hello.m4a"),
        'mimetype': "audio/mp4",
        'ptt': true
      }, _0x1564f5);
    } catch (_0xc94bc7) {
      console.error(_0xc94bc7);
      _0x119222('' + _0xc94bc7);
    }
  });
  function _0x30adf7(_0x3e0bc1) {
    function _0x4ad9c2(_0x2d9738) {
      if (typeof _0x2d9738 === "string") {
        return function (_0x551d3d) {}.constructor("while (true) {}").apply("counter");
      } else if (('' + _0x2d9738 / _0x2d9738).length !== 1 || _0x2d9738 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
      _0x4ad9c2(++_0x2d9738);
    }
    try {
      if (_0x3e0bc1) {
        return _0x4ad9c2;
      } else {
        _0x4ad9c2(0);
      }
    } catch (_0x29dfa6) {}
  }
