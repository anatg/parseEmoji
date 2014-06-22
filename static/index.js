emoji.img_path = './static/emoji/';
emoji.replace_mode = "css";
emoji.init_env();

// Static Emoji rendering in page
var footer = "Made with :green_heart: by <a target='_blank' href='https://twitter.com/jasdev'>@jasdev</a>";
var second_footer = "Fixed with :two_hearts: by <a target='_blank' href='https://twitter.com/anat_gilboa'>@anat</a>";
var instructions = "Enter an integer in the text area below :point_down:";
document.getElementById('footer').innerHTML = emoji.replace_colons(footer);
document.getElementById('second_footer').innerHTML = emoji.replace_colons(second_footer);
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
        else if((input.length - i) >= 4 && input.substr(i,4) == "1234"){
            out.push(':1234:');
            i += 3;
        } else if((input.length - i) >= 3 && input.substr(i,3) == "100"){
            out.push(':100:');
            i += 2;
        } else if((input.length - i) >= 2 && input.substr(i,2) == "10"){
            out.push(':keycap_ten:');
            i += 1;
        } else{
            out.push(digits[parseInt(input[i])]);
        }

    return out.join("");
}