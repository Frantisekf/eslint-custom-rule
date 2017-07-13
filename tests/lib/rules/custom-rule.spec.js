const rule = require("../../src/rules/custom-rule")
const RuleTester = require("eslint").RuleTester
 
const parserOptions = {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
        jsx: true,
    },
}
 
const importErrors = [{
    type: "ImportDeclaration",
    message: "Inconsistent import",
}, ]
 
 
const suggestionTests = {
 
    valid: [{
            code: "",
            parserOptions,
        },      
 
 
    ],
    invalid: [{
            code: "",
            parserOptions,
            errors: [{
                type: "",
                message: '',
            }]
        },
        
    ],
}
 
const ruleTester = new RuleTester()
ruleTester.run("custom-rule", rule, suggestionTests)