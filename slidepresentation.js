window.onload = startUp;
            
var numberOfPages;
var pageWidth;
var pageStarts;
var pageIndex;
var rightScroll;
var leftScroll;
var firstScroll;
            
var scrollByPixels;
var timePerScrollTick;
            
    function startUp(){
        numberOfPages = 0;
        pageWidth = 0;
        pageStarts = [];
        pageIndex = 0;
        rightScroll = false;
        leftScroll = false;
        firstScroll = true;
                
        scrollByPixels = 25;
        timePerScrollTick = 25;
        document.getElementById("leftBtn").onclick = scrollLeft;
        document.getElementById("rightBtn").onclick = scrollRight;
        numberOfPages = document.getElementById("pageCont").childElementCount;
        pageWidth = document.getElementById("oneSideMain").offsetWidth;

        for(i=0;i<numberOfPages;i++){
            if(i==0){
                pageStarts[pageStarts.length] = 0;
            }
            else{
                pageStarts[pageStarts.length] = pageWidth*i;
            }
        }
        goToPos();
        }

        function goToPos(){
            window.scrollTo(pageStarts[pageIndex],0);
            if(rightScroll == true){
                pageIndex++;
                startScroll(1);
            }
            else if(leftScroll == true){
                pageIndex = pageIndex-1;
                startScroll(-1);
            }
            else if(firstScroll== true){
                firstScroll = false;
                pageIndex = 0;
                window.scrollTo(pageStarts[pageIndex],0);
                checkButtons();
            }
        }

        function startScroll(mode){
            var scrolled = 0;
            checkButtons();
            var smoothScroll = setInterval(function(){
                if(scrolled >= pageWidth){
                    window.scrollTo(pageStarts[pageIndex],0);
                    leftScroll = false;
                    rightScroll = false;
                        
                    clearInterval(smoothScroll);

                }
                else{
                    window.scrollBy(scrollByPixels*mode,0);
                    scrolled += scrollByPixels;
                }
            }, timePerScrollTick);
        }
        
        function scrollRight(){
            if(rightScroll == false && leftScroll == false && pageIndex < pageStarts.length-1){
                rightScroll = true;
                goToPos();
            }
        }
        
        function scrollLeft(){
            if(rightScroll == false && leftScroll == false && pageIndex > 0){
                leftScroll = true;
                goToPos();
            }
        }
            
        function checkButtons(){
            if(pageIndex == 0){
                document.getElementById("leftBtn").setAttribute("style","display:none;width:0%;");
                document.getElementById("rightBtn").setAttribute("style","display:block;width:10%;");
            }
            else if(pageIndex == pageStarts.length-1){
                document.getElementById("leftBtn").setAttribute("style","display:block;width:10%;");
                document.getElementById("rightBtn").setAttribute("style","display:none;width:0%;");
            }
            else{
                document.getElementById("leftBtn").setAttribute("style","display:block;width:10%;");
                document.getElementById("rightBtn").setAttribute("style","display:block;width:10%;");
            }
        }