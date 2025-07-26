//Vamos usar a programação orientada a objetos para criar uma classe Employee
//que representa um funcionário com propriedades como id, nome e email.
//A classe terá um construtor para inicializar essas propriedades.
//Além disso, vamos adicionar métodos para acessar essas propriedades.
//A classe será exportada como padrão para ser usada em outros módulos.
//src/domain/employee/entities/employee.ts
//private nesse caso significa que essas propriedades não podem ser acessadas 
// diretamente de fora da classe, é um encapsulamento.
import { randomUUID } from 'node:crypto';
import Room from '../../employee/entities/room';

type BookingType = {
    room: Room
    days: number;
    customer: string;
    email: string;
    isActive: boolean;
    };

export default class Booking {
    private id: string;
    private room: Room;
    private days: number;
    private customer: string;
    private email: string;
    private isActive: boolean;    

    constructor(data: BookingType, id?: string) { //caso eu receba um funcionário novo e ainda não tenha o id)
        this.id = id ?? randomUUID(); //se não receber um id, gera um novo id aleatório
        this.room = data.room;
        this.days = data.days;
        this.customer = data.customer;
        this.email = data.email;
        this.isActive = data.isActive;
    }
}
