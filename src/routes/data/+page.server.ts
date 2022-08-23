import AWS from 'aws-sdk';
import { TABLENAME, AWS_REGION } from '$env/static/private';

export async function load() {
	const ddb = new AWS.DynamoDB({ region: AWS_REGION! });
	const result = await ddb.scan({ TableName: TABLENAME! }).promise();

	return {
		items: result.Items?.map(({ id, type }: any) => ({ id: id.S, type: type.S })).sort(
			(a: any, b: any) => a.id - b.id
		)
	};
}
