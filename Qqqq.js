var commands = [];

function malvin(command, callback) {
    var cmd = command;
    cmd.callback = callback;
    
    if (!cmd.enabled) cmd.enabled = true;
    if (!command.desc) cmd.desc = '';
    if (!cmd.fromMe) cmd.fromMe = false;
    if (!command.category) cmd.category = 'misc';
    if (!command.filename) cmd.filename = 'Not Provided';
    
    commands.push(cmd);
    return cmd;
}

module.exports = {
    malvin: malvin,
    AddCommand: malvin,
    Function: malvin,
    commands: commands
};
