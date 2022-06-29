import AWS from 'aws-sdk';

export async function get() {
	const ddb = new AWS.DynamoDB({ region: import.meta.env.VITE_AWS_REGION });
	const result = await ddb.scan({ TableName: import.meta.env.VITE_DBTABLE }).promise();

	return {
		body: { items: result.Items?.map(({ id, type }) => ({ id: id.S, type: type.S })) }
	};
}
