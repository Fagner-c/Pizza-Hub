//Nav-bar: 
class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <header>
            <h1>🍕 Pizza Lobby</h1>
            <nav>
                <ul>
                    <li><a href="INDEX.HTML">Home</a></li>
                    <li><a href="ranking.html">Ranking</a></li>
                    <li><a href="descontos.html">Descontos</a></li>
                </ul>
            </nav>
            <a href="formulario.html" class="login-user"><img src="imagem/avatar-vazio.png" alt=""></a>
        </header>
        `   
    }
}
customElements.define('pizza-navbar', Navbar);

//footer: 
class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML =`
        <footer>
            <p>© 2026 Pizza Lobby - Cupons exclusivos de pizzarias</p>
        </footer>
        `
    }
}
customElements.define('pizza-footer',Footer);

//Copiar cupom:
function copiarCupom(cupom) {
        navigator.clipboard.writeText(cupom);
        alert("Cupom copiado: " + cupom);
}

function alterarPessoa() {
    nome = document.getElementById("nome").value;
    gmail = document.getElementById("email").value;
    const pa = document.getElementById("p1")
    pa.textContent = `Nome: ${nome}`;
    const pe = document.getElementById("p2")
    pe.textContent = `Email: ${gmail}`;

}
var user = document.querySelector('.user');
let nome = "fAGNER CAR"
let  gmail = "Fagner@aaa"
const meuParagrafo1 = document.createElement("p");
meuParagrafo1.id = 'p1'
meuParagrafo1.textContent = `Nome: ${nome}`;
user.append(meuParagrafo1)
const meuParagrafo2 = document.createElement("p");
meuParagrafo2.id = 'p2'
meuParagrafo2.textContent = `Gmail: ${gmail}`;
user.append(meuParagrafo2)