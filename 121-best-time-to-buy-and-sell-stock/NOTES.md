```
let max = 0;
for(let i=0; i< prices.length-1; i++){
for(let j = i+1; j<prices.length; j++){
max = Math.max(max, prices[j] - prices[i]);
}
}
return max;
```