//convert centimeter to meter
const elements = document.getElementsByClassName('btn-convert');
for(let el of elements) {
    el.addEventListener('click', (event)=> {
        cmTom(event);
    });
}

//triangle
document.getElementById('btn-triangle').addEventListener('click', ()=> {
    const base = getValueById('base-triangle');
    const height = getValueById('height-triangle');
    if(base <= 0 || height <= 0 || isNaN(base) || isNaN(height)) {
        alert('Please enter valid numbers');
        document.getElementById('base-triangle').value = '';
        document.getElementById('height-triangle').value = '';
    }
    else {
        const area = 0.5 * base * height;
        setAreaById('area-triangle', area);
        document.getElementById('base-triangle').value = '';
        document.getElementById('height-triangle').value = '';
    }
});

//rectangle
document.getElementById('btn-rectangle').addEventListener('click', ()=> {
    const width = getValueById('width-rectangle');
    const length = getValueById('length-rectangle');
    if(width <= 0 || length <= 0 || isNaN(width) || isNaN(length)) {
        alert('Please enter valid numbers');
        document.getElementById('width-rectangle').value = '';
        document.getElementById('length-rectangle').value = '';
    }
    else {
        const area = width * length;
        setAreaById('area-rectangle', area);
        document.getElementById('width-rectangle').value = '';
        document.getElementById('length-rectangle').value = '';
    }
});

//parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', ()=> {
    const base = getValueById('base-parallelogram');
    const height = getValueById('height-parallelogram');
    if(base <= 0 || height <= 0 || isNaN(base) || isNaN(height)) {
        alert('Please enter valid numbers');
        document.getElementById('base-parallelogram').value = '';
        document.getElementById('height-parallelogram').value = '';
    }
    else {
        const area = base * height;
        setAreaById('area-parallelogram', area);
        document.getElementById('base-parallelogram').value = '';
        document.getElementById('height-parallelogram').value = '';
    }
});

//rhombus
document.getElementById('btn-rhombus').addEventListener('click', ()=> {
    const d1 = getValueById('diagonal1');
    const d2 = getValueById('diagonal2');
    if(d1 <= 0 || d2 <= 0 || isNaN(d1) || isNaN(d2)) {
        alert('Please enter valid numbers');
        document.getElementById('diagonal1').value = '';
        document.getElementById('diagonal2').value = '';
    }
    else {
        const area = 0.5 * d1 * d2;
        setAreaById('area-rhombus', area);
        document.getElementById('diagonal1').value = '';
        document.getElementById('diagonal2').value = '';
    }
});

//pentagon
document.getElementById('btn-pentagon').addEventListener('click', ()=> {
    const p = getValueById('p-pentagon');
    const b = getValueById('b-pentagon');
    if(p <= 0 || b <= 0 || isNaN(p) || isNaN(b)) {
        alert('Please enter valid numbers');
        document.getElementById('p-pentagon').value = '';
        document.getElementById('b-pentagon').value = '';
    }
    else {
        const area = 0.5 * p * b;
        setAreaById('area-pentagon', area);
        document.getElementById('p-pentagon').value = '';
        document.getElementById('b-pentagon').value = '';
    }
});

//ellipse
document.getElementById('btn-ellipse').addEventListener('click', ()=> {
    const a = getValueById('a-ellipse');
    const b = getValueById('b-ellipse');
    if(a <= 0 || b <= 0 || isNaN(a) || isNaN(b)) {
        alert('Please enter valid numbers');
        document.getElementById('a-ellipse').value = '';
        document.getElementById('b-ellipse').value = '';
    }
    else {
        const area = (Math.PI * a * b).toFixed(3);
        setAreaById('area-ellipse', area);
        document.getElementById('a-ellipse').value = '';
        document.getElementById('b-ellipse').value = '';
    }
});