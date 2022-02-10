function SamsungElectrodevice(){
    this.brand = 'Samsung';
    this.isPlugged = false;
}

function TVElectrodevice(name, price, diagonal){
    this.name = name;
    this.price = price;

    this.diagonal = diagonal;
}

function PhoneElectrodevice(name, price, camera){
    this.name = name;
    this.price = price;

    this.camera = camera;
}

TVElectrodevice.prototype = new SamsungElectrodevice();
PhoneElectrodevice.prototype = new SamsungElectrodevice();


SamsungElectrodevice.prototype.getEnergyUsage = function(energy){
    console.log(`power usage of ${this.name} = ${energy}`);
}

SamsungElectrodevice.prototype.plugIn = function(){
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

const samsung_phone = new PhoneElectrodevice('Samsung-S21', '80.000 RUB', '108 MP');
const samsung_TV = new TVElectrodevice('Samsung-Neo QLED 4K', '100.000 RUB', '50 inches');

console.log(samsung_phone);
console.log(samsung_TV);

samsung_phone.getEnergyUsage('5Vt');
samsung_TV.getEnergyUsage('80Vt');

console.log(samsung_TV.name, 'PlugIn_info:', samsung_TV.isPlugged)
samsung_TV.plugIn();
console.log(samsung_TV.name, 'PlugIn_info:', samsung_TV.isPlugged);

console.log(samsung_phone.name, 'Camera_info:', samsung_phone.camera);

