const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const semver = require('semver');
const { exec } = require('child_process');

const packageJsonPath = path.resolve(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
const originalVersion = packageJson.version;

const incrementLevels = [
  'major',
  'minor',
  'patch',
  'premajor',
  'preminor',
  'prepatch',
];

const tags = ['latest', 'dev'];

const questions = [
  {
    name: 'increment',
    describe: 'Select the increment type',
    type: 'list',
    choices: incrementLevels,
    default: 'patch',
  },
  {
    name: 'tag',
    describe: 'Select the tag',
    type: 'list',
    choices: tags,
    default: 'dev',
  },
];

const getVersionTypeIncrement = async () => {
  const answers = await inquirer.prompt(questions);
  return { incrementType: answers.increment, publishTag: answers.tag };
};

const incrementAndPublish = async answers => {
  const { incrementType, publishTag } = await getVersionTypeIncrement();
  const newVersion = semver.inc(originalVersion, incrementType);
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  exec(
    `npm publish --access public --tag ${publishTag}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error publishing v${newVersion}: ${error.message}`);
      } else {
        console.log(stdout);
      }
    }
  );
};

incrementAndPublish();
