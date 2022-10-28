function* gen() {
  while (true) {
    try {
      yield 58;
    } catch (e) {
      console.log("Error caught!");
    }
  }
}
const g = gen();
g.next();
g.throw(new Error("Something went wrong"));
