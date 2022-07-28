<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<link rel="manifest" href="/manifest.json" />
	<link rel="apple-touch-icon" href="/pwa-logo-512.png" />
	<meta name="SvelteKit Adapter AWS Advanced Demo" content="The all new SvelteKit Adapter AWS Advanced Demo PWA" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="msapplication-TileColor" content="#00aba9" />
	<meta name="theme-color" content="#bee0da" />
</svelte:head>	

<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
