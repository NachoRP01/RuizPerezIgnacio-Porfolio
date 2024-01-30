export class Lenguajes{
    constructor(public parteWeb:string, public arrayLenguajes:ArrayLenguajes[]){}
}
export class ArrayLenguajes{
    constructor(public nombreLenguaje:string, public texto:string){}
}