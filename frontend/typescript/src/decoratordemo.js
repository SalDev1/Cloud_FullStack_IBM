var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// A constructor function.
function simpleDecorator(constructor) {
    console.log('MyDecorator called');
}
function propertyDecorator(target, propertyKey) {
    console.log("target: ".concat(target));
    // console.log(`target.constructor: ${target.constructor}`)
    console.log("property name : ".concat(propertyKey));
}
// Adding method decorator function.
function methodDecorator(target, methodName, descriptor) {
    console.log("method decorator : ".concat(methodName, " called"));
}
// A class.
var WithDecorator = function () {
    var _classDecorators = [simpleDecorator];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _productId_decorators;
    var _productId_initializers = [];
    var _productId_extraInitializers = [];
    var _print_decorators;
    var WithDecorator = _classThis = /** @class */ (function () {
        function WithDecorator_1() {
            this.productId = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _productId_initializers, 1));
            __runInitializers(this, _productId_extraInitializers);
            console.log('inside constructor');
        }
        WithDecorator_1.prototype.print = function () {
            console.log('printing');
        };
        return WithDecorator_1;
    }());
    __setFunctionName(_classThis, "WithDecorator");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _productId_decorators = [propertyDecorator];
        _print_decorators = [methodDecorator];
        __esDecorate(_classThis, null, _print_decorators, { kind: "method", name: "print", static: false, private: false, access: { has: function (obj) { return "print" in obj; }, get: function (obj) { return obj.print; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _productId_decorators, { kind: "field", name: "productId", static: false, private: false, access: { has: function (obj) { return "productId" in obj; }, get: function (obj) { return obj.productId; }, set: function (obj, value) { obj.productId = value; } }, metadata: _metadata }, _productId_initializers, _productId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        WithDecorator = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return WithDecorator = _classThis;
}();
// Defining the object of the class WithDecorator. 
/*
  When you defined the object ,
  1] firstly invokes the simpledecorator and after processing it , it moves
  to the constructor function.

  To invoke the typescript file , here are the commands -->
  1) npx tsc src/decoratordemo.ts
*/
var inst1 = new WithDecorator();
inst1.productId = 20;
var inst2 = new WithDecorator();
inst1.print();
