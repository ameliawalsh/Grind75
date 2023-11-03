// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


class Node {
    constructor(data){
        this.data = data
        this.next = null
    }

}

class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }

    add(data){
        let newNode = new Node(data)

        if(!this.length){
            this.head = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    print(){
        let currNode = this.head
        while(currNode != null){
            console.log(currNode.data)
            currNode = currNode.next
        }
    }
    
}

//iterative approach o(m+n)
function mergeLists(list1, list2){
    let mergedList = new LinkedList()

    //while both lists contain numbers
    while(list1.length && list2.length){
        if(list1[list1.length - 1] > list2[list2.length - 1]){
            mergedList.add(list1[list1.length - 1])
            list1.pop()
        } else {
            mergedList.add(list2[list2.length - 1])
            list2.pop()
        }
    }

    // //list1 has remaining elements
    for(i = (list1.length - 1); list1.length; i--){
        mergedList.add(list1[i])
        list1.pop()
    }

    //list2 has remaining elements
    for(i = (list2.length - 1); i >= 0; i--){
        mergedList.add(list2[i])
        list1.pop()
    }

    // mergedList.print()
    return mergedList.head

}

mergeLists([1,2,4], [1,2,3,4])