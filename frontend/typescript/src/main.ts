import BusinessLoanValidator from "./businessLoanValidator"
import LoanRequestHandler from "./loanrequesthandler"
import PersonalLoanValidator from "./personalLoanValidator"
import Rectangle from "./rectangle"
import Shape from "./shape"
import Triangle from "./triangle"


/*
   Declaring your own type , using the type keyword.
*/

// Enumeration of Constants.
enum LoanType {
    PERSONAL,
    BUSINESS
}

class Main{
    static display(shape : Shape) : void{
        console.log(`Area of ${shape} is ${shape.calculateArea()}`)
    }

    static processLongApplication(type:LoanType) {

        let loanAmount = 10000.0
        switch(type) {
            case LoanType.BUSINESS:
                let handler = new LoanRequestHandler(loanAmount)
                console.log("Loan Status",handler.approvedLoan(new BusinessLoanValidator(loanAmount)))
                break
            
            case LoanType.PERSONAL:
                handler = new LoanRequestHandler(loanAmount)
                console.log("Loan Status",handler.approvedLoan(new PersonalLoanValidator(loanAmount)))
                break

            default:
                throw new Error('Invalid Loan Type')
        }
    }
}

// Polymorphic Behaviors.
const rectangle = new Rectangle(23.4,34.5)
const triangle = new Triangle(23.4,34.5)

Main.display(rectangle)
Main.display(triangle)
// Main.display("abcd")  --> Error , because it only accepts the Shape Object.

Main.processLongApplication(LoanType.PERSONAL)