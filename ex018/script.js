let num = document.getElementById("fnum");
let lista = document.getElementById("flist");
let res = document.getElementById("res");
let valores = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Valor inválido ou já na lista");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    alert("Adicione valores antes de finalizar");
  } else {
    let tot = valores.length;
    let maiores = valores[0];
    let menores = valores[0];
    let soma = 0;
    let media = 0;
    for (pos in valores) {
      soma += valores[pos];

      if (valores[pos] > maiores) maiores = valores[pos];
      if (valores[pos] < menores) menores = valores[pos];
    }
    media = soma / tot;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maiores} e o menor valor informado foi ${menores}</p>`;
    res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`;
    res.innerHTML += `<p>A media de todos os valores é ${media}</p>`;
  }
}
