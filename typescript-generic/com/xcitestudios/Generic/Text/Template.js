/// <reference path="../../../../Scripts/typings/mustache/mustache.d.ts"/>
var com;
(function (com) {
    var xcitestudios;
    (function (xcitestudios) {
        var Generic;
        (function (Generic) {
            var Text;
            (function (Text) {
                var Template = (function () {
                    function Template() {
                    }
                    Template.prototype.render = function () {
                        return Mustache.render(this.content, this.context);
                    };
                    Template.prototype.deserializeJSON = function (jsonString) {
                        var obj = JSON.parse(jsonString);
                        this.content = obj.content;
                        this.context = obj.context;
                    };
                    Template.prototype.serializeJSON = function () {
                        return JSON.stringify(this);
                    };
                    return Template;
                })();
                Text.Template = Template;
            })(Text = Generic.Text || (Generic.Text = {}));
        })(Generic = xcitestudios.Generic || (xcitestudios.Generic = {}));
    })(xcitestudios = com.xcitestudios || (com.xcitestudios = {}));
})(com || (com = {}));
//# sourceMappingURL=Template.js.map