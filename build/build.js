const
	fs = require(`fs`),
	path = require(`path`),
	pug = require(`pug`);

process.chdir(path.join(__dirname, `..`));
[
	`web-gui`,
	`httpq`,
].forEach(docs => {
	const docsData = JSON.parse(fs.readFileSync(path.join(docs, docs + `.json`)));
	fs.writeFileSync(path.join(docs, `index.html`), pug.renderFile(path.join(`build`, `build.pug`), {title: docs, docsData}));
	console.log(docs);
});
