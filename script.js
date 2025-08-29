

// call history 
const callHistoryData = []

// call function


// copy fintion

// card - 1 national emergency
document.getElementById("national-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-emergency").innerText
    navigator.clipboard.writeText(numberCopy);

})

// card - 2 police

document.getElementById("police-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied
 
    //  number id
    const numberCopy = document.getElementById("num-police").innerText
    navigator.clipboard.writeText(numberCopy);

})

// card - 3 fire
document.getElementById("fire-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-fire").innerText
    navigator.clipboard.writeText(numberCopy);
})

// card - 4 ambulance 
document.getElementById("ambulance-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-ambulance").innerText
    navigator.clipboard.writeText(numberCopy);
})

// card - 5 women
document.getElementById("women-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-women").innerText
    navigator.clipboard.writeText(numberCopy);
})

// card - 6 anti-cor
document.getElementById("anti-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-anti").innerText
    navigator.clipboard.writeText(numberCopy);
})

// card - 7 electricity
document.getElementById("electricity-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-Electricity").innerText
    navigator.clipboard.writeText(numberCopy); 
})

// card - 8 brac
document.getElementById("brac-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-brac").innerText
    navigator.clipboard.writeText(numberCopy); 
})

// card - 9 railway
document.getElementById("railway-copy")
.addEventListener('click', function(e){
   const copied=  parseInt(document.getElementById("national-copy-nav").innerText)

   const totalCopied = copied + 1;
   document.getElementById("national-copy-nav").innerText = totalCopied

    const numberCopy = document.getElementById("num-railway").innerText
    navigator.clipboard.writeText(numberCopy); 
})


// coin and call function

// card-1
document.getElementById("national-call-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin
    const serviceName = document.getElementById("call-national").innerText;
    const callNumber = document.getElementById("num-emergency").innerText;

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);

    // call history
    const data = {
  name: "National Emergency Number",
  callNumber: 999,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id="card-one" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)







    
})

// card -2 

document.getElementById("police-call-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-police").innerText;
    const callNumber = document.getElementById("num-police").innerText;

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);

     // call history
    const data = {
  name: "Police Helpline Number",
  callNumber: 999,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id="card-two" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)


    
})

// card -3 

document.getElementById("fire-call-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-fire").innerText;
    const callNumber = document.getElementById("num-fire").innerText;

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);
     // call history
    const data = {
  name: "Fire Service Number",
  callNumber: 999,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id="card-three" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)

    
})

// card - 4 ambulance

document.getElementById("ambulance-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-ambulance").innerText;
    const callNumber = document.getElementById("num-ambulance").innerText;

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);
    // call history
    const data = {
  name: "Ambulance Service Number",
  callNumber: 1994-999999,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id="card-four" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)

    
})

// card - 5 women

document.getElementById("women-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-women").innerText;
    const callNumber = document.getElementById("num-women").innerText;

    

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);
    // call history
    const data = {
  name: "Women & Child Helpline Number",
  callNumber: 109,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id = "card-five" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)
    
})

// card - anti-corruption -6
document.getElementById("anti-corruption-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-anti").innerText;
    const callNumber = document.getElementById("num-anti").innerText;

    

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);
    // call history
    const data = {
  name: "Anti-Curruption Service Number",
  callNumber: 106,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id= "card-six" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)
    
})

// Electricity card -7 

document.getElementById("Electricity-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-Electricity").innerText;
    const callNumber = document.getElementById("num-Electricity").innerText;

    

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);
    // call history
    const data = {
  name: "Electricity Service Number",
  callNumber: 16216,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id="card-seven" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)
    
})

// brac card -8
document.getElementById("brac-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-brac").innerText;
    const callNumber = document.getElementById("num-brac").innerText;

    

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);
    // call history
    const data = {
  name: "Brac Service Number",
  callNumber: 16445,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id="card-eight" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)
    
})

// Railway card - 9
document.getElementById("railway-btn")
.addEventListener('click', function(e){
    e.preventDefault();
    const currentCoin = parseInt(document.getElementById("coin-less")
    .innerText)
    let newcoin = currentCoin - 20 ;
    

    if(newcoin<0){
        alert("Insufficient balance")
        return;
    }
    document.getElementById("coin-less")
    .innerText = newcoin

    const serviceName = document.getElementById("call-railway").innerText;
    const callNumber = document.getElementById("num-railway").innerText;

    // Show info
    alert(`Service Name: ${serviceName}\nCall Number: ${callNumber}`);

    
    // call history
    const data = {
  name: "Railway service Number",
  callNumber: 163,
  date: new Date().toLocaleTimeString()  
};

callHistoryData.push(data);

const history = document.getElementById("call-history-container")
const div = document.createElement("div")

div.innerHTML = `
<div id="all-dlt" class="flex justify-between items-center mx-auto ml-2 mr-2 mt-2 bg-gray-100 rounded-xl">
                    <!-- text div -->
                    <div class="p-3">
                     <h1 class="font-bold">${data.name}</h1>
                     <p class="text-gray-400">${data.callNumber}</p>
                    </div>
                    <!-- time div -->
                    <div>
                      <p class="text-gray-400">${data.date}</p>
                    </div>
                 </div> 


`
history.appendChild(div)
    
})
// card -1
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-one")
    removeHistory.innerText = ""
    
})
// card -2
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-two")
    removeHistory.innerText = ""
    
})
// card -3
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-three")
    removeHistory.innerText = ""
    
})

// // card -4
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-four")
    removeHistory.innerText = ""
    
})
// card -5
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-five")
    removeHistory.innerText = ""
    
})
// // card -6
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-six")
    removeHistory.innerText = ""
    console.log("clear clicked")
})
// // card -7
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-seven")
    removeHistory.innerText = ""
    console.log("clear clicked")
})

// card -8
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("card-eight")
    removeHistory.innerText = ""
    console.log("clear clicked")
})

// card -9
document.getElementById("clear-all")
.addEventListener('click', function(){
    const removeHistory = document.getElementById("all-dlt")
    removeHistory.innerText = ""
    console.log("clear clicked")
})




// re-useable function




// heart
function attachHeartIncrement(iconId) {
   let heartClick = parseInt(document.getElementById("nav-heart").innerText)

   let totalClick = heartClick + 1

    
     document.getElementById("nav-heart")
     .innerText = totalClick
    
}


// heart icon functionality

// National emergency
document.getElementById("heart-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
    
     attachHeartIncrement("heart-icon")
     
     

})

// Police
document.getElementById("police-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
    attachHeartIncrement("police-icon")

    
})

// fire card -3
document.getElementById("fire-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
    attachHeartIncrement("fire-icon")

})

// ambulance card - 4

document.getElementById("ambulance-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
        attachHeartIncrement("ambulance-icon")


})

// women and child card - 5
document.getElementById("women-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
    attachHeartIncrement("women-icon")


})

// anti card - 6
document.getElementById("anti-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
    attachHeartIncrement("anti-icon")

})

// electricity
document.getElementById("electricity-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
        attachHeartIncrement("electricity-icon")

})

// brac

document.getElementById("brac-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
    attachHeartIncrement("brac-icon")

    
})

// railway
document.getElementById("railway-icon")
.addEventListener('click', function(e){
    e.preventDefault()
    
    attachHeartIncrement("railway-icon")

})




