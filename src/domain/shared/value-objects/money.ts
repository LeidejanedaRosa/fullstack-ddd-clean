// A palavra "new" ativa o construtor da classe e cria uma nova instância da classe.
// Quando utilizamos "private" ele não permite criar uma instância da classe diretamente,
// precisamos usar o método estático create para criar uma instância.

export default class Money{
    private constructor(readonly value: number) { //com readonly eu digo que ele só pode ser lido, não pode ser alterado
        this.value = value;
    }
    static create(value:number)   {
        return new Money(value); // aqui posso usar o "new" porque estou dentro da classe, 
                                // aqui eu tenho acesso a qualquer método e atributo privado
    }

   formattedPriceBRL() {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(this.value/100); // converte o valor para centavos
    }

   
}