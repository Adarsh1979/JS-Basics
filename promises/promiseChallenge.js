const imgAddr1 = "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ";

const imgAddr2 = "https://www.daysoftheyear.com/wp-content/uploads/international-cat-day1-scaled.jpg";

const imageContainer = document.querySelector(".images")


const createImage = (imagePath) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.src = imagePath;
        img.addEventListener("load", () => {
            imageContainer.append(img);
            resolve(img);
        })

        img.addEventListener("error", () => {
            reject(new Error("Image not found"));
        })
    })
};

const wait = (seconds) => {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve();
        }, seconds*1000);
    });
}

// setTimeout(() => {
//     createImage(imgAddr1).then( () => {
//         setTimeout(() => {
//             createImage(imgAddr2);
//         }, 2000);
//     })
// }, 2000);

let currentImg;

createImage(imgAddr1).then((data) => {
    currentImg = data;
    return wait(2);
})
.then(() => {
    currentImg.style.display = "none";
    return wait(2);
})
.then(() => {
    return createImage(imgAddr2);
})
.then((data) => {
    currentImg = data;
    return wait(2);
})
.then(() => {
    currentImg.style.display = "none";
})
.catch((err) => {
    console.log(err);
})