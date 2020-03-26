module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
        mocha: true,
        node: true,
        es6: true
    },
    plugins: [
        'html'
    ],
    // check if imports actually resolve
    settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.common.js'
      }
    }
    },
    "rules": {
        "eqeqeq": "error",
        "no-console": "warn",
        "semi": ["error"],
        "indent": ["error", 4],
        "no-mixed-spaces-and-tabs": "error",
        "camelcase": "warn",
        "curly": "warn",
        "no-undef": "warn",
        "no-unused-vars": "warn"
    }
};
