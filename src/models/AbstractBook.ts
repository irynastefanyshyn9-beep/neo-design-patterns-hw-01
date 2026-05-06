import type { Author } from './Author';

export abstract class AbstractBook {
  constructor(
    protected title: string,
    protected year: number,
    protected author: Author
  ) {}

  public getAuthor(): Author {
    return this.author;
  }

  public abstract getDescription(): string;
}