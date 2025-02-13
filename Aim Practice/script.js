let score = -1;

let isTimerStarted = false;
function startTimer(){
    var startTime = new Date();    
    const intervalIndex = setInterval(()=>{
        var endTime = new Date();
        var elspsed_time = endTime-startTime;
        elspsed_time = Math.round(elspsed_time/1000,2);
        $("#elapsed-time").text(elspsed_time + " sec")

        if(elspsed_time>=60)
        {
            clearInterval(intervalIndex);
            alert("Your score = "+ score);
            location.reload();
        }

    },10)

}

// function secondsToHms(d) {
//     d = Number(d);
//     var h = Math.floor(d / 3600);
//     var m = Math.floor(d % 3600 / 60);
//     var s = Math.floor(d % 3600 % 60);

//     var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
//     var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
//     var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
//     return hDisplay + mDisplay + sDisplay; 
// }

function changePosition() {
    $('.dot').css({
        'top': Math.random() * 90 + '%',
        'left': Math.random() * 90 + '%',
    });
    score++;
    $("#score").text(score)
    if(score===1)startTimer();
}
changePosition()

