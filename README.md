# Scrutiny: deep-install-details
Get information about all the packages that would ACTUALLY be installed if you did `npm install $package_names`, without actually downloading / executing lifecycle scripts on any of them.

## About
This package invokes npm as a child process with the `--dry-run` flag to figure out what packages would actually be installed if you installed something into a project. It retrieves all the packages that would be installed and then queries the `npm` registry for more information about each package individually, returning the result (which can be a lot of information, depending on what you install).

## NOTE: This project is still in early development! 
It's in a state of flux right now, and is not published to `npm` yet, intentionally. Feel free to try it out directly from this repo and give me some feedback if you are at all interested in it. The plan for this package is to create a sibling package that consumes the information provided by this package and performs analysis / audits on it, for consumption by some kind of presentation layer (e.g. a CLI tool or a website). For now i'm branding this all under the name "Scrutiny". 

Note that this package is currently performing some of the responsibilities of the planned sibling package by outputting some nicely-formatted metrics and things from the data it is fetching. In a future release this will be stripped out of this package, and it will be only accessible in a programmatic way (i.e. via `require`). 

## Performance
This package calls `npm install … --dry-run` under the hood (note that `--dry-run` prevents anything from being downloaded/executed), so you will need to have the ability to execute such a command in the environment you execute this from. It then makes requests directly to the npm registry for all the information it has about each package. This is currently rate-limited to 1 request every 100ms as to not abuse the npm registry, but I will need to fine-tune this number at some point in the future (hopefully lowering it). I cannot find any information about what kind of rate npm would actually like me to request, so if you know anything about this, please let me know on [Twitter](https://twitter.com/peabnuts123) or something. 

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