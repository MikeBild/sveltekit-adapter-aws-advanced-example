import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			cdkProjectPath: `${process.cwd()}/deploy.js`
		}),
		vite: {
			define: {
				global: {},				
				VITE_AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY	
			},

		}
	}
};
