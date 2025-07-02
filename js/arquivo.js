// // Salva a lista no localStorage
// function salvarArquivos(lista) {
//   localStorage.setItem('arquivos', JSON.stringify(lista));
// }

// // Carrega a lista do localStorage
// function carregarArquivos() {
//   const arquivosSalvos = localStorage.getItem('arquivos');
//   return arquivosSalvos ? JSON.parse(arquivosSalvos) : [];
// }

// // Remove um arquivo pelo nome
// function excluirArquivo(nomeArquivo) {
//   let lista = carregarArquivos();
//   lista = lista.filter(arquivo => arquivo.nome !== nomeArquivo);
//   salvarArquivos(lista);
// }

// // Mostra um arquivo na tela com botão de excluir
// function adicionarArquivoNaTela(arquivo) {
//   const grid = document.querySelector('.arquivos-grid');

//   const item = document.createElement('div');
//   item.className = 'arquivo-item';
//   item.setAttribute('data-nome', arquivo.nome);

//   const extensao = arquivo.nome.split('.').pop().toLowerCase();
//   let icone = 'https://img.icons8.com/color/48/file.png';

//   if (extensao === 'pdf') {
//     icone = 'https://img.icons8.com/color/452/pdf.png';
//   } else if (['docx', 'doc'].includes(extensao)) {
//     icone = 'https://licendi.com/media/magefan_blog/2022/07/microsoft-word-logo-1024x575-1.jpg';
//   } else if (['xlsx', 'xls'].includes(extensao)) {
//     icone = 'https://tse2.mm.bing.net/th/id/OIP.1Vm5c5pPfXiDlbrTxfOkUQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3';
//   } else if (['pptx', 'ppt'].includes(extensao)) {
//     icone = 'https://www.tutkit.com/storage/media/packages/1118/1118-powerpoint-kurs-grundlagen-experten-tipps-fuer-ueberzeugende-praesentationen-feat.jpg';
//   }

//   item.innerHTML = `
//     <img src="${icone}" alt="Ícone ${extensao}" />
//     <span>${arquivo.nome}</span>
//     <button class="excluir-btn">Excluir</button>
//   `;

//   // Botão de excluir com confirmação
//   item.querySelector('.excluir-btn').addEventListener('click', () => {
//     if (confirm(Deseja excluir o arquivo "${arquivo.nome}"?)) {
//       item.remove();
//       excluirArquivo(arquivo.nome);
//     }
//   });

//   grid.appendChild(item);
// }

// // Evento ao selecionar arquivo
// document.getElementById('fileUpload').addEventListener('change', function () {
//   const file = this.files[0];
//   if (file) {
//     const nome = file.name;
//     const novoArquivo = { nome };

//     adicionarArquivoNaTela(novoArquivo);

//     const lista = carregarArquivos();
//     lista.push(novoArquivo);
//     salvarArquivos(lista);
//   }

//   // Permite selecionar o mesmo arquivo de novo se quiser
//   this.value = '';
// });

// // Ao carregar a página, mostra os arquivos salvos
// window.addEventListener('DOMContentLoaded', () => {
//   const lista = carregarArquivos();
//   lista.forEach(adicionarArquivoNaTela);
// });

// // Filtro de pesquisa ao digitar
// document.getElementById('pesquisa').addEventListener('input', function () {
//   const termo = this.value.toLowerCase();
//   const itens = document.querySelectorAll('.arquivo-item');

//   itens.forEach(item => {
//     const nome = item.querySelector('span').textContent.toLowerCase();
//     item.style.display = nome.includes(termo) ? 'flex' : 'none';
//   });
// });