const fs = require("fs");
const windows1251 = require("windows-1251");

module.exports = {
  readMockPage: (name) => {
    const string = fs
      .readFileSync(`./tests/mocks/${name}.html`)
      .toString("binary");
    return windows1251.decode(string, { mode: "html" });
  },
};
