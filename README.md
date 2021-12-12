# Timed Quiz Application


# Application Scope
Build a timed coding quiz with multiple-choice questions. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface.


# Acceptance Criteria
1. When I click the start button, then a timer starts and I am presented with a question;
2. When I answer a question, then I am presented with another question;
3. When I answer a question incorrectly, then time is subtracted from the clock;
4. When all questions are answered or the timer reaches 0, then the game is over; and
5. When the game is over, then I can save my initials and score.


# Repository
The developer performed the following steps to initiate the project.

1. Logged into developers GitHub portal
2. Created a new repository named "code-quiz" and a readme.md file
3. Enabled the repository’s web page features, which are found under the repository’s settings > pages
4. Opened Git Bash terminal entered the following commands:
>> - cd to desktop/projects
>> - git clone git@github.com:bkelley1/code-quiz.git
>> - cd code-quiz
>> - touch index.html (make index.html)
>> - touch .gitignore (make .gitignore)
>> - mkdir assets (make directory assets)
>> - cd assets (change directory to assets)
>> - mkdir images (make directory images)
>> - mkdir js (make directory js)
>> - cd js (change directory to js)
>> - touch script.js (make script.js)
>> - cd .. (change directory to assects)
>> - mkdir css (make directory css)
>> - cd css (change directory to css)
>> - touch style.css (make style.css)
>> - cd ../../ (change directory to local repository root)
>> - code . (launch VS Code)
5. Edited .gitignore to establish file extensions to be ignored, which are listed below:
>> - .DS_Store
>> - .log
>> - .lock
>> - .tmp
>> - .o
>> - .class
>> - .vsdx
>> - .psd
>> - .ai
Thumbs.db
6. Opened Git Bash terminal entered the following commands:
>> - cd to desktop/projects/code-quiz
>> - git add - A
>> - git commit -m "initial quiz application commit"
>> - git push origin develop
>> - git checkout main
>> - git merge develop
>> - git add - A
>> - git commit -m "initial quiz application commit"
>> - git push origin main
>> - git checkout -b develop


# Application & Code Repository
A working version of the application and application files (repository) are available at the following locations.

> - Deployed application: https://bkfleet1.github.io/code-quiz/
>>> [deployed application](./assets/images/application.png)

> - GitHub repository: https://github.com/bkfleet1/code-quiz 
>>> [GitHub repository image](./assets/images/repository.png)


# Application Structure
The application's structure consistis of three components: CSS, HTML, and JS files. 

## HTML Structure
The application's HTML page (index.html) consists of the following structure.