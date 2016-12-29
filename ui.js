var loop1Reversed = false;
var loop2Reversed = false;
var loop3Reversed = false;
var loop4Reversed = false;

nx.onload = function() {

    resetSliders();

    button1.mode = "impulse"
    button1.on('*', function(data) {
        if (!loop1.paused) {
            loop1.pause();
            loop1.currentTime = 0;
            resetSliders();
        } else {
            resetSliders();
            loop1.play();
        }
    });

    loop1.onended = function() {
        if (dial11.val.value > 0.5 && dial11.val.value < 0.75 ){
            loop2Reversed = false;
            loop2.play();
        } else if (dial11.val.value > 0.75 ) {
            loop4Reversed = false;
            loop4.play();
        } else if (dial11.val.value < 0.5) {
            loop1Reversed = true;
            loop1_rev.play();
        }
    };

    loop1_rev.onended = function() {
        loop1Reversed = false;
        loop1.play();
    }

    loop2.onended = function() {
        if (dial12.val.value < 0.5) {
            loop2Reversed = true;
            loop2_rev.play();
        }
    }

    loop2_rev.onended = function() {
        if (dial11.val.value > 0.5) {
            loop2Reversed = false;
            loop2.play();
        } else if (dial11.val.value < 0.5) {
            loop1Reversed = true;
            loop1_rev.play();
        }
    }

    loop3.onended = function() {
        if (dial21.val.value > 0.25 && dial21.val.value < 0.75 ){
            loop2Reversed = false;
            loop2.play();
        } else if (dial11.val.value > 0.75 ) {
            loop4Reversed = false;
            loop4.play();
        } else if (dial11.val.value < 0.25) {
            loop3Reversed = true;
            loop3_rev.play();
        }
    };

    loop3_rev.onended = function() {
        loop3Reversed = false;
        loop3.play();
    }

    loop4.onended = function() {
        if (dial22.val.value < 0.5) {
            loop4Reversed = true;
            loop4_rev.play();
        }
    }

    loop4_rev.onended = function() {
        if (dial21.val.value > 0.5) {
            loop4.Reversed = false;
            loop4.play();
        } else if (dial21.val.value < 0.5) {
            loop3Reversed = true;
            loop3_rev.play();
        }
    }

    var updateTimer = setInterval(update, 1);
}

function update() {

    if (loop1Reversed) {
        slider11.val.value = 1 - loop1_rev.currentTime / loop1_rev.duration;
    } else {
        slider11.val.value = loop1.currentTime / loop1.duration;
    }
    slider11.draw();

    if (loop2Reversed) {
        slider12.val.value = 1 - loop2_rev.currentTime / loop2_rev.duration;
    } else {
        slider12.val.value = loop2.currentTime / loop2.duration;
    }
    slider12.draw();

    if (loop3Reversed) {
        slider21.val.value = 1 - loop3_rev.currentTime / loop3_rev.duration;
    } else {
        slider21.val.value = loop3.currentTime / loop3.duration;
    }
    slider21.draw();

    if (loop4Reversed) {
        slider22.val.value = 1 - loop4_rev.currentTime / loop4_rev.duration;
    } else {
        slider22.val.value = loop4.currentTime / loop4.duration;
    }
    slider22.draw();

}

function resetSliders() {
    slider11.val.value = 0;
    slider11.draw();
    slider12.val.value = 0;
    slider12.draw();
    slider21.val.value = 0;
    slider21.draw();
    slider22.val.value = 0;
    slider22.draw();
}
