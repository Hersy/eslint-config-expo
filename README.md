# My ESLint Config for Expo Projects v0.1.0

Provides ESLint + Prettier configurations to enforce clean and proper code syntax across an Expo project. Supports both Typescript and Javascript files.

## Installation

### Set your GITHUB_TOKEN environment variable

To install this (and any other GitHub) packages, you'll first need to set the **GITHUB_TOKEN** environment variable.
To do this you'll first need to create a GitHub Token (classic), you can do so on the "Developer options" section of your GitHub settings page.
For more instructions, read [GitHub's documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

Once set, add your access token to your preferred terminal's user profile file.

On Windows, WindowsPowerShell is recommended, locate or create your user profile file, usually saved on **%USERPROFILE%/Documents/WindowsPowerShell/Microsoft.Powershell_profile.ps1**, and add this line:

```powershell
$Env:GITHUB_TOKEN="<Your Token>"
```

On MacOS, locate or create your default terminal's user profile file.

For **bash** terminals it can be found at **~/.bashrc**
For **zsh** terminals it can be found at **~/.zshrc**

Then add this line:

```bash
export GITHUB_TOKEN="<Your Token>"
```

### Resolve to GitHub Package Registry

Locate or create your NPM configuration file, usually saved on **./.npmrc** , it should contain the following:

```npmrc
registry=https://registry.npmjs.org/ # or https://registry.yarnpkg.com/
@hersy:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### Install the package

Now you can run either:

```bash
npm install --save @hersy/eslint-config-expo
```

or

```bash
yarn add -D @hersy/eslint-config-expo
```

### Update your ESLint configuration file

Add `"extends": "@hersy/eslint-config-expo"` to `.eslintrc`

Or `extends: '@hersy/eslint-config-expo'` to `.eslint.config.js`

### Update your Prettier configuration file

Add `"@hersy/eslint-config-expo/prettier"` to `.prettierrc`

Or `module.exports = '@hersy/eslint-config-expo/prettier'` to `.prettier.config.js`

### Update your project's scripts

Add the following to your `package.json`'s scripts:

```json
  "scripts": {
    "lint": "exlint --lint",
    "lint-fix": "exlint --fix",
    "format": "exlint --format",
    "eslint-check": "exlint --check",
  },
```

And you're all set!

## Usage

To see all manually runnable functions, run:

```bash
npx exlint --help
```
