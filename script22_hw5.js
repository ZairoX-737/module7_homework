class SamsungElectrodevice{
    constructor(){
        this.brand = 'Samsung';
        this.isPlugged = false;
    }
}

class TVElectrodevice extends SamsungElectrodevice{
    constructor(name, price, diagonal){
        super(name);
        this.name = name;
        this.price = price;
        this.diagonal = diagonal;
    }
    getEnergyUse(energy){
        return `power usage of ${this.name} = ${energy}`;
    }
    plugIn(){
        this.isPlugged = true;
        return this.name + " is plugged!";
    }
}

class PhoneElectrodevice extends SamsungElectrodevice{
    constructor(name, price, camera){
        super(name);
        this.name = name;
        this.price = price;
        this.camera = camera;
    }
    getEnergyUse(energy){
        return `power usage of ${this.name} = ${energy}`;
    }
    plugIn(){
        this.isPlugged = true;
        return this.name + " is plugged!";
    }
}

const samsung_phone = new PhoneElectrodevice('Samsung-S21', '80.000 RUB', '108 MP');
const samsung_TV = new TVElectrodevice('Samsung-Neo QLED 4K', '100.000 RUB', '50 inches');

console.log(samsung_phone);
console.log(samsung_TV);

console.log(samsung_phone.getEnergyUse('5Vt'));
console.log(samsung_TV.getEnergyUse('80Vt'));

console.log(samsung_TV.name, 'PlugIn_info:', samsung_TV.isPlugged)
console.log(samsung_TV.plugIn());
console.log(samsung_TV.name, 'PlugIn_info:', samsung_TV.isPlugged);

console.log(samsung_phone.name, 'Camera_info:', samsung_phone.camera);