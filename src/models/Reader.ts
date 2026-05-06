import { Copy } from './Copy';

export class Reader {
  private borrowedCopies: Copy[] = [];

  constructor(
    private id: string,
    private name: string
  ) {}

  public getName(): string {
    return this.name;
  }

  public addCopy(copy: Copy): void {
    this.borrowedCopies.push(copy);
  }

  public removeCopy(copy: Copy): void {
    this.borrowedCopies = this.borrowedCopies.filter(c => c !== copy);
  }

  public getBorrowedCopies(): Copy[] {
    return this.borrowedCopies;
  }
}