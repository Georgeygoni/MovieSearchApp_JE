# MovieSearchApp_JE

How to Settup the Project

The repository has two folders which are the front end and the backend folders. The frontend is built with React and Material UI, while the back end is .NETCore.

Steps to setup
Back End
1. Download the repository
2. open the back end folder and click on the "JeanEdwardsTest_GeorgeIgoni.sln" to open the API project. You can do this with either VS or VS code.
3. Update the localdb parameter if necessary 
![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/d5c1c5d2-84a7-4a5f-afaa-e7ef2b44cc2a)
4. run "update-database" in the package-management console to create the necessary database models.
5. run the api project 
6. from the Launchsettings the swagger api runs at the port shown below:
![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/7c0d31d3-bfcf-4f4b-b1ad-179bf249996a)
7. execute the swagger end-points to make sure they are running without errors.

![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/33735391-dfc7-4ba9-ba5c-6ae30e46e849)


Front End
1. Open the frontend project and run the terminal at the frontend directory
2. run "npm-install"
3. after all necessary packages have been installed, to start the project run "npm start"
4. make sure the back end project is already running and then the front end will come up as seen below:

![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/c318b398-fb4f-4da3-b3ad-f5ee9fe32bf5)
5. Test the application by entering any movie title and then click on "Search Movie"
![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/b100284e-d6de-48cf-a6cb-188d241b98f9)

6. To View More details of the movie click on "View Details"

![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/9193dfda-3b91-42f4-9ccc-ecfbb2d7ca00)

7. The latest 5 queries saved on the database will be displayed on the side of the page with the date and time of search

![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/05193c80-6983-4af8-b6c6-8beb5cefb733)

8 Dark Mode: Click on the switch at the top left to activate Dark Mode

![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/e28c20aa-57a8-4a72-adf4-2957adf3e909)

![image](https://github.com/Georgeygoni/MovieSearchApp_JE/assets/52336359/9cbc4cc7-41a0-4679-9453-6ec381c2964b)

Extras

Unit Tests

run unit tests by running "npm test"









