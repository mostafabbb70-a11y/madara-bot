'use strict';
const chalk = require('chalk');
console.clear();

const BANNER_WIDTH = 41;

function centerLine(text = '') {
    const len = [...text].length;
    const totalPad = Math.max(0, BANNER_WIDTH - len);
    const left = Math.floor(totalPad / 2);
    const right = totalPad - left;
    return ' '.repeat(left) + text + ' '.repeat(right);
}

function printBoxLine(text = '', colorFn = (s) => s) {
    console.log(
        chalk.hex('#962D22')('║') +
        colorFn(centerLine(text)) +
        chalk.hex('#962D22')('║')
    );
}

console.log(chalk.hex('#C0392B')('╔' + '═'.repeat(BANNER_WIDTH) + '╗'));
printBoxLine('');
printBoxLine('▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄', chalk.hex('#FFD700').bold);
printBoxLine('');
// ✅ اسم البوت "MADARA" بحروف واضحة تبدأ بـ M بدون أي لبس
// (الشكل البكسلي القديم كان بيتلخبط بين M و H في بعض الخطوط)
printBoxLine('𝗠 𝗔 𝗗 𝗔 𝗥 𝗔', chalk.hex('#E74C3C').bold);
printBoxLine('');
printBoxLine('✦  T H E  G H O S T  O F  U C H I H A  ✦', chalk.hex('#FFD700').bold);
printBoxLine('');
printBoxLine('★  M A D A R A   B O T  ★', chalk.hex('#E74C3C').bold);
printBoxLine('');
printBoxLine('〔 #MADARA-BOT 〕', chalk.hex('#FFD700'));
printBoxLine('');
// ⌬ 𝗗𝗘𝗩 ⁞ ｢ 𝑅𝑂𝐶𝐾 7 ｣ — المطور الأصلي
printBoxLine('⌬ 𝗗𝗘𝗩 ⁞ ｢ 𝑅𝑂𝐶𝐾 7 ｣', chalk.hex('#FFD700').bold);
printBoxLine('');
console.log(chalk.hex('#FFD700')('╚' + '═'.repeat(BANNER_WIDTH) + '╝'));

console.log(
    chalk.hex('#E74C3C').bold('\n  ⚡ Powered By ') +
    chalk.hex('#FFD700').bold('MADARA BOT') +
    chalk.hex('#E74C3C').bold('  —  Dev: ') +
    chalk.hex('#FFD700').bold('𝑅𝑂𝐶𝐾 7') +
    chalk.hex('#E74C3C').bold(' ⚡\n')
);

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
