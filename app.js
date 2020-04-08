let an = 0
let am = 0
let ex = 0
let dr = 0
let answers = 0

document.getElementById("questionTextP3").innerHTML = ("Start")

let questions = ["Persuasive","Fearful","Open-minded","Original","Cautious","Convincing","Aggressive","Good-natured","Docile","Dogged","Open-minded","Bold",
"Charming","Loyal","Determined","Even-tempered","Willing","Eager","Nervy","Strong-willed","Agreeable","High-spirited","Confident","Even-tempered",
"Obliging","Assertive","Precise","Animated","Disciplined","Cheerful","Restless","Resigned","Sympathetic","Persistant","Obedient","Spontaneous",
"Competitive","Tolerant","Fussy","Pioneering","Respectful","Jovial","Influential","Optimistic","Generous","Unconquerable","Inspiring","Submissive",
"Considerate","Brave","Timid","Adaptable","Argumentative","Kind","Nonchalant","Patient","Self-reliant","Lighthearted","Soft spoken","Trusting",
"Adventurous","Peaceful","Positive","Moderate","Cordial","Vigorous","Receptive","Controlled","Accurate","Good mixer","Decisive","Lenient",
"Talkative","Conventional","Outspoken","Satisfied","Audacious","Popular","Companionable","Polished"] //array of answers to chose from with 4 options

function start() {
    document.getElementById("questionText").innerHTML =("Examine the following word sets and choose one from each set that describes you best. When you have answered all twenty, plot your answers on the score sheet.") 
    document.getElementById("questionTextP2").innerHTML =("Don’t think long and hard about completing the word, select what is the closest to you, not exactly the perfect word. The purpose of completing this will become apparent when you complete your social skills workshop.")
    document.getElementById("questionTextP3").innerHTML =("")
    if(answers ===0){
        document.getElementById("answer1Text").innerHTML = (questions[0])
        document.getElementById("answer2Text").innerHTML = (questions[1])
        document.getElementById("answer3Text").innerHTML = (questions[2])
        document.getElementById("answer4Text").innerHTML = (questions[3])
    }
    document.getElementById("question").disabled = true;
} // starts the questionnaire by changing the text to the question and adding the first answers

function nextQ() {
    answers +=1
    if (answers >= 19) {
        document.getElementById("nextQText2").innerHTML = ("your score is "+an+" Analytical points, "+am+" Amiable points, "+ex+" Expressive points and "+dr+" Driver points")
        document.getElementById("nextQText").innerHTML = ("")
        document.getElementById("answer1Text").innerHTML = ""
        document.getElementById("answer2Text").innerHTML = ""
        document.getElementById("answer3Text").innerHTML = ""
        document.getElementById("answer4Text").innerHTML = ""
        document.getElementById("nextQ").disabled = false;
        document.getElementById("answer1").disabled = true;
        document.getElementById("answer2").disabled = true;
        document.getElementById("answer3").disabled = true;
        document.getElementById("answer4").disabled = true;
    }
    if(answers <19){
        document.getElementById("answer1Text").innerHTML = (questions[(answers*4)])
        document.getElementById("answer2Text").innerHTML = (questions[(answers*4+1)])
        document.getElementById("answer3Text").innerHTML = (questions[(answers*4+2)])
        document.getElementById("answer4Text").innerHTML = (questions[(answers*4+3)])
        document.getElementById("nextQ").disabled = true;
        document.getElementById("answer1").disabled = false;
        document.getElementById("answer2").disabled = false;
        document.getElementById("answer3").disabled = false;
        document.getElementById("answer4").disabled = false;
    }
    
} // onclick moves onto the next set of answers by adding one to var answers to change the answers text divs with the text in the array and changes if buttons are disabled or not
//and enable the answer buttons unless all answers have been chosen

function selectAnswer1() {
    if (answers )
    if(answers ===0){
        dr += 1
    }
    if(answers ===1){
        an += 1
    }
    if(answers ===2){
        am += 1
    }
    if(answers ===3){
        ex += 1
    }
    if(answers ===4){
        am += 1
    }
    if(answers ===5){
        am += 1
    }
    if(answers ===6){
        am += 1
    }
    if(answers ===7){
        dr += 1
    }
    if(answers ===8){
        am += 1
    }
    if(answers ===9){
        dr += 1
    }
    if(answers ===10){
        an += 1
    }
    if(answers ===11){
        am += 1
    }
    if(answers ===12){
        am += 1
    }
    if(answers ===13){
        dr += 1
    }
    if(answers ===14){
        dr += 1
    }
    if(answers ===15){
        ex += 1
    }
    if(answers ===16){
        ex += 1
    }
    if(answers ===17){
        an += 1
    }
    if(answers ===18){
        ex += 1
    }
    if(answers ===19){
        dr += 1
    }
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
    document.getElementById("nextQ").disabled = false;
}
function selectAnswer2() {
    if(answers ===0){
        am += 1
    }
    if(answers ===1){
        ex += 1
    }
    if(answers ===2){
        dr += 1
    }
    if(answers ===3){
        am += 1
    }
    if(answers ===4){
        ex += 1
    }
    if(answers ===5){
        ex += 1
    }
    if(answers ===6){
        dr += 1
    }
    if(answers ===7){
        am += 1
    }
    if(answers ===8){
        dr += 1
    }
    if(answers ===9){
        am += 1
    }
    if(answers ===10){
        am += 1
    }
    if(answers ===11){
        dr += 1
    }
    if(answers ===12){
        dr += 1
    }
    if(answers ===13){
        am += 1
    }
    if(answers ===14){
        am += 1
    }
    if(answers ===15){
        am += 1
    }
    if(answers ===16){
        dr += 1
    }
    if(answers ===17){
        ex += 1
    }
    if(answers ===18){
        an += 1
    }
    if(answers ===19){
        am += 1
    }
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
    document.getElementById("nextQ").disabled = false;
}
function selectAnswer3() {
    if(answers ===0){
        an += 1
    }
    if(answers ===1){
        dr += 1
    }
    if(answers ===2){
        an += 1
    }
    if(answers ===3){
        dr += 1
    }
    if(answers ===4){
        an += 1
    }
    if(answers ===5){
        dr += 1
    }
    if(answers ===6){
        an += 1
    }
    if(answers ===7){
        ex += 1
    }
    if(answers ===8){
        an += 1
    }
    if(answers ===9){
        an += 1
    }
    if(answers ===10){
        ex += 1
    }
    if(answers ===11){
        ex += 1
    }
    if(answers ===12){
        an += 1
    }
    if(answers ===13){
        ex += 1
    }
    if(answers ===14){
        ex += 1
    }
    if(answers ===15){
        dr += 1
    }
    if(answers ===16){
        am += 1
    }
    if(answers ===17){
        dr += 1
    }
    if(answers ===18){
        dr += 1
    }
    if(answers ===19){
        ex += 1
    }
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
    document.getElementById("nextQ").disabled = false;
}
function selectAnswer4() {
    if(answers ===0){
        ex += 1
    }
    if(answers ===1){
        am += 1
    }
    if(answers ===2){
        ex += 1
    }
    if(answers ===3){
        an += 1
    }
    if(answers ===4){
        dr += 1
    }
    if(answers ===5){
        an += 1
    }
    if(answers ===6){
        ex += 1
    }
    if(answers ===7){
        an += 1
    }
    if(answers ===8){
        ex += 1
    }
    if(answers ===9){
        ex += 1
    }
    if(answers ===10){
        dr += 1
    }
    if(answers ===11){
        an += 1
    }
    if(answers ===12){
        ex += 1
    }
    if(answers ===13){
        an += 1
    }
    if(answers ===14){
        an += 1
    }
    if(answers ===15){
        an += 1
    }
    if(answers ===16){
        an += 1
    }
    if(answers ===17){
        am += 1
    }
    if(answers ===18){
        am += 1
    }
    if(answers ===19){
        an += 1
    }
    document.getElementById("answer1").disabled = true;
    document.getElementById("answer2").disabled = true;
    document.getElementById("answer3").disabled = true;
    document.getElementById("answer4").disabled = true;
    document.getElementById("nextQ").disabled = false;
} // all 4 above functions act as a click on button to add a point to the different social values of an, am, ex and dr and enable next question button

document.getElementById("catText").innerHTML = "Social questionnaire"
//changes text header

document.getElementById("nextQText").innerHTML = "Next Question?"
// makes bottom text change

document.getElementById("nextQ").disabled = true;