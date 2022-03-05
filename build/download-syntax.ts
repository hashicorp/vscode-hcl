import * as fs from 'fs';
import * as path from 'path';

interface ExtensionInfo {
  extensionVersion: string;
  syntaxVersion: string;
  preview: false;
}

function getExtensionInfo(): ExtensionInfo {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pjson = require('../package.json');
  return {
    extensionVersion: pjson.version,
    syntaxVersion: pjson.syntax.version,
    preview: pjson.preview,
  };
}

async function downloadFile(url: string, fileName: string) {
  const writer = fs.createWriteStream(fileName);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const axios = require('axios').default;
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });
  response.data.pipe(writer);
  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function run() {
  const info = getExtensionInfo();
  const release = info.syntaxVersion;
  const url = `https://github.com/hashicorp/syntax/releases/download/v${release}/hcl.tmGrammar.json`;
  console.log(url);
  const cwd = path.resolve(__dirname);
  const buildDir = path.basename(cwd);
  const repoDir = cwd.replace(buildDir, '');
  const installPath = path.join(repoDir, 'syntaxes');

  const fpath = path.join(installPath, 'hcl.tmGrammar.json');
  if (fs.existsSync(installPath)) {
    fs.rmSync(installPath, { recursive: true, force: true });
  }
  fs.mkdirSync(installPath);

  await downloadFile(url, fpath);
  console.log('Download Completed');
}

run();
