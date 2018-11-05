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
    
    private connectedCallback(): void {
        console.log('connected!');
    }
    
    private disconnectedCallback(): void {
        console.log('disconnected!');
    }
    
    private attributeChangedCallback(name:string, oldVal:string, newVal:string): void {
        console.log(`Attribute: ${name} changed!`);
    }
    
    private adoptedCallback():void {
        console.log('adopted!');
    }
}

window.customElements.define('my-element', MyElement);