/*
Vamos usar a programação orientada a objetos para criar uma classe Room
que representa um quarto com propriedades como id, nome e preço.
A classe terá um construtor para inicializar essas propriedades.
Além disso, vamos adicionar métodos para acessar essas propriedades.
A classe será exportada como padrão para ser usada em outros módulos.
*/

import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';
import { Optional } from '../../../core/types/optional';

type RoomType = {
    name: string;
    price: number;
    image: string;
    hasWifi: boolean;
    hasAirConditioning: boolean;
    hasKitchen: boolean;
    isPetFriendly: boolean;
    isAvailable: boolean;
    };

export default class Room extends Entity<RoomType> {
    // constructor(data: RoomType, id?: Identity) {
    //     super(data, id);
    // }

     /* Posso substituir o consrutor com um método static que cria uma instância*/

    static create(
        data: Optional<
        RoomType, 
        | 'hasWifi' 
        | 'hasAirConditioning' 
        | 'hasKitchen' 
        | 'isPetFriendly' 
        | 'isAvailable'
        >, 
        id?: Identity
    ) {
        return new Room({ ...data, 
            hasWifi: data.hasWifi ?? false, 
            hasAirConditioning: data.hasAirConditioning ?? false, 
            hasKitchen: data.hasKitchen ?? false, 
            isPetFriendly: data.isPetFriendly ?? false, 
            isAvailable: data.isAvailable ?? true },
            id);
    }

    get name() {
        return this.attributes.name;
    }
    get price() {
        return this.attributes.price;
    }
    get image() {
        return this.attributes.image;
    }
    get hasWifi() {
        return this.attributes.hasWifi;
    }
    get hasAirConditioning() {
        return this.attributes.hasAirConditioning;
    }
    get hasKitchen() {
        return this.attributes.hasKitchen;
    }
    get isPetFriendly() {
        return this.attributes.isPetFriendly;
    }
    get isAvailable() {
        return this.attributes.isAvailable;
    }
    
    set name(name: string) {
        this.attributes.name = name;
    }
    set price(price: number) {
        this.attributes.price = price;
    }
    set image(image: string) {
        this.attributes.image = image;
    }
    set hasWifi(hasWifi: boolean) {
        this.attributes.hasWifi = hasWifi;
    }
    set hasAirConditioning(hasAirConditioning: boolean) {
        this.attributes.hasAirConditioning = hasAirConditioning;
    }
    set hasKitchen(hasKitchen: boolean) {
        this.attributes.hasKitchen = hasKitchen;
    }
    set isPetFriendly(isPetFriendly: boolean) {
        this.attributes.isPetFriendly = isPetFriendly;
    }
    set isAvailable(isAvailable: boolean) {
        this.attributes.isAvailable = isAvailable;
    }
}
