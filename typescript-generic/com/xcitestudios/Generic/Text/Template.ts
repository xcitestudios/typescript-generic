/// <reference path="../../../../Scripts/typings/mustache/mustache.d.ts"/>

module com.xcitestudios.Generic.Text {
    export class Template implements Interfaces.TemplatedSerializableInterface {
        content: string;
        context: Object;

        render() {
            return Mustache.render(this.content, this.context);
        }

        deserializeJSON(jsonString: string): void {
            var obj = JSON.parse(jsonString);

            this.content = obj.content;
            this.context = obj.context;
        }

        serializeJSON() {
            return JSON.stringify(this);
        }
    }
}