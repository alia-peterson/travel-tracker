# Travel Tracker

## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Continuous Improvement](#continuous-improvement)
* [Deployment](#deployment)
* [Author](#author)

## Introduction
The primary goal of [Travel Tracker](https://github.com/alia-peterson/travel-tracker) is to help travelers plan their future trips as well as keep track of upcoming, current, and past vacations. A traveler can see the amount they have spent so far this year as well as create a new trip from a curated list of locations. Once the trip information has been entered into the planning form, the traveler can see the estimated total (including fees) for all travelers over the given timeframe and can add the trip to their pending list.

As an agent, the user has the ability to view the YTD income for all trips, a list of all pending trips (which can be approved or deleted), and a list of all travelers that can be searched by a traveler's name.

### Motivation
The motivation behind this project was to get more experience working with servers and API's, as well as providing the instructors with a more accurate feel for my personal skill level at this point in the course.

## Features
* [Login Screen](#login-screen)
* [Traveler Dashboard](#traveler-dashboard)
* [Agent Dashboard](#agent-dashboard)
* [Responsive Design](#responsive-design)

### Login Screen
When the website is first loaded, a user will see the login screen below with pre-filled input fields for ease of use.
![image](https://user-images.githubusercontent.com/70297733/105110771-9c520e80-5a7c-11eb-99bf-48bb79cc9543.png)

<details>
  <Summary>Under the Hood</summary>
  The values for the username and password are used to populate the dashboards for the traveler and agent but are not actually authenticated in any way. The traveler username of <code>traveler25</code> means that the user with the ID of 25 will be retrieved from the Traveler API and will be used to populate the dashboard information.
</details>

### Traveler Dashboard
When a traveler visits their dashboard, they will see a welcome message with their name, as well as the amounts they've spent on trips for the previous year and this year. The user will also be able to see a form for creating a new trip, as well as all of their previous, current, and pending trips.

![image](https://user-images.githubusercontent.com/70297733/105111221-acb6b900-5a7d-11eb-8490-20bad61905e8.png)

Each trip card displays all of the trip information such as: location name, number of travelers, and cost per person. When all the fields of the trip form are filled out, a new trip can be created, and a new a card will be displayed in the right most column, under Pending, until an agent either approves or deletes the trip.

Hover over any of the trip cards to view the associated image for that destination.

<p align="center"><img src="https://user-images.githubusercontent.com/70297733/105111507-4d0cdd80-5a7e-11eb-8e93-b11bdbb11447.png" width=250px></p>

<details>
  <Summary>Under the Hood</summary>
  The information displayed on the trip cards combine information from the Traveler, Trip, and Destination API's which were accessed through <code>fetch</code> requests.
</details>

### Agent Dashboard
When an agent visits their dashboard, they will also see a welcome message with a greeting, the YTD income for the company, as well as the names of the travelers who are currently on vacation. All pending trips are displayed in the bottom left of the screen with the option to approve or delete, and all travelers are displayed in the center / right of the screen. The agent has the ability to search all travelers by name and the list of visible cards will update live to display only the cards of the travelers that meet the search input.

![image](https://user-images.githubusercontent.com/70297733/105112931-2ac88f00-5a81-11eb-85fd-7062e9cf5946.png)

When a trip is approved or deleted, the card for that trip will be removed from the list of pending trips and the traveler's list of trips will update to show that trip card in the appropriate column depending on the date ranges for the given trip.

Note: a travelers spending for this year does not include pending trips. When a trip is approved, the cost for the single traveler (including a 10% fee) will be added to the Current Year Spending portion of the user's dashboard.

<details>
  <Summary>Under the Hood</summary>
  When a trip is approved, a <code>fetch</code> request is made to the server with a <code>POST</code> method, changing the status from 'pending' to 'approved.' When a trip is deleted, a <code>fetch</code> request is made with a <code>delete</code> method, removing the item from the server.
</details>

### Responsive Design



## Continuous Improvement
Next steps for this website would likely include improving the visuals. At this point in the curriculum, we've been exposed to CSS and SCSS but haven't been exposed to React yet. It would be nice to build out the website to look more like a "real" website.

Additionally, it would be nice to allow a traveler to edit a pending trip and / or receive feedback when a trip is approved or deleted by an agent. 

## Technologies
JavaScript, Fetch, JSON, Mocha, Chai, HTML, CSS/SCSS, Normalize, Webpack

## Deployment
This application requires a local server to be running independent of GitHub pages. Clone [this repository](https://github.com/turingschool-examples/travel-tracker-api) and follow the instructions included in the ReadMe to `install` and `start` the API. Once the server is running on your local machine, the site can be visited by clicking on the link here:

[Deployment Link](https://alia-peterson.github.io/travel-tracker/dist/index.html)

## Author
[Alia Peterson](https://github.com/alia-peterson)

<img src="https://avatars3.githubusercontent.com/u/70297733?s=400&u=f7e7c3682b498a90f005565b56b38a8ac985b053&v=4" alt="Ms. Peterson"
width="150" height="auto"/>
