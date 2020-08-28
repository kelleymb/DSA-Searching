// 1. How many searches?

// Given a sorted list 
// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
//and using the recursive binary search algorithm,
//identify the sequence of numbers that each recursive 
//call will search to try and find 8.

//ANSWER
//first check if the start index is greater than the end index 
//3 is not greater than 18, so continue search to the middle of the index
//cut search into 3, 5, 6, 8, 11
//recursively search in right half(6-11), to find the value of 8
//time complexity: O(log(n)) --> each iteration, search area is cut in half

// Given a sorted list 
// 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 
// and using the recursive binary search algorithm, 
// identify the sequence of numbers that each recursive 
// call will search to try and find 16.

//ANSWER
//first check if the start index is greater than the end index
//3 is not greater than 18, so continue search in the middle of the index
//cut search into 12, 14, 15, 17, 18
//recursively search through right half (15-18), 16 is greater than 12, to find the value 16
//16 is not in the array, cannot be found
//time complexity: O(log(n)) --> iterate and break into halves, value not found, worst case


// 4. Searching in BST

    //         14
    //      /     \
    //     15      89
    //    /   \      \
    //   19   25       90
    //        / \        \
    //      27   35       91
    //           /
    //         79  
            

// In-order : 14 15 19 25 27 35 79 89 90 91
// Pre-order:  35 25 15 14 19 27 89 79 91 90
// Post-order: 19, 27, 79, 35, 25, 15, 91, 90, 89, 14

//  
