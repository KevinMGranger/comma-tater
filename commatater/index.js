var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: '*',
  contentScriptWhen: 'ready',
  contentScriptFile: data.url('commatater.js')
});
