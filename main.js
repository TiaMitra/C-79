    //declare an array like this
    name_of_the_student_array=[];

    //Write the function submit
function submit()
{
    //get the values from the text input
var name_1 = document.getElementById("name_of_the_student_1").value;

var name_2 = document.getElementById("name_of_the_student_2").value;

var name_3 = document.getElementById("name_of_the_student_3").value;

var name_4 = document.getElementById("name_of_the_student_4").value;

var name_5 = document.getElementById("name_of_the_student_5").value;
//then push them into an array
name_of_the_student_array.push(name_1);

name_of_the_student_array.push(name_2);

name_of_the_student_array.push(name_3);

name_of_the_student_array.push(name_4);

name_of_the_student_array.push(name_5);

//put the value's from the student array into console
console.log(name_of_the_student_array);

//display the array values into the web page
document.getElementById("display_name").innerHTML = name_of_the_student_array;

//Change Submit Button to sort button
document.getElementById("submit_button").style.display = "none";

document.getElementById("sort_button").style.display = "inline-block";

}
//Difine function sort
function sort()
{
name_of_the_student_array.sort();
 
console.log(name_of_the_student_array);

document.getElementById("display_name").innerHTML = name_of_the_student_array;
}
