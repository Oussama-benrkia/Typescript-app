import Hasformate from "../interfaces/Hasformat";
export class Invoice implements Hasformate {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
      readonly client: string, 
      private details: string, 
      public amount: number,
    ){}
  
   format(): string {
      return `${this.client} owe £${this.amount} for ${this.details}`;
    }
  }