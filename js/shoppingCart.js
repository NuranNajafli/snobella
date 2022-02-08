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


let fav = document.getElementById("fav");
let fav2 = document.getElementById("fav2");
let fav3 = document.getElementById("fav3");

fav.addEventListener("click", ()=>{
    
    console.log(fav)
        if(fav.style.color="#212529"){
            fav.style.color="#FF695E"
            
        }
        else if(fav.style.color="#FF695E"){
            fav.style.color="#212529"
        }
})
fav2.addEventListener("click", ()=>{
    
    if(fav2.style.color="#212529"){
        fav2.style.color="#FF695E"
    }
    else if(fav2.style.color="#FF695E"){
        fav2.style.color="#212529"
    }
    console.log(fav2)
})
fav3.addEventListener("click", ()=>{
    
    if(fav3.style.color="#212529"){
        fav3.style.color="#FF695E"
    }
    else if(fav3.style.color="#FF695E"){
        fav3.style.color="#212529"
    }
    console.log(fav3)
})