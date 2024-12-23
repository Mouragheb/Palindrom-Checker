document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value; 
  const result = document.getElementById("result"); 
  
  function isPalindrome(str) {
    
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    return cleanStr === cleanStr.split('').reverse().join('');
  }

  if (inputText.trim() === "") {
    result.textContent = "Please input a value."; 
    result.className = "results-div alert alert-danger"
  } else if (isPalindrome(inputText)) {
    result.textContent = `${inputText} is a palindrome! 🎉`;
    result.className = "results-div alert alert-success"; 
  } else {
   result.textContent = `${inputText} is not a palindrome. 😢`;
    result.className = "results-div alert alert-danger"; 
  }

  result.classList.remove("hidden"); 
});