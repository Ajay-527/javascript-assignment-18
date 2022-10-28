function* mut(num) {
  yield `${num}*${num}=` + num * num;
  yield `${num}+${num}=` + num + num;
  yield "true";
}
let mut1 = [...mut(2)];
console.log(mut1);
