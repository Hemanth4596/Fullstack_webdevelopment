// ==========================================
// Visitor Count
// ==========================================

let visitorCount = 0;

window.addEventListener("load", function () {

    visitorCount++;

    const visitorElement =
        document.getElementById("visitorCount");

    if (visitorElement) {
        visitorElement.textContent = visitorCount;
    }

});


// ==========================================
// Dynamic Content Display
// ==========================================

function displayType(type) {

    const displayArea =
        document.getElementById("displayArea");

    if (type === "Text") {

        displayArea.innerHTML = `
            <h3>Dynamic Text</h3>
            <p>
                This text is displayed dynamically
                using JavaScript.
            </p>
        `;

    }

    else if (type === "Image") {

        displayArea.innerHTML = `
            <div class="faculty-images">

                <img
                    src="https://www.kluniversity.in/fphotos/actual/7633.jpg"
                    alt="Faculty 1"
                    width="200">

                <img
                    src="https://www.kluniversity.in/fphotos/actual/7257.jpg"
                    alt="Faculty 2"
                    width="200">

                <img
                    src="https://www.kluniversity.in/fphotos/actual/9085.jpg"
                    alt="Faculty 3"
                    width="200">

            </div>
        `;

    }

    else if (type === "Animation") {

        displayArea.innerHTML = `
            <div class="animated-box">
                🚀 Animation Running
            </div>
        `;

    }

}


// ==========================================
// Image Toggle
// ==========================================

const toggleImageButton =
    document.getElementById("toggleImageButton");

const images = [
    document.getElementById("toggleImage1"),
    document.getElementById("toggleImage2"),
    document.getElementById("toggleImage3")
];

let imageChanged = false;

toggleImageButton.addEventListener("click", function () {

    if (imageChanged === false) {

        images.forEach(function (image) {
            image.style.display = "none";
        });

        imageChanged = true;

    } else {

        images.forEach(function (image) {
            image.style.display = "inline-block";
        });

        imageChanged = false;

    }

});