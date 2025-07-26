import Identity from "./identity";

//classe abstrada não pode ser instanciada diretamente,
//ela serve como base para outras classes que herdam dela.

export default abstract class Entity<T> {
    private entityId: Identity; //private só pode ser acessada dentro da própria classe
    protected attributes: T; //protected pode ser acessada dentro da própria classe e nas classes que herdam delas

   get id() {
        return this.entityId;
    }

    protected constructor(attributes: T, id?: Identity) {
        this.entityId = id ?? new Identity(); //se não receber um id, gera um novo id aleatório
        this.attributes = attributes;
    }

    
}
