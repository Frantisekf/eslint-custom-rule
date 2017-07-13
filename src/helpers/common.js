import R from "ramda"

import {
	isUpperCase,
	isObject,
	isArrayType,
	isDestructuringType,
} from "./common"

const getValues = ({ id, init }) =>
({
	name: (id && R.prop("name", id)) || "+++",
	value: (init && R.prop("value", init)) || "---",
})

export const getVariablePairs = R.compose(R.map(getValues), R.prop("declarations"))

export const isConstant = R.compose(isUpperCase, R.prop("name"), R.head, getVariablePairs)

export const isVariableDeclaration = node =>
(isConstant(node) && !isObject(node) && !isArrayType(node) && !isDestructuringType(node))