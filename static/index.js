emoji.img_path = 'static/emoji/';
emoji.init_env();

function parseEmoji() {
    var text = document.getElementById('input').value;
    emoji.replace_mode = "css";

    if(isNaN(text))
        document.getElementById('out').innerHTML = emoji.replace_colons(":worried:");
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