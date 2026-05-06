import { AbstractBook } from './AbstractBook';
import type { Author } from './Author'; 

export class Book extends AbstractBook {
  constructor(title: string, year: number, author: Author) {
    super(title, year, author);
  }
    
  public getDescription(): string {
    return `Physical book "${this.title}" by ${this.author.getName()} (${this.year})`;
  }
}