/**
 * Created by Frantisek Farkas on 13.7.17.
 */
"use strict";
 
//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
 
module.exports = {
    meta: {
        docs: {
            description: "enforce filter(Boolean) instead filter(x => x)",
            category: "Possible Errors",
            recommended: true
        },
 
        fixable: "code",
 
    },
 
    create(context) {
 
       
        return {
            ImportDeclaration: function (node) {
 
              
 
            },
        }
    }
};