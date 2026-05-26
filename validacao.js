function validar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  document.getElementById('emailError').innerText = '';
  document.getElementById('senhaError').innerText = '';

  let valido = true;

  if (email === '') {
    document.getElementById('emailError').innerText = 'Informe um email válido';
    valido = false;
  }

  if (senha.length < 6) {
    document.getElementById('senhaError').innerText =
      'A senha deve ter no mínimo 6 caracteres';
    valido = false;
  } else if (senha !== confirmarSenha) {
    document.getElementById('senhaError').innerText =
      'As senhas não coincidem';
    valido = false;
  }

  if (valido) {
    alert('Cadastro validado com sucesso!');
  }
}

function limpar() {
  document.getElementById('email').value = '';
  document.getElementById('senha').value = '';
  document.getElementById('confirmarSenha').value = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('senhaError').innerText = '';
}
