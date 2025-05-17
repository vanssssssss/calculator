const keys = [{
    first : '1',
    sec : '2',
    third : '3',
    fourth : ' + '
},{
   first : '4',
   sec : '5',
   third : '6',
   fourth : ' - ' 
},{
    first : '7',
    sec : '8',
    third : '9',
    fourth : ' * '
},{
    first : '0',
    sec : '.',
    third : ' = ',
    fourth : ' / '
}];

let keysHTML = '';

keys.forEach((key) => {
    let html = `
        <p>
            <button class="number-button js-button" data-key="${key.first}">
            ${key.first}</button>
            <button class="number-button js-button" data-key="${key.sec}">
            ${key.sec}</button>
            <button class="number-button js-button" data-key="${key.third}">
            ${key.third}</button>
            <button class="operator-button js-button " data-key="${key.fourth}">
            ${key.fourth}</button>
        </p>
    `;
    keysHTML += html;
});

document.querySelector('.keys').innerHTML = keysHTML;
let res= localStorage.getItem('res') || "";
document.querySelector('.js-res').innerHTML = `${res}`;

document.querySelectorAll('.js-button').forEach( (button) =>{
    console.log(button);
    button.addEventListener('click' , () => {
        const key = button.dataset.key;
        updatestr(key);
    });
});

document.querySelector('.js-clear-button').addEventListener('click',() => {
    res = '';
    localStorage.setItem('res',res);
    localStorage.removeItem(res);
    document.querySelector('.js-res').innerHTML = `0.00`;
});

function updatestr(c){
    if(c === ' = '){
        res = eval(res);
        document.querySelector('.js-res').innerHTML = `${res}`;
        localStorage.setItem('res',res);
    }else{
        res += c;
        document.querySelector('.js-res').innerHTML = `${res}`;
        localStorage.setItem('res',res);
    }
}

