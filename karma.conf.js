module.exports = function(config) {
  config.set({
    frameworks: ["jasmine"],
    reporters: ["spec"],
    files: [
      "./node_modules/angular/angular.js",
      "./node_modules/angular-mocks/angular-mocks.js",
      "./app/app.module.js",
      "./app/**/__tests__/*.spec.js"
    ]
  });
};
