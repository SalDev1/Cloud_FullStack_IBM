import LoanValidator from "./loanValidator"

export default class LoanRequestHandler {
    constructor(private balance:number) {

    }
    /*
      If tommorrow something comes new , we don't have to change anything.
      This is called extensible system.

      loan will take loanValidator interface and it will replace with either BusinessLoan 
      or PersonalLoan.
    */
    approvedLoan(validator: LoanValidator) : boolean{

        // validateLoan is a representation of either the Personal Loan or Business Loan.
        return validator.validateLoan(this.balance)
    }
} 