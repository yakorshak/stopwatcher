'use strict'

const startButton = document.querySelector('.stopwatch__button-start');
const pauseButton = document.querySelector('.stopwatch__button-pause');
const resetButton = document.querySelector('.stopwatch__button-reset');
const stopwatchDisplay = document.querySelector('.stopwatch__body');
const startStopwatchValue = stopwatchDisplay.innerHTML.trim().split(':'); // = ['00', '00', '00', '00']


startButton.addEventListener('click', function(event) {
    if (event.target.closest('.stopwatch__button-start')){
        console.log('click');
    }
});


function updateStopwatch(array){
    let stopwatchValue = array;
    if (stopwatchValue[3] < 99){
        stopwatchValue[3]++;
    } else {
        if (stopwatchValue[2] < 59){
            stopwatchValue[3] = 0;
            stopwatchValue[2]++;
        } else {
            if (stopwatchValue[1] < 59){
                stopwatchValue[2] = 0;
                stopwatchValue[1]++;
            } else {
                if (stopwatchValue[0] < 59){
                    stopwatchValue[1] = 0;
                    stopwatchValue[0]++;
                } else {
                    //stop
                }
            }    
        }
    }
    let currentDisplay = document.querySelector('.stopwatch__body');
    let stopwatchValueString = stopwatchValue.join(':')

    currentDisplay.innerHTML = stopwatchValueString;
}

let timerId = setTimeout(function tick(){
    updateStopwatch(startStopwatchValue); // функция при вызове которой будет апдейтиться дисплей
    timerId = setTimeout(tick, 10);
},1000);