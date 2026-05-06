export class Author {
  private name: string;
  private books: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public addBook(title: string): void {
    this.books.push(title);
  }

  public getBooks(): string[] {
    return [...this.books];
  }
}
