import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		inlineStyleThreshold: 8096,
		adapter: adapter({
			autoDeploy: true,
			cdkProjectPath: `${process.cwd()}/deploy.js`
		}),
		prerender: {
			default: false,
			crawl: false
		}
	}
};
