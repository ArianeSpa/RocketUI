const jest = require('jest');
const argv = process.argv.slice(2);

const testSpecificFile = async argv => {
  const fileName = argv[0];
  const arg = `${fileName} --coverage`;
  jest.run(arg);
};

testSpecificFile(argv);
