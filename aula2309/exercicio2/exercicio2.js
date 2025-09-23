class Carro {
    constructor (marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
}

 detalhes() {
            return `o carro de marca ${this.marca}, modelo ${this.modelo} e ano ${this.ano}`
        }

    }

    const carro1 = new Carro ("Bmw","x100", 2025)
    const carro2 = new Carro ("Chevrollet", "picap", 2025)

   console.log(carro1.detalhes()) 
   console.log(carro2.detalhes())
   