const
	fs = require(`fs`),
	path = require(`path`),
	pug = require(`pug`);

process.chdir(path.join(__dirname, `..`));
for (let docs of process.argv.slice(2)) {
	const docsData = require(path.join(`..`, docs, docs + `.json`));
	fs.writeFileSync(path.join(docs, `index.html`), pug.renderFile(path.join(`build`, `build.pug`), docsData));
	console.log(docs);
}
