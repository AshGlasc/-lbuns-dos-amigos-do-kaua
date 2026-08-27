//Pesquisa a foto especifica baseado nas tags colocadas
function filtrar() {
  const termo = document.getElementById('busca').value.toLowerCase();
  const fotos = document.querySelectorAll('.foto');

  fotos.forEach(foto => {
    const tags = foto.dataset.tags.toLowerCase();
    foto.style.display = tags.includes(termo) ? 'block' : 'none';
  });
}


// deixa grande
document.querySelectorAll('.foto').forEach(img => {
  img.onmouseover = () => img.classList.toggle('grande');
});

// abre o álbum indicado pelo id recebido (fecha os outros)
function abrir_album(idalbum) {
  const fotos = document.getElementById(idalbum);
  const album = document.querySelector(`[data-album="${idalbum}"]`);
  if (!fotos || !album) return;

  document.querySelector('.albuns').classList.add('oculto');
  document.querySelectorAll('.fotos-album').forEach(outroAlbum => {
    outroAlbum.classList.remove('aberto');
  });
  fotos.classList.add('aberto');
}

function mostrar_albuns() {
  document.querySelector('.albuns').classList.remove('oculto');
  document.querySelectorAll('.fotos-album').forEach(album => {
    album.classList.remove('aberto');
  });
}