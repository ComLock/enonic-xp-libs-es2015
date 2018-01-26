module.exports = {

    // https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js
    extends: 'airbnb',
    globals: {
      app: false,
      Java: false,
      resolve: false,
      __: false
    },
    rules: {
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', {
            arrays: 'never',
            objects: 'never',
            imports: 'never',
            exports: 'never',
            functions: 'never'
        }],
        'spaced-comment': ['off']
    }
}
