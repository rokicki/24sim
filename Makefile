NODE_BIN = ./node_modules/.bin

.PHONY: dist
dist: clean-dist
	env PROD=true ${NODE_BIN}/webpack-cli

.PHONY: dev
dev:
	${NODE_BIN}/webpack-cli --watch

.PHONY: test
test:
	${NODE_BIN}/mocha -r ts-node/register test/*.ts

.PHONY: clean
clean: clean-dist
	rm -f yarn-error.log

.PHONY: clean-dist
clean-dist:
	rm -rf ./dist

Help.html: README.md
	pandoc -o Help.html README.md

deploy:
	rm -rf www
	mkdir www
	mkdir www/node_modules
	cp test.html www/index.html
	cp -rp dist www/dist
	mkdir www/node_modules/alg
	cp -rp node_modules/alg/dist www/node_modules/alg
	mkdir www/node_modules/kpuzzle
	cp -rp node_modules/kpuzzle/dist www/node_modules/kpuzzle
	mkdir www/node_modules/twisty
	cp -rp node_modules/twisty/dist www/node_modules/twisty
	mkdir www/node_modules/twisty/src
	cp -rp node_modules/twisty/src/twisty.css www/node_modules/twisty/src/
	tar czf www.tar.gz www
