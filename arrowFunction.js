class Adder {
    constructor(a) {
        this.a = a;
        this.add = (b) => {
            return this.a + b;
        };
    }
}
class ExtendedAdder extends Adder {
    constructor() {
        super(...arguments);
        this.superAdd = this.add;
        this.add = (b) => {
            return this.superAdd(b);
        };
    }
}
