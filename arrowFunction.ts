class Adder {
  constructor(public a: number) {}
  
  add = (b: number): number => {
    return this.a + b;
  };
}

class ExtendedAdder extends Adder {
  private superAdd = this.add;

  add = (b: number): number => {
    return this.superAdd(b);
  };
}