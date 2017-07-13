const rule = require("../../src/rules/custom-rule")
const RuleTester = require("eslint").RuleTester
 
const parserOptions = {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
        jsx: true,
    },
}
 
const expressionErros = [{
    type: "CallExpression",
    message: "used filter(x => x) instead filter(boolean) ",
}, ]
 
 
const suggestionTests = {
 
    valid: [{
            code: "var Boolean = true; ",
            parserOptions,
        },      
 
 
    ],
    invalid: [{
            code: "filter(x => x)",
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