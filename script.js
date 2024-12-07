// Retrieve references to DOM elements
const messageInput = document.getElementById("message-input"); // Input field where users type their message
const result = document.getElementById("result"); // Output area to display the result of the spam check
const checkMessageButton = document.getElementById("check-message-btn"); // Button to trigger the spam check

// Define a regex pattern to detect phrases like "please help" or "assist me", case insensitive
const helpRegex = /please help|assist me/i;

// Define a regex pattern to detect monetary amounts followed by keywords like "hundred", "thousand", etc., case insensitive
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;

// Define a regex pattern to detect variations of "free money" with obfuscations like "fr33 m0n3y"
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;

// Define a regex pattern to detect spam messages promoting stocks with variations like "st0ck a13rt"
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

// Define a regex pattern to detect phishing phrases like "dear friend" with obfuscations like "d3ar fr1end"
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

// Combine all the above patterns into a deny list, which will be used to check if a message matches any spam patterns
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

// Function to check if a given message matches any of the deny list regex patterns
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Add an event listener to the button to handle spam check on click
checkMessageButton.addEventListener("click", () => {
  // If the input field is empty, alert the user and stop further processing
  if (messageInput.value === "") {
    alert("Please enter a message.");
    return;
  }

  // Check if the input message matches any spam patterns
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message." // Message matches a spam pattern
    : "This message does not seem to contain any spam."; // Message does not match any spam pattern

  // Clear the input field after processing
  messageInput.value = "";
});
