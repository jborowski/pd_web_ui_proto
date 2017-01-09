var loop11Reversed = false;
var loop12Reversed = false;
var loop21Reversed = false;
var loop22Reversed = false;

nx.onload = function() {

    resetSliders();

    button1.mode = "impulse"
    button1.on('*', function(data) {
        if (!loop11.paused) {
            loop11.pause();
            loop11.currentTime = 0;
            resetSliders();
        } else {
            resetSliders();
            loop11.play();
        }
    });

    loop11.onended = function() {
        if (dial11.label == "fwd"){
            loop12Reversed = false;
            loop12.play();
        } else if (dial11.label == "down" ) {
            loop22Reversed = false;
            loop22.play();
        } else if (dial11.label == "back") {
            loop11Reversed = true;
            loop11_rev.play();
        }
    };

    loop11_rev.onended = function() {
        loop11Reversed = false;
        loop11.play();
    }

    loop12.onended = function() {
        if (dial12.label == "back") {
            loop12Reversed = true;
            loop12_rev.play();
        }
    }

    loop12_rev.onended = function() {
        if (dial11.label == "fwd") {
            loop12Reversed = false;
            loop12.play();
        } else if (dial11.label == "back") {
            loop11Reversed = true;
            loop11_rev.play();
        } else if (dial11.label == "down") {
            loop21Reversed = true;
            loop21_rev.play();
        }
    }

    loop21.onended = function() {
        if (dial21.label == "up" ){
            loop12Reversed = false;
            loop12.play();
        } else if (dial21.label == "fwd" ) {
            loop22Reversed = false;
            loop22.play();
        } else if (dial11.label == "back") {
            loop21Reversed = true;
            loop21_rev.play();
        }
    };

    loop21_rev.onended = function() {
        loop21Reversed = false;
        loop21.play();
    }

    loop22.onended = function() {
        if (dial22.label == "back") {
            loop22Reversed = true;
            loop22_rev.play();
        }
    }

    loop22_rev.onended = function() {
        if (dial21.label == "fwd") {
            loop22.Reversed = false;
            loop22.play();
        } else if (dial21.label == "back") {
            loop21Reversed = true;
            loop21_rev.play();
        } else if (dial21.label == "up") {
            loop11Reversed = true;
            loop11_rev.play();
        }
    }

    var updateTimer = setInterval(update, 33);
}

function update() {

    if (loop11Reversed) {
        slider11.val.value = 1 - loop11_rev.currentTime / loop11_rev.duration;
    } else {
        slider11.val.value = loop11.currentTime / loop11.duration;
    }
    slider11.draw();

    if (loop12Reversed) {
        slider12.val.value = 1 - loop12_rev.currentTime / loop12_rev.duration;
    } else {
        slider12.val.value = loop12.currentTime / loop12.duration;
    }
    slider12.draw();

    if (loop21Reversed) {
        slider21.val.value = 1 - loop21_rev.currentTime / loop21_rev.duration;
    } else {
        slider21.val.value = loop21.currentTime / loop21.duration;
    }
    slider21.draw();

    if (loop22Reversed) {
        slider22.val.value = 1 - loop22_rev.currentTime / loop22_rev.duration;
    } else {
        slider22.val.value = loop22.currentTime / loop22.duration;
    }
    slider22.draw();

    if (dial11.val.value >= 0.12 && dial11.val.value < 0.37) {
        dial11.label = "back";
    } else if (dial11.val.value >= 0.37 && dial11.val.value < 0.62) {
        dial11.label = "up";
    } else if (dial11.val.value >= 0.62 && dial11.val.value < 0.87) {
        dial11.label = "fwd";
    } else {
        dial11.label = "down";
    }

    if (dial12.val.value >= 0.12 && dial12.val.value < 0.37) {
        dial12.label = "back";
    } else if (dial12.val.value >= 0.37 && dial12.val.value < 0.62) {
        dial12.label = "up";
    } else if (dial12.val.value >= 0.62 && dial12.val.value < 0.87) {
        dial12.label = "fwd";
    } else {
        dial12.label = "down";
    }

    if (dial13.val.value >= 0.13 && dial13.val.value < 0.37) {
        dial13.label = "back";
    } else if (dial13.val.value >= 0.37 && dial13.val.value < 0.62) {
        dial13.label = "up";
    } else if (dial13.val.value >= 0.62 && dial13.val.value < 0.87) {
        dial13.label = "fwd";
    } else {
        dial13.label = "down";
    }

    if (dial21.val.value >= 0.12 && dial21.val.value < 0.37) {
        dial21.label = "back";
    } else if (dial21.val.value >= 0.37 && dial21.val.value < 0.62) {
        dial21.label = "up";
    } else if (dial21.val.value >= 0.62 && dial21.val.value < 0.87) {
        dial21.label = "fwd";
    } else {
        dial21.label = "down";
    }

    if (dial22.val.value >= 0.12 && dial22.val.value < 0.37) {
        dial22.label = "back";
    } else if (dial22.val.value >= 0.37 && dial22.val.value < 0.62) {
        dial22.label = "up";
    } else if (dial22.val.value >= 0.62 && dial22.val.value < 0.87) {
        dial22.label = "fwd";
    } else {
        dial22.label = "down";
    }

    if (dial23.val.value >= 0.12 && dial23.val.value < 0.37) {
        dial23.label = "back";
    } else if (dial23.val.value >= 0.37 && dial23.val.value < 0.62) {
        dial23.label = "up";
    } else if (dial23.val.value >= 0.62 && dial23.val.value < 0.87) {
        dial23.label = "fwd";
    } else {
        dial23.label = "down";
    }

}

function resetSliders() {
    slider11.val.value = 0;
    slider11.draw();
    slider12.val.value = 0;
    slider12.draw();
    slider13.val.value = 0;
    slider13.draw();
    slider21.val.value = 0;
    slider21.draw();
    slider22.val.value = 0;
    slider22.draw();
    slider23.val.value = 0;
    slider23.draw();
}
