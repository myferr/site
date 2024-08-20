<script>
	import Button from '../lib/components/Button.svelte';
</script>

<main>
	<div style="text-align: left">
		<h1>Sorry, I can not do that.</h1>
		<p class="title">
			<span class="circle" />
			Contact Email:
		</p>
		{' '}
		<code class="geist-mono"> contactme.myfer@protonmail.com </code>
		<p class="title">
			<span class="circle" />
			Timezone & Location:
		</p>
		{' '}
		<code class="geist-mono"> CDT (UTC-05:00) & United States, Florida </code>
		<br />
		<a href="/hire">
			<Button>Hire me</Button>
		</a>
	</div>
</main>
