install:
	npm install
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	sudo npx eslint .
lintfix:
	npx eslint --fix .
brain-even:
	node bin/brain-even.js
