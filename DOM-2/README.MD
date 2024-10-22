### DOM-2

we discussed about getElementById()-----> we are targeting the HTML element

innerText , innerHTML----> To get the inside the values of HTML Element

Input Tag----> .Value to get the value typed by the user.



- getElementByClassName()
this method will return a collection of elements with specified class name();
- getElementByTarget()
method to return a collection of elemnets with specified tag Name();

they will returns us an array.

- alternative to targets elements in html 

tagName
className
id

- these methods are know as

- query slelctor
- querySelectorAll

- querySelector()
    - this method returns the first element that matches the css selector.


    - querySelectorAll()
     this method returns all the elements matching the selector and store in a form of ana array.

## Events
- untill now we are using OnClick event listner
but we are using it inline to a HTML Element 

<button onClick="likeME()">like</button>

- an improvised version to used event handle, we have a method called **addEventListner()**.

## addEventListner(arg1,arg2);

- arg1-- here we use event name , but do not write **on** instead for onClick use **click**

- arg-2-- we will pass a function which will run when the event is trigged.