function betterEcho<T>(data: T){
  return data
}

console.log(betterEcho('ok').length);

function printAll<T>(args: T[]){  

}


const echo2: <T>(data: T) => T  = betterEcho;


echo2<string>('ok')