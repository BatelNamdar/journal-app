const homePage = document.getElementById('homePage');
const body = document.body

if(!localStorage.getItem('name')){

    renderOpeningScreen();
} else{
    renderHomePage()

}


const nameInput = document.getElementById('nameInput');
const dateOfBirthInput = document.getElementById('dateOfBirthInput');
const continueButton = document.getElementById('continueButton');


function entranceButtonHAndle(){
    getNameAndDate()
    renderHomePage()
}

function renderOpeningScreen(){
    
    
    homePage.innerHTML =`<div class="conatiner-fluid">
    <div class="row d-flex justify-content-center pt-5">
    <div class="col-10">
    <h1 class="text-center">welcome to your journal! </h1>
    </div>
    </div>
    </div>
    <div class="container">
    
    <div class="row d-flex justify-content-center ">
    <div class="col-md-6 col-sm-8 bg-desert text-center rounded shadow mt-50  p-3">
    
    <label for="nameInput" class="m-2">Enter your name</label>
    <br>
    <input type="text" id="nameInput" class="w-50 m-2 shado">
    
    <div class="row d-flex justify-content-center ">
    <hr class="w-75 m-3 ">
    </div>

    <label class="m-2" for="dateOfBirthInput">Enter your date of birth</label>
    <br>
    <input type="date"  id="dateOfBirthInput" class="w-50 m-2">
    
    <br>
    <button id="continueButton"  class="btn px-4 bg-green text-light shadow m-3 continueButton ">continue</button>
    
    </div>
    
    </div>
    </div>`;
    
}

function renderHomePage(){
    body.classList.remove("bg-sage")
    body.classList.add("bg-green")
    homePage.innerHTML =`
    <div class="container">
    <br>
    <h1 class="text-center mt- color-pink">welcome to ${capitalize( localStorage.getItem('name') ) }'s Journal</h1>
    <div class="row d-flex justify-content-center ">
    <hr class="w-75 m-3 ">
    </div>
    </div>
    <div class="container bg-pink w-100 rounded mt-4 shadow">
    <div class="row w-100 d-flex justify-content-center">
    <div class="col-12 text-center ">
    <button id="newEntryButton" class="btn p-3 w-75 mt-5 bg-buff text-light shadow rounded">
        <a class="text-light text-decoration-none" href="/pages/addEntry.html">
        ADD JOURNAL ENTERY <i class="bi bi-arrow-right-square mx-4 text-light"></i>
    </a>
    </button>
    
    <br>
    
    <button id="pastEntryButton" class=" btn p-3 w-75 mt-4 bg-sage text-light shadow rounded">
        <a class="text-light text-decoration-none" href="/pages/pastEntries.html">

            VIEW PAST ENTERIES<i class="bi bi-arrow-right-square mx-4 text-light"></i>
        </a>
        
    </button>
    <br>

    <button id="takeAMomentButton" class=" btn p-3 w-75 mt-4 mb-5 bg-ash text-light shadow rounded">
        <a class="text-light text-decoration-none" href="/pages/takeAMoment.html">

            TAKE A MOMENT<i class="bi bi-arrow-right-square mx-4 text-light"></i>
        </a>
        
    </button>
    </div>
    </div>
    
    </div>
    `
}

function getNameAndDate(){
    localStorage.setItem('name', `${capitalize(nameInput.value)}`)
    localStorage.setItem('DOB',`${dateOfBirthInput.value}` )
    
}

function capitalize(name){
    const str = name;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2
}

capitalize('batel')


continueButton.addEventListener('click', entranceButtonHAndle)








