
1.	The goal of the game is to get all of the numbers in the stack to the other tower. A larger number is unable to go on top of a smaller number, but a smaller number can go on top of a larger number. Continue moving the numbers to different towers until all of the nunbers are stacked (largest to smallest) on either the 2nd or 3rd tower.

2. 
-	Get user input (startStack, endStack) and then check the rules of the game based on the current stack object
-	To move a number, we need to update the stacks object using our user input that we get (startStack, endStack)
-	whenever we want to move a number, we need to check numbers and make sure its less than the number you’re trying to place it on.
-	don’t check for a win on ‘a’ at all
-	To determine that the game has been won, check that either ‘b’ or ‘c’ has all the numbers in descending order (greatest to least).
-	Only be able to remove a number from the end of an array and placed on the end on of another array
-	We always move numbers into an empty array
-	If you choose from an empty stack or one that doesn’t exist, the stacks wont be updated and a message will be console.logged out saying ‘choose a valid stack.’
