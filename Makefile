.PHONY: clean build

defaults: build

build:
	zip -o Tiddier.zip *

clean:
	rm *.zip