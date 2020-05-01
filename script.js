document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        var topicArr = [
"A food seasoning",
"A Star Wars character",
"A country in the world",
"Something Blue",
"A Song artist",
"Something you can touch",
"A type of Chilli Pepper",
"Name of a tree",
"A boy's name",
"Foods you eat for breakfast",
"An animal",
"Things that are cold",
"Name of insects",
"Name of TV Show",
"Things that grow",
"School subject",
"A Vegetable",
"Musical instruments",
"Name of a Boyband",
"Car manufacturer",
"Clothing brand",
"Items in a suitcase",
"Halloween costume",
"Things that are round"];
var topic = document.getElementById("topic");
var letter = document.getElementById("letter");
var letterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

letter.innerText = letterArr[Math.floor(Math.random() * letterArr.length)];

topic.innerText = topicArr[Math.floor(Math.random() * topicArr.length)];
    }
}

function chooseTopic(){


var topicArr = [
"An Italian Dish",
"A Musical",
"A Type of Pasta",
"Something Red",
"A Song",
"Something you can smell",
"A Type of Cheese",
"Something Green",
"A Pizza Topping",
"Type of celebration",
"A Type of Wine",
"A Language",
"A Fruit",
"Something You Buy in a Market",
"A Type of Music",
"A Flavor of Ice Cream",
"A Vegetable",
"Part of your House",
"Something People do as a Group",
"Something You Can Make",
"A Type of Dessert",
"An Adjective",
"A Type of Animal",
"A Way to Relax"];
var topic = document.getElementById("topic");
var letter = document.getElementById("letter");
var letterArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

letter.innerText = letterArr[Math.floor(Math.random() * letterArr.length)];

topic.innerText = topicArr[Math.floor(Math.random() * topicArr.length)];

}