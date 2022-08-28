const topPlayers = document.getElementById('top-player').style.color =  'rgb(117, 149, 243)';
const topBlogs = document.getElementById('top-blog').style.color = 'rgb(117, 149, 243)';

const players = document.getElementsByClassName('player');
let player = [0];
for(const player of players ){
    // console.log(player)
    player.style.backgroundColor = 'rgb(245, 208, 208)'
    player.style.margin = '10px';
    player.style.padding = '15px';
    player.style.borderRadius = '10px';
}
document.getElementById('button').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = 'Player-5';
    const ul = document.getElementById('list-id')
    ul.appendChild(li)
    
})


function getInputValue(){
    const inputNumber = document.getElementById('input')
    const inputText = parseInt(inputNumber.value);
    if(inputText < 5){
        inputNumber.value = inputText + 1;
    }
}
document.getElementById('button-id').addEventListener('click', function(event){
    // event.target.parentNode.removeChild(event.target)
    getInputValue();
})


const numbers = [10, 9, 18, 90, 25, 78, 55, 89, 100]
const sortedNumber = numbers.sort();
console.log(sortedNumber);
