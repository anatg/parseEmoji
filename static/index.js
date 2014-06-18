emoji.img_path = './static/';
emoji.replace_mode = "css";
emoji.init_env();

// Static Emoji rendering in page
var footer = "Made with :green_heart: by <a target='_blank' href='https://twitter.com/jasdev'>@jasdev</a>";
var instructions = "Enter an integer in the textarea below :point_down:";
document.getElementById('footer').innerHTML = emoji.replace_colons(footer);
document.getElementById('instructions').innerHTML = emoji.replace_colons(instructions);

function parseEmoji() {
    var text = document.getElementById('input').value;

    if(isNaN(text))
        document.getElementById('out').innerHTML = emoji.replace_colons(":no_good:");
    else {
        var out = emoji.replace_colons(stringToEmojiCode(text));
        document.getElementById('out').innerHTML = out;
    }
}

function stringToEmojiCode(input) {
    input = parseInt(input).toString();

    // Special emoji cases
    var special = {
        '100': ':100:',
        '1234': ':1234:',
        '10': ':keycap_ten:'
    };

    if(input in special)
        return special[input];

    var out = [];
    var digits = [":zero:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:"];
    for(var i = 0; i < input.length; i++)
        if(input[i] === "-")
            out.push(':heavy_minus_sign:');
        else
            out.push(digits[parseInt(input[i])]);

    return out.join("");
}