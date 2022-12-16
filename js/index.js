//generate javascript for the index page
var fs = require('fs');
var path = require('path');
var config = require('./config');
var template = require('./template');
var data = require('./data');
var index = {
    generate: function () {
        var indexTemplate = template.getTemplate('index');
        var indexData = data.getIndexData();
        var indexHtml = template.generateHtml(indexTemplate, indexData);
        var indexPath = path.join(config.htmlPath, 'index.html');
        fs.writeFileSync(indexPath, indexHtml);
    }
};
module.exports = index;
