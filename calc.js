//function for displaying values
function display(val)
 {
 	document.getElementById("result").value+=val
 }
//evaluation fn
function solve()
 {
 	let x = document.getElementById("result").value
 	let y = eval(x)
 	document.getElementById("result").value = y
 }
//clearing display
function clear()
 {
 	document.getElementById("result").value = " "
 }
