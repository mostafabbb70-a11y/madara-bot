'use strict';
const chalk = require('chalk');
console.clear();

console.log(chalk.hex('#9B59B6')('╔═══════════════════════════════════════╗'));
console.log(chalk.hex('#8E44AD')('║') + '                                       ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '  ' + chalk.hex('#FFD700').bold('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄') + '  ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '                                       ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '   ' + chalk.hex('#3498DB').bold('░█▀▀░█▀█░░░█░█▀█') + '                  ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '   ' + chalk.hex('#2980B9').bold('░█░█░█░█░░░█░█░█') + '                  ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '   ' + chalk.hex('#1A6FA8').bold('░▀▀▀░▀▀▀░░░▀░▀▀▀') + '                  ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '                                       ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '   ' + chalk.hex('#E74C3C').bold('✦  T H E  H O N O R E D  O N E  ✦') + '   ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '                                       ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '     ' + chalk.hex('#FFD700').bold('★  S A T O R U   G O J O  ★') + '       ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '                                       ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '         ' + chalk.hex('#9B59B6')('〔 #GOJO-BOT 〕') + '                 ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#8E44AD')('║') + '                                       ' + chalk.hex('#8E44AD')('║'));
console.log(chalk.hex('#FFD700')('▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀'));

console.log(chalk.hex('#9B59B6').bold('\n  ⚡ Powered By ') + chalk.hex('#FFD700').bold('GOJO BOT') + chalk.hex('#E74C3C').bold(' ⚡\n'));

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p))
            __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
exports.proto = exports.makeWASocket = void 0;

const WAProto_1 = require("../WAProto");
Object.defineProperty(exports, "proto", {
    enumerable: true,
    get: function() {
        return WAProto_1.proto;
    }
});

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;

__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
