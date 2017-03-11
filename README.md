# npm dependency analyser
Generate a simple report containing information about all the dependencies of an npm package.

## Usage
Currently: `node index.js [package names...]`

```text
$ node index.js webpack gulp lodash
Fetching details for 3 packages...
========================= gulp =========================
(1/3) SUCCESS
Last Published: Tue Feb 09 2016 07:50:16 GMT+1300 (NZDT) by phated
Latest Version: 3.9.1
Repository URL: git+https://github.com/gulpjs/gulp.git
Homepage: http://gulpjs.com
License: MIT
# (DIRECT)
Dependencies: 13
DevDependencies: 14
Dependents: 3651
# (INDIRECT, TOTAL)
Dependencies: 171

========================= webpack =========================
(2/3) SUCCESS
Last Published: Tue Jan 31 2017 10:13:32 GMT+1300 (NZDT) by sokra
Latest Version: 2.2.1
Repository URL: git+https://github.com/webpack/webpack.git
Homepage: https://github.com/webpack/webpack
License: MIT
# (DIRECT)
Dependencies: 20
DevDependencies: 38
Dependents: 2330
# (INDIRECT, TOTAL)
Dependencies: 285

========================= lodash =========================
(3/3) SUCCESS
Last Published: Sun Jan 01 2017 11:33:56 GMT+1300 (NZDT) by jdalton
Latest Version: 4.17.4
Repository URL: git+https://github.com/lodash/lodash.git
Homepage: https://lodash.com/
License: MIT
# (DIRECT)
Dependencies: 0
DevDependencies: 0
Dependents: 31697
# (INDIRECT, TOTAL)
Dependencies: 0
``` 