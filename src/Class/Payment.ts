import Hasformate from "../interfaces/Hasformat";
export class Payment implements Hasformate {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly recipient: string, 
      private details: string, 
      public amount: number,
    ){}
  
   format(): string {
      return `${this.recipient} owed £${this.amount} for ${this.details}`;
    }
  }