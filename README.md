# Ryan-Daily-Schedule

1. A daily calendar where ToDos are inputed and saved in local storage.

![DailyPlanner1](https://user-images.githubusercontent.com/74829094/112759538-6e7bcf80-8fc1-11eb-9dc0-232c4ce2fa6e.png)

2. Each table row is given a numerical id which is compared to a moment().hour() function. If the id is less than the moment to row is in the past, if its greater than its the future, otherwise the present. THe class of each row element will change if it is in the past, present, of future. 

3. An object which holds the value inputed to the text field as well as a postion value is stringified and saved in local storage. 

![DailyPlanner2](https://user-images.githubusercontent.com/74829094/112760135-f82c9c80-8fc3-11eb-8072-c133ce61509d.png)
 
 4. To display local storage upon reload I used a for loop to interate through the parsed data from local storage. Within this for loop I have an each loop which goes through all of the input fields and sets the value of the input field when the index and postion numbers match. 
