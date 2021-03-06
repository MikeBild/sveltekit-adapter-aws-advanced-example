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
				global: {}
			}
		}
	}
};
