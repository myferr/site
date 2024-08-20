<script lang="ts">
	import './componentStyles/ProjectCard.tsx.sass';
	export let description: string;
	export let title: string;
	export let href: string;
</script>

<div class="ProjectCard">
	<a {href} target="_blank" style="text-decoration: none; color: #0070f3">
		<span class="title">{title}</span>
	</a>
	<p class="description">{description}</p>
</div>
