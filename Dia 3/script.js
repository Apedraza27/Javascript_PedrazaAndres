/* PRIMER EJERCICIO ---------------------------------------------------------*/

/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    const arr = sentence.split(' ');
    for (let i = 0; i < arr.length; i++) {
        for (let word of dictionary) {
            if (arr[i].startsWith(word)) {
                arr[i] = word;
            }
        }
    }
    return arr.join(' ');
};





/* SEGUNDO EJERCICIO ---------------------------------------------------------*/


/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let word=""; //the variable that takes every character of the first string one by one
    let words="";// the variable that stores the previous state of 'word' variable
    let i; // variable for iterating through the remaining strings
    let count=0; //To let the code know which character of the string to look at
    while(count!=strs[0].length) // A loop to gather every character of the first string at 0th index
    {
        words=word; // stores the previous state
        word+=strs[0][count]; //adds the next character to 'word' variable's previous state
        for(i=1;i<strs.length;i++) //A loop to iterate through the remaining strings
        {
            if(strs[i][count]!==word[count]) //condition for 'word' & 'count' number of character of remaining strings 
            {
                // if true then revert to previous state and break
                word=words; //reverting to previous state
                break;
            }
        }
        if(word==words) //if state of 'word' remains unchanged then break
        {
            break;
        }
        count+=1; //increment to count to get the next character
    }
    return(word); //answer
};






/* TERCER EJERCICIO ---------------------------------------------------------*/




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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    
    function callDFS(node) {
        if(!node) return null;
        if(node.val === key) {
            if(!node.left) return node.right;
            if(!node.right) return node.left;
            let curr = node.right;
            while(curr.left) curr = curr.left;
            curr.left = node.left;
            return node.right;
        }
        if(key > node.val) node.right = callDFS(node.right);
        else node.left = callDFS(node.left);
        return node;
    }
    return callDFS(root)
};