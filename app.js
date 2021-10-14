var h1 = document.querySelector("#h1");
var h2 = document.querySelector("#h2");
var h3 = document.querySelector("#h3");
var textarea = document.querySelector("#txt")
var output = document.querySelector("#output")

h1.addEventListener('click', h1f )
h2.addEventListener('click', h2f )
h3.addEventListener('click', h3f )

function h1f()
{
   var input = textarea.value                //used .value to get text from the txtbox have to use .value since user is giving the input
   output.innerHTML = `<h1>${input}</h1>`    //since we created a div in html we use this to show output and here we need to use innerHTML 
}                                            //so that the html is processed before showing input. have to use ` and $ since we are going to
                                             //input html code in js

function h2f()
{
   var input = textarea.value
   output.innerHTML = `<h2>${input}</h2>`
}

function h3f()
{
   var input = textarea.value
   output.innerHTML = `<h3>${input}</h3>`
}