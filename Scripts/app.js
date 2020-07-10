// setup your IIFE (Immediately Invoked Function Expression)
/*File name : app.js
  Author's name : Seol Cheon
  Web site name : COMP125-MIDTERM
  file description: a text file containin JavaScript code that is used to add paragraphs and 
  show inputs of variables in contact from in the console as a outputs */
(function () {
"use strict";


// YOUR CODE GOES HERE

function addParagraphsToFirstPhoto() {        
    let firstPhoto = document.getElementById("IntroParagraph")
    if (firstPhoto) //if firstPhoto exists
    {
        //create paragraph
        let firstParagraph = document.createElement("p");  
        //configure paragraph          
        firstParagraph.innerText =
            `    
            Now is the time to travel to Greece. The country may be going through an economic crisis, but many travellers say that it hasn't impacted the experience of visiting. Plus, there may be some great deals. 

            Greece has 1,400 islands, though only 230 of them are inhabited. 
            
            And while everyone knows about Santorini and Mykonos, there are gorgeous lesser-known islands in Greece, too.      

            `; 
        //attach new paragraph
        firstPhoto.appendChild(firstParagraph);
        return true;
    }return false;    
}

function addParagraphsToSecondPhoto() {      
    let secondPhoto = document.getElementById("Folegandros")
    if (secondPhoto) //if jumbotron exists
    {
        let secondParagraph = document.createElement("p");            
        secondParagraph.textContent =
            `                
            Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.          
                
            `; 
        //attach new div
        secondPhoto.appendChild(secondParagraph);
        return true;
    }return false; 
}

function addParagraphsToThirdPhoto() {      
    let thirdPhoto = document.getElementById("Alonissos")
    if (thirdPhoto) //if jumbotron exists
    {
        let thirdParagraph = document.createElement("p");            
        thirdParagraph.textContent =
            `                
            Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.          
                
            `; 
        //attach new div
        thirdPhoto.appendChild(thirdParagraph);
        return true;
    }return false; 
}

function addParagraphsToFourthPhoto() {      
    let fourthPhoto = document.getElementById("Spetses")
    if (fourthPhoto) //if jumbotron exists
    {
        let fourthParagraph = document.createElement("p");            
        fourthParagraph.textContent =
            `                
            This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.          
                
            `; 
        //attach new div
        fourthPhoto.appendChild(fourthParagraph);
        return true;
    }return false; 
}

function addParagraphsToFifthPhoto() {      
    let fifthPhoto = document.getElementById("Amorgos")
    if (fifthPhoto) //if jumbotron exists
    {
        let fifthParagraph = document.createElement("p");            
        fifthParagraph.textContent =
            `                
            Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.          
                
            `; 
        //attach new div
        fifthPhoto.appendChild(fifthParagraph);
        return true;
    }return false; 
}

function addParagraphsToSixthPhoto() {      
    let sixthPhoto = document.getElementById("Syros")
    if (sixthPhoto) //if jumbotron exists
    {
        let sixthParagraph = document.createElement("p");            
        sixthParagraph.textContent =
            `                
            A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.          
                
            `; 
        //attach new div
        sixthPhoto.appendChild(sixthParagraph);
        return true;
    }return false; 
}

function addParagraphsToSeventhPhoto() {      
    let seventhPhoto = document.getElementById("Milos")
    if (seventhPhoto) //if jumbotron exists
    {
        let seventhParagraph = document.createElement("p");            
        seventhParagraph.textContent =
            `                
            This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.          
                
            `; 
        //attach new div
        seventhPhoto.appendChild(seventhParagraph);
        return true;
    }return false; 
}

function addParagraphsToEighthPhoto() {      
    let eighthPhoto = document.getElementById("Hydra")
    if (eighthPhoto) //if jumbotron exists
    {
        let eighthParagraph = document.createElement("p");            
        eighthParagraph.textContent =
            `                
            The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.          
                
            `; 
        //attach new div
        eighthPhoto.appendChild(eighthParagraph);
        return true;
    }return false; 
}

function addParagraphsToNinethPhoto() {      
    let ninethPhoto = document.getElementById("Ithaca")
    if (ninethPhoto) //if jumbotron exists
    {
        let ninethParagraph = document.createElement("p");            
        ninethParagraph.textContent =
            `                
            Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.          
                
            `; 
        //attach new div
        ninethPhoto.appendChild(ninethParagraph);
        return true;
    }return false; 
}

function addParagraphsToTenthPhoto() {      
    let tenthPhoto = document.getElementById("Gavdos")
    if (tenthPhoto) //if jumbotron exists
    {
        let tenthParagraph = document.createElement("p");            
        tenthParagraph.textContent =
            `                
            Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.          
                
            `; 
        //attach new div
        tenthPhoto.appendChild(tenthParagraph);
        return true;
    }return false; 
}

function OutputVariables()
    {        
        let contact1 = document.forms;
        if(contact1)
        {
        let sendButton =document.getElementById("sendButton")        
        sendButton.addEventListener("click",(event) =>
        {   //prevent it from submitting when you click
        let firstNameInput = document.getElementById('firstName');
        console.log(`your first name is: `,firstNameInput.value);

        let lastNameInput = document.getElementById('lastName');
        console.log(`your last name is: `,lastNameInput.value);

        let contactNumberInput = document.getElementById('contactNumber');
        console.log(`your contact number is: `,contactNumberInput.value);

        let emailAddressInput = document.getElementById('email');
        console.log(`your email address is: `,emailAddressInput.value); 

        let yourMessageInput = document.getElementById('yourMessage');
        console.log(`you Message is: `,yourMessageInput.value); 
                        
        event.preventDefault();
        })
        return true; 
        }      
        return false;     
}


function Start()
    {
        console.log("App Started...");
        addParagraphsToFirstPhoto();
        addParagraphsToSecondPhoto();
        addParagraphsToThirdPhoto();
        addParagraphsToFourthPhoto();
        addParagraphsToFifthPhoto();
        addParagraphsToSixthPhoto();
        addParagraphsToSeventhPhoto();
        addParagraphsToEighthPhoto();
        addParagraphsToNinethPhoto();
        addParagraphsToTenthPhoto();
        OutputVariables(); 
       
    }

    window.addEventListener("load", Start);


})();

