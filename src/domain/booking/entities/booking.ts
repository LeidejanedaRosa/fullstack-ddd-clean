//Vamos usar a programação orientada a objetos para criar uma classe Employee
//que representa um funcionário com propriedades como id, nome e email.
//A classe terá um construtor para inicializar essas propriedades.
//Além disso, vamos adicionar métodos para acessar essas propriedades.
//A classe será exportada como padrão para ser usada em outros módulos.

//private nesse caso significa que essas propriedades não podem ser acessadas 
// diretamente de fora da classe, é um encapsulamento.


import Room from '../../employee/entities/room';
import Identity from '../../../core/entities/identity';
import { Optional } from '../../../core/types/optional';
import Email from '../../shared/value-objects/email'; // objeto de valor do DDD
import AggregateRoot from '../../../core/entities/aggregate-root';

type BookingType = {
    room: Room
    days: number;
    customer: string;
    email: Email;
    isActive: boolean;
    };

export default class Booking extends AggregateRoot<BookingType> {    

    // constructor(data: BookingType, id?: Identity) { //caso eu receba um funcionário novo e ainda não tenha o id)
    //     super(data, id); //chama o construtor da classe pai (Entity)
    // }

    /* Posso substituir o consrutor com um método static que cria uma instância*/

    static create(data: Optional<BookingType, 'isActive'>, id?: Identity) {
        return new Booking({ ...data, isActive: data.isActive?? true }, id);
    }

    get room() {
        return this.attributes.room;
    }
    get days() {
        return this.attributes.days;
    }
    get customer() {
        return this.attributes.customer;
    }
    get email() {
        return this.attributes.email;
    }
    get isActive() {
        return this.attributes.isActive;
    }
    // Não podemos alterar o quarto de uma reserva, por isso não temos um setter para room

    set days(days: number) {
        this.attributes.days = days;
    }
    set customer(customer: string) {
        this.attributes.customer = customer;
    }
    set email(email: Email) {
        this.attributes.email = email;
    }
    set isActive(value: boolean) {
        this.attributes.isActive = value;
    }   
}
