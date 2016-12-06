export interface ICalculator{
    addOperation(operation: string);
    getResult(): string ;
    clearResult():string;
}