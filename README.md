# SvelteKit Adapter AWS Advanced Example

Demonstrates a advanced deployed sample webapp on AWS https://sveltekit-adapter-aws-advanced-demo.mikebild.com using [SvelteKit Adapter AWS](https://github.com/MikeBild/sveltekit-adapter-aws).

1. Setup your AWS Account using the [AWS-CLI](https://github.com/aws/aws-cli) or [AWS-Vault](https://github.com/99designs/aws-vault)
2. Clone the repo and install dependencies
```
git clone git@github.com:MikeBild/sveltekit-adapter-aws-advanced-example.git
cd sveltekit-adapter-aws-advanced-example
yarn
```
4. Create a `.env` file for local development
```
VITE_AWS_REGION=us-east-1
VITE_DBTABLE=<your-generated-table-name>
```
5. Build and deploy to AWS
```
yarn build
```

