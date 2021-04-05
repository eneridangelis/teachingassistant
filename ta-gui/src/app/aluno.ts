export class Aluno {
  nome!: string;
  cpf!: string;
  email!: string;
  login!: string;
  metas: Map<string,string> = new Map();

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.cpf = "";
    this.email = "";
    this.login = "";
    this.metas = new Map();
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.nome = this.nome;
    aluno.cpf = this.cpf;
    aluno.email = this.email;
    aluno.login = this.login;
    aluno.metas = this.cloneMetas();
    return aluno;
  }

  cloneMetas(): Map<any,any> {
    var metas: Map<string,string> = new Map(this.metas);
    
    return metas;
  }
}
