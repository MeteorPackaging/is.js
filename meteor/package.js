Package.describe({
  name: 'isjs:is', // http://atmospherejs.com/isjs/is
  summary: 'is.js (official): Check types, regexps, presence, time and more.',
  version: '0.7.3',
  git: 'https://github.com/arasatasaygin/is.js'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.0']);
  api.addFiles('is.js', ['client', 'server']);
});