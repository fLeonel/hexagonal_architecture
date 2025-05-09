export class Libro {
  [x: string]: unknown;
  constructor(
    public readonly id: string,
    public name: string,
    public description: string,
    public categoria: string,
    public datePublish: Date,
    public author: string,
    public costo: number
  ) {}
}
