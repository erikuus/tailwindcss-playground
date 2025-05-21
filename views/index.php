<!DOCTYPE html>
<html class="m-4">
<head>
	<title></title>
	<link rel="stylesheet" href="../style.css">
</head>
<body>
	<div class="grid grid-cols-4 gap-x-4">
		<div class="col-span-3 bg-gray-100 p-4">
			<h1>Docs</h1>
			<div class="columns-4 gap-x-2">
			<?php foreach(array_diff(scandir('../docs'), array('..', '.')) as $file): ?>
				<a target="_blank" class="block my-1 text-blue-500" href="../docs/<?php echo $file ?>">
					<?php echo $file ?>
				</a>
			<?php endforeach; ?>
			</div>
		</div>
		<div class="bg-gray-100 p-4">
			<h1>Plugins</h1>
			<?php foreach(array_diff(scandir('../plugins'), array('..', '.')) as $file): ?>
				<a target="_blank" class="block my-1 text-blue-500" href="../plugins/<?php echo $file ?>">
					<?php echo $file ?>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</body>
</html>
