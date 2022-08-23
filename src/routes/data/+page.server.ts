import AWS from 'aws-sdk';

export async function load() {
	const ddb = new AWS.DynamoDB();
	const result = await ddb.scan({ TableName: process.env.TABLENAME! }).promise();

	return {
		items: result.Items?.map(({ id, type }: any) => ({ id: id.S, type: type.S })).sort(
			(a: any, b: any) => a.id - b.id
		)
	};
}
