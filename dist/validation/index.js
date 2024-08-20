"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertStringValue = exports.assertString = exports.isString = void 0;
const tslib_1 = require("tslib");
const assert_1 = tslib_1.__importStar(require("assert"));
const isString = (str) => typeof str === 'string';
exports.isString = isString;
const assertString = (str, functionName, message) => assert_1.default.equal((0, exports.isString)(str), true, new assert_1.AssertionError({
    message: `ERROR - [${functionName}] - ${message}`,
    actual: str,
}));
exports.assertString = assertString;
const assertStringValue = (str, expression, functionName, message) => {
    (0, exports.assertString)(str, functionName, message);
    assert_1.default.match(str, expression, `ERROR - [${functionName}] - ${message}`);
};
exports.assertStringValue = assertStringValue;
//# sourceMappingURL=index.js.map