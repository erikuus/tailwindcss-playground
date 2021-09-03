<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="../style.css">
</head>
<body>
	<h1 class="mx-10 my-5">Docs</h1>
	<?php foreach(array_diff(scandir('../docs'), array('..', '.')) as $file): ?>
		<a target="_blank" class="block mx-10 my-1 text-blue-500" href="../docs/<?php echo $file ?>">
			<?php echo $file ?>
		</a>
	<?php endforeach; ?>
</body>
</html>
