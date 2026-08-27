// Filtra as fotos usando o texto digitado na caixa de busca.
function filtrar() {
  // Obtém o termo pesquisado e converte para letras minúsculas.
  const termo = document.getElementById('busca').value.toLowerCase();

  // Seleciona todas as figuras que representam fotos.
  const fotos = document.querySelectorAll('.foto');

  // Exibe apenas as fotos cujas tags contêm o termo pesquisado.
  fotos.forEach(foto => {
    const tags = foto.dataset.tags.toLowerCase();
    foto.style.display = tags.includes(termo) ? 'block' : 'none';
  });
}

// Adiciona o efeito de ampliação quando o cursor passa sobre cada foto.
document.querySelectorAll('.foto').forEach(img => {
  img.onmouseover = () => img.classList.toggle('grande');
});

// Abre o álbum indicado pelo ID recebido e fecha os demais álbuns.
function abrir_album(idalbum) {
  // Localiza o conteúdo do álbum e o cartão correspondente na tela inicial.
  const fotos = document.getElementById(idalbum);
  const album = document.querySelector(`[data-album="${idalbum}"]`);

  // Interrompe a função caso o álbum ou o cartão não exista.
  if (!fotos || !album) return;

  // Esconde a lista de álbuns para mostrar somente o álbum selecionado.
  document.querySelector('.albuns').classList.add('oculto');

  // Garante que nenhum outro álbum continue aberto.
  document.querySelectorAll('.fotos-album').forEach(outroAlbum => {
    outroAlbum.classList.remove('aberto');
  });

  // Torna visível o álbum escolhido.
  fotos.classList.add('aberto');
}

// Fecha o álbum atual e retorna à lista de álbuns.
function mostrar_albuns() {
  // Mostra novamente os cartões dos álbuns.
  document.querySelector('.albuns').classList.remove('oculto');

  // Fecha todos os álbuns de fotos.
  document.querySelectorAll('.fotos-album').forEach(album => {
    album.classList.remove('aberto');
  });
}