
//print the current time with 1000 interval into demo id of paragraph
let demo = document.getElementById('time');
setInterval(() => {
    demo.innerHTML = new Date().toLocaleTimeString();
}, 1000);

//print the current date with into time id of paragraph
let time = document.getElementById('date');
time.innerHTML = new Date().toLocaleDateString();

//print the current day into demo id of paragraph
let day = document.getElementById('day');
day.innerHTML = new Date().toLocaleDateString('en-US', {
    weekday: 'long'
});
