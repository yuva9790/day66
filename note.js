class circle{
    constractor(radiues,color){
        this.radiues = radiues;
        this.color = color;
    }
    getRadiues(){
        console.log('radiues of circle is: ${this.radiues}' )
    }
    getColor(){
        console.log('color of circle is: ${this.Color}') 
    }
    getArea(){
        const pi = 3.0;
        console.log('area of circle is:${pi*(this.radiues*this.radiues)}')
    }
    getCirecumference(){
        const pi= 3.0;
        console.log('cirecumference of circle is:${4*pi(this.rediues)}')
    }
}

let circle = new Cirecle(4.0);


console.log(circle.getRadiues());
console.log(circle.(getColor());
console.log(circle.getArea());
console.log(circle.getCirecumference());

            
            
    