var path = require('path');

var apos = require('apostrophe')({
  shortName: 'dialog-sandbox',
  // bundles: [ 'apostrophe-dialog-box' ],

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
    'apostrophe-dialog-box-modal': {},
    // optional index page for dialog boxes, useful if dialog styles conflict with apos modal styles
    'apostrophe-dialog-box-pages': {},
    'foos': {},
    'foos-pages': {},
    'sandbox': {},
    'tasks': {}
  }
});
