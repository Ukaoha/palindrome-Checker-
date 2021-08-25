function palindrome()  {  
let  userInput = document.getElementById("pa").value;  
var result = "";  
for (i = userInput.length-1; i >= 0; i--)  {  
result +=userInput[i]  
}  
if (userInput == result) {
document.getElementById("pa2"). value = result + " is a Palindrome String "; 
} else  {
document.getElementById("pa2"). value = result + " is not a Palindrome String";
}  
}  
