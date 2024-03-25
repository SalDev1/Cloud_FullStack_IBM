import LoadValidator from "./loanValidator";

// is-a relationshop , PersonalloanValidator is a LoadValidator.
export default class PersonalLoanValidator implements LoadValidator {
    constructor(public balance:number) {

    }  
    validateLoan(amount: number): boolean {
        if(this.balance >= 5000.0) {
            return true;
        }
        return false;
    }
}