const add = (a:number, b:number) => {
  return a + b;
}

const subtract = (a:number, b:number) => {
  a-b
}


function divide(a:number, b:number): number {
  return a / b;
}

const multiply = (a:number, b:number): number => {
  return a * b; 
}

const logger = (message:string): never => {

    throw new Error()

}

const forecast = {
  date: new Date()
}

const logWeather = ({ date }: { date: Date}): void => {
  console.log(date);
  
}