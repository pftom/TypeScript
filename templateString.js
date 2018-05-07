// tag function 
var say = "a bird in hand > two in the bush";
var html = htmlEscape `<div>I would just like to say: ${say}</div>`;
function htmlEscape(literals, ...placeholders) {
    let result = "";
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }
    result += literals[literals.length - 1];
    return result;
}
