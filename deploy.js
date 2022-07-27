import { App } from '@aws-cdk/core';
import { AWSAdapterStack } from 'sveltekit-adapter-aws';
import { IntrastructureStack } from './infrastructure.js';

const app = new App();
app.region = process.env.CDK_DEFAULT_REGION;
app.account = process.env.CDK_DEFAULT_ACCOUNT;

const { serverHandler } = new AWSAdapterStack(app, 'sveltekit-adapter-aws-advanced-app', {
	FQDN: 'sveltekit-adapter-aws-advanced-demo.mikebild.com'
});

const { table } = new IntrastructureStack(app, 'sveltekit-adapter-aws-advanced-infrastructure', {
	serverHandler
});

