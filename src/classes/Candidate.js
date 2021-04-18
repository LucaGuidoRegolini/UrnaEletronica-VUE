export default class Candidate {
    constructor(name = "", url = "", partido = "", numero = "") {
        this.name = name;
        this.url = url;
        this.partido = partido;
        this.numero = numero;
        this.votos = 0;
    }
}