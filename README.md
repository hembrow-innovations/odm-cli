# ODM CLI

The ODM CLI is a command-line tool that helps you manage your Poly-Repositories.

## Installation

To install the ODM CLI, simply use `npm`:

```bash
npm install -g @hembrow-innovations/odm-cli
```

This command installs the tool globally on your system. During the installation, it automatically detects your operating system and architecture to download the correct, pre-compiled binary. This means you don't need to worry about any build steps, it just works.

## Usage

Once installed, you can run the `odm` command from your terminal:

```bash
odm --version
```

Replace `--version` with the specific command you want to run. The binary will automatically be located and executed from your system's path.

---

## How It Works (For the Curious)

This package uses a clever installation strategy to ensure a fast, seamless experience:

1.  **Platform Detection:** When you run `npm install`, the package's `install.js` script checks your `process.platform` and `process.arch` to identify your system (e.g., `linux-x64`, `darwin-arm64`).

2.  **Binary Download:** It then downloads the corresponding pre-compiled binary from the npm registry. The script is designed to handle potential redirects and extract the executable directly from the tarball.

3.  **Path Integration:** The downloaded binary is placed in a location accessible by your system's `PATH`, so you can run `odm` from any terminal window without needing to use `npx`.

This approach provides the best of both worlds: the convenience of a single npm package with the performance of a native, pre-compiled binary.

## Supporeted 'OS' and 'ARCH'

- Mac

  - **`OS=darwin`**
  - **`ARCH=arm64`**: Apple Silicon Macs.
  - **`ARCH=amd64`**: Intel-based Macs.

- Linux

  - **`OS=linux`**
  - **`ARCH=amd64`**: 64-bit Intel/AMD.

- Windows

  - **`OS=windows`**
  - **`ARCH=amd64`**: 64-bit Intel/AMD.
