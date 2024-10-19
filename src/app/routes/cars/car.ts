export interface CarResponse {
    id:number ,
    year:Date
    brand : BrandResponse ,
    model : ModelResponse ,
    color : string ,
    mileage : number ,
    price : number ,
}

export interface CarRequest {
    year:Date
    brand : number ,
    model : number ,
    color : string ,
    mileage : number ,
    price : number ,
}

export interface BrandResponse {

    id :number ,

    name :string ,

    countryOfOrigin :string ,

    parentCompany :string ,

    website :string ,

}

export interface BrandRequest {

    id :number ,

    name :string ,

    countryOfOrigin :string ,

    parentCompany :string ,

    website :string ,

    models : number[] ;
}

export interface ModelRequest {
    id : number ,
    
    name : string ,
    
    year : Date,
    
    engineType : string ,
    
    transmission : string ,
    
    fuelType : string ,
    
    length: number ,
    
    width : number,
    
    height: number ,
    
    weight : number,
    
    fuelEfficiency : number,
    
    satingCapacity : number ,
    
    topSpeed  : number,
    
    numberOfDoors  : number,
    
    brand : number,

}

export interface ModelResponse {
    id : number ,
    
    name : string ,
    
    year : Date,
    
    engineType : string ,
    
    transmission : string ,
    
    fuelType : string ,
    
    length: number ,
    
    width : number,
    
    height: number ,
    
    weight : number,
    
    fuelEfficiency : number,
    
    satingCapacity : number ,
    
    topSpeed  : number,
    
    numberOfDoors  : number,
    
    brand : BrandResponse,

}

export type MappedCar <L extends {} , T> = {
    [Property in keyof L]:T[] ;
}