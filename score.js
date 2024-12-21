const play1=document.querySelector('.p1');
const play2=document.querySelector('.p2');

const one=document.querySelector('.one');
const two=document.querySelector('.two');

const reset=document.querySelector('.reset');
const select=document.querySelector('.sel');

let max=2;
let play1score=parseInt(one.textContent);
let play2score=parseInt(two.textContent);

reset.addEventListener('click',function(){
one.textContent='0';
two.textContent='0';
play1score=0;
play2score=0;
one.classList.remove('green','red');
two.classList.remove('red','green');
});

play1.addEventListener('click',function(){
    if(play1score==max-1){
        one.classList.add('green');
        two.classList.add('red');
       }
    if(play1score<max && play2score<max){
    one.textContent=parseInt(one.textContent)+1;
    play1score+=1;
    }
    });

    play2.addEventListener('click',function(){
        if(play2score==max-1){
            two.classList.add('green');
            one.classList.add('red');
           }
        if(play1score<max && play2score<max){
        two.textContent=parseInt(two.textContent)+1;
        play2score+=1;
        }
        });

   select.addEventListener('change',function(){
           max=this.value;
           one.textContent='0';
           two.textContent='0';
           play1score=0;
           play2score=0;
           one.classList.remove('green', 'red');
           two.classList.remove('red','green');

   }) ;
   
   