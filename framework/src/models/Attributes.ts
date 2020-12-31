export class Attrbutes<T> {
    constructor(
        private data: T
    ) {}

    public get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    public set(updateData: T): void {
        Object.assign(this.data, updateData);
    }
}