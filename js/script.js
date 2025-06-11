function validateForm() {
    // Ambil DOM dari id "name" di HTML
    const name = document.getElementById("name");
    console.log(name.value);
    if (name.value == '') {
        alert('Please fill out your name!');
    } else {
        alert(`Hi ${name.value}`);
    }
}

let indexBanner = 0;

showBanner();

// Increment index
function nextBanner () {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    // DOM banner
    const listImage = document.getElementsByClassName("banner-img");

    // Reset index
    if (indexBanner > listImage.length - 1) {
        indexBanner = 0;
    }

    // Looping to hide all banner
    for (let i = 0; i < listImage.length; i++) {
        // Add a check to ensure the element exists
        if (listImage[i]) {
            listImage[i].style.display = "none";
        }
    }
    // Add a check for the selected banner as well
    if (listImage[indexBanner]) {
      listImage[indexBanner].style.display = "block";
    }
    console.log(listImage);
}

setInterval(nextBanner, 3000)