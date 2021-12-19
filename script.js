'use strict'

const startButton = document.querySelector('.stopwatch__button-start');
const pauseButton = document.querySelector('.stopwatch__button-pause');
const resetButton = document.querySelector('.stopwatch__button-reset');
const stopwatchDisplay = document.querySelector('.stopwatch__body');
let countOfStartClicks = 0;

startButton.addEventListener('click', function start(event) {
    ++countOfStartClicks;
    if (event.target.closest('.stopwatch__button-start') && countOfStartClicks == 1){
        let timerId = setTimeout(function tick(){
            pauseButton.addEventListener('click', function pause(event){
                event.target.closest('.stopwatch__button-pause');
                clearTimeout(timerId);
                countOfStartClicks = 0;
                return ;
            });
            resetButton.addEventListener('click', function reset(event){
                event.target.closest('.stopwatch__button-reset');
                clearTimeout(timerId);
                resetStopwatch();
                countOfStartClicks = 0;
                return;
            });
            updateStopwatch(); // функция при вызове которой будет апдейтиться дисплей
            timerId = setTimeout(tick, 10);
        },10);
    } else {
        console.log('too much clicks Start');
    }
});

function addZero(value){
    let newValue = '0' + value;
    return newValue;
}

function resetStopwatch(){
    stopwatchDisplay.innerHTML = '00:00:00:00';
}


function updateStopwatch(){
    let currentStopwatch = stopwatchDisplay.innerHTML.trim().split(':'); // = ['00', '00', '00', '00']
    let [hours, minutes, seconds, miliseconds] = currentStopwatch;

        if (miliseconds < 99){
            if (miliseconds < 9){
                miliseconds++;
                miliseconds = addZero(miliseconds);
            }
            else {
                miliseconds++;
            }
        } else if (seconds < 59){
            if (seconds < 9){
                seconds++;
                seconds = addZero(seconds);
            }
            else {
                seconds++;
            }
            miliseconds = '00';
        } else if (minutes < 59){
            if (minutes < 9){
                minutes++;
                minutes = addZero(minutes);
            }
            else {
                minutes++;
            }
            seconds = '00';
        } else if (hours < 59){
            if (hours < 9){
                hours++;
                hours = addZero(hours);
            }
            else {
                hours++;
            }
            minutes = '00';
        } 
    
    let stopwatchValueString = (String(hours) + ':' + String(minutes) + ':' + String(seconds) + ':' + String(miliseconds));
    stopwatchDisplay.innerHTML = stopwatchValueString;
}

