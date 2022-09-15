//Intro Project 

//Animal Fact Page

//DOG          //CAT
//Picture      //Picture
//<button>       <button>

//fact


//print fact

//if button is clicked put a fact into the fact box

//one box for both facts, only one fact at a time



var catButton = document.querySelector("#catButton")
var dogButton = document.querySelector("#dogButton")
var textBox = document.querySelector("#factBox")

dogButton.addEventListener("click",factFillDog)
catButton.addEventListener("click",factFillCat)


function factFillCat(){
catFactArray = $.get("https://catfact.ninja/fact?max_length=140",function(data){
    textBox.innerHTML = data.fact
})
//change inner box css based on whatev  
}



function factFillDog(){
    //post a dog fact to textBox and clear it out first
    dogFactArray = $.get("https://dogfacts-api.herokuapp.com/api/v1/resources/dogs?number=1",function(data){
        textBox.innerHTML = data[0].fact
    })
}
