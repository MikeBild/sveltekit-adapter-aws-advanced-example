import { RemovalPolicy, Stack } from '@aws-cdk/core';
import { Table, BillingMode, AttributeType, StreamViewType } from '@aws-cdk/aws-dynamodb';

export class IntrastructureStack extends Stack {
	table;

	constructor(scope, id, props) {
		super(scope, id, props);

		this.table = new Table(this, 'DynamoDBTable', {
			billingMode: BillingMode.PAY_PER_REQUEST,
			partitionKey: {
				name: 'id',
				type: AttributeType.STRING
			},
			sortKey: {
				name: 'type',
				type: AttributeType.STRING
			},
			stream: StreamViewType.NEW_AND_OLD_IMAGES,
			timeToLiveAttribute: 'expiresAt',
			removalPolicy: RemovalPolicy.DESTROY
		});

		props.serverHandler.addEnvironment('VITE_DBTABLE', this.table.tableName);
		this.table.grantReadWriteData(props.serverHandler);
	}
}
