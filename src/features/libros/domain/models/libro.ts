export class Libro {
  [x: string]: unknown;
  constructor(
    public readonly id: string,
    public name: string,
    public descripcion: string,
    public categoria: string,
    public datePublish: Date,
    public author: string,
    public cost: number
  ) {}
}
