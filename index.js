const path = require("path");
const childProcess = require("child_process");

const BASE_PACKAGE_NAME = "@hembrow-innovations/odm-cli";

// Lookup table for all platforms and binary distribution packages
const BINARY_DISTRIBUTION_PACKAGES = {
  "linux-x64": `${BASE_PACKAGE_NAME}-linux-x64`,
  "linux-arm": `${BASE_PACKAGE_NAME}-linux-arm`,
  "win32-x64": `${BASE_PACKAGE_NAME}-windows-x64`,
  "darwin-arm64": `${BASE_PACKAGE_NAME}-darwin-arm64`,
  "darwin-amd64": `${BASE_PACKAGE_NAME}-darwin-amd64`,
};

// Windows binaries end with .exe so we need to special case them.
const binaryName = process.platform === "win32" ? "odm.exe" : "odm";

// Determine package name for this platform
const platformSpecificPackageName =
  BINARY_DISTRIBUTION_PACKAGES[`${process.platform}-${process.arch}`];

function getBinaryPath() {
  try {
    // Resolving will fail if the optionalDependency was not installed
    return require.resolve(`${platformSpecificPackageName}/bin/${binaryName}`);
  } catch (e) {
    return path.join(__dirname, "..", binaryName);
  }
}

module.exports.runBinary = function (...args) {
  childProcess.execFileSync(getBinaryPath(), args, {
    stdio: "inherit",
  });
};
