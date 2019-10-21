var path = require('path');

var apos = require('apostrophe')({
  shortName: 'dialogSandbox',
  bundles: [ 'apostrophe-dialog-box' ],

  modules: {
    'apostrophe-templates': { viewsFolderFallback: path.join(__dirname, 'views') },
    'apostrophe-dialog-box': {
      addFields: [
        {
          name: 'template',
          label: 'Template',
          type: 'select',
          choices: [
            { label: 'Default', value: 'default' },
            { label: 'Wacky', value: 'wacky' }
          ]
        }
      ]
    },
    'apostrophe-dialog-box-pages': {},
    'apostrophe-dialog-box-templates': {}
  }
});
