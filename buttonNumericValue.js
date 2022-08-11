$(document).ready(function () {
    $('input:radio').on('change',function(){
    
        
        let $first_question = parseInt($('input[name="questionOneChoice"]:checked').val());
        $first_question = $first_question? $first_question : 0;
        let $second_question = parseInt($('input[name="questionTwoChoice"]:checked').val());
        $second_question = $second_question? $second_question : 0;
        let $third_question = parseInt($('input[name="questionThreeChoice"]:checked').val());
        $third_question = $third_question? $third_question : 0;
        let $fourth_question = parseInt($('input[name="questionFourChoice"]:checked').val());
        $fourth_question = $fourth_question? $fourth_question : 0;
        let $fifth_question = parseInt($('input[name="questionFiveChoice"]:checked').val());
        $fifth_question = $fifth_question? $fifth_question : 0;

        let questionValueArray = [];
        questionValueArray.push($first_question,$second_question,$third_question,$fourth_question,$fifth_question); //Pushes question values into previous line's empty array

        let sumArrayOfNumbers = (numbersArray) => {
            return numbersArray.reduce(
                (accumulator, number) => {return number + accumulator; }, 0
            );
        };

        let $total_score = sumArrayOfNumbers(questionValueArray);

        document.querySelector("#submit-quiz-button").addEventListener("click",function(){
            if($total_score>=16) {
                alert("You devious soul. You scored a " + $total_score + ". You may proceed.");
                let questionValueArray = [];
                //location.replace("terms_and_conditions.html");
            } else {
                alert("Sorry but you need an evilness score of 16 or higher to proceed. And you scored a " + $total_score + ". You have failed. Here's a nice collage of cat pictures to distract you from our existence.");
                let questionValueArray = [];
                //location.replace("https://www.google.com/search?q=cat+pictures&sxsrf=ALiCzsal8D3uC4tdl8_RS8mrKhnX8dBTIA:1660174847783&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj1o8Sgub35AhWPEGIAHWYJDN0Q_AUoAXoECAEQAw&biw=1440&bih=725&dpr=1")
            };
       
        });

    
    });
});




    /*function addValues() {
        const onePoint = 1;
        const twoPoints = 2;
        const threePoints = 3;
        const fourPoints = 4;

        const total = [onePoint,twoPoints,threePoints,fourPoints]
        totalAdded = total.reduce()

        if() {

        }
    };
    
    });
})();

*/


/* 

1. Assign dividers into variables (points)
2. Assign variables a number 1-4
3. Put variables into an array
4. Add all variables together
5. Check if sum is greater than the set number to allow entry

*/







/*const onePoint = parseInt(document.querySelector(".PersonalityAnswer1 input").value);     //Assign dividers into variables by points
    const twoPoints = parseInt(document.querySelector(".PersonalityAnswer2 input").value);
    const threePoints = parseInt(document.querySelector(".PersonalityAnswer3 input").value);
    const fourPoints = parseInt(document.querySelector(".PersonalityAnswer4 input").value); */


    /*function checkButtons1to4() {
        Q1A1_true = document.getElementById('Question1').getElementsByClassName('PersonalityAnswer1')
        Q1A1_true.checked = true;

        Q1A2_true = document.getElementById('Question1').getElementsByClassName('PersonalityAnswer2')
        Q1A2_true.checked = true;

    }*/




           //let $total_score = $first_question + $second_question + $third_question + $fourth_question + $fifth_question;
    
    /*
    var $second_question = parseInt("#Question2 input[name=questionTwoChoice]:checked".val());
    var $third_question = parseInt("#Question3 input[name=questionThreeChoice]:checked".val());
    var $fourth_question = parseInt("#Question4 input[name=questionFourChoice]:checked".val());
    var $fifth_question = parseInt("#Question5 input[name=questionFiveChoice]:checked".val());
    

    var $total_score = $first_question + $second_question + $third_question + $fourth_question + $fifth_question; */ //total score

    //document.querySelector("#submit-quiz-button").addEventListener("click",function(){
    //alert("something");
    //console.log("This function has been reached");