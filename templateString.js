var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var say = "a bird in hand > two in the bush";
var html = htmlEscape(__makeTemplateObject(["<div>I would just like to say: ", "</div>"], ["<div>I would just like to say: ", "</div>"]), say);
function htmlEscape(literals) {
    var placeholders = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        placeholders[_i - 1] = arguments[_i];
    }
    var res = "";
    console.log(literals);
    console.log(placeholders);
}
