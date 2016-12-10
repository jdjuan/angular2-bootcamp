# Project

## Description

Let's create a basic eLearning system following [this mockup](https://app.moqups.com/angular2/eFWZ0QkYjX/view/page/a3ee94602).

## Features

#### Home View
- When the user opens the application it will show the home screen by default
- From there, the user can access the courses module and the teachers module

#### Courses
- The user can see all the courses available:
	- Order them by name, duration or start date
	- The list should provide visual cues to identify the status of the course in relation to the current date:
		- **Future courses (green):** Courses that will start after 30 days
		- **Upcoming courses (yellow):** Courses that will start within the next 30 days
		- **Expired courses (red):** Courses that already happened
- The user can click in any course and update it:
	- The information will only be saved once the user clicks the **Save** button
	- Visual cues will also apply when the users updates the course date
- The user can also add new courses

#### Teachers
- The user can see all the teachers available:
	- The user can order them by name or last name
	- The user can click in any teacher and update it:
		- The information will only be saved once the user clicks the **Save** button
	- The user can also add new teachers

## Evaluation
The following parameters will be evaluated:
- **Correct application of concepts learned in class: 40%**
	- Do your best to put into practice all the concepts learned in class: components, modules, directives, dependencies, etc.
- **Scalability of the application: 25%**
	- We will evaluate how well will your application scale if new features were to be added: We will take into account the right use of the 'share' folder, dependency injection, factories, etc.
- **Code quality: 25%**
	- TypeScript allows you to write JavaScript the right way, so make sure you use Type Checks, access modifiers, so on and so forth.
- **Bootstrap: 10%**
	- We don't expect it to look pretty, but at least we want you to use Bootstrap styles to save yourself writing as much CSS as you would without it.

## Extra points
You will get extra points if you:
- Contribute answering questions in the #preguntas channel in Slack
- Use features of Angular2 we haven't taught you
- Add a README.MD that explains how you abstracted your solution
- Make Felipe and I say: *"Wow!"*
- Deploy your project live using GitHub pages

## Questions and Answers
Felipe and I will do our best to be available to answer your questions through Slack, but please be patient
