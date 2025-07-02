<?php
include 'conexao.php';

$stmt = $pdo->query("SELECT * FROM arquivos ORDER BY data_upload DESC");
$arquivos = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Arquivos da Professora</title>
  <style>
    body { font-family: Arial, sans-serif; background: #333; color: #eee; padding: 20px; }
    a { color: #f05454; text-decoration: none; }
    .arquivo { margin-bottom: 10px; padding: 10px; background: #222; border-radius: 6px; }
  </style>
</head>
<body>
  <h1>Arquivos para Download</h1>

  <?php if (count($arquivos) === 0): ?>
    <p>Nenhum arquivo disponível.</p>
  <?php else: ?>
    <?php foreach ($arquivos as $arquivo): ?>
      <div class="arquivo">
        <strong><?= htmlspecialchars($arquivo['nome_original']) ?></strong>
        — 
        <a href="uploads/<?= htmlspecialchars($arquivo['nome_salvo']) ?>" download>Download</a>
      </div>
    <?php endforeach; ?>
  <?php endif; ?>

  <p><a href="index.html">Voltar</a></p>
</body>
</html>
