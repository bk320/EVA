var scopackager = require('simple-scorm-packager');
  var path = require('path');

  const config = {
    version: '2004 4th Edition',
    organization: 'My Scorm test02',
    title: 'Test Course02',
    language: 'en-US',
    masteryScore: 80,
    startingPage: 'index.html',
    source: path.join(__dirname, '..', '/umss-code-compiler/build'),
    package: {
      version: process.env.npm_package_version,
      zip: true,
      author: 'Alison Guzman',
      outputFolder: path.join(__dirname, '/umss-code-compiler/scorm_packages'),
    }
  };

  scopackager(config, function(msg){
    console.log(msg);
    process.exit(0);
  });