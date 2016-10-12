# npm dependency analyser
Generate a simple report containing information about all the dependencies of an npm package.

## Usage
Currently: `node index.js [package names...]`

```
$ node index.js jquery nopt
==================================================
(1/2) 200 SUCCESS 
PACKAGE: jquery
Last published 2016-09-22T22:32:49.360Z by 'timmywil'
Latest Version: 3.1.1
GitHub: github.com/jquery/jquery
License: MIT

==================================================
(2/2) 200 SUCCESS 
PACKAGE: nopt
Last published 2015-11-12T21:58:26.454Z by 'othiym23'
Latest Version: 3.0.6
GitHub: github.com/npm/nopt
License: ISC

```