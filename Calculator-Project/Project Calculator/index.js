let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == 'ANS')
        {
            string = eval(string);
            document.querySelector('.input').value = string;
        }
        else if (e.target.value == 'CLR')
        {
            string = "";
            document.querySelector('.input').value = string;
        }
        else {
            console.log(e.target.value);
            string = string + e.target.value;
            document.querySelector('.input').value = string;
        }
    })
})
