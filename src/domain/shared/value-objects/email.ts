// A palavra "new" ativa o construtor da classe e cria uma nova instância da classe.
// Quando utilizamos "private" ele não permite criar uma instância da classe diretamente,
// precisamos usar o método estático create para criar uma instância.

export default class Email{
    private constructor(readonly value: string) { //com readonly eu digo que ele só pode ser lido, não pode ser alterado
        this.value = value;
    }
    static create(email:string)   {
        return new Email(email); // aqui posso usar o "new" porque estou dentro da classe, 
                                // aqui eu tenho acesso a qualquer método e atributo privado
    }

    validate(): boolean {
        return !!this.value // !! converte o valor para booleano, se for vazio ou nulo retorna false, caso contrário true
        .toLowerCase()
        .match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        );
    }

   
}