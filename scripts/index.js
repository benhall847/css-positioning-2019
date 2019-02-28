// When we click...
// When we click any .picture-frame
// we see a large version of THAT image.

// const means that it CANNOT BE REASSIIGGNNEDDD
const targetElements = document.querySelectorAll("[data-target]");

// for (var i = 0; i <= (targetElements.length - 1); i++){


// }
function ClickResponseSUPER1000version2() {
    console.log("OMG ITS AMAAAAZIZINGGGGG");
    console.log("YAAAAAA IM ALLIIIIVEEEE");
}


function attachClickHandler(oneElement) {
    oneElement.addEventListener("click", ClickResponseSUPER1000version2);
}

targetElements.forEach(attachClickHandler);