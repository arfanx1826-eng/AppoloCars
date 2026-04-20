// IMAGE SLIDER
let images = [
    "images/car1.jpg",
    "images/car2.jpg",
    "images/car3.jpg"
];

let current = 0;

function showImage() {
    document.getElementById("heroImage").src = images[current];
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage();
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage();
}

// CURSOR EFFECT
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    let trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";

    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 500);
});

// CLICK BOOST
document.addEventListener("click", () => {
    cursor.style.transform = "scale(2)";
    cursor.style.boxShadow = "0 0 30px red, 0 0 60px orange";

    setTimeout(() => {
        cursor.style.transform = "scale(1)";
        cursor.style.boxShadow = "0 0 15px red, 0 0 30px red";
    }, 200);
});