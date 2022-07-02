```
const hc = {}
const vc = {};
for(const cuts of horizontalCuts){
hc[cuts] = true
}
for(const cuts of verticalCuts){
vc[cuts] = true
}
let mh = 0;
let l = 0
​
for(let i =1; i<h+1; i++){
if(hc[i] || i === h){
mh = Math.max(mh, i -l)
l = i
}
}
​
let mv = 0;
l = 0;
for(let i =1; i<w+1; i++){
if(vc[i] || i === w ){
mv = Math.max(mv, i -l)
l = i
}