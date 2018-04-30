var Foo = /** @class */ (function () {
    function Foo() {
        this.members = [];
    }
    Foo.prototype.add = function (x) {
        this.members.push(x);
    };
    Foo.prototype.read = function () {
        console.log(this.members);
    };
    return Foo;
}());
var foo = new Foo();
foo.add(1);
foo.read();
