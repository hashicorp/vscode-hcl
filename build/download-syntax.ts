import * as fs from 'fs';
import * as path from 'path';
import got from 'got';

interface ExtensionInfo {
  name: string;
  extensionVersion: string;
  syntaxVersion: string;
  preview: false;
}

function getExtensionInfo(): ExtensionInfo {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pjson = require('../package.json');
  return {
    name: pjson.name,
    extensionVersion: pjson.version,
    syntaxVersion: pjson.syntax.version,
    preview: pjson.preview,
  };
}

async function run(info: ExtensionInfo) {
  const release = `v${info.syntaxVersion}`;

  const fileName = `${info.name}.tmGrammar.json`;
  const url = `https://github.com/hashicorp/syntax/releases/download/${release}/${fileName}`;
  console.log(`Downloading: ${url}`);

  const cwd = path.resolve(__dirname);
  const buildDir = path.basename(cwd);
  const repoDir = cwd.replace(buildDir, '');
  const installPath = path.join(repoDir, 'syntaxes');

  const fpath = path.join(installPath, fileName);
  if (fs.existsSync(installPath)) {
    fs.rmSync(installPath, { recursive: true, force: true });
  }
  fs.mkdirSync(installPath);

  const content = await got({ url }).text();
  fs.writeFileSync(fpath, content);
  console.log(`Download completed: ${fpath}`);
}

const info = getExtensionInfo();
run(info);
