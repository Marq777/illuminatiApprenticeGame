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
        
    
        return $total_score = $first_question + $second_question + $third_question + $fourth_question + $fifth_question;
   
        
    });
});

console.log("total score is " + $total_score);

document.querySelector("#submit-quiz-button").addEventListener("click",function(){
    if($total_score>=16) {
        alert("Devious soul, you scored " + $total_score + ". You may proceed.");
        console.log("returned total score is " + $total_score);
        window.location.replace("interpretative_deduction.html");
    } else {
        alert(" You scored a " + $total_score + ". Shame. Looks like you don't have it in you to be a part of our organization. Here's some cat photos. Forget we ever existed.");
        console.log("returned total score is " + $total_score);
        window.location.replace("https://www.google.com/search?q=extremely+adorable+cats&tbm=isch&ved=2ahUKEwjb7ZPFj8P6AhWWFmIAHTiMD54Q2-cCegQIABAA&oq=extremely+adorable+cats&gs_lcp=CgNpbWcQAzIFCAAQgAQ6BAgjECc6CAgAEIAEELEDOgQIABBDOgYIABAeEAc6CAgAEB4QBxAFOggIABAeEAgQB1DzDFjXMmDdNGgAcAB4AYABhQKIAYASkgEGMTUuNS4zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=b1c6Y5v6DZatiLMPuJi-8Ak&bih=855&biw=1652&client=ubuntu&hs=pra")
    }
});