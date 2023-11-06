/* peusdocode of my steps for this exercise:
    1. link my javascript page to my html page
    2. create a string for the user telling them about the vault
    3. assign three variables using three different arithmatic operators, where each variable equals one of the numbers in the vault code
    4. go back through my code and comment to explain my steps and throught process
    5. create an alert popup displaying the string message and the vault codes for the user
*/

// I created the variable vaultUserMessage and then assigned it the value of the string we wanted to tell the user our message 
const vaultUserMessage = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// I created three variables a, b, c and used three different arithmatic operators (*, -, +) to make each one equal one of the values of the vault code combination
let a = 2 * 5;
let b = 50 - 10;
let c = 38 + 1;

// I used the alert function and inserted the variables that I made above to display a popup box on my html browser page when the user first opens it up
alert (vaultUserMessage);
alert (`${a} ${b} ${c}`);