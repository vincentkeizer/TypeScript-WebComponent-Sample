class MySubElement extends HTMLElement {
    template = document.createElement('template');
    
    constructor() {
        // always call super() first
        super(); 
        console.log('MySubElement constructed!');

        this.template.innerHTML = "<style>h2 { color:blue } </style>"+
                                  "<h2></h2>";
        
        this.attachShadow({ 'mode': 'open' });
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        
        let titleAttribute = this.attributes.getNamedItem("title");
        if (titleAttribute) {
            this.setTitle(titleAttribute.value);
        }
    }
    
    private setTitle(title:string):void {
        this.shadowRoot.lastElementChild.innerHTML = title;
    }

    private connectedCallback(): void {
        console.log('MySubElement connected!');
    }
    
    private disconnectedCallback(): void {
        console.log('MySubElement disconnected!');
    }
    
    private attributeChangedCallback(name:string, oldVal:string, newVal:string): void {
        console.log(`MySubElement Attribute: ${name} changed!`);

        switch (name){
            case "title":
                this.setTitle(newVal)
        }

    }
    
    private adoptedCallback():void {
        console.log('MySubElement adopted!');
    }
}

window.customElements.define('my-sub-element', MySubElement);