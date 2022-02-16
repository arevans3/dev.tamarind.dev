let secrets = [
    {
        pattern: ["orange-triangle"],
    },
    {
        pattern: ["teal-triangle", "green-triangle", "blue-triangle"],
    },
]

function toggleSelected(element) {
    element.classList.toggle('selected');
    checkSecrets();
}

function checkSecrets() {
    var selectedElements = [...document.getElementsByClassName("selected")]
    var selectedIds =  selectedElements.map(function(elem) {
        return elem.id;
    })
    for (var secret of secrets) {
        var pattern = secret.pattern
        if (pattern.length === selectedIds.length && pattern.every((value, index) => value === selectedIds[index])) {
            var delay = 1000;
            patternGlow(selectedElements, delay)
            break;
        }
    }
}

function patternGlow(selectedElements, delay) {
    var triangleWraps = selectedElements.map(function(elem) {
        return elem.parentElement
    })

    triangleWraps.forEach((elem) => {elem.classList.add("glow")})

    // after <delay>ms clear selected
    setTimeout(function () {
        triangleWraps.forEach((elem) => {elem.classList.remove("glow")})
        selectedElements.forEach((elem) => {
            elem.classList.remove("selected");
        });
    }, delay);
}
