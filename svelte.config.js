import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			autoDeploy: true,
			cdkProjectPath: `${process.cwd()}/deploy.js`
		}),
		prerender: {
			enabled: true,
			default: true,
			crawl: true
		}
	}
};
