
//alert('Hello World');

var arrOfImages = ["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png","img9.png"];


function doubleImages(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr;
}


function displayCards(arr){
    var container = document.getElementById("container");

    for (var i = 0; i < arr.length; i++){
        
        var newImgElement = document.createElement("img");

        newImgElement.src = "static/images/" + arr[i];

        newImgElement.id = i;

        newImgElement.className = "card";

        container.appendChild(newImgElement);
    }
}

function shuffleCards(arr){
    for (var i = 0; i < arr.length; i++){

        var idx1 = Math.floor(Math.random()*arr.length);
        var idx2 = Math.floor(Math.random()*arr.length);

        var temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    return arr;
}

function hideACard(idx){
    var specificCard = document.getElementById(idx);
    specificCard.src = "static/images/questionmark.png";
}

function revealCard(Event){
    if(cardsPicked.length >1){
        return;
    }
    var clickedImageId = event.target.id;
    var clickedImage = document.getElementById(clickedImageId);
    clickedImage.src = "static/images/" + arrOfImages[clickedImageId];
    cardsPicked.push(clickedImageId);

    if (cardsPicked.length == 2){
        if(arrOfImages[cardsPicked[0]] == arrOfImages[cardsPicked[1]]){
            cardsPicked = [];
        } else {
            var hidePickedCards = function(){
                hideACard(cardsPicked[0]);
                hideACard(cardsPicked[1]);
                cardsPicked = [];
            }
        }
        window.setTimeout(hidePickedCards, 1000);
    }
}







doubleImages(arrOfImages);
shuffleCards(arrOfImages);
displayCards(arrOfImages);

for(var i = 0; i < arrOfImages.length; i++){
    hideACard(i);
}

var cards = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("click", revealCard);
}

var cardsPicked = [];

