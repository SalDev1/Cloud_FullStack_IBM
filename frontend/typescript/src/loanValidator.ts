
// Interface acts like a contract.
export default interface LoanValidator{
  validateLoan(amount:number): boolean
}