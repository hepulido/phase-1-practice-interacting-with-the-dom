let i = 0
let count = document.querySelector('#counter')
function counter() { 
    i++
    count.innerHTML = i;
}

let myInterval =  setInterval(counter, 1000)
    
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let submit = document.querySelector('#submit')
let commentForm = document.querySelector(["#comment-form"])
let list = document.querySelector('#list')

minus.addEventListener('click',()=>{
    i--
    count.innerHTML = i
})

plus.addEventListener('click',()=>{
    i++
    count.innerHTML = i
})

heart.addEventListener('click',()=>{
    let likes = document.querySelector('.likes')
    let li = document.createElement('li')
    likes.appendChild(li)
    li.innerHTML= `${count.innerHTML} has been liked`
})

commentForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let p = document.createElement('p')
    list.appendChild(p)
    p.innerText = e.target['comment-input'].value
    e.target.reset()
})

pause.addEventListener('click',(e)=>{
    minus.disabled = !minus.disabled
    plus.disabled = !plus.disabled
    heart.disabled = !heart.disabled
    submit.disabled = !submit.disabled
    if(myInterval){
        clearInterval(myInterval);
        myInterval = null
    }else {
        myInterval =  setInterval(counter, 1000)
    }
    if(e.target.innerText === 'pause'){
        e.target.innerText = 'resume'
    }else {
        e.target.innerText = 'pause'
    }
})