class Car{
    setName(name){
        this.name = name
    }
    startEngine(){
        console.log('Engine started for '+this.name)
    }
    stopEngine(){
        console.log('Engine has stopped for '+this.name)
    }
}

class Bmw extends Car{
    topSpeed(speed){
        console.log ('Top speed for '+this.name+' is '+speed)
    }
}

let b1 = new Bmw()
b1.setName('A8')
b1.startEngine()
b1.stopEngine()
b1.topSpeed(320)