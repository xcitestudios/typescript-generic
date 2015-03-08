module com.xcitestudios.Generic.Data.Manipulation.Interfaces {
    export interface SerializationInterface {
        deserializeJSON(jsonData: string): void;
        serializeJSON(): string;
    }
}