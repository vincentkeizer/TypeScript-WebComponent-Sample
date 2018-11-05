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
var template = document.createElement('template');
template.innerHTML = "<style>h1 { color:red } </style><h1>Hello World!</h1>";
var MyElement = /** @class */ (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        var _this = 
        // always call super() first
        _super.call(this) || this;
        console.log('constructed!');
        _this.attachShadow({ 'mode': 'open' });
        _this.shadowRoot.appendChild(template.content.cloneNode(true));
        return _this;
    }
    MyElement.prototype.connectedCallback = function () {
        console.log('connected!');
    };
    MyElement.prototype.disconnectedCallback = function () {
        console.log('disconnected!');
    };
    MyElement.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        console.log("Attribute: " + name + " changed!");
    };
    MyElement.prototype.adoptedCallback = function () {
        console.log('adopted!');
    };
    return MyElement;
}(HTMLElement));
window.customElements.define('my-element', MyElement);
//# sourceMappingURL=my-element.js.map