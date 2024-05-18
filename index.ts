#!/usr/bin/en node

import {differenceInSeconds, DifferenceInSecondsOptions} from "date-fns";

import chalk from 'chalk';

import inquirer from "inquirer";

//Take User Input//////////////////////////////

 const res = await inquirer.prompt({
        name: "user_input",
        type: "number",
        message: chalk.bold.greenBright("Please Enter The Amount Of Seconds"),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.bold.italic.red("Please Enter Valid Number");
            } else if (input > 60) {
                return chalk.bold.red("Please enter a number less then or equal to 60");
            } else {
                return true;
            }
        }
    });

const input = res.user_input;

//Make the program/////////////////

function displayTime(timeDiff:number) {
    if(timeDiff<=0){
        console.log(chalk.bold.yellowBright("Timer Has Expired"));
        process.exit();
    }
    

    const min = Math.floor(timeDiff / 60);
        const sec = timeDiff % 60;
        console.log(`${min.toString().padStart(2, "0")} :${sec.toString().padStart(2, "0")}`);
}

//timer starting settings from the user given value without any delay ////////

function countDown (val:number){
    let timeDiff = val;
    const interval = setInterval(()=>{
        displayTime(timeDiff);
        timeDiff--;
        
        if(timeDiff < 0){
            clearInterval(interval);
        }
    }, 1000)
}


countDown(input);

    //////////////////////////////////DONE//////////////////////////////////////////////

