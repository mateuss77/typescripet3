export class Account {
    account_number: string
    agency:string 
    private balance : number 
    
    constructor (account_number:string, agency: string, balance: number ){
      this.account_number= account_number
      this.agency = agency
      this.balance =0
}
}