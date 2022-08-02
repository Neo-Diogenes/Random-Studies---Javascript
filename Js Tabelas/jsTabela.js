function cadPessoa(nome, sobrenome, email, altura, sexo){

    var tb = document.querySelector(".tbPessoas");
    var qtdLinhas = tb.rows.length;
    var linha = tb.insertRow(qtdLinhas);

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellSobrenome = linha.insertCell(2);
    var cellEmail = linha.insertCell(3);
    var cellAltura = linha.insertCell(4);
    var cellSexo = linha.insertCell(5);

    cellCodigo.innerHtml = qtdLinhas;
    cellNome.innerHtml = nome;
    cellSobrenome.innerHtml = sobrenome;
    cellEmail.innerHtml = email;
    cellAltura.innerHtml = altura;
    cellSexo.innerHtml = sexo;

}