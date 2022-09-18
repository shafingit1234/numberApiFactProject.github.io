let factText = document.getElementById('factText');
let numberInput = document.getElementById('numberInput');
let change = document.getElementById('change');
let date = document.getElementById('date');
let trivia = document.getElementById('trivial');
let math = document.getElementById('math');
let quotes = document.getElementById('quotes');

date.addEventListener('click', changeUrlDate);
trivia.addEventListener('click', changeUrlTrivia);
math.addEventListener('click', changeUrlMath);
function changeUrlDate()
{
    var url = 'http://' + date.innerText;
    change.innerText = url;
}
function changeUrlTrivia()
{
    var url = 'http://' + trivia.innerText;
    change.innerText = url;
}
function changeUrlMath()
{
    var url = 'http://' + math.innerText;
    change.innerText = url;
}

numberInput.addEventListener('input', getFactAjax);
console.log(factText.innerText);
function getFactAjax()
{
    let number = numberInput.value;
    if (number != '')
    {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://numbersapi.com/' + number);

        xhr.onload = function ()
        {
            if (this.status == 200)
            {
                factText.innerText = this.responseText;
            }
        }
        xhr.send();
    }
}
setInterval(getQuote, 20000);
var transition = "animation-name: fade; animation-duration: 1s;"
function getQuote()
{
    let xhr2 = new XMLHttpRequest();
    xhr2.open('GET', 'https://random-math-quote-api.herokuapp.com/');
    xhr2.onload = function ()
    {
        if (this.status == 200 && this.readyState == 4)
        {
            let data = JSON.parse(this.responseText);
            // quotes.style.opacity = 0;
            quotes.innerText = `${data.quote}`;
            // quotes.animate({ opacity: 1 }, 19999);
            
        }
    }

    xhr2.send();
}

