const typedTextSpan = document.querySelector(".typed-text");
const span_id = document.querySelector("#cursor");

const array = ["Inu John", "a very hot guy🥵🥵🥵🥵🥵", "hot asf!!!!"];
const type_delay = 100;
const erase_text = 100;
const new_text = 1000; // Delay between current and next text
let array_index = 0;
let char_index = 0;

function type_text() {
    if (char_index < array[array_index].length) {
        if (!span_id.classList.contains("typing"))
            span_id.classList.add("typing");
        typedTextSpan.textContent += array[array_index].charAt(char_index);
        char_index++;
        setTimeout(type_text, type_delay);
    } else {
        span_id.classList.remove("typing");
        setTimeout(erase, new_text);
    }
}

function erase() {
    if (char_index > 0) {
        if (!span_id.classList.contains("typing"))
            span_id.classList.add("typing");
        typedTextSpan.textContent = array[array_index].substring(
            0,
            char_index - 1
        );
        char_index--;
        setTimeout(erase, erase_text);
    } else {
        span_id.classList.remove("typing");
        array_index++;
        if (array_index >= array.length) array_index = 0;
        setTimeout(type_text, type_delay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // On DOM Load initiate the effect
    if (array.length) setTimeout(type_text, new_text + 250);
});