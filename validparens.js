
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

//O(n)
function validParens(string){

    const bracketPairs = new Map([
        ["(", ")"], 
        ["[", "]"], 
        ["{", "}"]
    ])

    let stack = []

    for(let char of string){
        //if left bracket add to stack, otherwise check to see if right character matches expected bracket from pair
        if(char === "(" || char === "[" || char === "{"){
            stack.push(char)
        }else{
            let expected = bracketPairs.get(stack.pop())
            if(char != expected){
                return false
            }
        }
    }
    return true
}

// Notes could avoid wasted time by creating conditions such as if string is odd length return false, if opens with closing bracket
// return false, if closes with opening bracket returns false.

// validParens("()")
// validParens("()[]{}")
// validParens("(]")
// validParens('()[]{}')



