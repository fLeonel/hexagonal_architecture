export class Autor{
    [x: string]: unknown;
    constructor(
        public readonly id: string,
        public nombre: string,
        public nacionalidad: string,
        public fechaNacimiento: Date
    ){}
}