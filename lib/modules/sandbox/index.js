module.exports = {
  extend: 'apostrophe-module',
  //ck20n5ny4000vimq7shjjqzn7
  construct: (self, option) => {
    self.route('get', 'render-dialog-box/:id', async (req, res) => {
      try {
        const box = await self.apos.modules['apostrophe-dialog-box'].find(req, {_id: req.params.id }).toObject();
        res.send(self.render(req, `apostrophe-dialog-box-templates:${box.template}.html`, { piece: box }));
      } catch (error) {
        self.apos.utils.warn(error);
      }
    });
  }
}