"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
class ElementaryArithmtic {
    add(val1, val2) {
        return val1 + val2;
    }
    multiple(val1, val2) {
        return val1 * val2;
    }
}
class SayHi {
    hi() {
        return 'Hi!';
    }
}
const Mixin = (classes) => {
    return (target) => {
        classes.forEach((classObject) => {
            Object.getOwnPropertyNames(classObject.prototype).forEach((name) => {
                if (name === 'constructor')
                    return;
                const propDesc = Object.getOwnPropertyDescriptor(classObject.prototype, name);
                Object.defineProperty(target.prototype, name, propDesc);
            });
        });
    };
};
let MathService = class MathService {
    addNumbers(val1, val2) {
        return this.add(val1, val2);
    }
};
MathService = __decorate([
    Mixin([ElementaryArithmtic, SayHi])
], MathService);
exports.MathService = MathService;
const mathSrv = new MathService();
console.log(mathSrv.add(1, 2));
console.log(mathSrv.hi());
//# sourceMappingURL=k42-composition_with_decorators.js.map