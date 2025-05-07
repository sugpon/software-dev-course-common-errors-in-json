/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

const invalidBookingJSON = `
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15" 
  "checkOutDate": "2024-05-20",
  "guests": [
    {
      name: "Alice Johnson", 
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined, 
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking",] 
  }
}
`;


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
There were problems in several lines of the JSON object.
  • What was the error?
    - Missing comma after "checkInDate"
    - Missing double quotes around "name" in the first guest object
    - Invalid data type (undefined) for "age" in the second guest object
    - Invalid email format for "bob.smith@example"
    - Trailing comma after the last item in the "amenities" array

    • Why is it a problem in JSON?
    - JSON requires strict syntax rules, including the use of double quotes for strings,
      valid data types (e.g., null, true, false, numbers, strings, arrays, objects),
      and no trailing commas in arrays or objects.
  • What did you change to fix it?
    - Added a comma after "checkInDate"
    - Added double quotes around "name" in the first guest object
    - Changed "undefined" to null for the second guest's age
    - Corrected the email format for "bob.smith@example"
    - Removed the trailing comma after the last item in the "amenities" array
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I used the tool suggested in the instructions, https://jsonlint.com/, to validate the JSON.

2️⃣ How did you confirm that your corrected JSON file was valid?
The JSON linter provided feedback on the syntax errors, and I made corrections until it returned a valid JSON.

3️⃣ Which errors were the most difficult to spot? Why?
  (e.g., trailing commas, invalid data types)
  The most difficult error to spot was the trailing comma in the "amenities" array because it is a common mistake and that can be easily overlooked as its nested.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
  Using a JSON linter or validator as part of the development process can help catch these errors early.
  Using syntax highlighting in code editors can make it easier to spot mismatched brackets or quotes.
*/


/*Corrected JSON:

{
	"hotelName": "Grand City Hotel",
	"checkInDate": "2024-05-15",
	"checkOutDate": "2024-05-20",
	"guests": [
		{
			"name": "Alice Johnson",
			"age": 30,
			"email": "alice.johnson@example.com"
		},
		{
			"name": "Bob Smith",
			"age": null,
			"email": "bob.smith@example"
		}
	],
	"roomDetails": {
		"type": "Suite",
		"pricePerNight": 200,
		"amenities": [
			"WiFi",
			"Breakfast",
			"Parking"
		]
	}
}
*/