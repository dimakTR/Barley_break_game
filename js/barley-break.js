$(document).ready(function() {
    var counter = 0;
    var timer = null;
    function reset(){
        clearInterval(timer);
            counter = 0;
            $("#clock").text("0");
            $("#counter").text("0");
        };
    function startInterval(){
        timer = setInterval(function() {
            counter++;
            $("#clock").html(counter)}, 1000);
        };
    function stopInterval(){
            clearInterval(timer);
        };
    
    /* ------------ Buttons Logic ------------ */
    $("body").on('click','.square', function() {
            if ( $(this).attr("id") === "n16" ) {
                if ( $("#n15").attr("class") === "empty"){
                    moveLeft($(this)); 
                }
                if ( $("#n12").attr("class") === "empty"){
                    moveUp($(this));      
                }
            }
            if ( $(this).attr("id") === "n15" ) {
                if ( $("#clock").text() <= "0"){
                    startInterval();
                };
                if ( $("#n16").attr("class") === "empty") { 
                    moveRight($(this));
                }
                if ( $("#n11").attr("class") === "empty") {
                    moveUp($(this));
                }
                if ( $("#n14").attr("class") === "empty") {
                    moveLeft($(this));  
                }
            }
            if ( $(this).attr("id") === "n14" ) {
                if ( $("#n13").attr("class") === "empty" ){
                    moveLeft($(this));  
                }
                if ( $("#n10").attr("class") === "empty" ){
                    moveUp($(this)); 
                } 
                if ( $("#n15").attr("class") === "empty" ){
                    moveRight($(this));
                }
            }
            if ( $(this).attr("id") === "n13" ) {
                if ( $("#n14").attr("class") === "empty" ){
                    moveRight($(this)); 
                }
                if ( $("#n9").attr("class") === "empty"){
                    moveUp($(this)); 
                }
            }
            if ( $(this).attr("id") === "n9" ) {
                if ( $("#n5").attr("class") === "empty"){
                    moveUp($(this)); 
                }
                if ( $("#n10").attr("class") === "empty" ){
                    moveRight($(this));    
                }
                if ($("#n13").attr("class") === "empty" ){
                    moveDown($(this));
                }   
            }
            if ( $(this).attr("id") === "n10" ) {
                if ($("#n9").attr("class") === "empty" ){
                    moveLeft($(this));
                }
                if ($("#n6").attr("class") === "empty" ){
                    moveUp($(this));
                }
                if ($("#n11").attr("class") === "empty"){
                    moveRight($(this));
                }
                if ($("#n14").attr("class") === "empty" ){
                    moveDown($(this));
                }
            }
            if ( $(this).attr("id") === "n11" ) {
                if ( $("#n10").attr("class") === "empty" ){
                    moveLeft($(this));
                }
                if ( $("#n7").attr("class") === "empty" ){
                    moveUp($(this));
                }
                if ( $("#n12").attr("class") === "empty" ){
                    moveRight($(this));
                }
                if ( $("#n15").attr("class") === "empty"){
                    moveDown($(this));
                }
            }
            if ( $(this).attr("id") === "n12" ) {
                if ( $("#clock").text() <= "0"){
                    startInterval();
                }; 
                if ( $("#n11").attr("class") === "empty" ){
                    moveLeft($(this)); 
                }
                if ( $("#n16").attr("class") === "empty"){
                    moveDown($(this));
                }
                if ( $("#n8").attr("class") === "empty"){
                    moveUp($(this));
                }
            }
            if ( $(this).attr("id") === "n5" ) {
                if ( $("#n1").attr("class") === "empty" ){
                    moveUp($(this));               
                }
                if ( $("#n6").attr("class") === "empty" ){
                    moveRight($(this));
                }
                if ( $("#n9").attr("class") === "empty" ){
                    moveDown($(this));
                }
                
            }
            if ( $(this).attr("id") === "n6" ) {
                if ( $("#n5").attr("class") === "empty" ){
                    moveLeft($(this));
                }
                if ( $("#n2").attr("class") === "empty"  ){
                    moveUp($(this));
                }
                if ( $("#n7").attr("class") === "empty"  ){
                    moveRight($(this));
                }
                if ( $("#n10").attr("class") === "empty" ){
                    moveDown($(this));
                }
            }
            if ( $(this).attr("id") === "n7" ) {
                if ( $("#n6").attr("class") === "empty" ){
                    moveLeft($(this));
                }
                if ( $("#n3").attr("class") === "empty" ){
                    moveUp($(this));
                }
                if ( $("#n8").attr("class") === "empty" ){
                    moveRight($(this));
                }
                if ( $("#n11").attr("class") === "empty"){
                    moveDown($(this));
                }
            }
            if ( $(this).attr("id") === "n8" ) {
                if ( $("#n7").attr("class") === "empty" ){
                    moveLeft($(this));
                }
                if ( $("#n4").attr("class") === "empty" ){
                    moveUp($(this));
                }
                if ( $("#n12").attr("class") === "empty"){
                    moveDown($(this));
                }
            }
            if ( $(this).attr("id") === "n1" ) {
                if ( $("#n5").attr("class") === "empty"){
                    moveDown($(this));
                }
                if ( $("#n2").attr("class") === "empty"){
                    moveRight($(this));
                }
            }
            if ( $(this).attr("id") === "n2" ) {
                if ( $("#n1").attr("class") === "empty" ){
                    moveLeft($(this));
                }
                if ( $("#n6").attr("class") === "empty" ){
                    moveDown($(this));
                }
                if ( $("#n3").attr("class") === "empty" ){
                    moveRight($(this));
                }
            }
            if ( $(this).attr("id") === "n3" ) {
                if ( $("#n2").attr("class") === "empty" ){
                    moveLeft($(this));  
                }
                if ( $("#n7").attr("class") === "empty" ){
                    moveDown($(this));
                }
                if ( $("#n4").attr("class") === "empty"){
                    moveRight($(this));
                }
            }
            if ( $(this).attr("id") === "n4" ) {
                if ( $("#n3").attr("class") === "empty"){
                    moveLeft($(this));
                }
                if ( $("#n8").attr("class") === "empty"){
                    moveDown($(this));
                }
            }             
    });
    var i=0;
    function moveRight(data){
        data.animate({ "left" : "+=112px"},100, function() {
            var number = data.text();
            $(".empty").text(number);
            $(".empty").removeClass().addClass("square");
            data.removeClass().addClass("empty")          
            data.empty();
            data.animate({ "left" : "-=112px"},0);
            i++;
            $("#counter").text(i);
            checkForWin();
            });    
    } 
    function moveLeft(data){
        data.animate({ "left" : "-=112px"},100, function() {
            var number = data.text();
            $(".empty").text(number);
            $(".empty").removeClass().addClass("square");
            data.removeClass().addClass("empty")          
            data.empty();
            data.animate({ "left" : "+=112px"},0);
            i++;
            $("#counter").text(i);
            checkForWin();
            });     
    }
    function moveUp(data){
        data.animate({ "bottom" : "+=112px"},100, function() {
            var number = data.text();
            $(".empty").text(number);
            $(".empty").removeClass().addClass("square");
            data.removeClass().addClass("empty")          
            data.empty();
            data.animate({ "bottom" : "-=112px"},0);
            i++;
            $("#counter").text(i);
            checkForWin();
            });    
    }
    function moveDown(data){
        data.animate({ "bottom" : "-=112px"},100, function() {
            var number = data.text();
            $(".empty").text(number);
            $(".empty").removeClass().addClass("square");
            data.removeClass().addClass("empty")          
            data.empty();
            data.animate({ "bottom" : "+=112px"},0);
            i++;
            $("#counter").text(i);
            checkForWin();
            });  
    }  
         
    fillTiles(); 
    
    function restartGame(){
        $(".empty").removeClass().addClass("square");
        $("#n16").removeClass().addClass("empty");
        $("#n16").empty();
        fillTiles();
        reset();        
    };
    $("#new_game").on('click', function(){
        $("#winner").css("display", "none");
        $("#counter").text("0");
        i=0;     
        restartGame();
    }); 
    $("#restart").on('click', function(){  
        i=0;     
        restartGame();    
    });    
    function checkForWin() {
        if ( $("#winner").css("display") === "none"){
            if ( $("#n1").text() === "1" && $("#n2").text() === "2" && $("#n3").text() === "3" && $("#n4").text() === "4" && $("#n5").text() === "5" && $("#n6").text() === "6" && $("#n7").text() === "7"  &&
            $("#n8").text() === "8" && $("#n9").text() === "9"  && $("#n10").text() === "10" && $("#n11").text() === "11" && $("#n12").text() === "12" && $("#n13").text() === "13" && $("#n14").text() === "14" &&
            $("#n15").text() === "15"  ) {
                    $("#winner").css("display", "block");
                    stopInterval();
                }
        }        
        else {
            $("#winner").css("display", "none");
            restartGame();
        }    
    };

    
    /*------- Fill the tiles with numbers -----------*/
    
    function fillTiles(){ 
        for (var numbers=[],i=0;i<15;++i) numbers[i]=i;
            numbers[0] = 15;

        function shuffle(array) {
          var tmp, current, top = array.length;
          if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
          return array;
        }
        numbers = shuffle(numbers);   
        for (i=0; i<15; i++) {
            $("#n"+(i+1)).text(numbers[i]);
        }
    };
});


