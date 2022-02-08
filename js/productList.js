let count = 0
function addShopping(cnt) {
    if (cnt != null) {
        count += parseInt(cnt);
    }
    else {
        count++;
    }
    document.getElementById("badgeForShopping").innerHTML = count
    alert("Product have added successfully!!")
}


let heardSpan =document.getElementsByClassName("heardSpan");

[...heardSpan].forEach(element => {
    element.addEventListener("click",()=>{

        if(element.style.color="#FF695E"){
            element.style.color="#212529"
            
        }
        else{
            element.style.color="#FF695E"
        }
    })
    
});



let check1 = document.getElementsByClassName("check1");

[...check1].forEach(element=>{
    element.addEventListener("click",()=>{
        
        if(element.style.fontWeight="400"){
            element.style.fontWeight="bold"
        }
        else if(element.style.fontWeight="bold"){
            element.style.fontWeight="400"
           
        }

    })
})