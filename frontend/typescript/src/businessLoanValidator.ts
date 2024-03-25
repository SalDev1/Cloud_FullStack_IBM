import LoadValidator from "./loanValidator";


// is-a relationshop , BusinessloanValidator is a LoadValidator.
export default class BusinessLoanValidator implements LoadValidator {
    constructor(public balance:number) {

    }  
    validateLoan(amount: number): boolean {
        if(this.balance >= 50000.0) {
            return true;
        }
        return false;
    }
}