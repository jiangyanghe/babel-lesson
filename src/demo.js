const fn = () => 1;

const name = 'Y.H.JIANG';
const a = `hi ${name}`;

const b = [1,2,3];
b.includes(1);
const c = Object.assign(a, b);

for(let i of b) {
  console.log(i);
}

Promise.resolve().finally();