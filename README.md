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
[14:56:43] Determining installed packages for `webpack@latest, webpack-stream@latest`… 
[14:56:56] Finished determining installed packages (9.59s)
[14:56:56] Fetching details for 462 packages…
[14:57:43] Finished!
[14:57:43] Total processing time: 59.58s

Summary of installing 2 packages: webpack, webpack-stream
   - Number of packages requested: 2

   - Number of packages installed (total): 462

   - Number of packages installed successfully: 462

   - Number of packages with version < 0.1.0: 12

   - Number of packages with version < 1.0.0: 80

   - Number of packages that failed to install: 0

   - Number of unique publish authors: 124

   - Count of authors by number of packages published(relative to this install):
         jonschlinkert (github@sellside.com): 75
         sindresorhus (sindresorhus@gmail.com): 56
         isaacs (i@izs.me): 24
         cwmma (calvin.metcalf@gmail.com): 22
         iarna (me@re-becca.org): 14
         sokra (tobias.koppers@googlemail.com): 11
         mafintosh (mathiasbuus@gmail.com): 11
         phated (blaine.bublitz@gmail.com): 9
         indutny (fedor@indutny.com): 9
         medikoo (medikoo+npm@medikoo.com): 8
         substack (mail@substack.net): 8
         bcoe (ben@npmjs.com): 8
         feross (feross@feross.org): 7
         juliangruber (julian@juliangruber.com): 6
         es128 (elan.shanker+npm@gmail.com): 6
         doowb (brian.woodward@gmail.com): 6
         esp (e.poberezkin@me.com): 6
         zkat (kat@sykosomatic.org): 5
         arekinath (alex@cooperi.net): 5
         kemitchell (kyle@kemitchell.com): 4
         lydell (simon.lydell@gmail.com): 4
         matteo.collina (hello@matteocollina.com): 4
         jdalton (john.david.dalton@gmail.com): 3
         substack (substack@gmail.com): 3
         rvagg (rod@vagg.org): 3
         (Unknown): 3
         simov (simeonvelichkov@gmail.com): 3
         dap (dap@cs.brown.edu): 3
         defunctzombie (shtylman@gmail.com): 3
         tootallnate (nathan@tootallnate.net): 3
         raynos (raynos2@gmail.com): 3
         isaacs (isaacs@npmjs.com): 3
         zkat (kzm@sykosomatic.org): 3
         dcousens (email@dcousens.com): 3
         mikeal (mikeal.rogers@gmail.com): 3
         alexindigo (iam@alexindigo.com): 3
         pfmooney (patrick.f.mooney@gmail.com): 3
         qix (i.am.qix@gmail.com): 3
         alexlamsl (alexlamsl@gmail.com): 2
         jhiesey (john@hiesey.com): 2
         tromey (tom@tromey.com): 2
         michael-ciniawsky (michael.ciniawsky@gmail.com): 2
         dominictarr (dominic.tarr@gmail.com): 2
         mathias (mathias@qiwi.be): 2
         othiym23 (ogd@aoaioxxysz.net): 2
         dougwilson (doug@somethingdoug.com): 2
         jhnns (mail@johannesewald.de): 2
         fanatid (fanatid@ya.ru): 2
         ahmadnassri (ahmad@ahmadnassri.com): 2
         ljharb (ljharb@gmail.com): 2
         dcousens (npm@dcousens.com): 2
         nzakas (nicholas@nczconsulting.com): 2
         hueniverse (eran@hammer.io): 2
         hughsk (hughskennedy@gmail.com): 2
         hichaelmart (michael.hart.au@gmail.com): 2
         shinnn (snnskwtnb@gmail.com): 2
         marijn (marijnh@gmail.com): 2
         jordangens (jordangens@gmail.com): 2
         nexdrew (andrewbgoode@gmail.com): 1
         rvagg (r@va.gg): 1
         nexdrew (andrew@npmjs.com): 1
         shama (kyle@dontkry.com): 1
         shtylman (shtylman@gmail.com): 1
         anodynos (agelos.pikoulas@gmail.com): 1
         thelarkinn (sean.larkin@cuw.edu): 1
         forbeslindesay (forbes@lindeay.co.uk): 1
         dchest (dmitry@codingrobots.com): 1
         jstash (jstash@gmail.com): 1
         jryans (jryans@gmail.com): 1
         jbnicolai (jappelman@xebia.com): 1
         stevemao (steve.mao@healthinteract.com.au): 1
         hueniverse (eran@hueniverse.com): 1
         kevva (kevinmartensson@gmail.com): 1
         domenic (d@domenic.me): 1
         okuryu (okuryu@okuryu.com): 1
         jprichardson (jprichardson@gmail.com): 1
         fent (roly426@gmail.com): 1
         troygoode (troygoode@gmail.com): 1
         darsain (darsain@gmail.com): 1
         thlorenz (thlorenz@gmx.de): 1
         gozala (rfobic@gmail.com): 1
         spaintrain (mc.s.pain.how.er+npm@gmail.com): 1
         meryn (merynstol@gmail.com): 1
         vitaly (vitaly@rcdesign.ru): 1
         coderpuppy (coderpup@gmail.com): 1
         springmeyer (dane@mapbox.com): 1
         suguru03 (suguru.motegi@gmail.com): 1
         kkoopa (bbyholm@abo.fi): 1
         leo (leo@zeit.co): 1
         bret (bcomnes@gmail.com): 1
         jordanbtucker (jordanbtucker@gmail.com): 1
         kriszyp (kriszyp@gmail.com): 1
         d3viant0ne (wiens.joshua@gmail.com): 1
         andyperlitch (andyperlitch@gmail.com): 1
         jensyt (jensyt@gmail.com): 1
         nadav (npm@shesek.info): 1
         nlf (quitlahok@gmail.com): 1
         stefanpenner (stefan.penner@gmail.com): 1
         michaelficarra (npm@michael.ficarra.me): 1
         ivolodin (ivolodin@gmail.com): 1
         ralphtheninja (ralphtheninja@riseup.net): 1
         kikobeats (josefrancisco.verdu@gmail.com): 1
         quartzjer (jeremie@jabber.org): 1
         bevryme (us@bevry.me): 1
         lovell (npm@lovell.info): 1
         tjholowaychuk (tj@vision-media.ca): 1
         apechimp (apeherder@gmail.com): 1
         unclechu (lotsmanov89@gmail.com): 1
         samverschueren (sam.verschueren@gmail.com): 1
         trentm (trentm@gmail.com): 1
         satazor (andremiguelcruz@msn.com): 1
         nami-doc (karp@hotmail.fr): 1
         abetomo (abe@enzou.tokyo): 1
         jongleberry (jonathanrichardong@gmail.com): 1
         pvorb (paul@vorba.ch): 1
         samccone (sam@samx.it): 1
         bendrucker (bvdrucker@gmail.com): 1
         dignifiedquire (dignifiedquire@gmail.com): 1
         arb (arbretz@gmail.com): 1
         esailija (petka_antonov@hotmail.com): 1
         mikemcl (M8ch88l@gmail.com): 1
         coolaj86 (coolaj86@gmail.com): 1
         aearly (alexander.early@gmail.com): 1
         paulmillr (paul@paulmillr.com): 1

Successfully finished processing.
``` 