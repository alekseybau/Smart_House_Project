class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
}	
let tom = new Person("Tom", 34);
tom.display();          // Tom 34
console.log(tom.name);  // Tom




let user = {
	name: name,
	comingHome(){
		if (name == tom) {
			console.log(this.name + " coming home")
		};		
	}
};
user.comingHome();
console.log(this.name + " coming home")





class smartHouse{
    constructor(name, adres){
        this.name = "Toshiba2198";
        this.adres = "221 Baker St";
    }
    display(){
        console.log(this.name + " in a " + this.adres)
    }
};
let smartHouse1 = new smartHouse("Toshiba2198", "221 Baker St");
smartHouse1.display();          // Toshiba2198 221 Baker St
console.log(smartHouse1.name  + " it`s a very cool Tom smarthouse");  // Toshiba2198






class smartDevice {
    constructor ( smartDoor, smartLighting){
        this.smartDoor = 'smartDoor';
        this.smartLighting = 'smartLighting'}
    display () {
        console.log( this.smartDoor, this.smartLighting)
    };   
}; 
let devices = new smartDevice ('smartDoor', 'smartLighting' );
devices.display();          // smartDoor, smartLighting
console.log(smartDevice.name);  // smartDevice



let firstSmartDevice = {
	name: 'smartDoor',
	status(){
		if (name == tom) {
			console.log( this.name + "status open")
		};		
	}
}
firstSmartDevice.status();
console.log("status door - open");



let secondSmartDevice = {
	name: "lamp",
	status(){
		if (name == tom) {
			console.log( this.name + "status on");
		};		
	}
}
secondSmartDevice.status();
console.log(this.name + "status lamp on");



let ninePM = {
	name: "lamp",
	status(){
		if (name == tom) {
			console.log( this.name + "status on");
		};		
	}
}
ninePM.status();
console.log(this.name + "status lamp off")