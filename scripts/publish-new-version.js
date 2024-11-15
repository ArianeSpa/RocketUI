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

const questions = [
  {
    name: 'type',
    describe: 'Select the increment type',
    type: 'list',
    choices: incrementLevels,
    default: 'patch',
  },
];

const getVersionTypeIncrement = async () => {
  const answers = await inquirer.prompt(questions);
  return answers.type;
};

const incrementAndPublish = async answers => {
  const incrementType = await getVersionTypeIncrement();
  const newVersion = semver.inc(originalVersion, incrementType);
  packageJson.version = newVersion;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

  exec('npm publish --access public --tag dev', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error publishing v${newVersion}: ${error.message}`);
    } else {
      console.log(stdout);
    }
  });
};

incrementAndPublish();
