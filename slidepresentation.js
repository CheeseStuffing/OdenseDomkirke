window.onload = startUp;

var numberOfPages;
var pageWidth;
var pageStarts;
var pageIndex;
var rightScroll;
var leftScroll;

var scrollByPixels;
var timePerScrollTick;

function startUp() {
    numberOfPages = 0;
    pageWidth = 0;
    pageStarts = [];
    pageIndex = 0;
    rightScroll = false;
    leftScroll = false;

    scrollByPixels = 25;
    timePerScrollTick = 25;
    document.getElementById("leftBtn").onclick = scrollLeft;
    document.getElementById("rightBtn").onclick = scrollRight;
    numberOfPages = document.getElementById("pageCont").childElementCount;
    pageWidth = document.getElementById("oneSideMain").offsetWidth;

    for (i = 0; i < numberOfPages; i++) {
        if (i == 0) {
            pageStarts[pageStarts.length] = 0;
        } else {
            pageStarts[pageStarts.length] = pageWidth * i;
        }
    }
    window.scrollTo(pageStarts[pageIndex], 0);
    checkButtons();
    checkAni();
}

function startScroll(mode) {
    var scrolled = 0;
    var finished = false;
    if(mode == 6){
        rightScroll = true;
        var smoothScroll2 = setInterval(function () {
            if ((scrolled >= ((pageWidth*(pageStarts.length-1))-(pageWidth*pageIndex))-(scrollByPixels*3)) && finished != true) {
                clearInterval(smoothScroll2);
                pageIndex = pageStarts.length - 1;
                checkButtons();
                finished == true;
                window.scrollTo(pageStarts[pageIndex], 0);
                leftScroll = false;
                rightScroll = false;
                checkAni();


            } else {
                window.scrollBy(scrollByPixels * mode-pageIndex, 0);
                scrolled += scrollByPixels * ((pageStarts.length-1)-pageIndex);
            }
        }, timePerScrollTick);
    }
    else{
        checkButtons();
        var smoothScroll = setInterval(function () {
            if (scrolled >= (pageWidth-(scrollByPixels*3)) && finished != true) {
                clearInterval(smoothScroll);
                finished == true;
                window.scrollTo(pageStarts[pageIndex], 0);
                leftScroll = false;
                rightScroll = false;
                checkAni();


            } else {
                window.scrollBy(scrollByPixels * mode, 0);
                scrolled += scrollByPixels;
            }
        }, timePerScrollTick);
    }
}

function scrollRight() {
    if (rightScroll == false && leftScroll == false && pageIndex < pageStarts.length - 1) {
        rightScroll = true;
        window.scrollTo(pageStarts[pageIndex], 0);
        pageIndex++;
        startScroll(1);
    }
}

function scrollLeft() {
    if (rightScroll == false && leftScroll == false && pageIndex > 0) {
        leftScroll = true;
        window.scrollTo(pageStarts[pageIndex], 0);
        pageIndex = pageIndex -1;
        startScroll(-1);
    }
}
function checkAni(){
    // does something when it comes to the specified pageIndex
    if(pageIndex == 0){
        setAnimation("h1Ani","animateh1");
        setAnimation("h2Ani","animateh2");
    }
    else if(pageIndex == 1){
        setAnimation("h3-2Ani","animateh3-2");
        setAnimation("p-2Ani","animatep-2");
        setAnimation("table-2Ani","animatetable-2")
    }
    else if(pageIndex == 2){
        setAnimation("p-3-1Ani","animatep-3-1");
        setAnimation("p-3-2Ani","animatep-3-2");
        setAnimation("p-3-3Ani","animatep-3-3");
        setAnimation("p-3-4Ani","animatep-3-4");
        setAnimation("p-3-5Ani","animatep-3-5");
        setAnimation("p-3-6Ani","animatep-3-6");
        setAnimation("qtb-1Ani","animateqtb-1");
    }
    else if(pageIndex == 3){
        setAnimation("h3-4Ani","animateh3-4");
        setAnimation("td1Ani","animateInfluences-1");
        setAnimation("td2Ani","animateInfluences-2");
        setAnimation("td3Ani","animateInfluences-3");
        setAnimation("td4Ani","animateInfluences-4");
        setAnimation("td5Ani","animateInfluences-5");
        setAnimation("td6Ani","animateInfluences-6");
        setAnimation("td7Ani","animateInfluences-7");
        setAnimation("td8Ani","animateInfluences-8");
        setAnimation("sumUpAni","animateSumUp");
    }
    else if(pageIndex == 4){
        setAnimation("h3-5Ani","animateh3-5")
        setAnimation("imageOneAni","animateImage-1")
        setAnimation("imageTwoAni","animateImage-2")
        setAnimation("imageThreeAni","animateImage-3")
        setAnimation("funfactsAni","animatefunfacts-5")
    }
    else{
        
    }
    if(pageIndex == pageStarts.length - 1){
        document.getElementById("fixed").setAttribute("style", "display:block;");
    }
    else {
        document.getElementById("fixed").setAttribute("style", "display:none;");
    }
}
function setAnimation(id, aniName){
    document.getElementById(id).setAttribute("class",aniName);
}

function checkButtons() {
    if (pageIndex == 0) {
        document.getElementById("leftBtn").setAttribute("style", "display:none;width:0%;");
        document.getElementById("rightBtn").setAttribute("style", "display:block;width:10%;");
    } else if (pageIndex == pageStarts.length - 1) {
        document.getElementById("leftBtn").setAttribute("style", "display:block;width:10%;");
        document.getElementById("rightBtn").setAttribute("style", "display:none;width:0%;");
    } else {
        document.getElementById("leftBtn").setAttribute("style", "display:block;width:10%;");
        document.getElementById("rightBtn").setAttribute("style", "display:block;width:10%;");
    }
}
