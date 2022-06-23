/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(c) {
    c.sort((x,y) => x[1] - y[1]);
    const q = new MaxPriorityQueue({priority: x => x});
    let days = 0;
    for(let [d, l] of c){
      if(days + d <= l){
        days += d;
        q.enqueue(d);
      }else if(!q.isEmpty() && q.front().element > d){
        days -= q.dequeue().element;
        days += d;
        q.enqueue(d);
      }
    }
  return q.size();
};