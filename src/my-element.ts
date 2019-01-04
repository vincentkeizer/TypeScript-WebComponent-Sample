class MyElement extends HTMLElement {
    private template:HTMLTemplateElement = document.createElement('template');
    
    constructor() {
        // always call super() first
        super(); 
        console.log('My-Element constructed!');

        this.template.innerHTML =   "<style>h1 { color:red } </style>" +
                                    "<h1>Hello World!</h1>"+
                                    "<form><input type=\"text\" placeholder=\"title\" />" +
                                    "<button type=\"submit\">add sub element</button>"+
                                    "</form>";  
        
        this.attachShadow({ 'mode': 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));

        let submitButton = this.shadowRoot.querySelector('button');
        submitButton.addEventListener('click', this.addSubElement.bind(this));
    }
    
    private addSubElement(event:Event) : void {
        event.preventDefault();

        let titleInput = this.shadowRoot.querySelector('input');
        if(titleInput.value.length > 0){
           this.createAndAttachSubElement(titleInput.value);
           titleInput.value = '';
           titleInput.focus();
        }
    }

    private createAndAttachSubElement(title:string) : void {
        let subElement = document.createElement("my-sub-element");
        subElement.setAttribute("title", title);
        this.shadowRoot.appendChild(subElement);
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