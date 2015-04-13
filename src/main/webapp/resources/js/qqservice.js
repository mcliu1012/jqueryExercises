function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;
        for ( var attr in json) {
            var now = 0;
            if (attr == "opacity") {
                now = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
                now = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - now) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (now != json[attr])
                bStop = false;
            if (attr == "opacity") {
                obj.style.filter = "alpha(opacity:" + (now + speed) + ")";
                obj.style.opacity = (now + speed) / 100;
            } else {
                obj.style[attr] = (now + speed) + "px";
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd)
                fnEnd();
        }
    }, 30);
}
function startFlex(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bStop = true;
        var cur = 0;
        for ( var attr in json) {
            if (!obj.oSpeed)
                obj.oSpeed = {};
            if (!obj.oSpeed[attr])
                obj.oSpeed[attr] = 0;
            cur = parseInt(getStyle(obj, attr));
            if (Math.abs(json[attr] - cur) > 1 || Math.abs(obj.oSpeed[attr]) > 1) {
                bStop = false;

                obj.oSpeed[attr] += (json[attr] - cur) / 5;
                obj.oSpeed[attr] *= 0.7;
                var maxSpeed = 65;
                if (Math.abs(obj.oSpeed[attr]) > maxSpeed) {
                    obj.oSpeed[attr] = obj.oSpeed[attr] > 0 ? maxSpeed : -maxSpeed;
                }
                obj.style[attr] = cur + obj.oSpeed[attr] + "px";
            }
        }
        if (bStop) {
            clearInterval(obj.timer);
            if (fnEnd)
                fnEnd();
        }
    }, 30);
}
function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}
window.onload = function() {
    var oCs = document.getElementById('cs');
    var oBtn = document.getElementById('btn').getElementsByTagName('span')[0];
    var oImg = document.getElementById('bg');
    var oLi = document.getElementById('qqlist').getElementsByTagName('li');
    var on = 0;

    for (var i = 0; i < oLi.length; i++) {
        oLi[i].style.left = oLi[i].offsetLeft + "px";
        oLi[i].style.top = oLi[i].offsetTop + "px";
    }
    for (var i = 0; i < oLi.length; i++) {
        oLi[i].style.position = "absolute";
        oLi[i].style.margin = 0;
    }
    function showImg() {
        oImg.style.display = "block";
        startMove(oImg, {
            opacity: 80
        }, function() {
            showQQ(350);
        });
    }
    function showQQ(iTarget) {
        var i = 1;
        startFlex(oLi[0], {
            left: iTarget
        });
        timer = setInterval(function() {
            startFlex(oLi[i], {
                left: iTarget
            });
            i++;
            if (i >= oLi.length) {
                clearInterval(timer);
            }
        }, 20);
        $("#btn").css("display", "block");
    }
    oBtn.onclick = function() {
        $("#btn").css("display", "none");
        if (on == 0) {
            startFlex(oCs, {
                height: 500
            }, function() {
                showImg();
                oBtn.innerHTML = "CLOSE";
            });
            on = 1;
        } else {
            showQQ(-200);
            $("#btn").css("display", "none");
            timer2 = setInterval(function() {
                startMove(oImg, {
                    opacity: 0
                }, function() {
                    oImg.style.display = "none";
                    startMove(oCs, {
                        height: 0
                    });
                });
                if (oCs.style.height == 2 + "px") {
                    clearInterval(timer2);
                    $("#btn").css("display", "block");
                    oBtn.innerHTML = "CONTACT US";
                }
            }, 500);
            on = 0;
        }
    };
};