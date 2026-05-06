import { AbstractBook } from './AbstractBook';

export class Copy {

  private isAvailable: boolean = true;

  constructor(private book: AbstractBook) {}

  public isCopyAvailable(): boolean {
    return this.isAvailable;
  }
    
  public setAvailability(status: boolean): void {
    this.isAvailable = status;
  }

  public getBook(): AbstractBook {
    return this.book;
  }
}