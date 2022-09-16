<!DOCTYPE html>
<html class="m-4">
<head>
	<title></title>
	<link rel="stylesheet" href="../style.css">
</head>
<body>
	<div class="flex space-x-4">
		<div class="flex-1 bg-gray-100 p-4">
			<h1>Docs</h1>
			<?php foreach(array_diff(scandir('../docs'), array('..', '.')) as $file): ?>
				<a target="_blank" class="block mx-10 my-1 text-blue-500" href="../docs/<?php echo $file ?>">
					<?php echo $file ?>
				</a>
			<?php endforeach; ?>
		</div>
		<div class="flex-1 bg-gray-100 p-4">
			<h1>Plugins</h1>
			<?php foreach(array_diff(scandir('../plugins'), array('..', '.')) as $file): ?>
				<a target="_blank" class="block mx-10 my-1 text-blue-500" href="../plugins/<?php echo $file ?>">
					<?php echo $file ?>
				</a>
			<?php endforeach; ?>
		</div>
		<div class="flex-1 bg-gray-100 p-4">
			<h1>Labs</h1>
			<?php foreach(array_diff(scandir('../labs'), array('..', '.')) as $file): ?>
				<a target="_blank" class="block mx-10 my-1 text-blue-500" href="../labs/<?php echo $file ?>">
					<?php echo $file ?>
				</a>
			<?php endforeach; ?>
		</div>
		<div class="flex-1 bg-gray-100 p-4">
			<h1>Private</h1>
			<?php foreach(array_diff(scandir('../private'), array('..', '.')) as $file): ?>
				<a target="_blank" class="block mx-10 my-1 text-blue-500" href="../private/<?php echo $file ?>">
					<?php echo $file ?>
				</a>
			<?php endforeach; ?>
		</div>
	</div>
</body>
</html>
