const randomCell = [];

while(randomCell.length < 7){
    const randomNum = Math.floor(Math.random() * 100) + 1;
    if(!randomCell.includes(randomNum)){
        randomCell.push(randomNum);
    }
    
} 

let currEmptyCell = 0;

const grid = document.querySelector('.grid');
for(let i = 1; i <= 100; i++){ 
    const cell = document.createElement('div');
    cell.id = `cell-${i}`;
    if(randomCell.includes(i)){
        cell.textContent = '';
        if(randomCell[currEmptyCell] === i){
            cell.classList.add('highlight');
        }
    }else{
        cell.textContent = i;
    }

    grid.appendChild(cell);

}

function checkInput(){
    const userInput = parseInt(document.getElementById('user-input').value);
    
    const currCellId = `cell-${randomCell[currEmptyCell]}`;
    const currCell = document.getElementById(currCellId);

    if(userInput === randomCell[currEmptyCell]){
        currCell.classList.remove('highlight');
        currCell.classList.add('correct');
        currCell.textContent = userInput;

        currEmptyCell++;

        if(currEmptyCell < randomCell.length){
            const nextCellId = `cell-${randomCell[currEmptyCell]}`;
            const nextCell = document.getElementById(nextCellId);
            nextCell.classList.add('highlight');
        }else {
            alert("Congratulations! You finished all the empty grids!");

        }

        document.getElementById('user-input').value = '';

    }else{
        alert("Incorrect! Try again!");
    }
}



