module com.xcitestudios.Generic.Text.Interfaces {
    export interface TemplatedInterface {
        content: string;
        context: Object;

        render(): string;
    }
}