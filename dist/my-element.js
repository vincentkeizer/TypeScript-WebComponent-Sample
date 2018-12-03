var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MyElement = /** @class */ (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        var _this = 
        // always call super() first
        _super.call(this) || this;
        _this.template = document.createElement('template');
        console.log('My-Element constructed!');
        _this.template.innerHTML = "<style>h1 { color:red } </style>" +
            "<h1>Hello World!</h1>" +
            "<my-sub-element title=\"first element\"></my-sub-element>" +
            "<my-sub-element title=\"second element\"></my-sub-element>";
        _this.attachShadow({ 'mode': 'open' });
        _this.shadowRoot.appendChild(_this.template.content.cloneNode(true));
        return _this;
    }
    MyElement.prototype.connectedCallback = function () {
        console.log('My-Element  connected!');
    };
    MyElement.prototype.disconnectedCallback = function () {
        console.log('My-Element disconnected!');
    };
    MyElement.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        console.log("My-Element Attribute: " + name + " changed!");
    };
    MyElement.prototype.adoptedCallback = function () {
        console.log('My-Element adopted!');
    };
    return MyElement;
}(HTMLElement));
window.customElements.define('my-element', MyElement);
//# sourceMappingURL=my-element.js.map