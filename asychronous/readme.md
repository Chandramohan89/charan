## Asynchronous programming
 js will read each line and  it
it can handle only one line at a time is called --->>> Synchronous.

## Execution content
1.creation phase or memory phase
2.execution phase 

## Phyton tutor
let a=10; // a = variable ,10= value of the variable
console.log(a);

1. creation phase --->> it will store the variables and the value is by default it will store undefined
 all the variables -- and function declaration will be store here.

 let a; var b; const name; is a variables
 by default the js --->>it shows undefined,if we doesn't give any value to the variable.

 2. execution phase--->> in execution phase it will store variables and functions declarations without any values.

 a=10;
 console.log(a);---->>> print 


 ## Hoisting
 it is a default behaviour where function declaration and variables will move to the top the scope before code execution. 
       1.global scope
       2.block scope

       let and const will store the variables and functions but it will not access the values

       var will store the variables and values and it will access the values and move to the top of the scope to execute the code.

       let and const are temporal dead zone method we cannot access. 
       if incase the we declare the variable with var key word we can access it.

       reference error will get whenever we do not give any value to the variable.

       ----------


       let a =10;
       function print(){
            let b=20;
            console.log(a);
       }
       print();

       execution context:-
        <!-- 1.creation phase -->
         let a:undefined - print function print(){

            let b=20;
            console.log(a); ---->> internally stored in creation phase 
       }

       <!-- 2.Execution phase -->

       let a =10; declaring the value to variable 

       we are calling the function
       --> execution context.
               ---> creation phase
                       ----> let b:undefined
               ----> execution phase
                          -----> b=20;
                        -----> console.log(a);



## WEB API
  - to make async programming possible javaScript alone isn't enough
  - we also need WEB browser API's

  These WEB API's make async programming possible
  1.local Storage
  2.SetTimeout
  3.SetInterval
  4.fetch.
