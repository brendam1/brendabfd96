class ContaBancaria {
  constructor() {
    this._saldo = 0; // atributo "privado" por convenção
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      console.log(`💰 Depositado: R$${valor}`);
    } else {
      console.log("❌ Valor inválido para depósito.");
    }
  }

  sacar(valor) {
    if (valor <= this._saldo) {
      this._saldo -= valor;
      console.log(`🏧 Sacado: R$${valor}`);
    } else {
      console.log("❌ Saldo insuficiente para saque.");
    }
  }

  verSaldo() {
    console.log(`📄 Saldo atual: R$${this._saldo}`);
    return this._saldo;
  }
}

// Teste pedido no exercício:
const conta = new ContaBancaria();

conta.depositar(100);  // Deposita 100
conta.sacar(30);       // Saca 30
conta.verSaldo();      // Mostra o saldo atual (70)


    


    
