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
    const rotateDuration = 1000
    for (var secret of secrets) {
        var pattern = secret.pattern
        if (pattern.length === selectedIds.length && pattern.every((value, index) => value === selectedIds[index])) {
            rotateElements(selectedElements, rotateDuration)
            clearSelected(selectedElements, rotateDuration)
            break;
        }
    }
}

function rotateElements(elements, duration) {
    var triangleWraps = elements.map(function(elem) {
        return elem.parentElement
    })

    triangleWraps.forEach((elem) => {elem.classList.add("rotate")})

    // after <duration>ms remove rotate
    setTimeout(function () {
        triangleWraps.forEach((elem) => {elem.classList.remove("rotate")})
    }, duration);
}

function clearSelected(elements, delay) {
    // after <delay>ms clear selected
    setTimeout(function () {
        elements.forEach((elem) => {
            elem.classList.remove("selected");
        });
    }, delay);
}
