export interface Car {
    id:string ,
    year:Date
    brand : string ,
    mileage : number ,
    engineSize : number ,
    numberOfDoors : number ,
    topSpeed : number ,
    price : number ,
}


export type MappedCar <L extends {} , T> = {
    [Property in keyof L]:T[] ;
}