# Steps 
1. Create the interface of the calculator servicie
    * src/app/calculator/shared/definitions/calculator.service.ts
2. The calculator service will implement the interface we just created
    * src/app/calculator/shared/calculator.service.ts
3. Remove the dependency from the concrete implementation and add it to the interface we just created
    * src/app/calculator/calculator.component.ts
    * src/app/calculator/button/buttons
