## form : collect the user data


# tag
- <input> (Serval types)
- types 

text,password,email,number,date,time,checkbox,file,radio,range,submit

- <Button> (Button)

- types

submit,reset

- <select> (DropDown-single selection)
<option>

<textarea>(an text field to enter multiple lines of text)

- <Attiritubes>
- input
type (required)
name (optional-backend)
placeholder (optional)
required (optional-used to validating the text)
maxlength (works with type = "text",used to specify the max length)
step
value (optional - default value to the input)
rows
cols
disabled
autocomplete (used to control the autofilling the details)

- <labels>
 - gives infomation to the browser about input fields
 - can maintain cleaner code.

 - form tags attributes (it link your clientform to the server backend)

 -method(HTTP Method) ( Combination of all these are called CRUD OPERATORS)
 -Get (Read)
 - post (Create)
 - Put/patch (Update)
 - Delete (Delete)

 - <HTTP> - HYPERTEXT TRANSFER PROTOCOL ( SET OF INSTRUCTIONS)

 - Client to Server : HTTP Request
 - Server to client : HTTP Response.

 ### css slectors

 inline style
 internal style 
 external style

 # a tag can be selected in multiple ways.
 - tag name 
 P{

 }

 - class name (.)
 batch2{

 }

- id name (#)

- universal name (*)


 <!-- (utcsi)

universal selector < tag selector < class selector < id selector < inline style has more priority  -->

## combinators

1. descendent slector ( )
2. child selector (>)
3. general sibling selector (~)
4. adjacent sibling selector (+)