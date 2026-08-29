const origem = document.getElementById('fotos-origem');
const albuns = document.querySelectorAll('.fotos-album');

function obterTags(foto) {
  return foto.dataset.tags
    .toLowerCase()
    .split(/[\s,]+/)
    .filter(Boolean);
}

// Uma cópia é criada em cada álbum que corresponde a uma das tags da foto.
function montarAlbuns() {
  const fotos = origem.querySelectorAll('.foto');

  albuns.forEach(album => {
    const tagDoAlbum = [...album.classList]
      .find(classe => classe.startsWith('fotos-') && classe !== 'fotos-album');

    if (!tagDoAlbum) return;

    fotos.forEach(foto => {
      if (obterTags(foto).includes(tagDoAlbum.replace('fotos-', ''))) {
        album.appendChild(foto.cloneNode(true));
      }
    });
  });
}

// Filtra as fotos do álbum aberto usando as tags cadastradas no HTML.
function filtrar() {
  const termo = document.getElementById('busca').value.toLowerCase().trim();
  const fotosVisiveis = document.querySelectorAll('.fotos-album.aberto .foto');

  fotosVisiveis.forEach(foto => {
    const tags = obterTags(foto).join(' ');
    foto.style.display = tags.includes(termo) ? '' : 'none';
  });
}

document.getElementById('busca').addEventListener('input', filtrar);

// Exibe somente o álbum escolhido e fecha os outros.
function abrir_album(idalbum) {
  // Localiza o conteúdo do álbum pela classe definida manualmente no HTML.
  const fotos = document.querySelector(`.fotos-album.${idalbum}`);

  if (!fotos) return;

  document.querySelector('.albuns').classList.add('oculto');

  document.querySelectorAll('.fotos-album').forEach(outroAlbum => {
    outroAlbum.classList.remove('aberto');
  });

  fotos.classList.add('aberto');
  filtrar();
}

// Fecha o álbum atual e restaura a lista de capas.
function mostrar_albuns() {
  document.querySelector('.albuns').classList.remove('oculto');

  document.querySelectorAll('.fotos-album').forEach(album => {
    album.classList.remove('aberto');
  });
}

montarAlbuns();
