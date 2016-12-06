# Steps 
1. Create the interface of the calculator servicie
    * src/app/calculator/shared/definitions/calculator.service.ts
2. The calculator service will implement the interface we just created
    * src/app/calculator/shared/calculator.service.ts
3. Remove the dependency from the concrete implementation and add it to the interface we just created
    * src/app/calculator/calculator.component.ts
    * src/app/calculator/button/buttons
4. Configure the provider to resolve the dependency ICalculator with the CalculatorService
    * src/app/calculator/calculator.module.ts
    * ***Note*** : we are not able to use an interface so we use a string name.
    