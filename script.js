// query selectors and variables
const title = document.querySelector('.title');
const container = document.querySelector('.container');
const paintColor = document.querySelector('.colors');
const form = document.querySelector('form');
const submit = document.querySelector('input');
const gridOption = document.querySelector('.grid-options');
const opts = gridOption.children;
var gridBlocks = container.children;
var opt;
var heightWidth;

console.log(gridBlocks);
grid();
colorChoice();

// functions and event listeners 
function grid(){
    submit.addEventListener('click',(e)=>{
        e.preventDefault(); // prevents from the page to refresh/reload
        title.textContent= 'Sketch';
        grid();
    })
    container.replaceChildren(); // remove all children for this case
    Array.from(opts).forEach((item)=>{
        if(item.selected){
            var opt = item.value;
            switch (opt) {
                case '900':
                    heightWidth = 30;
                    break;
                case '400':
                    heightWidth = 20;
                    break;
                default:
                    heightWidth = 10;
                    break;
            }
            heightWidth = 500 / heightWidth ;
        }
        for( i=0; i<opt; i++){
            const div =document.createElement('div');
            div.classList.add('block');
            div.style.height =`${heightWidth}px`;
            div.style.width = `${heightWidth}px`;       
            container.appendChild(div);
        }
    })
}

function colorChoice(){
    paintColor.addEventListener('click', (e)=>{
        if (e.target.classList.contains('black')){
            title.textContent= 'Now you paint with black';
            colorBlocks('black');
        }
        else{
            colorBlocks('random');
            title.textContent= 'Now you paint with random colors';
        }
    })
}

function colorBlocks(colorOption){
    Array.from(gridBlocks).forEach((item)=>{
        if (colorOption === 'black') {
            item.addEventListener('mouseover',(e)=>{
                e.target.style.backgroundColor = 'black'
            })
        }
        else{
            item.addEventListener('mouseover',(e)=>{
                e.target.style.backgroundColor = randomness();
            })
        }
    })
    
}
            
function randomness() {
    let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
        }
    return 'rgb(' + color.join(', ') + ')'; 
}