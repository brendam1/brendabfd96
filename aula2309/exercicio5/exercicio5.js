class Funcionario {
    constructor(nome, salario) {
        this.nome;
        this.salario;
    }
}

descricao(); {
    return `funcionario ${this.nome}, salario: ${this.salario}`;

}

class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento
    }
}
  
descricao(); {
    return `funcionario ${this.nome}, salario: ${this.salario}, departamento: ${this.departamento}`;
}


const f = new Funcionario("Brenda", 3500.0);
const g = new Gerente("Carlos", 7000.0, "TI");

console.log(f.descricao());
console.log(g.descricao());