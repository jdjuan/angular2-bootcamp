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
5. Use the @Inject in the components we want angular to inject the interface
    * src/app/calculator/calculator.component.ts
    * src/app/calculator/button/buttons

    :tada: Check it works!!

# Create a factory
1. Create a Core Module in the root
2. Create a interface 'ILogger' with the function 'logError'
