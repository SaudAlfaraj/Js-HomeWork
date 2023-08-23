// let saud = document.getElementById("saud");

// let image = document.createElement("img");
// image.src = "https://cdn.saudigates.net/wp-content/uploads/2022/03/%D9%85%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D8%B5%D9%88%D8%B1%D8%A9-%D8%A8%D8%A7%D8%B1%D8%B2%D8%A9-780x470.jpg";
// image.alt = " Logo";


// let title = document.createElement("p")
// title.textContent = "الرياض"

// saud.appendChild(title)
// saud.appendChild(image)


let addimage = document.getElementById("add");
let div = document.getElementById("saud")
addimage.addEventListener("click", function a() {
    let image = document.createElement("img");
    image.src = prompt("ضع رابط الصورة");
    image.alt = "صورة";
    
    let title = document.createElement("p");
    title.textContent = prompt("ضع عنوان للصورة");
    saud.appendChild(title)
    saud.appendChild(image)
    
    let deletbtn = document.createElement("button");
    deletbtn.innerHTML = "Delete"
    saud.appendChild(deletbtn)
    let updatebtn = document.createElement("button");
    updatebtn.innerHTML = "Update";
    saud.appendChild(updatebtn)
    deletbtn.addEventListener("click", function () {
        saud.removeChild(image)
        saud.removeChild(deletbtn)
        saud.removeChild(updatebtn)
        saud.removeChild(title)
    })
    updatebtn.addEventListener("click", function () {
        let newImageUrl = prompt(" رابط الصورة الجديدة ");
        title.textContent = prompt("ضع عنوان للصورة");
        if (newImageUrl !== null && newImageUrl.trim() !== "") {
          image.src = newImageUrl;
        } else {
          alert("لم يتم تغيير الصورة.");
        }
    
      });
})