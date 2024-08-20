<script>
	import Button from '../lib/components/Button.svelte';
	import JobCard from '../lib/components/JobCard.svelte';
</script>

<main>
	<div style="text-align:left;">
		<h1>Hire me.</h1>
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
		<a href="#jobs">
			<Button>View available jobs</Button>
		</a>
	</div>
	<br />
	<div id="jobs">
		<br />
		<p class="line" />
		<section>
			<h1>Jobs</h1>
			<br />
			<div class="cards" style="display: flex; justify-content: center; align-items: center">
				<JobCard
					title="Web Developer"
					description="Request me to create you a website."
					available={false}
				/>
				<JobCard
					title="Web Designer"
					description="Request me to design your website."
					available={true}
				/>
				<JobCard
					title="Graphic Designer"
					description="Request me to design you a logo, banner, etc."
					available={true}
				/>
			</div>
		</section>
	</div>
</main>
