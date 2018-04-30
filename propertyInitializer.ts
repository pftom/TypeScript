class Foo {
  members = [];
  add(x) {
    this.members.push(x);
  }
  read() {
    console.log(this.members);
  }
}

const foo = new Foo();
foo.add(1);

foo.read();