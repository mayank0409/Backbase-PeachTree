module.exports = function (config) {
  config.set({
      frameworks: ['jasmine'],
      reporters: ['spec'],
      files: [
          './node_modules/angular/angular.js',
          './node_modules/angular-mocks/angular-mocks.js',
          './app/components/transfer-amount/transfer-amount.module.js',
          './app/components/transfer-amount/transfer-amount.service.js',
          './app/components/transfer-amount/transfer-amount.controller.js',
          './app/components/transfer-amount/transfer-amount.directive.js',
          './app/components/transactions-list/transactions-list.module.js',
          './app/components/transactions-list/transactions-list.service.js',
          './app/components/transactions-list/transactions-list.filter.js',
          './app/components/transactions-list/transactions-list.controllers.js',
          './app/app.module.js',
          './app/**/__tests__/*.spec.js'
      ]
  })
}