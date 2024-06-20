function showForm(formType) {
    let formHtml = '';
    switch (formType) {
        case 'triangulo':
            formHtml = `
                <h2>Área do Triângulo</h2>
                <label for="base">Base:</label>
                <input type="number" id="base" placeholder="Digite a base">
                <label for="altura">Altura:</label>
                <input type="number" id="altura" placeholder="Digite a altura">
                <button onclick="calcularTriangulo()">Calcular</button>
                <div id="resultado"></div>
            `;
            break;
        case 'retangulo':
            formHtml = `
                <h2>Área do Retângulo</h2>
                <label for="largura">Largura:</label>
                <input type="number" id="largura" placeholder="Digite a largura">
                <label for="alturaRet">Altura:</label>
                <input type="number" id="alturaRet" placeholder="Digite a altura">
                <button onclick="calcularRetangulo()">Calcular</button>
                <div id="resultado"></div>
            `;
            break;
        case 'cubo':
            formHtml = `
                <h2>Volume do Cubo</h2>
                <label for="lado">Lado:</label>
                <input type="number" id="lado" placeholder="Digite o lado">
                <button onclick="calcularCubo()">Calcular</button>
                <div id="resultado"></div>
            `;
            break;
        case 'circulo':
            formHtml = `
                <h2>Área do Círculo</h2>
                <label for="raio">Raio:</label>
                <input type="number" id="raio" placeholder="Digite o raio">
                <button onclick="calcularCirculo()">Calcular</button>
                <div id="resultado"></div>
            `;
            break;
    }
    document.getElementById('form-container').innerHTML = formHtml;
}

function calcularTriangulo() {
    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;
    if (base && altura) {
        const area = (base * altura) / 2;
        document.getElementById('resultado').innerHTML = `Área do Triângulo: ${area}`;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function calcularRetangulo() {
    const largura = document.getElementById('largura').value;
    const altura = document.getElementById('alturaRet').value;
    if (largura && altura) {
        const area = largura * altura;
        document.getElementById('resultado').innerHTML = `Área do Retângulo: ${area}`;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function calcularCubo() {
    const lado = document.getElementById('lado').value;
    if (lado) {
        const volume = lado ** 3;
        document.getElementById('resultado').innerHTML = `Volume do Cubo: ${volume}`;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function calcularCirculo() {
    const raio = document.getElementById('raio').value;
    if (raio) {
        const area = Math.PI * (raio ** 2);
        document.getElementById('resultado').innerHTML = `Área do Círculo: ${area.toFixed(2)}`;
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function sair() {
    document.getElementById('form-container').innerHTML = '';
}
