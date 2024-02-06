import _ from 'lodash';
import './index.css';
import image from "./image.jpeg";
import printMe from './utils';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement("button")

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = image;
    btn.innerHTML = "click to fire event"
    btn.onclick = printMe

    element.appendChild(myIcon);
    element.appendChild(btn)

    return element;
}

document.body.appendChild(component());