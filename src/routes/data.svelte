<script context="module" lang="ts">
	export const hydrate = false;

	import AWS from 'aws-sdk';

	export async function load() {
		const ddb = new AWS.DynamoDB({ region: import.meta.env.VITE_AWS_REGION });
		const result = await ddb.scan({ TableName: import.meta.env.VITE_DBTABLE }).promise();

		return {
			status: 200,
			props: { items: result.Items?.map(({ id, type }) => ({ id: id.S, type: type.S })) }
		};
	}
</script>

<script lang="ts">
	interface Item {
		id: string;
		type: string;
	}
	export let items: Item[];
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
			{#each items as { id, type }}
				<tr>
					<td>{id}</td>
					<td>{type}</td>
				</tr>
			{/each}
		</tbody>
		<table />
	</table>
</div>
