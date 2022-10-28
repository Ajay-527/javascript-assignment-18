function* infiniteSeries(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

let ser = [...infiniteSeries(1, 10)];
console.log(ser);
