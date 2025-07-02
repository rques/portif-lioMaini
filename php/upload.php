<?php
include 'conexao.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  if (isset($_FILES['arquivo']) && $_FILES['arquivo']['error'] === UPLOAD_ERR_OK) {
    $nomeOriginal = $_FILES['arquivo']['name'];
    $tipo = $_FILES['arquivo']['type'];
    $tamanho = $_FILES['arquivo']['size'];

    // Cria nome único para evitar conflitos
    $ext = pathinfo($nomeOriginal, PATHINFO_EXTENSION);
    $nomeSalvo = uniqid() . "." . $ext;

    $pastaUploads = __DIR__ . "/uploads/";

    if (!is_dir($pastaUploads)) {
      mkdir($pastaUploads, 0777, true);
    }

    $destino = $pastaUploads . $nomeSalvo;

    if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $destino)) {
      // Salva dados no banco
      $stmt = $pdo->prepare("INSERT INTO arquivos (nome_original, nome_salvo, tipo, tamanho) VALUES (?, ?, ?, ?)");
      $stmt->execute([$nomeOriginal, $nomeSalvo, $tipo, $tamanho]);

      echo "Upload realizado com sucesso!";
    } else {
      echo "Erro ao mover o arquivo.";
    }
  } else {
    echo "Nenhum arquivo enviado ou erro no upload.";
  }
} else {
  echo "Método inválido.";
}
?>
