# Team-Profile-Generator

Command line application that takes in information about employees on a software engineering team, then generate an HTML webpage that dispalys Data for each person. I ran tests to verify that the info was correct. No room for errors.

[video instructions/demo] (https://drive.google.com/file/d/1Y0impSZcxYbgqnn45ULAlgFh9yqUHZ9t/view)
## User Story
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```
## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
## How to use
Team Profile Generator is a command-line application. At the command line, type in "node index.js" to run the application. The user will be presented with a series of questions related to the team members. The user is to provide all needed information by answering the series of questions. Once the user has answered all questions, the HTML output file using the team name as the file name will be generated under the "dist" folder.

Inside VS Code, to view the generated html file, right-click the file and choose "Open in Default Browser" from the pop-up menu. Or use Live server if available.
## Mock up
![Screenshot (1625)](https://user-images.githubusercontent.com/76268942/113959875-378b9200-97e9-11eb-9dc3-3185a344d0cf.png)
