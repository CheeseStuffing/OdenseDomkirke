// Ind sæt dato, for den dag vi tæller ned til 
    var countDownDate = new Date("Apr 15, 2019 10:00:00").getTime();
// opdateringer tæller ned hvert sekund
    var x = setInterval(function() {
// Dagens dato og klokkeslæt 
    var now = new Date().getTime();
                
// Finder afstanden mellem nu og datoen vi tæller ned til 
    var distance = countDownDate - now;
                
// Tidsberengninger for dage timer, minutter og sekunder.
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
// udføre resultatet i det element med id'et "countdown"
    document.getElementById("count").innerHTML = days + "d " + hours + "t " + minutes + "m " ;
    // + seconds + "s " er fjernet
                
// Når nedtællingen er over, vil det stå denne tekst 
    if (distance < 0 && distance < -25200) {
            clearInterval(x);
            document.getElementById("count").innerHTML = "Kroppensdag er nu igang";
        }
    }, );
