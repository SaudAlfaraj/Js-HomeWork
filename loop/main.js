const space = "---------------------------";

for (let i = 0; i <= 30;  i++) {
   if (i == 11) {
      break;
   }
   console.log(i);
}

console.log(space);

for (let s = 1; s <= 20;  s++) {
   if (s == 10) {
      continue;
   }
   console.log(s);
}

console.log(space);


let y = 3;
while (y > 0) {
   console.log(y);
   y = y-1;
}

console.log(space);


let r = 0;
do {
   console.log(r);
   r = r+1;
}while (r < 6)
console.log(space);