function checkPalindrome() {
    const userInput = document.getElementById('textInput').value.toLowerCase();

    
    const enterInput = userInput.replace(/[^A-Za-z0-9]/g, '');

    
    const isPalindrome = enterInput === enterInput.split('').reverse().join('');

    if (userInput.trim() === '') {
        document.getElementById('textResult').textContent = 'Please enter a word or phrase.';
    } else if (isPalindrome) {
        document.getElementById('textResult').textContent = `"${userInput}" is a palindrome!`;
    } else {
        document.getElementById('textResult').textContent = `"${userInput}" is not a palindrome.`;
    }
}