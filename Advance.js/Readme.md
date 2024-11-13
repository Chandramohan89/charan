---> Synchronous 
javaScript is Synchronous in nature.

in javascript the code will execute by line to line.
it will not goes to next line untill the code executes is called Synchronous method.

in order to avoid this default behaviour javascript will convert to the Asynchronous programming

Asynchronous Programming will not wait for the code it will executes the next line of the code .

in order to convert Asynchronous programming, JS alone is isn't enough ,

we have WEB browser API's which will help to convert the JS 

WEB Browser API's are 
1.setTimeout -- handle by browser
2.setInterval -- handle by browser
3.LocalStorage -- handle by browser
4.fetch
    
 javaScript is a single Thread method it will handle step by step
   
   -------------
1.Stack order. first in last out
2.Queue Order. first in first out
3.WEB API.


event loop
stack---->web api (browser)---->queue---->stacks




// data types
1.string
2.boolean
3.number
4.null
5.undefined

they are two ways to describe the data types in javaScript.

1.primitive data type will store the exact value.(pass by value) it will immutable we cannot changes the internal elements
a.string
b.boolean
c.number
d.null
e.undefined
2.non primitive data type will stores address.(pass by reference) in this we will change the internal elements is called mutable.
a.array. collection of data types.
b.function we will use multiple data types.
c.object have multiple data types.