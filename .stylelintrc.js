module.exports = {
  extends: 'stylelint-config-standard',
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-declaration-block-no-ignored-properties'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'order/properties-alphabetical-order': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'no-empty-source': null,
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null,
    'rule-empty-line-before': [
      'always',
      {
        except: 'inside-block'
      }
    ]
  }
};
