# Palindrome Checker HTML/CSS/JS

A Pen created on CodePen.io. Original URL: [https://codepen.io/Mouragheb/pen/dPbyOPq](https://codepen.io/Mouragheb/pen/dPbyOPq).

What the application Does:
I coded this application to implements a Palindrome Checker web application. Users can enter text to check whether it is a palindrome. Here’s how it works:
1. User Interaction:
• Users type text into an input box.
• Clicking the “Check” button triggers the palindrome check.
2. Logic for Palindrome Check:
• Palindrome Definition: A word, phrase, or sentence that reads the same backward as forward (ignoring punctuation, case, and spaces).
• The JavaScript function isPalindrome:
• Removes non-alphanumeric characters.
• Converts the text to lowercase.
• Checks if the cleaned string is the same when reversed.
• Results are displayed below the input:
• Success Message: If the input is a palindrome.
• Error Message: If it’s not a palindrome or no input is provided.
3. Display Features:
• A heading explains the app purpose (“Is it a Palindrome?”).
• A definition section gives context about palindromes.
• A hidden results section becomes visible when the user checks the input.
Languages and Tools Used:
1. HTML:
• Provides the structure of the page.
• Contains elements such as:
• Input Field: For user text input.
• Button: To trigger the palindrome check.
• Result Section: For displaying output messages.
2. CSS:
• Styles the page for better aesthetics and usability:
• Background colors for different sections.
• Rounded corners and box shadows for modern design.
• Typography (e.g., Tahoma font).
• A hidden class (visibility: hidden) to control the visibility of the results section.
• Styled result alerts (success and danger states).
3. JavaScript:
• Handles user interaction and logic for the palindrome check:
• addEventListener listens for the button click.
• isPalindrome function processes the input and determines the result.
• Results are dynamically updated using textContent and className.
• Adds or removes the hidden class to show/hide the results section.
4. Bootstrap (Partial):
• Uses Bootstrap’s alert classes (alert-success and alert-danger) for visual styling of result messages.
Summary:
The coder created a web-based Palindrome Checker using:
• HTML: Structure and content.
• CSS: Styling, layout, and visibility.
• JavaScript: Interactivity, logic, and dynamic updates.
• Bootstrap: Predefined styling for success/error messages.
Examples of Success and Error Inputs:
Success Inputs (Palindromes):
1. Single Word:
• Input: madam
• Output: “madam is a palindrome! 🎉”
2. Phrase with Spaces:
• Input: A man a plan a canal Panama
• Output: “A man a plan a canal Panama is a palindrome! 🎉”
3. Phrase with Punctuation:
• Input: No ‘x’ in Nixon
• Output: “No ‘x’ in Nixon is a palindrome! 🎉”
4. Numbers:
• Input: 12321
• Output: “12321 is a palindrome! 🎉”
5. Mixed Case:
• Input: RaceCar
• Output: “RaceCar is a palindrome! 🎉”
Error Inputs (Not Palindromes):
1. Single Word:
• Input: hello
• Output: “hello is not a palindrome. 😢”
2. Phrase:
• Input: Moustafa is great
• Output: “Moustafa is great is not a palindrome. 😢”
3. Numbers:
• Input: 12345
• Output: “12345 is not a palindrome. 😢”
4. Empty Input:
• Input: (No input, or just spaces)
• Output: “Please input a value.”
5. Symbols Only:
• Input: @#$%^&*
• Output: “@#$%^&* is not a palindrome. 😢”
These examples test the functionality of the application under different conditions to ensure it behaves correctly for both valid and invalid inputs.
This code is an example of combining front-end technologies to build a simple and interactive user-focused web application.
