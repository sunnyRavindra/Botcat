---
title: DSA 
---

### [1. GFG DSA Complete guide](https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/)

### [2. GFG DSA for Beginners](https://www.geeksforgeeks.org/complete-guide-to-dsa-for-beginners/)

### [3. GFG DSA Practice Problems](https://www.geeksforgeeks.org/explore?page=1&sortBy=submissions&utm_source=geeksforgeeks&utm_medium=articles%20dsa_lp%20header_link_click&utm_campaign=practice%20tracker)


![[Pasted image 20231126084337.png]]

1. **Linear Data Structures:**
    
    - Elements arranged sequentially.
    - Examples: Array, stack, queue, linked list.
2. **Static Data Structures:**
    
    - Fixed memory size.
    - Example: Array.
3. **Dynamic Data Structures:**
    
    - Size not fixed, can be updated during runtime.
    - Examples: Queue, stack.
4. **Non-linear Data Structures:**
    
    - Elements not placed sequentially.
    - Examples: Trees, graphs.
### Auxiliary
refers to the extra space used in the program other than the input data structure.
### Asymptotic analysis
Method for describing the efficiency of an algorithm.
### Big O Notation (O):
It describes the worst-case scenario for the algorithm's time or space complexity in terms of a mathematical function. For example, O(n) represents linear complexity, O(n^2) represents quadratic complexity, and O(log n) represents logarithmic complexity.
### Omega Notation (Ω):
It describes the best-case scenario for the algorithm's time or space complexity. For example, Ω(n) represents linear complexity.
### Theta Notation (Θ):
Theta notation provides a tight bound on an algorithm's growth rate, both upper and lower bounds. If an algorithm has a time complexity of Θ(f(n)), it means the algorithm's performance grows exactly at the rate of the function f(n).

![[Pasted image 20231125112526.png]]
### Array

### ReverseArray
```java 
	public static void reverseArray2(int[] inputArray) {
		int Start = 0;
		int end = inputArray.length - 1;

		while (Start < end) {
			int temp = inputArray[Start];
			inputArray[Start] = inputArray[end];
			inputArray[end] = temp;
			Start++;
		}
		end--;
	}
```

