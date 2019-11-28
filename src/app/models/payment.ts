export interface payment {
    amount: number;
    type: string;
    destinationBank?: string;
    originBank?: string;
    transferNumber?: number; 
  
  }