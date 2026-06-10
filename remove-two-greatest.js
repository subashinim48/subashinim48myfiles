// User function Template for javascript

/**
 * @param {number[]} arr
 * @return {number[]}
 */

class Solution {
    findElements(arr) {
        let sorted=[...arr].sort((a, b)=>b-a)
        let remaing=sorted.slice(2)
        return remaing.sort((a, b)=>a-b);
        
    }
}
