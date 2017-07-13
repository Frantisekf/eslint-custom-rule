/**
 * Created by Frantisek Farkas on 13.7.17.
 */
"use strict";
import R from 'ramda'
 
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
        
        
        function getArgumentsLength(node) {
            
        }
        /**
         * Get the name of identifier used as parameter in filter()
         * @param {ASTNode} node - the CallExpression node
         * @returns {?string} name of the identifier used as filter() param
         */    
        function checkIdentifier(node) {            
            if (node.callee.type === 'Identifier' && node.callee.name == 'filter'){
               let identifier = node.arguments[0].name;
               if (typeof identifier !== 'undefined'){
                   return identifier;
               }
            }
        }       

        /**
         * Get the name of identifier used as parameter in filter()
         * @param {ASTNode} node - the CallExpression node
         * @param {Strinng} Identifier - identifier to search in the node
         * @returns {?string} 
         */   
        function searchTree(node, identifier){
            console.log();
        }
        
        return {
            CallExpression: function (node) {
                const identifier = checkIdentifier(node);
                searchTree(node, identifier);
              
 
            },
        }
    }
};