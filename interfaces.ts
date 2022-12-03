interface Vehicle {

  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2014,
  broken: true,
  summary(): string {
    return 's'
  }
}


const printVehicals = (vehical: Vehicle) => {
  console.log(vehical.summary());
  
}


printVehicals(oldCivic)


const drink1 = {
  summary(): string {
    return 's1'
  }
}

printVehicals(drink1)