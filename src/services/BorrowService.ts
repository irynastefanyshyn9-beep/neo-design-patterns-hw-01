import type { Reader } from '../models/Reader';
import type { Copy } from '../models/Copy';

export class BorrowService {
  

  public borrow(reader: Reader, copy: Copy): boolean {
    if (!copy.isCopyAvailable()) {
      return false; 
    }
      
    copy.setAvailability(false); 
    reader.addCopy(copy);      
    
    return true;
  }

  public returnBook(reader: Reader, copy: Copy): void { 
    copy.setAvailability(true);  
    reader.removeCopy(copy);   
    
  }
}