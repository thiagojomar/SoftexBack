class SistemaSeguranca {
    private static instance: SistemaSeguranca | null = null;
    private senhaSistema: string = "AlunoFap_2023"

    private constructor() { }

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instance) {
            SistemaSeguranca.instance = new SistemaSeguranca();
        }
        return SistemaSeguranca.instance;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaSistema) {
            console.log("Acesso concedido, seja bem vindo(a) a Base Secreta");
        } else {
            console.log("Acesso negado!");
            console.log("ALERTA... TENTATIVA DE INVASÃO");
        }
    }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Agente tenta acessar a Base Secreta com senha correta
sistemaSeguranca.acessarBaseSecreta("AlunoFap_2023");

// Agente tenta acessar a Base Secreta com senha incorreta
sistemaSeguranca.acessarBaseSecreta("alunofap2024");