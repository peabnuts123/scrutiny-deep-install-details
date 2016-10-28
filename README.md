# npm dependency analyser
Generate a simple report containing information about all the dependencies of an npm package.

## Usage
Currently: `node index.js [package names...]`

```text
$ node index.js jquery nopt
========================= jquery =========================
(1/2) SUCCESS 
Last Published: Fri Sep 23 2016 10:32:49 GMT+1200 (NZST) by timmywil
Latest Version: 3.1.1
Repository URL: git+https://github.com/jquery/jquery.git
Homepage: https://jquery.com
License: MIT
# Dependencies (Direct): 0
# DevDependencies (Direct): 31
# Dependents (Direct): 4024

========================= nopt =========================
(2/2) SUCCESS 
Last Published: Fri Nov 13 2015 10:58:26 GMT+1300 (NZDT) by othiym23
Latest Version: 3.0.6
Repository URL: git+https://github.com/npm/nopt.git
Homepage: https://github.com/npm/nopt#readme
License: ISC
# Dependencies (Direct): 1
# DevDependencies (Direct): 1
# Dependents (Direct): 717
``` 