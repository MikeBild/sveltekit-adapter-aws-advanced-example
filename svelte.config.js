import { join } from 'path';
import { adapter } from 'sveltekit-adapter-aws';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: preprocess(),
	kit: {
		inlineStyleThreshold: 8096,
		adapter: adapter({
			autoDeploy: true,
			cdkProjectPath: join(process.cwd(), './infrastructure/deploy.js')
		}),
		prerender: {
			default: false,
			crawl: false
		}
	}
};
