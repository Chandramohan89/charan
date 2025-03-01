## GRID 
flex- one dimensional layout change.

Grid : two dimensional layout changes. (can change both x-axis and y-axis layouts).

grid template column is used to mention the width of the columns.

grid template row is used to mention the heigth of the row.

## line-base-placement 

to target a box 
- row start/column start/row end/ column end

grid area : position (1/2/3/4)/ identifer
(string/number)

grid-template-areas:"identifers".

## units

pixels 
  - grid template-column : 100px 100px or repeat (2,100px)

  - percentages 
  - grid-template-column:50% 50% or repeat(2,50%)

  // each column will take 50% width in refernce to its parent.


grid-template-column:1fr 1fr or repeat(2,1fr);
// each column will take 1 fraction width in refrence to its parent.