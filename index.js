var data = require('sdk/self').data;
var pageMod = require('sdk/page-mod');

console.debug("index loaded");

pageMod.PageMod({
  include: '*',
  contentScriptFile: data.url('commatater.js')
});
