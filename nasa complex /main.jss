document.querySelector('button').addEventListener('click',getJoke)
function getJoke(){
 const jokeType = document.querySelector('input').value
  fetch(`https://v2.jokeapi.dev/joke/Any?contains=${jokeType}`)    //the value of this variable is now being attached to the link      //this link doesnt change because allof the memes are stord in this array // note* if this was outside input wpuld be blank b/v it would load as the page loads
   .then(res => res.json())                                      //whatever you put in the input is now that
   .then(data => {
    document.querySelector('#').innerText=data.joke
   })
}