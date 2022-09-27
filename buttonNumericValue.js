(function() {
    $(document).ready(function () {
        $('input:radio').on('change',function(){
            var $1st_question = document.querySelector('input[name="questionTwoChoice"]:checked').val();
            var $2nd_question = document.querySelector('input[name="questionTwoChoice"]:checked').val();
            var $3rd_question = document.querySelector('input[name="questionThreeChoice"]:checked').value;
            var $4th_question = document.querySelector('input[name="questionFourChoice"]:checked').value;
            var $5th_question = document.querySelector('input[name="questionFiveChoice"]:checked').value;
            $1st_question = $1st_question? $1st_question : 0; 
            $2nd_question = $2nd_question? $2nd_question : 0;
            $3rd_question = $3rd_question? $3rd_question : 0; 
            $4th_question = $4th_question? $4th_question : 0;
            $5th_question = $5th_question? $5th_question : 0;
            
            var $total_score = $1st_question + $2nd_question + $3rd_question + $4th_question + $5th_question;
        });
    })();

    
    document.querySelector("#submit-quiz-button").addEventListener("click",function(){
        if($total_score>=16) {
            alert("You devious soul. You scored a " + $total_score + ". You may proceed.");
            console.log("good");
            //let questionValueArray = [];
            //location.replace("terms_and_conditions.html");
        } else {
            alert("Sorry but you need an evilness score of 16 or higher to proceed. And you scored a " + $total_score + ". You have failed. Here's a nice collage of cat pictures to distract you from our existence.");
            console.log("gooder");
        };
    });       
})();