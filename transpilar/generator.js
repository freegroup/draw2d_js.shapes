var fs = require('fs');
var acorn = require('acorn');
var esrecurse = require('esrecurse');
var t = require('ast-types').builders;
var escodegen = require('escodegen');
var traverse = require("ast-traverse");
var estraverse = require("estraverse");

var js = fs.readFileSync('./transpilar/test.js').toString();

var ast = acorn.parse(js);

fs.writeFile("./transpilar/result.json", (JSON.stringify(ast, null, 2)));

var calculateNode = null;
estraverse.traverse(ast, {
    enter: function(node) {
        switch (node.type) {
            /*
            case  "BinaryExpression":
                replacePlusByADD(node);
                break;
            case "VariableDeclaration":
                replaceVarByBoolean(node);
                break;
            case "MemberExpression":
                replaceInputPortByMatrix(node);
                break;
            */
            case "Property":
                dumpCalculate(node);
                break;
        }
    }
});


var modified_code = escodegen.generate(calculateNode);
console.log(modified_code);

function replacePlusByADD(node) {
    if(node.operator!=="+"){
        return node;
    }

    // get operands from +
    var a = node.left,
        b = node.right;

    node.type = "CallExpression";
    node.callee = {
        "type": "Identifier",
        "name": "ADD"
    };
    node.arguments = [a, b];

    // reset unnecessary properties
    node.left = null;
    node.right = null;
    node.operator = null;

    return node;
}

function replaceVarByBoolean(node) {
    node.kind ="float";
    return node;
}

function replaceInputPortByMatrix(node) {
   return node;
}

function dumpCalculate(node) {

    if(node.key.name=="calculate"){
        if(node.value.type="FunctionExpression"){
            calculateNode = node;
        }
    }
    return node;
}