var elements = document.getElementsByClassName("sidebox");
var shown = false;
function toggleProblemTags(e) {
    if(shown === false) {
        e.currentTarget.children[3].style.display = "block";
        shown = true;
    }
    else {
        e.currentTarget.children[3].style.display = "none";
        shown = false;
    }
}

for(var el of elements) {
    for(var sidebox of el.children) {
        if(sidebox.innerText === "→ Problem tags") {
            console.log("found it");
            el.children[0].style.cursor = "pointer";
            el.children[3].style.display = "none";
            el.addEventListener('click', (e) => {
                toggleProblemTags(e);
            })
        }
    }
}