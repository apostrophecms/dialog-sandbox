const path = require('path');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 3
  },
  wordsPerSentence: {
    max: 8,
    min: 2
  }
});

module.exports = {
  extend: 'apostrophe-migrations',
  alias: 'dialogTasks',

  afterConstruct: function (self) {
    self.apos.tasks.add(self.__meta.name, 'addSamples', 'input sample data', self.addSamples);
  },

  construct: function (self, options) {
    self.addSamples = function (apos, argv, callback) {
      const dialogs = apos.modules['apostrophe-dialog-box'];
      const limit = 10;
      const req = self.apos.tasks.getReq();
      for (let i = 0; i < limit; i++) {
        var insert = dialogs.newInstance();
        insert.aposSampleData = true;
        insert.template = 'default';
        insert.title = lorem.generateSentences(1);
        insert.slug = apos.utils.slugify(insert.title);
        dialogs.insert(req, insert);
        if (i === limit - 1) {
          return callback(null)
        }
      }
    }
  }
}