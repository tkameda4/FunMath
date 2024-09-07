let num1, num2, correctAnswer;
//generates the equation and saves the correct answer
function generate(){
    num1 = Math.floor(Math.random()*10);
    num2 = Math.floor(Math.random()*10);

    var decider = Math.floor(Math.random()*2);
    
    if(decider == 1 && num1 >= num2){
        document.getElementById("equationContainer").innerText = num1 + ' - ' + num2 + ' = ?';
        correctAnswer = num1 - num2;
    }else{
        document.getElementById("equationContainer").innerText = num1 + ' + ' + num2 + ' = ?';
        correctAnswer = num1 + num2;
    }
    getGrid(num1);
}


//checks if the submitted answer is correct
function check(){
    const userAnswer = parseInt(document.getElementById("answer").value, 10);
    const feedbackElement = document.getElementById("feedback");

    if(userAnswer == correctAnswer){
        feedbackElement.innerText = 'Correct!';
        feedbackElement.style.color = 'green';
        generate();
        document.getElementById('answer').value = '';
        setTimeout(() => {
            feedbackElement.innerText = '';
        }, 1000);
    }else{
        feedbackElement.innerText = 'Incorrect, try again!';
        feedbackElement.style.color = 'red';
        setTimeout(() => {
            feedbackElement.innerText = '';
        }, 1000);
    }
}

//gets the grid that shades the number
//Parameter: the first number of the equation
function getGrid(num1){
    var gridItems = document.getElementById("numberGrid").children;

    for(var i = 0; i < gridItems.length; i++){
        var gridNumber = parseInt(gridItems[i].innerText);
        if(gridNumber <= num1){
            gridItems[i].classList.add("shaded");
        }else{
            gridItems[i].classList.remove("shaded");
        }

        let newGrid = gridItems[i].cloneNode(true);
        gridItems[i].parentNode.replaceChild(newGrid, gridItems[i]);
    
        gridItems[i].addEventListener("click", function(){
            incrementNumber(newGrid);
        });

    }
}

//determines if the cell is already been shaded or not
//Parameter: each cell of the grid
function incrementNumber(cell){
    if(cell.classList.contains("shaded")){
        cell.classList.remove("shaded");
    }else {
        cell.classList.add("shaded");
    }
}



