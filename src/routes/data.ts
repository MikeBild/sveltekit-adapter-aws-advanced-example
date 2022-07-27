import AWS from 'aws-sdk';
const ddb = new AWS.DynamoDB();

export async function GET() {
	const result = await ddb.scan({ TableName: import.meta.env.VITE_DBTABLE }).promise();

	return {
		body: {
			items: result.Items?.map(({ id, type }: any) => ({ id: id.S, type: type.S })).sort(
				(a: any, b: any) => a.id - b.id
			)
		}
	};
}
