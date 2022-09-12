function validar1Digito(cpf) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpf[i] * (10 - i);
    }
    const sobra = (sum * 10) % 11;
    if (sobra < 10) {
      return cpf[9] == sobra;
    }
    return cpf[9] == 0;
  }
  
  function validar2Digito(cpf) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += cpf[i] * (11 - i);
    }
    const sobra = (sum * 10) % 11;
    if (sobra < 10) {
      return cpf[10] == sobra;
    }
    return cpf[10] == 0;
  }
  
  function validarRepetido(cpf) {
    const primeiro = cpf[0];
    let dif = false;
    for(let i = 1; i < cpf.length; i++) {
      if(cpf[i] != primeiro) {
        dif = true;
      }
    }
    return dif;
  }
  
  function validarCpf(cpf) {
    if (cpf.length != 11) {
      return false;
    }
    if(!validarRepetido(cpf)) {
      return false;
    }
    if (!validar1Digito(cpf)) {
      return false;
    }
    if (!validar2Digito(cpf)) {
      return false;
    }
    return true;
  }
  
  const cpf = "00000000900".split("").map((e) => parseInt(e));
  
  const cpfValido = validarCpf(cpf);
  
  console.log(cpfValido);

  //.split é só para dar o espaçamento