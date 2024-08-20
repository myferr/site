<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../lib/components/Button.svelte';

	let price: string;
	let priceLabel: string;
	let jobDescription: string;

	let selectedJob: any;

	let mailMe: string;

	onMount(() => {
		const q = window.location.search;
		const p = new URLSearchParams(q);

		if (p.get('job') == '' || p.get('job') == null || p.get('job') == undefined) {
			window.location.href = '/hire';
		}

		selectedJob = p.get('job')?.replace('_', ' ');

		if (selectedJob == 'not-available') {
			window.location.href = '/sorry';
		}

		if (selectedJob == 'Web Developer') {
			price = '$3';
			priceLabel = ' per page';
			jobDescription = 'Request me to create you a website.';
		}
		if (selectedJob == 'Web Designer') {
			price = '$3';
			priceLabel = ' per designed page';
			jobDescription = 'Request me to design your website.';
		}
		if (selectedJob == 'Graphic Designer') {
			price = '$2';
			priceLabel = ' per page';
			jobDescription = 'Request me to design you a logo, banner, etc.';
		}

		mailMe = `mailto:contactme.myfer@protonmail.com?subject=Hire%20Request!%20✨%20-%20${selectedJob}`;
	});
</script>

<main>
	<div style="text-align: left">
		<h1>
			Hire me as a <br />
			<span style="color: #0070f3">{selectedJob}</span>
		</h1>
		<p class="title">
			<span class="circle" />
			Pricing:
		</p>
		{' '}
		<code class="geist-mono">
			{price}
			{priceLabel}
		</code>
		<p class="title">
			<span class="circle" />
			Job Description:
		</p>
		{' '}
		<code class="geist-mono">{jobDescription}</code>
		<p class="title">
			<span class="circle" />
			Hire me as a:
		</p>
		{' '}
		<code class="geist-mono">{selectedJob}</code>
		<br />
		<div
			style="
            display: flex;
            justifyContent: center;
            align-items: center
          "
		>
			<p class="line" />
		</div>
		<div style="text-align: center">
			<br />
			<br />
			<h2>Email me</h2>
			<a href={mailMe}>
				<Button>Send me your request</Button>
			</a>
		</div>
	</div>
</main>
