const feelingsDiv = document.getElementById('feelings-div');
const addFeelingsToEntryButton = document.getElementById("addFeelingsToEntryButton");
const entryWelcomeDiv =document.getElementById("entryWelcomeDiv");
const suggestEntryDiv = document.getElementById("suggestEntryDiv");

addFeelingsToEntryButton.addEventListener('click', handleEntryBUtoon);

const JournalingFacts =[
    "Journaling promotes self-reflection and self-awareness.",
    "Journaling helps reduce stress and promotes relaxation.",
    "Journaling provides a safe space for emotional release and catharsis.",
    "Journaling enhances problem-solving skills by organizing thoughts and exploring solutions.",
    "Regular journaling improves creativity and fosters new ideas.",
    "Journaling strengthens memory and improves recall.",
    "Journaling facilitates goal setting and increases commitment to achieving them.",
    "Journaling promotes personal growth and self-improvement.",
    "Journaling enhances communication skills by practicing self-expression.",
    "Journaling improves clarity of thoughts and enhances decision-making abilities.",
    "Journaling helps develop organizational skills and promotes productivity.",
    "Journaling cultivates mindfulness and presence in the present moment.",
    "Journaling assists in regulating moods and emotions.",
    "Journaling facilitates exploration of personal values and beliefs.",
    "Journaling aids in healing from past traumas by providing an outlet for processing emotions.",
    "Journaling promotes gratitude and appreciation for life's blessings.",
    "Journaling helps manage anger by providing a constructive way to express and understand it.",
    "Journaling allows for the release of negative thoughts and promotes a more positive mindset.",
    "Journaling boosts self-confidence and self-esteem.",
    "Journaling strengthens decision-making skills by weighing pros and cons.",
    "Journaling enhances problem-solving abilities by analyzing different perspectives and solutions.",
    "Journaling improves focus and concentration.",
    "Journaling encourages self-discovery and self-expression.",
    "Journaling helps develop empathy and understanding towards oneself and others.",
    "Journaling promotes self-discipline and consistency.",
    "Journaling serves as a record of personal experiences and growth over time.",
    "Journaling allows for tracking progress and celebrating achievements.",
    "Journaling helps develop creativity and imagination.",
    "Journaling fosters a sense of gratitude and appreciation for the small things in life.",
    "Journaling encourages self-acceptance and self-love.",
    "Journaling provides an outlet for exploring and processing complex emotions.",
    "Journaling enhances problem-solving skills by encouraging brainstorming and analysis.",
    "Journaling helps develop self-motivation and resilience.",
    "Journaling provides a space for exploring fears and finding solutions.",
    "Journaling improves communication with oneself and can be used as a tool for self-dialogue.",
    "Journaling promotes self-care and mental well-being.",
    "Journaling helps identify patterns and triggers in behavior and emotions.",
    "Journaling enhances self-expression and creativity in various areas of life.",
    "Journaling fosters a deeper understanding of one's own values, beliefs, and aspirations.",
    "Journaling can be a source of inspiration and a way to capture ideas for future projects.",
    "Journaling encourages introspection and deepens the relationship with oneself.",
    "Journaling serves as a private space for reflection without fear of judgment.",
    "Journaling promotes emotional resilience and coping skills.",
    "Journaling helps manage anxiety and overwhelm by providing a structured outlet for thoughts and worries.",
    "Journaling improves writing skills and encourages self-expression through words.",
    "Journaling can help identify and challenge negative thought patterns.",
    "Journaling encourages self-accountability and personal growth.",
    "Journaling facilitates problem-solving by breaking down complex issues into smaller parts.",
    "Journaling provides a tool for self-assessment and self-reflection.",
    "Journaling is a valuable self-care practice that promotes overall well-being."
    ];
const journalingQuestions = [
        "What are three things you are grateful for today?",
        "What are your top five values in life and how do they guide your decisions?",
        "Describe a challenge you recently faced and how you overcame it.",
        "What are your biggest dreams and aspirations?",
        "Reflect on a recent accomplishment that made you proud.",
        "How do you define success, and what steps are you taking to achieve it?",
        "Write about a person who has had a significant impact on your life and why.",
        "What are three things you would like to improve about yourself and why?",
        "Describe a time when you took a risk and what you learned from the experience.",
        "Write about a book or movie that has influenced you and why.",
        "What are your favorite ways to practice self-care and why?",
        "Reflect on a time when you felt completely in your element and describe the experience.",
        "Write about a difficult decision you had to make and how you came to your conclusion.",
        "What are your short-term and long-term goals? How do they align with your values?",
        "Describe a place that brings you peace and tranquility. Why does it have that effect on you?",
        "Reflect on a recent failure or setback and what you learned from it.",
        "Write about a skill or hobby you would like to develop and why it interests you.",
        "What are your favorite ways to overcome stress or adversity?",
        "Describe a person you admire and the qualities that you find inspiring.",
        "Write about a time when you felt completely out of your comfort zone and what you gained from the experience.",
        "What are your favorite ways to express creativity and why?",
        "Reflect on a lesson you learned from a past mistake.",
        "Write about a meaningful friendship in your life and what makes it special.",
        "Describe a time when you felt deeply connected to nature and why it resonated with you.",
        "What are your favorite ways to practice mindfulness and be present in the moment?",
        "Reflect on a time when you received valuable feedback and how it influenced your growth.",
        "Write about a personal value or belief that has changed over time and the reasons behind the change.",
        "What are your favorite ways to give back to your community or make a positive impact?",
        "Describe a goal or dream that you have achieved and how it has impacted your life.",
        "Reflect on a time when you had to forgive someone and the healing it brought.",
        "Write about a place you have always wanted to visit and why it intrigues you.",
        "What are your favorite ways to practice self-reflection and introspection?",
        "Describe a lesson you learned from a difficult relationship or conflict.",
        "Reflect on a time when you felt a sense of deep gratitude and appreciation.",
        "Write about a personal habit or routine that brings structure to your day and why it is important to you.",
        "What are your favorite ways to recharge and rejuvenate your energy?",
        "Describe a time when you received unexpected kindness and how it affected you.",
        "Reflect on a goal or dream that you have yet to pursue and the steps you can take to get closer to it.",
        "Write about a lesson you learned from a difficult loss or failure.",
        "What are your favorite ways to foster positivity and optimism in your life?",
        "Describe a mentor or role model who has positively influenced your personal or professional development.",
        "Reflect on a time when you had to step out of your comfort zone and the growth it brought.",
        "Write about a personal strength or talent that you are proud of and how it enhances your life.",
        "What are your favorite ways to cultivate inner peace and serenity?",
        "Describe a time when you made a difficult ethical decision and the reasoning behind your choice.",
        "Reflect on a time when you had to confront a fear and the lessons you learned from facing it."
    ];
const feelingsList = [
        "Happy",
        "Sad",
        "Angry",
        "Excited",
        "Anxious",
        "Frustrated",
        "Nervous",
        "Content",
        "Grateful",
        "Worried",
        "Relaxed",
        "Confused",
        "Inspired",
        "Loved",
        "Jealous",
        "Hopeful",
        "Overwhelmed",
        "Guilty",
        "Bored",
        "Curious"
];


renderEntryPage()

function renderEntryPage(){
    renderWelcomeDiv();
    renderFeelingsDiv();
}


function renderWelcomeDiv(){
    entryWelcomeDiv.innerHTML = createEntryWelcomeDiv();
}


function handleEntryBUtoon(){
    getSelectedFeelings();
}


function createEntryWelcomeDiv(){
    let html =`
    <h1> good to see you again, ${localStorage.getItem('name')}.</h1>
    <h3>did you know?</h3>
    <h4>${JournalingFacts[getRandomInt(0, JournalingFacts.length)]}</h4>
    `

    return html
}


function createFeelingsButtons(){
    let htmlToAdd = ``
    for(i=0 ; i < feelingsList.length ; i++){
        
            
            htmlToAdd +=`
            
            <button onclick="changeFeelingColor(${i})" id="feelingNo-${i}" class="feelingButtonRemove btn bg-ash text-light m-1"> ${feelingsList[i]} </button>
            `     
      
    }

   
    return htmlToAdd
}


function renderFeelingsDiv(){
    feelingsDiv.innerHTML = createFeelingsButtons();

}


function getSelectedFeelings(){
    let feelings = []
    for(i=0 ;i < feelingsList.length ; i++){
        let feelingButton = document.getElementById(`feelingNo-${i}`);
        if(feelingButton.classList.contains('feelingButtonAdd')){
            feelings.push(feelingsList[i])
        }
    }
    console.log(feelings);
}


function changeFeelingColor(no){
    let feelingButton = document.getElementById(`feelingNo-${no}`);

    if(feelingButton.classList.contains('feelingButtonAdd')){

        feelingButton.classList.remove('feelingButtonAdd');
        feelingButton.classList.add('feelingButtonRemove');
        feelingButton.classList.remove('shadow');

    } else if(feelingButton.classList.contains('feelingButtonRemove')){

        feelingButton.classList.remove('feelingButtonRemove');
        feelingButton.classList.add('feelingButtonAdd');
        feelingButton.classList.add('shadow');

    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

function createTitle(){
    
}



