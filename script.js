document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        chooseTopicAndLetter();
    }
}

function chooseTopicAndLetter(){
    chooseTopic();
    chooseLetter();
}

function chooseTopic(){
        var topicArr = [
"A food seasoning",
"A movie character",
"A country in the world",
"Something Blue",
"A Song/Music artist",
"Something you can touch",
"Name of a tree",
"A boy's name",
"Food you eat for breakfast",
"An animal",
"Things that are cold",
"Name of insects",
"Name of TV Show",
"Things that grow",
"School subject",
"A Vegetable",
"Musical instruments",
"Car manufacturer",
"Clothing brand",
"Items in a suitcase",
"Halloween costume",
"Things that are round",
"Part of the body",
"Fastfood restaurants",
"An element in the periodic table",
"A color",
"A name of a city",
"A pet's name"];
var topic = document.getElementById("topic");
topic.innerText = topicArr[Math.floor(Math.random() * topicArr.length)];
    };
        
function chooseLetter(){
        
var letter = document.getElementById("letter");
var letterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

letter.innerText = letterArr[Math.floor(Math.random() * letterArr.length)];

    };
