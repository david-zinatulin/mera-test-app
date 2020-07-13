const prettierConfig = require('./prettier.config');

module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react', 'plugin:compat/recommended'],
    plugins: ['react', 'prettier', 'react-hooks', 'no-only-tests'],
    env: {
        browser: true,
        mocha: true,
    },
    globals: {
        sinon: 'readonly',
        expect: 'readonly',
    },
    rules: {
        'prettier/prettier': ['error', prettierConfig],
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 'error',
        'camelcase': 'error',
        'no-console': 'error',
        'no-underscore-dangle': 'error',
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react/jsx-filename-extension': 'error',
        'react/display-name': 0,
        'react/prop-types': 0,
        'react/state-in-constructor': 0,
        'react/jsx-props-no-spreading': 0,
        'react/jsx-fragments': 0,
        'no-only-tests/no-only-tests': 'error',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['./'],
            },
            alias: {
                map: [
                    ['react', 'preact/compat'],
                    ['react-dom', 'preact'],
                ],
            },
        },
        'polyfills': ['Object.assign', 'Promise', 'AbortController', 'fetch'],
    },
};