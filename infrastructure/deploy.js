import { App } from 'aws-cdk-lib';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { DynamoDBStack } from './dynamodb-stack.js';

const app = new App();
app.region = process.env.CDK_DEFAULT_REGION;
app.account = process.env.CDK_DEFAULT_ACCOUNT;

const { serverHandler } = new AWSAdapterStack(app, 'sveltekit-adapter-aws-advanced-app');
new DynamoDBStack(app, 'sveltekit-adapter-aws-advanced-infrastructure', { serverHandler });
