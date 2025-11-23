/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
  if(!root) return [];

  let q = [root];
  let res = [];

  while(q.length > 0){
    let lvl = [];
    let lvlSize = q.length;

    for(let i = 0; i < lvlSize; i++){
      let curr = q.shift();
      console.log(curr);

      lvl.push(curr.val);
  
      if(curr.left)  q.push(curr.left);
      curr.right &&  q.push(curr.right);
      
    }

    res.push(lvl);
  }

  return res;
};