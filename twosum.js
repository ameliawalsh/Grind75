
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//O(n^2) Brute Force Solution
function twoSum(nums, target){

    for(i= 0; i < nums.length; i++){
        for(j= 0; i < nums.length; j++){
            let sum = nums[i] + nums[j]
            if(sum == target){
                return console.log([i, j])
            }
      }
    }
}

//O(n) Solution -- Using JS Map
function twoSumMap(nums, target){
    const map = new Map()

    for(i = 0; i < nums.length; i++){
        const difference = target - nums[i]
        
        if(typeof map.get(difference) === 'number'){
            return[map.get(difference), i]
        }

        map.set(nums[i], i)
    }

    return []

}

