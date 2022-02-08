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


