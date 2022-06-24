/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(t) {
  const q = new MaxPriorityQueue({priority: x => x});
  let sum =0;
  for(let i =0; i<t.length; i++){
    sum +=t[i];
    q.enqueue(t[i]);
  }
  
  while(q.front().element !== 1){
    let f = q.dequeue().element;
    sum -= f;
    if(f <= sum || sum < 1) return false;
    f %= sum;
    sum += f;
    q.enqueue(f || sum)
  }
  return true;
};