module.exports = {
  extends: 'stylelint-config-recommended',
  rules: {
    'selector-nested-pattern': '(&|>)',
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^ea-/', '/^eangio-/']
      }
    ]
  }
}
