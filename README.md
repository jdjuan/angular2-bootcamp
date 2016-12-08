# Project

## Mockup
See the project mockup [here](https://app.moqups.com/angular2/eFWZ0QkYjX/view/page/a3ee94602).

## Description

Let's create a basic eLearning system with the following user stories:

- When the user opens the application it will show the home screen by default
- From there, the user can access the courses module:
	- The user can see all the courses available:
		- Order them by name, duration or start date
		- The list should provide visual cues to identify the status of the course in relation to the current date:
			- Future courses(green): Courses that will start after 30 days
			- Upcoming courses(yellow): Courses that will start within the next 30 days
			- Expired courses(red): Courses that already happened
	- The user can click in any course and update it:
		- The information will only be saved once the user clicks 'Save'
		- Visual cues will also apply when the users updates the course date 
	- The user can also add new courses
- The user also can access the teachers module:
	- The user can see all the teachers available:
		- The user can order them by name or last name
		- The user can click in any teacher and update it:
			- The information will only be saved once the user clicks 'Save' 
		- The user can also add new teachers
	
## Evaluation
The following parameters will be evaluated:
- 40% : Correct application of concepts learned in class
	- Do your best to put into practice all the concepts learned in class: components, modules, directives, dependencies, etc
- 20% : Escalability of the application
	- We will evaluate how well will your application scale if new features were to be added: We will take into account the right use of the 'share' folder, dependency injection, factories, etc. 
- 20% : Code quality
	- TypeScript allow you to write JavaScript the right way, so make sure you use Type Checkings, access modifiers, so on and so forth. 
- 10% : Bootstrap use
	- We don't expect it to look pretty, but at least we want you to use Bootstrap styles to save yourself writing as much CSS as you would without it.

## Extra points
You will get extra points if you:
- Contribute answering questions in the #preguntas channel in Slack
- Use features of Angular2 we haven't taught you
- Add a README.MD that explains how you abstracted your solution
- Make Felipe and I say: "Wow!"
- Deploy your project live using GitHub pages

## Questions and Answers
Felipe and I will do our best to be available to answer your questions through Slack, but please be patient