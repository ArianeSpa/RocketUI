const inquirer = require('inquirer');
const { exec } = require('child_process');

const versionQuestion = [
  {
    name: 'version',
    message:
      "Which version (format X.X.X) of 'roket-ui' package would you like to unpublish ?",
  },
];

const getConfirmationQuestion = version => [
  {
    name: 'confirm',
    message: `Do you really want to unpublish rocket-ui-dev-version@${version} ? `,
    type: 'confirm',
  },
];

const checkVersionFormat = version => {
  const isValid = RegExp(/\d*\.\d*\.\d*/gm).exec(version);
  if (!isValid) {
    return console.log(
      'Wrong format, version must be x.x.x for example 1.20.3'
    );
  }
};

const getVersionToUnpublish = async () => {
  const { version } = await inquirer.prompt(versionQuestion);
  checkVersionFormat(versions);
  const confirmQuestion = getConfirmationQuestion(version);
  const { confirm } = await inquirer.prompt(confirmQuestion);
  if (confirm) {
    exec(
      `npm unpublish rocket-ui-dev-version@${version}`,
      (error, stdout, stderr) => {
        if (error) {
          console.error(`Error unpublishing v${version}: ${error.message}`);
        } else {
          console.log(stdout);
        }
      }
    );
  }
};

getVersionToUnpublish();
