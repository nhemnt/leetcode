/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(h, b, l) {
  let i = 0;
  const heap = new MaxPriorityQueue({priority: x => x});
  // heap.enqueue(2)
  // heap.enqueue(4)
  // heap.enqueue(1)
  // heap.enqueue(6)
  // heap.enqueue(3)
  // console.log(heap.dequeue())
  // console.log(heap.dequeue())
  // console.log(heap.dequeue())
  // console.log(heap.dequeue())
  // console.log(heap)
  for(i; i<h.length-1; i++){
    const d = h[i+1] - h[i];
    if(d <= 0) continue;
    if(d<=b){
      b -= d;
      heap.enqueue(d)

    }else if(l>0){
      if( !heap.isEmpty() && heap.front().element > d){
        b += heap.dequeue().element;
        b -= d;
          heap.enqueue(d)
      }
      l--;
    }
    else break
  }
  return i;
};