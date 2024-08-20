<script>
	import Discord from '../lib/assets/Discord.png';
	import X from '../lib/assets/X.png';
	import GitHub from '../lib/assets/GitHub.png';
	import Twitch from '../lib/assets/Twitch.png';

	import '../lib/styles/social-icons.css';
	import Button from '../lib/components/Button.svelte';
	import SecondaryButton from '../lib/components/SecondaryButton.svelte';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
</script>

<main>
	<div>
		<h1>Myfer</h1>
		<p>Based in United States, Florida.</p>
		<div class="social-icon-wrapper">
			<div class="social-icon-container">
				<a href="https://x.com/myferisadev" target="_blank">
					<img src={X} width={20} height={20} alt="X" class="social-icon with-push" />
				</a>
				<a href="https://discord.com/users/1157526846229991544" target="_blank">
					<img src={Discord} width={25} height={20} alt="Discord" class="social-icon with-push" />
				</a>
				<a href="https://github.com/myferr/" target="_blank">
					<img src={GitHub} width={20} height={20} alt="GitHub" class="social-icon with-push" />
				</a>
				<a href="https://twitch.tv/myferontwitch" target="_blank">
					<img src={Twitch} height={20} alt="Twitch" class="social-icon with-push" />
				</a>
			</div>
		</div>
		<br />
		<a href="/#about-me">
			<SecondaryButton>About me</SecondaryButton>
		</a>
		<a href="/#projects">
			<Button>See my projects</Button>
		</a>
		<section id="about-me">
			<div>
				<h2>About me.</h2>
				<p>
					I am 14 years old and I have been programming for 4.5 years.
					<br /> I am a web developer, web designer, typography designer,
					<br />
					graphic designer, app developer, Python developer,
					<br />
					command line interface developer, etc.
					<br />
					<br />
					<a href="/hire">
						<SecondaryButton>Hire me</SecondaryButton>
					</a>
				</p>
			</div>
		</section>
		<section id="projects">
			<div>
				<h2>Project catalog.</h2>
				All projects are sourced from my GitHub.
				<br />
				<p class="line" />
				<br />
				<section id="cards">
					<ProjectCard
						title="am-i-paid"
						description="An API built with SvelteKit and TypeScript to test if clients have paid me for my work."
						href="https://am-i-paid.vercel.app/"
					/>
					<ProjectCard
						title="verifyme-website"
						description="An official website for the VerifyME bot on Discord. (outdated)"
						href="https://github.com/myferr/verifyme-website/"
					/>
				</section>
				<br />
				<section id="cards">
					<ProjectCard
						title="icecream-js"
						description="A JavaScript library to render HTML with ease."
						href="https://icecream.js.org/"
					/>
					<ProjectCard
						title="guilded-light-mode"
						description="A light mode for Guilded.gg built with CSS. (this took me a year to complete)"
						href="https://guilded-light.pages.dev"
					/>
				</section>
				<br />
				<section id="cards">
					<ProjectCard
						title="my-tab"
						description="A beautiful website that serves as a custom new tab for your browser."
						href="https://github.com/myferr/my-tab"
					/>
					<ProjectCard
						title="spammer-gui"
						description="A message-sending macro. Built with CustomTkinter and Tkinter."
						href="https://spammer-gui.pages.dev"
					/>
				</section>
				<br />
				<section id="cards">
					<ProjectCard
						title="yoink"
						description="A simple JavaScript CLI to clone GitHub repositories"
						href="https://github.com/myferr/yoink-js"
					/>
					<ProjectCard
						title="spammer-gui"
						description="A message-sending macro. Built with CustomTkinter and Tkinter."
						href="https://spammer-gui.pages.dev"
					/>
				</section>
			</div>
			<a href="https://github.com/myferr" target="_blank">
				<Button>See more</Button>
			</a>
		</section>
	</div>
</main>
