//Vamos usar a programação orientada a objetos para criar uma classe Employee
//que representa um funcionário com propriedades como id, nome e email.
//A classe terá um construtor para inicializar essas propriedades.
//Além disso, vamos adicionar métodos para acessar essas propriedades.
//A classe será exportada como padrão para ser usada em outros módulos.
//src/domain/employee/entities/employee.ts
//private nesse caso significa que essas propriedades não podem ser acessadas 
// diretamente de fora da classe, é um encapsulamento.
import { randomUUID } from 'node:crypto';

type EmployeeType = {
    name: string;
    email: string;
    password: string;
};

export default class Employee {
    private id: string; 
    private name: string;
    private email: string;
    private password: string;

    // constructor(id: string, name: string, email: string, password: string) {
    //Ao invés de passar os parâmetros individualmente,
    //vamos passar um objeto do tipo EmployeeType, para ficar mais organizado, limpo.

    constructor(data: EmployeeType, id?: string) { //caso eu receba um funcionário novo e ainda não tenha o id)
        this.id = id ?? randomUUID(); //se não receber um id, gera um novo id aleatório
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
    }
}