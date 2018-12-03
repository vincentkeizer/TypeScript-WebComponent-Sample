class MyElement extends HTMLElement {
    template = document.createElement('template');        
    
    constructor() {
        // always call super() first
        super(); 
        console.log('My-Element constructed!');

        this.template.innerHTML =   "<style>h1 { color:red } </style>" +
                                    "<h1>Hello World!</h1>" + 
                                    "<my-sub-element title=\"first element\"></my-sub-element>" + 
                                    "<my-sub-element title=\"second element\"></my-sub-element>";
        
        this.attachShadow({ 'mode': 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }
    
    private connectedCallback(): void {
        console.log('My-Element  connected!');
    }
    
    private disconnectedCallback(): void {
        console.log('My-Element disconnected!');
    }
    
    private attributeChangedCallback(name:string, oldVal:string, newVal:string): void {
        console.log(`My-Element Attribute: ${name} changed!`);
    }
    
    private adoptedCallback():void {
        console.log('My-Element adopted!');
    }
}

window.customElements.define('my-element', MyElement);