# Employee-Tracker

## Description

Keeping track of employees of a multi-department organization can be a difficult task. You have to keep track of a lot of differrent types of data that may be related. To help with this effort, the EMployee TRacket app was created. This app keeps track of vital department, role, and employee data to make understanding the workforce at a high level easier. The Employee Tracker app stores this data in different tables and allows you to access the information you desire with a few short questionnaires. You are able to view, add, and update existing data without having to manually query and manipulate the data yourself.

In this project I learned the importance of utilizing the mysql2 and and console.table node packages, as they make accessing and displaying database data much easier. Additionally, utilizing classes to create data uniformly also make code easier to read and easier to troubleshoot.

## Installation

To install this app, start by cloning this repo to your local machine. From the root repo, run `npm start` or a similar command to launch the app. 

*Note the you will need to install the dependencies to successfully launch the app*

## Usage

After the app is launched, you will be presented with a number of options. To navigate through the choices, use the up and down arrow keys. If you choose the 'View' options, you will be presented with the current contents of the relevant database table. If you choose the 'Create' options, you will be taken through a brief questionnaire used to gather the necessary data to create a new record in the respective table. You can also update the the role of an employee by choosing the 'Update' option.

![GIF of user naviating through the Employee Tracker App](./assets/Employee%20Tracker%20GIF.gif)
