class Vehicle {

  constructor(public color: string) {
    this.color = color;
  }

	protected drive(): void {
		console.log("kk");
	};


  honk(): void {
    console.log('beep');
    
  }
}

