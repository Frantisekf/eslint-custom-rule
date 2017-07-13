# eslint-plugin-0002

custome styleguide plugin

Enforce  `filter(Boolean)` instead `filter(x => x)`

use `() => {}` instead `_.partial`

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-0002`:

```
$ npm install eslint-plugin-0002 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-0002` globally.

## Usage

Add `0002` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "0002"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "0002/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





