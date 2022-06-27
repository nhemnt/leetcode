/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(c, k) {
    let m = 0, n=c.length;
        
    for(let i=0; i<k ; i++){
        m+=c[i];
    }

    if(k==n) return m;

    let i=n-1, j=k-1; 
    let newSum = m;

    while(j>=0){
        let prevPoint = c[j--];
        let nextPoint = c[i--];
        newSum = newSum - prevPoint + nextPoint;
        m = Math.max(newSum, m);
    }

   return m;
};