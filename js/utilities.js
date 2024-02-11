function getValueById(id) {
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function setAreaById(id, area) {
    const field = document.getElementById(id);
    field.innerText = area;
}

function cmTom(e) {
    const parent = e.target.parentNode;
    const nodes = parent.childNodes;
    const areaId = nodes[1].getAttribute('id');
    const areaInCM = parseFloat(document.getElementById(areaId).innerText);
    setAreaById(areaId, areaInCM / 100);
    nodes[2].textContent = 'm';
}