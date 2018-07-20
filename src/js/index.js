import _ from 'lodash';
import '../styles/index.css';
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me !';
    btn.style.color = 'red';
    btn.onclick = printMe;
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());

