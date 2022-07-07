```
let m1 = new Map();
for(const str of s1){
if(m1.has(str)) m1.set(str, m1.get(str) +1);
else m1.set(str, 1);
}
for(const str of s2){
if(m1.has(str)) m1.set(str, m1.get(str) +1);
else m1.set(str, 1);
}
const m2 = new Map();
for(const str of s3){
if(m2.has(str)) m2.set(str, m2.get(str) +1);
else m2.set(str, 1);
}
console.log({m1, m2});
if(m1.size !== m2.size) return false;
for(const [k,v] of m1){
if(!m2.has(k)) return false;
if(v !== m2.get(k)) return false;
}
return true;
```