//Vamos usar a programação orientada a objetos para criar uma classe Employee
//que representa um funcionário com propriedades como id, nome e email.
//A classe terá um construtor para inicializar essas propriedades.
//Além disso, vamos adicionar métodos para acessar essas propriedades.
//A classe será exportada como padrão para ser usada em outros módulos.
//src/domain/employee/entities/employee.ts
//private nesse caso significa que essas propriedades não podem ser acessadas 
// diretamente de fora da classe, é um encapsulamento.

import Entity from '../../../core/entities/entity';
import Identity from '../../../core/entities/identity';

type EmployeeType = {
    name: string;
    email: string;
    password: string;
};
export default class Employee extends Entity<EmployeeType> {

    // constructor(data: EmployeeType, id?: Identity) {
    //     super(data, id);
    // }
    
    /* Posso substituir o consrutor com um método static que cria uma instância*/

   static create(data: EmployeeType, id?: Identity) {
        return new Employee(data, id);
    }

    get name() {
        return this.attributes.name;
    }

    get email() {
        return this.attributes.email;
    }

    get password() {
        return this.attributes.password;
    }

    set name(name: string) {
        this.attributes.name = name;
    }

    set email(email: string) {
        this.attributes.email = email;
    }

    set password(password: string) {
        this.attributes.password = password;
    }
}
