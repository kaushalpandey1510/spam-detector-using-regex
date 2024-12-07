# Spam Message Detector

## Features
- Detects spam messages containing:
  - Requests for help (e.g., "please help" or "assist me").
  - Financial promises (e.g., "1000 dollars").
  - Obfuscated offers of "free money" (e.g., "fr33 m0n3y").
  - Stock alerts (e.g., "st0ck a13rt").
  - Phishing phrases (e.g., "d3ar fr1end").
- Case-insensitive and robust against disguises.
- Immediate feedback for user input.
- Simple and interactive UI.

## How It Works
1. User enters a message in the input field.
2. The message is tested against a list of predefined spam patterns using regex.
3. If any pattern matches, the message is flagged as spam. Otherwise, it is marked as non-spam.

## Technologies Used
- **HTML**: For the basic structure of the application.
- **CSS**: For styling the UI (not included here, but recommended for better user experience).
- **JavaScript**: For the core logic and regex-based spam detection.

## Regular Expressions Explained
The project uses the following regex patterns:

1. **Help Requests**:
   ```regex
   /please help|assist me/i
   ```
   Matches phrases like "please help" or "assist me".

2. **Monetary Amounts**:
   ```regex
   /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i
   ```
   Matches amounts like "1000 dollars" or "1 million dollars".

3. **Free Money Offers**:
   ```regex
   /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i
   ```
   Detects obfuscated phrases like "fr33 m0n3y".

4. **Stock Alerts**:
   ```regex
   /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i
   ```
   Matches patterns like "st0ck a13rt".

5. **Phishing Phrases**:
   ```regex
   /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i
   ```
   Catches obfuscated phrases like "d3ar fr1end".

## Installation and Usage
1. Clone this repository or copy the code into your project:
   ```bash
   git clone https://github.com/yourusername/spam-message-detector.git
   ```
2. Open the `index.html` file in a web browser.

3. Enter a message in the input field and click the "Check Message" button.

4. View the result indicating whether the message is spam or not.

## Project Structure
```
spam-message-detector/
├── index.html       # Main HTML file
├── script.js        # JavaScript logic
├── README.md        # Project documentation
└── style.css        # Optional CSS for styling (add as needed)
```

## Example Use Case
| Input                  | Result                              |
|------------------------|-------------------------------------|
| "Please help me"       | "Oh no! This looks like a spam message." |
| "Win 1000 dollars now" | "Oh no! This looks like a spam message." |
| "Hello, dear friend!"  | "Oh no! This looks like a spam message." |
| "This is a safe message" | "This message does not seem to contain any spam." |

## Contributing
Feel free to submit issues or pull requests to improve the spam detection patterns or add features.

---

🎉 Happy Coding!# spam-detector-using-regex
