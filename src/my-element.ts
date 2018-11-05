const template = document.createElement('template');
template.innerHTML = "<style>h1 { color:red } </style><h1>Hello World!</h1>";

class MyElement extends HTMLElement {
        
    constructor() {
        // always call super() first
        super(); 
        console.log('constructed!');

         this.attachShadow({ 'mode': 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        console.log('connected!');
    }
    
    disconnectedCallback() {
        console.log('disconnected!');
    }
    
    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
    }
    
    adoptedCallback() {
        console.log('adopted!');
    }
}

window.customElements.define('my-element', MyElement);