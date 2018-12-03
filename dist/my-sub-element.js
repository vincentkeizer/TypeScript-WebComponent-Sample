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
var MySubElement = /** @class */ (function (_super) {
    __extends(MySubElement, _super);
    function MySubElement() {
        var _this = 
        // always call super() first
        _super.call(this) || this;
        _this.template = document.createElement('template');
        console.log('MySubElement constructed!');
        _this.template.innerHTML = "<style>h2 { color:blue } </style>" +
            "<h2></h2>";
        _this.attachShadow({ 'mode': 'open' });
        _this.shadowRoot.appendChild(_this.template.content.cloneNode(true));
        var titleAttribute = _this.attributes.getNamedItem("title");
        if (titleAttribute) {
            _this.setTitle(titleAttribute.value);
        }
        return _this;
    }
    MySubElement.prototype.setTitle = function (title) {
        this.shadowRoot.lastElementChild.innerHTML = title;
    };
    MySubElement.prototype.connectedCallback = function () {
        console.log('MySubElement connected!');
    };
    MySubElement.prototype.disconnectedCallback = function () {
        console.log('MySubElement disconnected!');
    };
    MySubElement.prototype.attributeChangedCallback = function (name, oldVal, newVal) {
        console.log("MySubElement Attribute: " + name + " changed!");
        switch (name) {
            case "title":
                this.setTitle(newVal);
        }
    };
    MySubElement.prototype.adoptedCallback = function () {
        console.log('MySubElement adopted!');
    };
    return MySubElement;
}(HTMLElement));
window.customElements.define('my-sub-element', MySubElement);
//# sourceMappingURL=my-sub-element.js.map