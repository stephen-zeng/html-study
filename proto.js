function Computer(property) {
    this.cpu = property.cpu;
    this.gpu = property.gpu;
    this.mem = property.mem;
}

Computer.prototype.func = function() {
    console.log("COMPUTE!");
}
Computer.prototype.need = function() {
    console.log("POWER!");
}

function Laptop(property) {
    Computer.call(this, property);
    this.display = property.display;
    this.battery = property.battery;
}
Laptop.prototype = Object.create(Computer.prototype);
Laptop.prototype.constructor = Laptop;
Laptop.prototype.like = function() {
    console.log("NOTEBOOK!");
}
Laptop.prototype.power = function() {
    console.log("BATTERY!");
}

function Macbook(property) {
    Laptop.call(this, property);
    this.md = property.md;
    this.year = property.year;
}
Macbook.prototype = Object(Laptop.prototype);
Macbook.prototype.constructor = Macbook;
Macbook.prototype.feature = function() {
    console.log("EXPENSIVE!");
}
Macbook.prototype.life = function() {
    console.log("LOOOOONG!");
}

var prop = {
    md: 'MacBook Pro',
    year: 2024,
    display: '14 inch',
    battery: '99wh',
    cpu: 'm3pro',
    gpu: 'm3pro',
    mem: '18g'
}
var SZ = new Macbook(prop);
console.log(SZ);
SZ.need();
SZ.func();
SZ.like();
SZ.feature();
SZ.power();
SZ.life();