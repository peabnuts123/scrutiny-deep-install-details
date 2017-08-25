# npm dependency analyser
Generate a simple report detailing the effects adding new dependencies to your project.

## About
The purpose of this package is to gather information about the real-world implications of installing new packages, **without actually downloading them**. This can help you perform an audit of the viability of adding new dependencies into your project without having to code review 400 other projects, or execute an unknown amount of install-hook scripts on your computer.

This project is designed with Security in mind, aiming to help identify potentially malicious or damaging packages that you may or may not have in your project / server / infrastructure / computer. Besides that, the information gathered about packages will hopefully be able to form a multitude of other types of decisions, including minimising bandwidth, identifying out-of-date or incorrect projects, or assessing the quality of a project. 

## NOTE: This project is still in early development! 
It's in a state of flux right now, but is looking like it will end up as a package for accessing data about other packages (without installing them). I think the plan for this package going forward will be to plug it into another package that exposes this data as an API / serves it to a website (for accessibility), as well as a CLI tool for analysing the impacts of adding packages to existing projects.

## Usage
Currently: `node index.js (package names[@versions]...)`

You may specify as many packages as you wish, they will be requested in batch, as if you were installing them all at once. A semantic version range may be included on any or all packages if you so wish. Naturally, if you omit the version, `latest` will be requested (mimicking how `npm install` works).

```text
$ node index.js webpack webpack-stream
[15:11:43] Getting installed packages for `webpack@latest webpack-stream@latest`…
[15:11:49] Processing results…
[15:11:49] Fetching details for 419 packages…
[15:12:33] Finished!
Summary of installing 2 packages:

========================= webpack (1/2) =========================
Name: webpack
Version: 3.5.5
Published: Thu Aug 17 2017 02:56:19 GMT+1200 (NZST) by sokra (tobias.koppers@googlemail.com)
Repository URL: git+https://github.com/webpack/webpack.git
Homepage: https://github.com/webpack/webpack
License: MIT


========================= webpack-stream (2/2) =========================
Name: webpack-stream
Version: 4.0.0
Published: Tue Aug 08 2017 04:17:41 GMT+1200 (NZST) by shama (kyle@dontkry.com)
Repository URL: git+https://github.com/shama/webpack-stream.git
Homepage: https://github.com/shama/webpack-stream
License: MIT

DEPENDENCY INFORMATION:

Newly Installed Dependencies: 419
``` 