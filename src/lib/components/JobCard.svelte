<script lang="ts">
	import './componentStyles/JobCard.tsx.sass';

	export let available: boolean;
	export let description: string;
	export let title: string;

	let status: string;
	let statusClass: string;
	let statusCircle: string;

	let jobLink: string;

	if (available == true) {
		status = `
      Available for hire
      `;
		statusClass = `
      available
      `;
		statusCircle = `
      circle
      `;
		jobLink = `/hire/jobs?job=${title.replace(' ', '_')}`;
	} else {
		status = `
      Unavailable for hire
      `;
		statusClass = `
      not-available
      `;
		statusCircle = `
      red-circle
      `;
		jobLink = '/hire/jobs?job=not-available';
	}
</script>

<a href={jobLink} style="text-decoration: none; color: inherit">
	<div class="JobCard-container">
		<div class="JobCard">
			<p class="job-title">{title}</p>
			<p class={statusClass}>
				<span class={statusCircle} />
				{status}
			</p>
			<p class="description">{description}</p>
		</div>
	</div>
</a>
