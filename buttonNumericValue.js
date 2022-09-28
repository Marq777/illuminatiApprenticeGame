let $total_score = 0;

$(document).ready(function () {
    $('input:radio').on('change',function(){
    
        var $first_question = parseInt($('input[name=questionOneChoice]:checked').val());    
        var $second_question = parseInt($('input[name=questionTwoChoice]:checked').val());
        var $third_question = parseInt($('input[name=questionThreeChoice]:checked').val());
        var $fourth_question = parseInt($('input[name=questionFourChoice]:checked').val());
        var $fifth_question = parseInt($('input[name=questionFiveChoice]:checked').val());;
        $first_question = $first_question? $first_question : 0;
        $second_question = $second_question? $second_question : 0;
        $third_question = $third_question? $third_question : 0;
        $fourth_question = $fourth_question? $fourth_question : 0;
        $fifth_question = $fifth_question? $fifth_question : 0;
        
        
        console.log("1st = " + $first_question); //For debugging in browser console/to see if number values line up.
        console.log("2nd = " + $second_question);
        console.log("3rd = " + $third_question);
        console.log("4th = " + $fourth_question);
        console.log("5th = " + $fifth_question);
        console.log("total score is " + $total_score);
    
        return $total_score = $first_question + $second_question + $third_question + $fourth_question + $fifth_question;
   
        
    });
});

document.querySelector("#submit-quiz-button").addEventListener("click",function(){
    if($total_score>=16) {
        alert("Devious soul, you scored " + $total_score + ". You may proceed.");
        console.log("returned total score is " + $total_score);
        //location.replace("terms_and_conditions.html");
    } else {
        alert("Try again loser. You scored " + $total_score + ".");
        console.log("returned total score is " + $total_score);
    }
});