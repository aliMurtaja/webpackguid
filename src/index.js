import { file1 } from './file1'

// import the .css
import './styles/style1.css'

// import the file(.png, jpg, exl.....etc)
import  ArwaPic1  from './images/arawa1.png'

// impo the .xml file (this has also their loader, see in config file)
import XmlFile1 from './xmlFiles/xml1.xml'

  function component() {
    file1();
    const element1 = document.createElement('div');

    element1.innerHTML = 'this is from ./src/index.js ok..'

    // adding the .css file
    element1.classList.add('hello');

    // adding the .image file
    // const element2 = document.createElement('div');
    const image = new Image();
    console.log(ArwaPic1)
    image.src = ArwaPic1;
    image.height = 200
    image.width = 200
    element1.appendChild(image);

    // adding the .xml file
    console.log(XmlFile1);


    return element1;
  }

  document.body.appendChild(component());