<script lang="ts">
	export let data = { items: [] };
</script>

<svelte:head>
	<title>Data from DynamoDB</title>
	<meta name="description" content="List data from AWS DynamoDB" />
</svelte:head>

<div class="content">
	<h1>List data from AWS DynamoDB</h1>
	<table>
		<thead>
			<tr><td>ID</td><td>Type</td></tr>
		</thead>
		<tbody>
			{#each data.items as { id, type }}
				<tr>
					<td>{id}</td>
					<td>{type}</td>
				</tr>
			{/each}
		</tbody>
		<table />
	</table>
</div>

<style>
	.content {
		width: 100%;
		max-width: var(--column-width);
		margin: var(--column-margin-top) auto 0 auto;
	}
</style>
