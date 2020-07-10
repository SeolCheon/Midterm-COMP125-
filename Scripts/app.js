// setup your IIFE (Immediately Invoked Function Expression)
/*File name : app.js
  Author's name : Seol Cheon
  Web site name : COMP125-MIDTERM
  file description: a text file containin JavaScript code that is used to add paragraphs and 
  show inputs of variables in contact from in the console as a outputs */
(function () {
"use strict";


// YOUR CODE GOES HERE

//function for adding intro paragraph 
function addParagraphsToFirstPhoto() {  
    //get element by id and let it be firstPhoto     
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
//function for adding a paragraph to Folegandros picture
function addParagraphsToSecondPhoto() {     
    //get element by id and let it be secondPhoto  
    let secondPhoto = document.getElementById("Folegandros")
    if (secondPhoto) //if secondPhoto exists
    {
        //create element p
        let secondParagraph = document.createElement("p");
        //configure the element            
        secondParagraph.textContent =
            `                
            Folegandros is almost a Greek cliché, full of beautiful whitewashed houses with bright blue doors lining cobblestoned streets on steep cliffs. Rugged and remote, without chain hotels or package tours — not even a bank or ATM — and accessible only by ferry, the volcanic island boasts solitude in spades, secluded beaches, and incredible sunsets.          
                
            `; 
        //attach new paragraph
        secondPhoto.appendChild(secondParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Alonissos picture
function addParagraphsToThirdPhoto() { 
    //get element by id and let it be thirdPhoto     
    let thirdPhoto = document.getElementById("Alonissos")
    if (thirdPhoto) //if thirdPhoto exists
    {
        //create element p
        let thirdParagraph = document.createElement("p"); 
        //configure the element           
        thirdParagraph.textContent =
            `                
            Off the mainland, this island, whose surrounding waters are a designated marine park full of seals and dolphins, is a nature lover's dream. The spectacular spot's crystal clear waters and beautiful beaches are perfect for diving, and its lush flora and dense forests ideal for hikes. Since the rich landscape is chock full of indigenous herbs, it's also known for its traditional medicine, and home of the International Academy of Homeopathy.          
                
            `; 
        //attach new paragraph
        thirdPhoto.appendChild(thirdParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Spetses picture
function addParagraphsToFourthPhoto() {   
    //get element by id and let it be fourthPhoto    
    let fourthPhoto = document.getElementById("Spetses")
    if (fourthPhoto) //if fourth exists
    {
        //create element p
        let fourthParagraph = document.createElement("p"); 
        //configure the element           
        fourthParagraph.textContent =
            `                
            This bohemian paradise is more Côte d'Azur than Grecian island. Spetses was hot in the '60s, when it hosted Marilyn Monroe and Elizabeth Taylor, and remains a swanky summer retreat for Athens' glitterati to this day, full of fancy hotels, mansions and yachts, and stylish boutiques. Aside from a handful of locally-owned cabs, the four-mile-long island has banned cars in town, giving it a refreshingly 19th-century vibe, with horse-drawn carriages being a common sight.          
                
            `; 
        //attach new paragraph
        fourthPhoto.appendChild(fourthParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Amorgos picture
function addParagraphsToFifthPhoto() {    
    //get element by id and let it be fifthPhoto   
    let fifthPhoto = document.getElementById("Amorgos")
    if (fifthPhoto) //if fifthPhoto exists
    {
        //create element p
        let fifthParagraph = document.createElement("p"); 
        //configure the element           
        fifthParagraph.textContent =
            `                
            Shipwrecks, sea caves and beautiful clear waters make Amorgos popular with snorkelers, but the mountainous island is the perfect compromise between unwinding and adventure, boasting beautiful beaches but also hiking, scuba diving and rock-climbing. One of the island's main attractions is the 11th-century cliffside monastery of Panayia Hozoviótissa, which is precariously carved into a cliff.          
                
            `; 
        //attach new paragraph
        fifthPhoto.appendChild(fifthParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Syros picture
function addParagraphsToSixthPhoto() {  
    //get element by id and let it be sixthPhoto     
    let sixthPhoto = document.getElementById("Syros")
    if (sixthPhoto) //if sixthPhoto exists
    {
        //create element p
        let sixthParagraph = document.createElement("p");  
        //configure the element          
        sixthParagraph.textContent =
            `                
            A favourite Athenian escape and former shipowners' vacation spot full of grand mansions, Syros is little known to foreigners. Famous for its neoclassical architecture and perfectly preserved heritage, its capital, Ermoupolis, was a 13th-century Venetian-built town and important trade and industrial centre, and boasts giant churches and beautiful villas, a stunning town hall, and labyrinthine streets and stairways.          
                
            `; 
        //attach new paragraph
        sixthPhoto.appendChild(sixthParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Milos picture
function addParagraphsToSeventhPhoto() {   
    //get element by id and let it be seventhPhoto    
    let seventhPhoto = document.getElementById("Milos")
    if (seventhPhoto) //if seventhPhoto exists
    {
        //create element p
        let seventhParagraph = document.createElement("p"); 
        //configure the element           
        seventhParagraph.textContent =
            `                
            This volcanic island, with catacombs and ancient iron mines to explore, is dramatically rugged, and famous for its stunning rock formations. Often likened to a moonscape, it's also known for its hot springs, the ancient Venus De Milo statue that was found here, and for its diversity of incredible beaches. Known as "the island of colours" it's home to around 80 beaches — some only accessible by boat — ranging from stunningly white, to striking black, and even unusual red and grey. However, each beach has the same Evian-clear turquoise waters, and is surrounded by a rugged mountain landscape.          
                
            `; 
        //attach new p(paragraph)
        seventhPhoto.appendChild(seventhParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Hydra picture
function addParagraphsToEighthPhoto() {      
    //get element by id and let it be eighthPhoto
    let eighthPhoto = document.getElementById("Hydra")
    if (eighthPhoto) //if eighthPhoto exists
    {
        //create an element p
        let eighthParagraph = document.createElement("p");  
        //configure the element          
        eighthParagraph.textContent =
            `                
            The first thing you'll notice on this beautiful island is the lack of cars — and buses, motorcycles, or other wheeled vehicles, as well as high rises. The winding little streets full of beautiful 18th-century mansions, churches, cathedrals, museums and art galleries are covered in cobblestones, and mostly trafficked by donkeys and humans. Back in the day, the island attracted celebrities like Leonard Cohen and Sophia Loren, but was somehow forgotten over the years. That means that travellers to Hydra can have the chic yet almost rural island paradise more or less to themselves.          
                
            `; 
        //attach new p(paragraph)
        eighthPhoto.appendChild(eighthParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Ithaca picture
function addParagraphsToNinethPhoto() { 
    //get element by id and let it be ninethPhoto     
    let ninethPhoto = document.getElementById("Ithaca")
    if (ninethPhoto) //if nineth exists
    {
        //create an element p
        let ninethParagraph = document.createElement("p"); 
        //configure the element           
        ninethParagraph.textContent =
            `                
            Most famous for being the home of Odysseus, and a prominent figure in Homer's "The Odyssey," Ithaca is said to have been inhabited since the 2nd millennium BC. Made up of two islands joined by a narrow strip of land, many visit it to see the legendary sites mentioned by Homer. However, Ithaca is more than its mythical counterpart, beckoning with secluded beaches, dramatic cliffs, beautiful olive groves, and sleepy fishing villages full of Byzantine churches and monasteries.          
                
            `; 
        //attach new p(paragraph)
        ninethPhoto.appendChild(ninethParagraph);
        return true;
    }return false; 
}
//function for adding a paragraph to Gavdos picture
function addParagraphsToTenthPhoto() {  
    //get element by id and let it be tenthPhoto    
    let tenthPhoto = document.getElementById("Gavdos")
    if (tenthPhoto) //if tenthPhoto exists
    {
        //create an element p
        let tenthParagraph = document.createElement("p");  
        //configure the element          
        tenthParagraph.textContent =
            `                
            Near the more well-known Crete, Gavdos is the most southern island in Greece — and the most southern spot in Europe discounting the Canaries. Only accessible by ferry, the remote island has only about 50 permanent residents, and can feel like your private playground. Local legend has it that the island was the home of goddess Calypso, who kept Odysseus prisoner here. Today, a favorite tourist activity is to visit the spot believed to be her cave. Be warned, you won't find any luxury hotels here. While the romantically under-developed, super laid back island has a number of rooms for rent, those are limited, as the real draw here for many is the free, seaside camping.          
                
            `; 
        //attach new p(paragraph)
        tenthPhoto.appendChild(tenthParagraph);
        return true;
    }return false; 
}
//function for ouputting variables in contact form to console.
function OutputVariables()
    {   
        //let forms be contact1     
        let contact1 = document.forms;
        if(contact1) //if contact1 exists
        {
        //get element by id "sendButton" and let it be sendButton    
        let sendButton =document.getElementById("sendButton") 
        //when I click sendButton       
        sendButton.addEventListener("click",(event) =>
        {   
        //get element by id 'firstName' and let it be firstNameInput    
        let firstNameInput = document.getElementById('firstName');
        //show the input value in console
        console.log(`your first name is: `,firstNameInput.value);

        //get element by id 'lastName' and let it be lastNameInput
        let lastNameInput = document.getElementById('lastName');
        //show the input value in console
        console.log(`your last name is: `,lastNameInput.value);

        //get element by id 'contactNumber' and let it be contactNumberInput
        let contactNumberInput = document.getElementById('contactNumber');
        //show the input value in console
        console.log(`your contact number is: `,contactNumberInput.value);

        //get element by id 'email' and let it be emailAddressInput
        let emailAddressInput = document.getElementById('email');
        //show the input value in console
        console.log(`your email address is: `,emailAddressInput.value); 

        //get element by id 'yourMessage' and let it be yourMessageInput
        let yourMessageInput = document.getElementById('yourMessage');
        //show the input value in console
        console.log(`you Message is: `,yourMessageInput.value); 
         
        //prevent it from submitting when you click
        event.preventDefault();
        })
        return true; 
        }      
        return false;     
}

//(bonus) function for validating form
function validateForm()
{
    //let form be contactForm
    let contactForm =document.forms;
    if(contactForm)//if contactFrom exists
    {
        //get element by id 'firstName' and let it be firstNameValidate
        let firstNameValidate =document.getElementById("firstName");
        firstNameValidate.addEventListener("blur",(event)=>  //when the firstNameValidate has lost focus
        {
            if(firstNameValidate.value.length <2)    //if the input length of firstName is less than 2
            {
                firstNameValidate.focus();    //make it get focus             
                console.log(`your first name length is too short.`);//display this in console
            }
            else //if not
            {
                console.log(`your first name is saved`); //display this in console.
            }
        });   

        //get element by id 'lastName' and let it be lastNameValidate
        let lastNameValidate =document.getElementById("lastName");
        lastNameValidate.addEventListener("blur",(event)=> //when the lastNameValidate has lost focus
        {
            if(lastNameValidate.value.length <2) //if the input length of lastName is less than 2
            {
                lastNameValidate.focus();      //make it get focus           
                console.log(`your last name length is too short.`);//display this in console
            }
            else//if not
            {
                console.log(`your last name is saved`);//display this in console
            }
        });

        //get element by id 'contactNumber' and let it be contactNumberValidate
        let contactNumberValidate =document.getElementById("contactNumber");
        contactNumberValidate.addEventListener("blur",(event)=> //when the contactNumberValidate has lost focus
        {
            if(contactNumberValidate.value.length <10) //if the input length of contact number is less than 10
            {
                contactNumberValidate.focus();      //make it get focus           
                console.log(`your contact number length is less than 10.`); //display this in console
            }
            else //if not
            {
                console.log(`your contact number is saved`); //display this in console
            }
        });
        //get element by id 'emailName' and let it be emailAddressValidate
        let emailAddressValidate =document.getElementById("email");
        emailAddressValidate.addEventListener("blur",(event)=>   //when the emailAddressValidate has lost focus
        {
            if(emailAddressValidate.value.length <=0)  //if the user didn't put email address
            {
                emailAddressValidate.focus();     //make it get focus               
                console.log(`please enter your email address`);   //display this in console
            }
            else //if the user put email address
            {
                console.log(`your email address is saved`);    //display this in console
            }
        });
        //get element by id 'yourMessage' and let it be yourMessageValidate
        let yourMessageValidate =document.getElementById("yourMessage");
        yourMessageValidate.addEventListener("blur",(event)=>     //when the yourMessageValidate has lost focus
        {
            if(yourMessageValidate.value.length >50)        //if length of message is more than 50
            {
                yourMessageValidate.focus();           //make it get focus     
                console.log(`your message is too long. please write less than 50 letters`); //display this in console
            }
            else //if not
            {
                console.log(`your message is saved`);   //display this in console
            }
        });



    }

}

//function for implementing functions when page loaded
function Start()   
    {
        console.log("App Started...");  //display this in console
        addParagraphsToFirstPhoto();    //implement addParagraphsToFirstPhoto function 
        addParagraphsToSecondPhoto();   //implement addParagraphsToSecondPhoto function
        addParagraphsToThirdPhoto();    //implement addParagraphsToThirdPhoto function
        addParagraphsToFourthPhoto();   //implement addParagraphsToFourthPhoto function
        addParagraphsToFifthPhoto();    //implement addParagraphsToFifthPhoto function
        addParagraphsToSixthPhoto();    //implement addParagraphsToSixthPhoto function
        addParagraphsToSeventhPhoto();  //implement addParagraphsToSeventhPhoto function
        addParagraphsToEighthPhoto();   //implement addParagraphsToEighthPhoto function
        addParagraphsToNinethPhoto();   //implement addParagraphsToNinethPhoto function
        addParagraphsToTenthPhoto();    //implement addParagraphsToTenthPhoto function
        OutputVariables();              //implement OutputVariables function
        validateForm();                 //implement validateForm fuction
       
    }

    window.addEventListener("load", Start); //when page is loaded, emplement Start function


})();

