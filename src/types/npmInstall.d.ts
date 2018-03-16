declare type NpmInstallAction = "add" | "remove" | "update" | "move";

declare interface NpmInstallPackage {
  action: NpmInstallAction,
  name: string,
  version: string,
  path: string,
}

declare interface NpmInstallOutput {
  added: NpmInstallPackage[],
  // @TODO confirm these are correct, I don't quite know / care
  removed: NpmInstallPackage[],
  updated: NpmInstallPackage[],
  moved: NpmInstallPackage[],
  // @TODO find an example of "failed"
  failed: any,
  warnings: string[],
  elapsed: number
}


/* 
{
  "added": [
    {
      "action": "add",
      "name": "@ambassify/backoff-strategies",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/@ambassify/backoff-strategies"
    },
    {
      "action": "add",
      "name": "abab",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/abab"
    },
    {
      "action": "add",
      "name": "abbrev",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/abbrev"
    },
    {
      "action": "add",
      "name": "mime-db",
      "version": "1.33.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/accepts/node_modules/mime-db"
    },
    {
      "action": "add",
      "name": "mime-types",
      "version": "2.1.18",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/accepts/node_modules/mime-types"
    },
    {
      "action": "add",
      "name": "acorn",
      "version": "4.0.13",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/acorn-globals/node_modules/acorn"
    },
    {
      "action": "add",
      "name": "acorn-globals",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/acorn-globals"
    },
    {
      "action": "add",
      "name": "addr-to-ip-port",
      "version": "1.4.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/addr-to-ip-port"
    },
    {
      "action": "add",
      "name": "semver",
      "version": "5.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/agent-base/node_modules/semver"
    },
    {
      "action": "add",
      "name": "agent-base",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/agent-base"
    },
    {
      "action": "add",
      "name": "aproba",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/aproba"
    },
    {
      "action": "add",
      "name": "array-equal",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/array-equal"
    },
    {
      "action": "add",
      "name": "array-flatten",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/array-flatten"
    },
    {
      "action": "add",
      "name": "asap",
      "version": "2.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/asap"
    },
    {
      "action": "add",
      "name": "glob",
      "version": "6.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/asar/node_modules/glob"
    },
    {
      "action": "add",
      "name": "tmp",
      "version": "0.0.28",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/asar/node_modules/tmp"
    },
    {
      "action": "add",
      "name": "ast-types",
      "version": "0.11.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ast-types"
    },
    {
      "action": "add",
      "name": "async-limiter",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/async-limiter"
    },
    {
      "action": "add",
      "name": "author-regex",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/author-regex"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-core/node_modules/debug"
    },
    {
      "action": "add",
      "name": "source-map",
      "version": "0.5.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-core/node_modules/source-map"
    },
    {
      "action": "add",
      "name": "source-map",
      "version": "0.5.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-generator/node_modules/source-map"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-traverse/node_modules/debug"
    },
    {
      "action": "add",
      "name": "babylon",
      "version": "6.18.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babylon"
    },
    {
      "action": "add",
      "name": "base-x",
      "version": "3.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/base-x"
    },
    {
      "action": "add",
      "name": "basic-auth",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/basic-auth"
    },
    {
      "action": "add",
      "name": "async",
      "version": "2.6.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bat-publisher/node_modules/async"
    },
    {
      "action": "add",
      "name": "tldjs",
      "version": "2.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bat-publisher/node_modules/tldjs"
    },
    {
      "action": "add",
      "name": "bech32",
      "version": "0.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bech32"
    },
    {
      "action": "add",
      "name": "bencode",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bencode"
    },
    {
      "action": "add",
      "name": "big.js",
      "version": "3.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/big.js"
    },
    {
      "action": "add",
      "name": "bigi",
      "version": "1.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bigi"
    },
    {
      "action": "add",
      "name": "bignumber.js",
      "version": "4.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bignumber.js"
    },
    {
      "action": "add",
      "name": "binary-search",
      "version": "1.3.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/binary-search"
    },
    {
      "action": "add",
      "name": "bindings",
      "version": "1.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bindings"
    },
    {
      "action": "add",
      "name": "bip66",
      "version": "1.1.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bip66"
    },
    {
      "action": "add",
      "name": "bitcoin-ops",
      "version": "1.4.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitcoin-ops"
    },
    {
      "action": "add",
      "name": "bs58",
      "version": "4.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitcoinjs-lib/node_modules/bs58"
    },
    {
      "action": "add",
      "name": "bs58",
      "version": "4.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitcoinjs-message/node_modules/bs58"
    },
    {
      "action": "add",
      "name": "bitfield",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitfield"
    },
    {
      "action": "add",
      "name": "bs58",
      "version": "4.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo-bitcoinjs-lib/node_modules/bs58"
    },
    {
      "action": "add",
      "name": "bignumber.js",
      "version": "4.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo/node_modules/bignumber.js"
    },
    {
      "action": "add",
      "name": "lodash",
      "version": "4.13.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo/node_modules/lodash"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "0.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "underscore",
      "version": "1.7.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo/node_modules/underscore"
    },
    {
      "action": "add",
      "name": "underscore.string",
      "version": "2.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo/node_modules/underscore.string"
    },
    {
      "action": "add",
      "name": "argparse",
      "version": "0.1.16",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo/node_modules/argparse"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-dht/node_modules/debug"
    },
    {
      "action": "add",
      "name": "bittorrent-peerid",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-peerid"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-protocol/node_modules/debug"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-tracker/node_modules/debug"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-tracker/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "ws",
      "version": "5.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-tracker/node_modules/ws"
    },
    {
      "action": "add",
      "name": "bl",
      "version": "1.2.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bl"
    },
    {
      "action": "add",
      "name": "blob-to-buffer",
      "version": "1.2.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/blob-to-buffer"
    },
    {
      "action": "add",
      "name": "async",
      "version": "1.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/async"
    },
    {
      "action": "add",
      "name": "cookiejar",
      "version": "2.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/cookiejar"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/debug"
    },
    {
      "action": "add",
      "name": "extend",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/extend"
    },
    {
      "action": "add",
      "name": "form-data",
      "version": "1.0.0-rc3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/form-data"
    },
    {
      "action": "add",
      "name": "formidable",
      "version": "1.0.17",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/formidable"
    },
    {
      "action": "add",
      "name": "isarray",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/isarray"
    },
    {
      "action": "add",
      "name": "mime",
      "version": "1.3.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/mime"
    },
    {
      "action": "add",
      "name": "qs",
      "version": "2.3.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/qs"
    },
    {
      "action": "add",
      "name": "string_decoder",
      "version": "0.10.31",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/string_decoder"
    },
    {
      "action": "add",
      "name": "readable-stream",
      "version": "1.0.27-1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/readable-stream"
    },
    {
      "action": "add",
      "name": "bluebird",
      "version": "3.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bluebird"
    },
    {
      "action": "add",
      "name": "bmp-js",
      "version": "0.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bmp-js"
    },
    {
      "action": "add",
      "name": "bn.js",
      "version": "4.11.8",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bn.js"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/body-parser/node_modules/debug"
    },
    {
      "action": "add",
      "name": "iconv-lite",
      "version": "0.4.19",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/body-parser/node_modules/iconv-lite"
    },
    {
      "action": "add",
      "name": "qs",
      "version": "6.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/body-parser/node_modules/qs"
    },
    {
      "action": "add",
      "name": "bowser",
      "version": "1.9.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bowser"
    },
    {
      "action": "add",
      "name": "tweetnacl",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brave-crypto/node_modules/tweetnacl"
    },
    {
      "action": "add",
      "name": "brave-crypto",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brave-crypto"
    },
    {
      "action": "add",
      "name": "brorand",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brorand"
    },
    {
      "action": "add",
      "name": "browserify-package-json",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/browserify-package-json"
    },
    {
      "action": "add",
      "name": "bs58",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bs58"
    },
    {
      "action": "add",
      "name": "bs58check",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bs58check"
    },
    {
      "action": "add",
      "name": "buffer-alloc-unsafe",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/buffer-alloc-unsafe"
    },
    {
      "action": "add",
      "name": "buffer-equal",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/buffer-equal"
    },
    {
      "action": "add",
      "name": "buffer-equals",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/buffer-equals"
    },
    {
      "action": "add",
      "name": "buffer-xor",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/buffer-xor"
    },
    {
      "action": "add",
      "name": "buffers",
      "version": "0.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/buffers"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bufferutil/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "nan",
      "version": "2.7.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bufferutil/node_modules/nan"
    },
    {
      "action": "add",
      "name": "bytes",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bytes"
    },
    {
      "action": "add",
      "name": "bigi",
      "version": "1.4.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cashaddress/node_modules/bigi"
    },
    {
      "action": "add",
      "name": "cashaddress",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cashaddress"
    },
    {
      "action": "add",
      "name": "chain-function",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/chain-function"
    },
    {
      "action": "add",
      "name": "chownr",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/chownr"
    },
    {
      "action": "add",
      "name": "chromium-pickle-js",
      "version": "0.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/chromium-pickle-js"
    },
    {
      "action": "add",
      "name": "cipher-base",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cipher-base"
    },
    {
      "action": "add",
      "name": "classnames",
      "version": "2.2.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/classnames"
    },
    {
      "action": "add",
      "name": "clone",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/clone"
    },
    {
      "action": "add",
      "name": "closest-to",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/closest-to"
    },
    {
      "action": "add",
      "name": "commondir",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/commondir"
    },
    {
      "action": "add",
      "name": "component-emitter",
      "version": "1.2.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/component-emitter"
    },
    {
      "action": "add",
      "name": "console-control-strings",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/console-control-strings"
    },
    {
      "action": "add",
      "name": "content-disposition",
      "version": "0.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/content-disposition"
    },
    {
      "action": "add",
      "name": "content-type",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/content-type"
    },
    {
      "action": "add",
      "name": "content-type-parser",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/content-type-parser"
    },
    {
      "action": "add",
      "name": "convert-source-map",
      "version": "1.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/convert-source-map"
    },
    {
      "action": "add",
      "name": "cookie",
      "version": "0.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cookie"
    },
    {
      "action": "add",
      "name": "cookie-signature",
      "version": "1.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cookie-signature"
    },
    {
      "action": "add",
      "name": "cookiejar",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cookiejar"
    },
    {
      "action": "add",
      "name": "core-js",
      "version": "2.5.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/core-js"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/create-torrent/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "cssom",
      "version": "0.3.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cssom"
    },
    {
      "action": "add",
      "name": "cssstyle",
      "version": "0.2.37",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cssstyle"
    },
    {
      "action": "add",
      "name": "cuint",
      "version": "0.2.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/cuint"
    },
    {
      "action": "add",
      "name": "camelcase",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/data-expression/node_modules/camelcase"
    },
    {
      "action": "add",
      "name": "extend",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/data-expression/node_modules/extend"
    },
    {
      "action": "add",
      "name": "data-uri-to-buffer",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/data-uri-to-buffer"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/debugnyan/node_modules/debug"
    },
    {
      "action": "add",
      "name": "decimal.js",
      "version": "5.0.8",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/decimal.js"
    },
    {
      "action": "add",
      "name": "isarray",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/decompress-zip/node_modules/isarray"
    },
    {
      "action": "add",
      "name": "string_decoder",
      "version": "0.10.31",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/decompress-zip/node_modules/string_decoder"
    },
    {
      "action": "add",
      "name": "readable-stream",
      "version": "1.1.14",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/decompress-zip/node_modules/readable-stream"
    },
    {
      "action": "add",
      "name": "deep-extend",
      "version": "0.4.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/deep-extend"
    },
    {
      "action": "add",
      "name": "defined",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/defined"
    },
    {
      "action": "add",
      "name": "block-stream2",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/block-stream2"
    },
    {
      "action": "add",
      "name": "chunk-store-stream",
      "version": "2.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/chunk-store-stream"
    },
    {
      "action": "add",
      "name": "esprima",
      "version": "3.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/degenerator/node_modules/esprima"
    },
    {
      "action": "add",
      "name": "delegates",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/delegates"
    },
    {
      "action": "add",
      "name": "are-we-there-yet",
      "version": "1.1.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/are-we-there-yet"
    },
    {
      "action": "add",
      "name": "depd",
      "version": "1.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/depd"
    },
    {
      "action": "add",
      "name": "destroy",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/destroy"
    },
    {
      "action": "add",
      "name": "detect-libc",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/detect-libc"
    },
    {
      "action": "add",
      "name": "dezalgo",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/dezalgo"
    },
    {
      "action": "add",
      "name": "disposables",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/disposables"
    },
    {
      "action": "add",
      "name": "dom-helpers",
      "version": "3.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/dom-helpers"
    },
    {
      "action": "add",
      "name": "domelementtype",
      "version": "1.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/dom-serializer/node_modules/domelementtype"
    },
    {
      "action": "add",
      "name": "dom-walk",
      "version": "0.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/dom-walk"
    },
    {
      "action": "add",
      "name": "domelementtype",
      "version": "1.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/domelementtype"
    },
    {
      "action": "add",
      "name": "domhandler",
      "version": "2.4.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/domhandler"
    },
    {
      "action": "add",
      "name": "ecurve",
      "version": "1.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ecurve"
    },
    {
      "action": "add",
      "name": "ee-first",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ee-first"
    },
    {
      "action": "add",
      "name": "async",
      "version": "2.6.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-debian/node_modules/async"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-debian/node_modules/debug"
    },
    {
      "action": "add",
      "name": "yargs-parser",
      "version": "5.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-debian/node_modules/yargs-parser"
    },
    {
      "action": "add",
      "name": "yargs",
      "version": "7.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-debian/node_modules/yargs"
    },
    {
      "action": "add",
      "name": "async",
      "version": "2.6.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-redhat/node_modules/async"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-redhat/node_modules/debug"
    },
    {
      "action": "add",
      "name": "yargs-parser",
      "version": "5.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-redhat/node_modules/yargs-parser"
    },
    {
      "action": "add",
      "name": "yargs",
      "version": "7.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-redhat/node_modules/yargs"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-squirrel-startup/node_modules/debug"
    },
    {
      "action": "add",
      "name": "emojis-list",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/emojis-list"
    },
    {
      "action": "add",
      "name": "encodeurl",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/encodeurl"
    },
    {
      "action": "add",
      "name": "encoding",
      "version": "0.1.12",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/encoding"
    },
    {
      "action": "add",
      "name": "end-of-stream",
      "version": "1.4.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/end-of-stream"
    },
    {
      "action": "add",
      "name": "pump",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bufferutil/node_modules/pump"
    },
    {
      "action": "add",
      "name": "entities",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/entities"
    },
    {
      "action": "add",
      "name": "dom-serializer",
      "version": "0.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/dom-serializer"
    },
    {
      "action": "add",
      "name": "domutils",
      "version": "1.7.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/domutils"
    },
    {
      "action": "add",
      "name": "eol",
      "version": "0.5.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/eol"
    },
    {
      "action": "add",
      "name": "es6-promise",
      "version": "3.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/es6-promise"
    },
    {
      "action": "add",
      "name": "es6-promise",
      "version": "4.2.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/es6-promisify/node_modules/es6-promise"
    },
    {
      "action": "add",
      "name": "es6-promisify",
      "version": "5.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/es6-promisify"
    },
    {
      "action": "add",
      "name": "escape-html",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/escape-html"
    },
    {
      "action": "add",
      "name": "esprima",
      "version": "3.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/escodegen/node_modules/esprima"
    },
    {
      "action": "add",
      "name": "eslint-visitor-keys",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/eslint-visitor-keys"
    },
    {
      "action": "add",
      "name": "etag",
      "version": "1.8.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/etag"
    },
    {
      "action": "add",
      "name": "exif-parser",
      "version": "0.1.12",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/exif-parser"
    },
    {
      "action": "add",
      "name": "expand-template",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/expand-template"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/express/node_modules/debug"
    },
    {
      "action": "add",
      "name": "qs",
      "version": "6.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/express/node_modules/qs"
    },
    {
      "action": "add",
      "name": "setprototypeof",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/express/node_modules/setprototypeof"
    },
    {
      "action": "add",
      "name": "fast-json-stable-stringify",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/fast-json-stable-stringify"
    },
    {
      "action": "add",
      "name": "core-js",
      "version": "1.2.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/fbjs/node_modules/core-js"
    },
    {
      "action": "add",
      "name": "file-type",
      "version": "3.9.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/file-type"
    },
    {
      "action": "add",
      "name": "file-uri-to-path",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/file-uri-to-path"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/finalhandler/node_modules/debug"
    },
    {
      "action": "add",
      "name": "flatten",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/flatten"
    },
    {
      "action": "add",
      "name": "formidable",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/formidable"
    },
    {
      "action": "add",
      "name": "forwarded",
      "version": "0.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/forwarded"
    },
    {
      "action": "add",
      "name": "fresh",
      "version": "0.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/fresh"
    },
    {
      "action": "add",
      "name": "isarray",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ftp/node_modules/isarray"
    },
    {
      "action": "add",
      "name": "string_decoder",
      "version": "0.10.31",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ftp/node_modules/string_decoder"
    },
    {
      "action": "add",
      "name": "readable-stream",
      "version": "1.1.14",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ftp/node_modules/readable-stream"
    },
    {
      "action": "add",
      "name": "gar",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/gar"
    },
    {
      "action": "add",
      "name": "get-browser-rtc",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/get-browser-rtc"
    },
    {
      "action": "add",
      "name": "async",
      "version": "1.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/get-folder-size/node_modules/async"
    },
    {
      "action": "add",
      "name": "get-folder-size",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/get-folder-size"
    },
    {
      "action": "add",
      "name": "get-stdin",
      "version": "5.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/get-stdin"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/get-uri/node_modules/debug"
    },
    {
      "action": "add",
      "name": "github-from-package",
      "version": "0.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/github-from-package"
    },
    {
      "action": "add",
      "name": "has-unicode",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/has-unicode"
    },
    {
      "action": "add",
      "name": "hash-base",
      "version": "2.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/hash-base"
    },
    {
      "action": "add",
      "name": "hoist-non-react-statics",
      "version": "2.5.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/hoist-non-react-statics"
    },
    {
      "action": "add",
      "name": "home-or-tmp",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/home-or-tmp"
    },
    {
      "action": "add",
      "name": "htmlparser2",
      "version": "3.9.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/htmlparser2"
    },
    {
      "action": "add",
      "name": "depd",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-errors/node_modules/depd"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-proxy-agent/node_modules/debug"
    },
    {
      "action": "add",
      "name": "http-proxy-agent",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-proxy-agent"
    },
    {
      "action": "add",
      "name": "acorn",
      "version": "5.5.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/acorn"
    },
    {
      "action": "add",
      "name": "ajv",
      "version": "5.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/ajv"
    },
    {
      "action": "add",
      "name": "ajv-keywords",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/ajv-keywords"
    },
    {
      "action": "add",
      "name": "ansi-regex",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/ansi-regex"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/debug"
    },
    {
      "action": "add",
      "name": "doctrine",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/doctrine"
    },
    {
      "action": "add",
      "name": "espree",
      "version": "3.5.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/espree"
    },
    {
      "action": "add",
      "name": "globals",
      "version": "11.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/globals"
    },
    {
      "action": "add",
      "name": "is-fullwidth-code-point",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/is-fullwidth-code-point"
    },
    {
      "action": "add",
      "name": "pluralize",
      "version": "7.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/pluralize"
    },
    {
      "action": "add",
      "name": "slice-ansi",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/slice-ansi"
    },
    {
      "action": "add",
      "name": "strip-ansi",
      "version": "4.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/strip-ansi"
    },
    {
      "action": "add",
      "name": "string-width",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/string-width"
    },
    {
      "action": "add",
      "name": "table",
      "version": "4.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/table"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/https-proxy-agent/node_modules/debug"
    },
    {
      "action": "add",
      "name": "https-proxy-agent",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/https-proxy-agent"
    },
    {
      "action": "add",
      "name": "hyphenate-style-name",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/hyphenate-style-name"
    },
    {
      "action": "add",
      "name": "immediate-chunk-store",
      "version": "1.0.8",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/immediate-chunk-store"
    },
    {
      "action": "add",
      "name": "immutable",
      "version": "3.8.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/immutable"
    },
    {
      "action": "add",
      "name": "ini",
      "version": "1.3.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ini"
    },
    {
      "action": "add",
      "name": "inline-style-prefixer",
      "version": "2.0.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/inline-style-prefixer"
    },
    {
      "action": "add",
      "name": "ip",
      "version": "1.1.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ip"
    },
    {
      "action": "add",
      "name": "ip-regex",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ip-regex"
    },
    {
      "action": "add",
      "name": "ip-set",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ip-set"
    },
    {
      "action": "add",
      "name": "ipaddr.js",
      "version": "1.6.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ipaddr.js"
    },
    {
      "action": "add",
      "name": "compact2string",
      "version": "1.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/compact2string"
    },
    {
      "action": "add",
      "name": "is-ascii",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/is-ascii"
    },
    {
      "action": "add",
      "name": "is-file",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/is-file"
    },
    {
      "action": "add",
      "name": "is-finite",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/is-finite"
    },
    {
      "action": "add",
      "name": "is-function",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/is-function"
    },
    {
      "action": "add",
      "name": "for-each",
      "version": "0.3.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/for-each"
    },
    {
      "action": "add",
      "name": "is-stream",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/is-stream"
    },
    {
      "action": "add",
      "name": "punycode",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/isemail/node_modules/punycode"
    },
    {
      "action": "add",
      "name": "isemail",
      "version": "3.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/isemail"
    },
    {
      "action": "add",
      "name": "bignumber.js",
      "version": "2.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jimp/node_modules/bignumber.js"
    },
    {
      "action": "add",
      "name": "hoek",
      "version": "5.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/joi/node_modules/hoek"
    },
    {
      "action": "add",
      "name": "jpeg-js",
      "version": "0.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jpeg-js"
    },
    {
      "action": "add",
      "name": "js-sha3",
      "version": "0.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/js-sha3"
    },
    {
      "action": "add",
      "name": "browserify-sha3",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/browserify-sha3"
    },
    {
      "action": "add",
      "name": "acorn",
      "version": "4.0.13",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jsdom/node_modules/acorn"
    },
    {
      "action": "add",
      "name": "jsesc",
      "version": "1.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jsesc"
    },
    {
      "action": "add",
      "name": "json-stable-stringify-without-jsonify",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/json-stable-stringify-without-jsonify"
    },
    {
      "action": "add",
      "name": "eslint",
      "version": "4.18.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature/node_modules/eslint"
    },
    {
      "action": "add",
      "name": "json5",
      "version": "0.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/json5"
    },
    {
      "action": "add",
      "name": "jsonfile",
      "version": "2.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jsonfile"
    },
    {
      "action": "add",
      "name": "fs-extra",
      "version": "2.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/fs-extra"
    },
    {
      "action": "add",
      "name": "jsonschema",
      "version": "1.2.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jsonschema"
    },
    {
      "action": "add",
      "name": "junk",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/junk"
    },
    {
      "action": "add",
      "name": "k-rpc-socket",
      "version": "1.8.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/k-rpc-socket"
    },
    {
      "action": "add",
      "name": "klaw",
      "version": "1.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/klaw"
    },
    {
      "action": "add",
      "name": "fs-extra",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-debian/node_modules/fs-extra"
    },
    {
      "action": "add",
      "name": "last-one-wins",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/last-one-wins"
    },
    {
      "action": "add",
      "name": "loader-utils",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/loader-utils"
    },
    {
      "action": "add",
      "name": "path-exists",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/locate-path/node_modules/path-exists"
    },
    {
      "action": "add",
      "name": "lodash-es",
      "version": "4.17.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/lodash-es"
    },
    {
      "action": "add",
      "name": "lodash.sortby",
      "version": "4.7.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/lodash.sortby"
    },
    {
      "action": "add",
      "name": "loose-envify",
      "version": "1.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/loose-envify"
    },
    {
      "action": "add",
      "name": "invariant",
      "version": "2.2.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/invariant"
    },
    {
      "action": "add",
      "name": "lru",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/lru"
    },
    {
      "action": "add",
      "name": "pify",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/make-dir/node_modules/pify"
    },
    {
      "action": "add",
      "name": "make-dir",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/make-dir"
    },
    {
      "action": "add",
      "name": "hash-base",
      "version": "3.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/md5.js/node_modules/hash-base"
    },
    {
      "action": "add",
      "name": "md5.js",
      "version": "1.3.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/md5.js"
    },
    {
      "action": "add",
      "name": "evp_bytestokey",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/evp_bytestokey"
    },
    {
      "action": "add",
      "name": "media-typer",
      "version": "0.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/media-typer"
    },
    {
      "action": "add",
      "name": "memory-chunk-store",
      "version": "1.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/memory-chunk-store"
    },
    {
      "action": "add",
      "name": "merge-descriptors",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/merge-descriptors"
    },
    {
      "action": "add",
      "name": "merkle-lib",
      "version": "2.0.10",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/merkle-lib"
    },
    {
      "action": "add",
      "name": "methods",
      "version": "1.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/methods"
    },
    {
      "action": "add",
      "name": "mime",
      "version": "1.6.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mime"
    },
    {
      "action": "add",
      "name": "mimic-response",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mimic-response"
    },
    {
      "action": "add",
      "name": "decompress-response",
      "version": "3.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/decompress-response"
    },
    {
      "action": "add",
      "name": "min-document",
      "version": "2.19.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/min-document"
    },
    {
      "action": "add",
      "name": "minimalistic-assert",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/minimalistic-assert"
    },
    {
      "action": "add",
      "name": "hash.js",
      "version": "1.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/hash.js"
    },
    {
      "action": "add",
      "name": "minimalistic-crypto-utils",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/minimalistic-crypto-utils"
    },
    {
      "action": "add",
      "name": "hmac-drbg",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/hmac-drbg"
    },
    {
      "action": "add",
      "name": "elliptic",
      "version": "6.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/elliptic"
    },
    {
      "action": "add",
      "name": "mkpath",
      "version": "0.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mkpath"
    },
    {
      "action": "add",
      "name": "fs-extra",
      "version": "0.26.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mksnapshot/node_modules/fs-extra"
    },
    {
      "action": "add",
      "name": "moment",
      "version": "2.20.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/moment"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/morgan/node_modules/debug"
    },
    {
      "action": "add",
      "name": "multistream",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/multistream"
    },
    {
      "action": "add",
      "name": "glob",
      "version": "6.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mv/node_modules/glob"
    },
    {
      "action": "add",
      "name": "rimraf",
      "version": "2.4.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mv/node_modules/rimraf"
    },
    {
      "action": "add",
      "name": "nan",
      "version": "2.9.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/nan"
    },
    {
      "action": "add",
      "name": "dtrace-provider",
      "version": "0.8.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/dtrace-provider"
    },
    {
      "action": "add",
      "name": "ncp",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ncp"
    },
    {
      "action": "add",
      "name": "mv",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mv"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ndjson/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "through2",
      "version": "2.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ndjson/node_modules/through2"
    },
    {
      "action": "add",
      "name": "negotiator",
      "version": "0.6.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/negotiator"
    },
    {
      "action": "add",
      "name": "accepts",
      "version": "1.3.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/accepts"
    },
    {
      "action": "add",
      "name": "netmask",
      "version": "1.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/netmask"
    },
    {
      "action": "add",
      "name": "next-event",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/next-event"
    },
    {
      "action": "add",
      "name": "node-abi",
      "version": "2.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/node-abi"
    },
    {
      "action": "add",
      "name": "node-cache",
      "version": "4.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/node-cache"
    },
    {
      "action": "add",
      "name": "node-fetch",
      "version": "1.7.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/node-fetch"
    },
    {
      "action": "add",
      "name": "noop-logger",
      "version": "0.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/noop-logger"
    },
    {
      "action": "add",
      "name": "nopt",
      "version": "3.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/nopt"
    },
    {
      "action": "add",
      "name": "nwmatcher",
      "version": "1.4.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/nwmatcher"
    },
    {
      "action": "add",
      "name": "on-finished",
      "version": "2.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/on-finished"
    },
    {
      "action": "add",
      "name": "on-headers",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/on-headers"
    },
    {
      "action": "add",
      "name": "morgan",
      "version": "1.9.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/morgan"
    },
    {
      "action": "add",
      "name": "p-try",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/p-try"
    },
    {
      "action": "add",
      "name": "p-limit",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/p-limit"
    },
    {
      "action": "add",
      "name": "p-locate",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/p-locate"
    },
    {
      "action": "add",
      "name": "locate-path",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/locate-path"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pac-proxy-agent/node_modules/debug"
    },
    {
      "action": "add",
      "name": "package-json-versionify",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/package-json-versionify"
    },
    {
      "action": "add",
      "name": "parse-author",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-author"
    },
    {
      "action": "add",
      "name": "parse-bmfont-ascii",
      "version": "1.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-bmfont-ascii"
    },
    {
      "action": "add",
      "name": "parse-bmfont-binary",
      "version": "1.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-bmfont-binary"
    },
    {
      "action": "add",
      "name": "parse-cache-control",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-cache-control"
    },
    {
      "action": "add",
      "name": "parse5",
      "version": "3.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse5"
    },
    {
      "action": "add",
      "name": "parseurl",
      "version": "1.3.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parseurl"
    },
    {
      "action": "add",
      "name": "path-to-regexp",
      "version": "0.1.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/path-to-regexp"
    },
    {
      "action": "add",
      "name": "piece-length",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/piece-length"
    },
    {
      "action": "add",
      "name": "find-up",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pkg-dir/node_modules/find-up"
    },
    {
      "action": "add",
      "name": "pkg-dir",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pkg-dir"
    },
    {
      "action": "add",
      "name": "find-cache-dir",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/find-cache-dir"
    },
    {
      "action": "add",
      "name": "babel-loader",
      "version": "7.1.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-loader"
    },
    {
      "action": "add",
      "name": "pn",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pn"
    },
    {
      "action": "add",
      "name": "pngjs",
      "version": "3.3.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pngjs"
    },
    {
      "action": "add",
      "name": "pixelmatch",
      "version": "4.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pixelmatch"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prebuild-install/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "private",
      "version": "0.1.8",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/private"
    },
    {
      "action": "add",
      "name": "process",
      "version": "0.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/process"
    },
    {
      "action": "add",
      "name": "global",
      "version": "4.3.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/global"
    },
    {
      "action": "add",
      "name": "promise",
      "version": "7.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/promise"
    },
    {
      "action": "add",
      "name": "bigi",
      "version": "1.4.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib/node_modules/bigi"
    },
    {
      "action": "add",
      "name": "bitcoin-ops",
      "version": "1.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib/node_modules/bitcoin-ops"
    },
    {
      "action": "add",
      "name": "bs58",
      "version": "4.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib/node_modules/bs58"
    },
    {
      "action": "add",
      "name": "typeforce",
      "version": "1.10.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib/node_modules/typeforce"
    },
    {
      "action": "add",
      "name": "varuint-bitcoin",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib/node_modules/varuint-bitcoin"
    },
    {
      "action": "add",
      "name": "proxy-addr",
      "version": "2.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/proxy-addr"
    },
    {
      "action": "add",
      "name": "agent-base",
      "version": "4.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/proxy-agent/node_modules/agent-base"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/proxy-agent/node_modules/debug"
    },
    {
      "action": "add",
      "name": "lru-cache",
      "version": "2.7.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/proxy-agent/node_modules/lru-cache"
    },
    {
      "action": "add",
      "name": "pump",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pump"
    },
    {
      "action": "add",
      "name": "pushdata-bitcoin",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pushdata-bitcoin"
    },
    {
      "action": "add",
      "name": "q",
      "version": "1.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/q"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/random-access-file/node_modules/debug"
    },
    {
      "action": "add",
      "name": "random-iterate",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/random-iterate"
    },
    {
      "action": "add",
      "name": "random-lib",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/random-lib"
    },
    {
      "action": "add",
      "name": "randombytes",
      "version": "2.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/randombytes"
    },
    {
      "action": "add",
      "name": "k-bucket",
      "version": "4.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/k-bucket"
    },
    {
      "action": "add",
      "name": "k-rpc",
      "version": "4.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/k-rpc"
    },
    {
      "action": "add",
      "name": "niceware",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/niceware"
    },
    {
      "action": "add",
      "name": "range-parser",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/range-parser"
    },
    {
      "action": "add",
      "name": "range-slice-stream",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/range-slice-stream"
    },
    {
      "action": "add",
      "name": "iconv-lite",
      "version": "0.4.19",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/raw-body/node_modules/iconv-lite"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/rc/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "rc",
      "version": "1.2.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/rc"
    },
    {
      "action": "add",
      "name": "react-input-autosize",
      "version": "0.6.13",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/react-input-autosize"
    },
    {
      "action": "add",
      "name": "read-chunk",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/read-chunk"
    },
    {
      "action": "add",
      "name": "record-cache",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/record-cache"
    },
    {
      "action": "add",
      "name": "reduce-component",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/reduce-component"
    },
    {
      "action": "add",
      "name": "superagent",
      "version": "1.8.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js/node_modules/superagent"
    },
    {
      "action": "add",
      "name": "regenerator-runtime",
      "version": "0.11.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/regenerator-runtime"
    },
    {
      "action": "add",
      "name": "babel-runtime",
      "version": "6.26.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-runtime"
    },
    {
      "action": "add",
      "name": "babel-messages",
      "version": "6.23.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-messages"
    },
    {
      "action": "add",
      "name": "regexp-quote",
      "version": "0.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/regexp-quote"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/render-media/node_modules/debug"
    },
    {
      "action": "add",
      "name": "repeating",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/repeating"
    },
    {
      "action": "add",
      "name": "detect-indent",
      "version": "4.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/detect-indent"
    },
    {
      "action": "add",
      "name": "request-promise-core",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/request-promise-core"
    },
    {
      "action": "add",
      "name": "tough-cookie",
      "version": "2.3.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/request-promise-native/node_modules/tough-cookie"
    },
    {
      "action": "add",
      "name": "requires-port",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/requires-port"
    },
    {
      "action": "add",
      "name": "http-proxy",
      "version": "1.11.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-proxy"
    },
    {
      "action": "add",
      "name": "ripemd160",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripemd160"
    },
    {
      "action": "add",
      "name": "bn.js",
      "version": "3.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-keypairs/node_modules/bn.js"
    },
    {
      "action": "add",
      "name": "core-js",
      "version": "1.2.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-keypairs/node_modules/core-js"
    },
    {
      "action": "add",
      "name": "babel-runtime",
      "version": "5.8.38",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-keypairs/node_modules/babel-runtime"
    },
    {
      "action": "add",
      "name": "elliptic",
      "version": "5.2.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-keypairs/node_modules/elliptic"
    },
    {
      "action": "add",
      "name": "ripple-lib-transactionparser",
      "version": "0.6.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-lib-transactionparser"
    },
    {
      "action": "add",
      "name": "rlp",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/rlp"
    },
    {
      "action": "add",
      "name": "run-parallel",
      "version": "1.1.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/run-parallel"
    },
    {
      "action": "add",
      "name": "run-parallel-limit",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/run-parallel-limit"
    },
    {
      "action": "add",
      "name": "run-series",
      "version": "1.1.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/run-series"
    },
    {
      "action": "add",
      "name": "rusha",
      "version": "0.8.13",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/rusha"
    },
    {
      "action": "add",
      "name": "safe-json-stringify",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/safe-json-stringify"
    },
    {
      "action": "add",
      "name": "bunyan",
      "version": "1.8.12",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bunyan"
    },
    {
      "action": "add",
      "name": "debugnyan",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/debugnyan"
    },
    {
      "action": "add",
      "name": "sanitize-html",
      "version": "1.13.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/sanitize-html"
    },
    {
      "action": "add",
      "name": "sax",
      "version": "1.2.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/sax"
    },
    {
      "action": "add",
      "name": "ajv",
      "version": "5.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/schema-utils/node_modules/ajv"
    },
    {
      "action": "add",
      "name": "schema-utils",
      "version": "0.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/schema-utils"
    },
    {
      "action": "add",
      "name": "secrets.js-grempe",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/secrets.js-grempe"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/send/node_modules/debug"
    },
    {
      "action": "add",
      "name": "mime",
      "version": "1.4.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/send/node_modules/mime"
    },
    {
      "action": "add",
      "name": "setimmediate",
      "version": "1.0.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/setimmediate"
    },
    {
      "action": "add",
      "name": "setprototypeof",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/setprototypeof"
    },
    {
      "action": "add",
      "name": "sha.js",
      "version": "2.4.10",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/sha.js"
    },
    {
      "action": "add",
      "name": "create-hash",
      "version": "1.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/create-hash"
    },
    {
      "action": "add",
      "name": "bs58check",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitcoinjs-lib/node_modules/bs58check"
    },
    {
      "action": "add",
      "name": "bs58check",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitcoinjs-message/node_modules/bs58check"
    },
    {
      "action": "add",
      "name": "bs58check",
      "version": "2.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo-bitcoinjs-lib/node_modules/bs58check"
    },
    {
      "action": "add",
      "name": "browserify-aes",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/browserify-aes"
    },
    {
      "action": "add",
      "name": "bs58check",
      "version": "2.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib/node_modules/bs58check"
    },
    {
      "action": "add",
      "name": "create-hmac",
      "version": "1.1.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/create-hmac"
    },
    {
      "action": "add",
      "name": "drbg.js",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/drbg.js"
    },
    {
      "action": "add",
      "name": "sha3",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/sha3"
    },
    {
      "action": "add",
      "name": "keccakjs",
      "version": "0.2.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/keccakjs"
    },
    {
      "action": "add",
      "name": "simple-concat",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-concat"
    },
    {
      "action": "add",
      "name": "simple-get",
      "version": "2.7.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-get"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-peer/node_modules/debug"
    },
    {
      "action": "add",
      "name": "process-nextick-args",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-peer/node_modules/process-nextick-args"
    },
    {
      "action": "add",
      "name": "readable-stream",
      "version": "2.3.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-peer/node_modules/readable-stream"
    },
    {
      "action": "add",
      "name": "simple-peer",
      "version": "9.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-peer"
    },
    {
      "action": "add",
      "name": "simple-sha1",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-sha1"
    },
    {
      "action": "add",
      "name": "bittorrent-dht",
      "version": "8.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-dht"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-websocket/node_modules/debug"
    },
    {
      "action": "add",
      "name": "ws",
      "version": "4.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-websocket/node_modules/ws"
    },
    {
      "action": "add",
      "name": "simple-websocket",
      "version": "7.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/simple-websocket"
    },
    {
      "action": "add",
      "name": "slash",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/slash"
    },
    {
      "action": "add",
      "name": "smart-buffer",
      "version": "1.1.15",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/smart-buffer"
    },
    {
      "action": "add",
      "name": "ansi-regex",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/ansi-regex"
    },
    {
      "action": "add",
      "name": "color-convert",
      "version": "1.9.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/color-convert"
    },
    {
      "action": "add",
      "name": "ansi-styles",
      "version": "3.2.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/ansi-styles"
    },
    {
      "action": "add",
      "name": "has-flag",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/has-flag"
    },
    {
      "action": "add",
      "name": "minimist",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/minimist"
    },
    {
      "action": "add",
      "name": "strip-ansi",
      "version": "4.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/strip-ansi"
    },
    {
      "action": "add",
      "name": "supports-color",
      "version": "5.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/supports-color"
    },
    {
      "action": "add",
      "name": "chalk",
      "version": "2.3.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy/node_modules/chalk"
    },
    {
      "action": "add",
      "name": "socks",
      "version": "1.1.10",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/socks"
    },
    {
      "action": "add",
      "name": "agent-base",
      "version": "4.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/socks-proxy-agent/node_modules/agent-base"
    },
    {
      "action": "add",
      "name": "socks-proxy-agent",
      "version": "3.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/socks-proxy-agent"
    },
    {
      "action": "add",
      "name": "source-map",
      "version": "0.6.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/source-map"
    },
    {
      "action": "add",
      "name": "escodegen",
      "version": "1.9.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/escodegen"
    },
    {
      "action": "add",
      "name": "degenerator",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/degenerator"
    },
    {
      "action": "add",
      "name": "source-map",
      "version": "0.5.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/source-map-support/node_modules/source-map"
    },
    {
      "action": "add",
      "name": "source-map-support",
      "version": "0.4.18",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/source-map-support"
    },
    {
      "action": "add",
      "name": "speedometer",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/speedometer"
    },
    {
      "action": "add",
      "name": "split",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/split"
    },
    {
      "action": "add",
      "name": "load-ip-set",
      "version": "1.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/load-ip-set"
    },
    {
      "action": "add",
      "name": "through2",
      "version": "2.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/split2/node_modules/through2"
    },
    {
      "action": "add",
      "name": "split2",
      "version": "2.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/split2"
    },
    {
      "action": "add",
      "name": "ndjson",
      "version": "1.5.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ndjson"
    },
    {
      "action": "add",
      "name": "standard-error",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/standard-error"
    },
    {
      "action": "add",
      "name": "standard-http-error",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/standard-http-error"
    },
    {
      "action": "add",
      "name": "standard-json",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/standard-json"
    },
    {
      "action": "add",
      "name": "statuses",
      "version": "1.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/statuses"
    },
    {
      "action": "add",
      "name": "http-errors",
      "version": "1.6.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-errors"
    },
    {
      "action": "add",
      "name": "send",
      "version": "0.16.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/send"
    },
    {
      "action": "add",
      "name": "serve-static",
      "version": "1.13.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/serve-static"
    },
    {
      "action": "add",
      "name": "stealthy-require",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/stealthy-require"
    },
    {
      "action": "add",
      "name": "request-promise-native",
      "version": "1.0.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/request-promise-native"
    },
    {
      "action": "add",
      "name": "storage2",
      "version": "0.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/storage2"
    },
    {
      "action": "add",
      "name": "stream-to",
      "version": "0.2.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/stream-to"
    },
    {
      "action": "add",
      "name": "stream-to-blob",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/stream-to-blob"
    },
    {
      "action": "add",
      "name": "stream-to-blob-url",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/stream-to-blob-url"
    },
    {
      "action": "add",
      "name": "stream-to-buffer",
      "version": "0.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/stream-to-buffer"
    },
    {
      "action": "add",
      "name": "stream-with-known-length-to-buffer",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/stream-with-known-length-to-buffer"
    },
    {
      "action": "add",
      "name": "string2compact",
      "version": "1.2.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/string2compact"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/superagent-proxy/node_modules/debug"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/superagent/node_modules/debug"
    },
    {
      "action": "add",
      "name": "superagent",
      "version": "3.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/superagent"
    },
    {
      "action": "add",
      "name": "symbol-observable",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/symbol-observable"
    },
    {
      "action": "add",
      "name": "redux",
      "version": "3.7.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/redux"
    },
    {
      "action": "add",
      "name": "dnd-core",
      "version": "2.5.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/dnd-core"
    },
    {
      "action": "add",
      "name": "symbol-tree",
      "version": "3.2.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/symbol-tree"
    },
    {
      "action": "add",
      "name": "pump",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tar-fs/node_modules/pump"
    },
    {
      "action": "add",
      "name": "tar-stream",
      "version": "1.5.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tar-stream"
    },
    {
      "action": "add",
      "name": "tar-fs",
      "version": "1.16.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tar-fs"
    },
    {
      "action": "add",
      "name": "rimraf",
      "version": "2.2.8",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/temp/node_modules/rimraf"
    },
    {
      "action": "add",
      "name": "temp",
      "version": "0.8.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/temp"
    },
    {
      "action": "add",
      "name": "thirty-two",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/thirty-two"
    },
    {
      "action": "add",
      "name": "throttleit",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/throttleit"
    },
    {
      "action": "add",
      "name": "isarray",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/through2/node_modules/isarray"
    },
    {
      "action": "add",
      "name": "string_decoder",
      "version": "0.10.31",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/through2/node_modules/string_decoder"
    },
    {
      "action": "add",
      "name": "readable-stream",
      "version": "1.0.34",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/through2/node_modules/readable-stream"
    },
    {
      "action": "add",
      "name": "through2",
      "version": "0.6.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/through2"
    },
    {
      "action": "add",
      "name": "thunkify",
      "version": "2.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/thunkify"
    },
    {
      "action": "add",
      "name": "pac-resolver",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pac-resolver"
    },
    {
      "action": "add",
      "name": "thunky",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/thunky"
    },
    {
      "action": "add",
      "name": "random-access-file",
      "version": "1.8.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/random-access-file"
    },
    {
      "action": "add",
      "name": "fs-chunk-store",
      "version": "1.6.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/fs-chunk-store"
    },
    {
      "action": "add",
      "name": "tinycolor2",
      "version": "1.4.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tinycolor2"
    },
    {
      "action": "add",
      "name": "to-arraybuffer",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/to-arraybuffer"
    },
    {
      "action": "add",
      "name": "mediasource",
      "version": "2.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mediasource"
    },
    {
      "action": "add",
      "name": "to-fast-properties",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/to-fast-properties"
    },
    {
      "action": "add",
      "name": "babel-types",
      "version": "6.26.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-types"
    },
    {
      "action": "add",
      "name": "babel-traverse",
      "version": "6.26.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-traverse"
    },
    {
      "action": "add",
      "name": "babel-template",
      "version": "6.26.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-template"
    },
    {
      "action": "add",
      "name": "babel-helpers",
      "version": "6.24.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-helpers"
    },
    {
      "action": "add",
      "name": "hoek",
      "version": "5.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/topo/node_modules/hoek"
    },
    {
      "action": "add",
      "name": "topo",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/topo"
    },
    {
      "action": "add",
      "name": "joi",
      "version": "13.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/joi"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/torrent-discovery/node_modules/debug"
    },
    {
      "action": "add",
      "name": "torrent-piece",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/torrent-piece"
    },
    {
      "action": "add",
      "name": "nopt",
      "version": "1.0.10",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/touch/node_modules/nopt"
    },
    {
      "action": "add",
      "name": "touch",
      "version": "0.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/touch"
    },
    {
      "action": "add",
      "name": "punycode",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tr46/node_modules/punycode"
    },
    {
      "action": "add",
      "name": "tr46",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tr46"
    },
    {
      "action": "add",
      "name": "traverse",
      "version": "0.3.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/traverse"
    },
    {
      "action": "add",
      "name": "chainsaw",
      "version": "0.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/chainsaw"
    },
    {
      "action": "add",
      "name": "binary",
      "version": "0.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/binary"
    },
    {
      "action": "add",
      "name": "decompress-zip",
      "version": "0.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/decompress-zip"
    },
    {
      "action": "add",
      "name": "mksnapshot",
      "version": "0.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mksnapshot"
    },
    {
      "action": "add",
      "name": "asar",
      "version": "0.13.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/asar"
    },
    {
      "action": "add",
      "name": "trim",
      "version": "0.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/trim"
    },
    {
      "action": "add",
      "name": "parse-headers",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-headers"
    },
    {
      "action": "add",
      "name": "trim-right",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/trim-right"
    },
    {
      "action": "add",
      "name": "babel-generator",
      "version": "6.26.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-generator"
    },
    {
      "action": "add",
      "name": "babel-core",
      "version": "6.26.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-core"
    },
    {
      "action": "add",
      "name": "babel-register",
      "version": "6.26.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/babel-register"
    },
    {
      "action": "add",
      "name": "mime-db",
      "version": "1.33.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/type-is/node_modules/mime-db"
    },
    {
      "action": "add",
      "name": "mime-types",
      "version": "2.1.18",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/type-is/node_modules/mime-types"
    },
    {
      "action": "add",
      "name": "type-is",
      "version": "1.6.16",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/type-is"
    },
    {
      "action": "add",
      "name": "typedarray-to-buffer",
      "version": "3.1.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/typedarray-to-buffer"
    },
    {
      "action": "add",
      "name": "filestream",
      "version": "4.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/filestream"
    },
    {
      "action": "add",
      "name": "create-torrent",
      "version": "3.30.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/create-torrent"
    },
    {
      "action": "add",
      "name": "typeforce",
      "version": "1.12.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/typeforce"
    },
    {
      "action": "add",
      "name": "ua-parser-js",
      "version": "0.7.17",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ua-parser-js"
    },
    {
      "action": "add",
      "name": "uint64be",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/uint64be"
    },
    {
      "action": "add",
      "name": "mp4-box-encoding",
      "version": "1.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mp4-box-encoding"
    },
    {
      "action": "add",
      "name": "mp4-stream",
      "version": "2.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/mp4-stream"
    },
    {
      "action": "add",
      "name": "ultron",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ultron"
    },
    {
      "action": "add",
      "name": "underscore",
      "version": "1.8.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/underscore"
    },
    {
      "action": "add",
      "name": "node-anonize2-relic-emscripten",
      "version": "0.3.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/node-anonize2-relic-emscripten"
    },
    {
      "action": "add",
      "name": "underscore.string",
      "version": "3.3.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/underscore.string"
    },
    {
      "action": "add",
      "name": "uniq",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/uniq"
    },
    {
      "action": "add",
      "name": "magnet-uri",
      "version": "5.1.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/magnet-uri"
    },
    {
      "action": "add",
      "name": "parse-torrent-file",
      "version": "4.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-torrent-file"
    },
    {
      "action": "add",
      "name": "parse-torrent",
      "version": "5.8.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-torrent"
    },
    {
      "action": "add",
      "name": "unordered-array-remove",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/unordered-array-remove"
    },
    {
      "action": "add",
      "name": "bittorrent-protocol",
      "version": "2.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-protocol"
    },
    {
      "action": "add",
      "name": "unpipe",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/unpipe"
    },
    {
      "action": "add",
      "name": "finalhandler",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/finalhandler"
    },
    {
      "action": "add",
      "name": "raw-body",
      "version": "2.3.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/raw-body"
    },
    {
      "action": "add",
      "name": "body-parser",
      "version": "1.18.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/body-parser"
    },
    {
      "action": "add",
      "name": "unzip-response",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/unzip-response"
    },
    {
      "action": "add",
      "name": "simple-get",
      "version": "1.4.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bufferutil/node_modules/simple-get"
    },
    {
      "action": "add",
      "name": "url-regex",
      "version": "3.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/url-regex"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ut_metadata/node_modules/debug"
    },
    {
      "action": "add",
      "name": "ut_metadata",
      "version": "3.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ut_metadata"
    },
    {
      "action": "add",
      "name": "ut_pex",
      "version": "1.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ut_pex"
    },
    {
      "action": "add",
      "name": "inherits",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/util/node_modules/inherits"
    },
    {
      "action": "add",
      "name": "util",
      "version": "0.10.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/util"
    },
    {
      "action": "add",
      "name": "assert",
      "version": "0.4.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/assert"
    },
    {
      "action": "add",
      "name": "utils-merge",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/utils-merge"
    },
    {
      "action": "add",
      "name": "validator.js",
      "version": "2.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/validator.js"
    },
    {
      "action": "add",
      "name": "validator.js-asserts",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/validator.js-asserts"
    },
    {
      "action": "add",
      "name": "http-request-signature",
      "version": "0.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/http-request-signature"
    },
    {
      "action": "add",
      "name": "varuint-bitcoin",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/varuint-bitcoin"
    },
    {
      "action": "add",
      "name": "vary",
      "version": "1.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/vary"
    },
    {
      "action": "add",
      "name": "express",
      "version": "4.16.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/express"
    },
    {
      "action": "add",
      "name": "pump",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/videostream/node_modules/pump"
    },
    {
      "action": "add",
      "name": "videostream",
      "version": "2.4.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/videostream"
    },
    {
      "action": "add",
      "name": "render-media",
      "version": "2.12.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/render-media"
    },
    {
      "action": "add",
      "name": "warning",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/warning"
    },
    {
      "action": "add",
      "name": "webidl-conversions",
      "version": "4.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/webidl-conversions"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "2.6.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/webtorrent-remote/node_modules/debug"
    },
    {
      "action": "add",
      "name": "debug",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/webtorrent/node_modules/debug"
    },
    {
      "action": "add",
      "name": "mime",
      "version": "2.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/webtorrent/node_modules/mime"
    },
    {
      "action": "add",
      "name": "pump",
      "version": "3.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/webtorrent/node_modules/pump"
    },
    {
      "action": "add",
      "name": "iconv-lite",
      "version": "0.4.19",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/whatwg-encoding/node_modules/iconv-lite"
    },
    {
      "action": "add",
      "name": "whatwg-encoding",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/whatwg-encoding"
    },
    {
      "action": "add",
      "name": "html-encoding-sniffer",
      "version": "1.0.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/html-encoding-sniffer"
    },
    {
      "action": "add",
      "name": "whatwg-fetch",
      "version": "2.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/whatwg-fetch"
    },
    {
      "action": "add",
      "name": "isomorphic-fetch",
      "version": "2.2.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/isomorphic-fetch"
    },
    {
      "action": "add",
      "name": "fbjs",
      "version": "0.8.16",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/fbjs"
    },
    {
      "action": "add",
      "name": "create-react-class",
      "version": "15.6.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/create-react-class"
    },
    {
      "action": "add",
      "name": "prop-types",
      "version": "15.6.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prop-types"
    },
    {
      "action": "add",
      "name": "whatwg-url",
      "version": "6.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/whatwg-url"
    },
    {
      "action": "add",
      "name": "which-pm-runs",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/which-pm-runs"
    },
    {
      "action": "add",
      "name": "wide-align",
      "version": "1.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/wide-align"
    },
    {
      "action": "add",
      "name": "gauge",
      "version": "2.7.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/gauge"
    },
    {
      "action": "add",
      "name": "npmlog",
      "version": "4.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/npmlog"
    },
    {
      "action": "add",
      "name": "prebuild-install",
      "version": "2.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bufferutil/node_modules/prebuild-install"
    },
    {
      "action": "add",
      "name": "bufferutil",
      "version": "3.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bufferutil"
    },
    {
      "action": "add",
      "name": "bittorrent-tracker",
      "version": "9.7.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bittorrent-tracker"
    },
    {
      "action": "add",
      "name": "torrent-discovery",
      "version": "8.4.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/torrent-discovery"
    },
    {
      "action": "add",
      "name": "prebuild-install",
      "version": "2.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prebuild-install"
    },
    {
      "action": "add",
      "name": "secp256k1",
      "version": "3.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib/node_modules/secp256k1"
    },
    {
      "action": "add",
      "name": "secp256k1",
      "version": "3.2.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/secp256k1"
    },
    {
      "action": "add",
      "name": "bitcoinjs-message",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitcoinjs-message"
    },
    {
      "action": "add",
      "name": "ethereumjs-util",
      "version": "4.4.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ethereumjs-util"
    },
    {
      "action": "add",
      "name": "ethereumjs-abi",
      "version": "0.6.5",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ethereumjs-abi"
    },
    {
      "action": "add",
      "name": "wif",
      "version": "2.0.6",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/wif"
    },
    {
      "action": "add",
      "name": "bitcoinjs-lib",
      "version": "3.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitcoinjs-lib"
    },
    {
      "action": "add",
      "name": "prova-lib",
      "version": "0.2.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prova-lib"
    },
    {
      "action": "add",
      "name": "bitgo-bitcoinjs-lib",
      "version": "3.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo-bitcoinjs-lib"
    },
    {
      "action": "add",
      "name": "window-size",
      "version": "0.1.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/window-size"
    },
    {
      "action": "add",
      "name": "yargs",
      "version": "3.32.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/data-expression/node_modules/yargs"
    },
    {
      "action": "add",
      "name": "data-expression",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/data-expression"
    },
    {
      "action": "add",
      "name": "bat-balance",
      "version": "1.0.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bat-balance"
    },
    {
      "action": "add",
      "name": "word-wrap",
      "version": "1.2.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/word-wrap"
    },
    {
      "action": "add",
      "name": "ws",
      "version": "3.3.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ws"
    },
    {
      "action": "add",
      "name": "base-x",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/x-address-codec/node_modules/base-x"
    },
    {
      "action": "add",
      "name": "x-address-codec",
      "version": "0.7.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/x-address-codec"
    },
    {
      "action": "add",
      "name": "ripple-address-codec",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-address-codec"
    },
    {
      "action": "add",
      "name": "ripple-binary-codec",
      "version": "0.1.13",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-binary-codec"
    },
    {
      "action": "add",
      "name": "ripple-hashes",
      "version": "0.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-hashes"
    },
    {
      "action": "add",
      "name": "ripple-keypairs",
      "version": "0.10.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-keypairs"
    },
    {
      "action": "add",
      "name": "ripple-lib",
      "version": "0.17.9",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ripple-lib"
    },
    {
      "action": "add",
      "name": "xhr",
      "version": "2.4.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/xhr"
    },
    {
      "action": "add",
      "name": "xml-name-validator",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/xml-name-validator"
    },
    {
      "action": "add",
      "name": "jsdom",
      "version": "11.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jsdom"
    },
    {
      "action": "add",
      "name": "xml-parse-from-string",
      "version": "1.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/xml-parse-from-string"
    },
    {
      "action": "add",
      "name": "xmlbuilder",
      "version": "9.0.7",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/xmlbuilder"
    },
    {
      "action": "add",
      "name": "xml2js",
      "version": "0.4.19",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/xml2js"
    },
    {
      "action": "add",
      "name": "parse-bmfont-xml",
      "version": "1.1.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/parse-bmfont-xml"
    },
    {
      "action": "add",
      "name": "load-bmfont",
      "version": "1.3.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/load-bmfont"
    },
    {
      "action": "add",
      "name": "jimp",
      "version": "0.2.28",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/jimp"
    },
    {
      "action": "add",
      "name": "bat-publisher",
      "version": "2.0.13",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bat-publisher"
    },
    {
      "action": "add",
      "name": "xregexp",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/xregexp"
    },
    {
      "action": "add",
      "name": "ftp",
      "version": "0.3.10",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/ftp"
    },
    {
      "action": "add",
      "name": "get-uri",
      "version": "2.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/get-uri"
    },
    {
      "action": "add",
      "name": "pac-proxy-agent",
      "version": "2.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/pac-proxy-agent"
    },
    {
      "action": "add",
      "name": "proxy-agent",
      "version": "2.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/proxy-agent"
    },
    {
      "action": "add",
      "name": "superagent-proxy",
      "version": "1.0.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/superagent-proxy"
    },
    {
      "action": "add",
      "name": "bitgo",
      "version": "4.21.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bitgo"
    },
    {
      "action": "add",
      "name": "zero-fill",
      "version": "2.2.3",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/zero-fill"
    },
    {
      "action": "add",
      "name": "webtorrent",
      "version": "0.98.24",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/webtorrent"
    },
    {
      "action": "add",
      "name": "aphrodite",
      "version": "1.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/aphrodite"
    },
    {
      "action": "add",
      "name": "bat-client",
      "version": "2.0.11",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bat-client"
    },
    {
      "action": "add",
      "name": "bloodhound-js",
      "version": "1.2.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/bloodhound-js"
    },
    {
      "action": "add",
      "name": "acorn",
      "version": "3.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brave/node_modules/acorn"
    },
    {
      "action": "add",
      "name": "async",
      "version": "2.6.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brave/node_modules/async"
    },
    {
      "action": "add",
      "name": "lru-cache",
      "version": "1.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brave/node_modules/lru-cache"
    },
    {
      "action": "add",
      "name": "punycode",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brave/node_modules/punycode"
    },
    {
      "action": "add",
      "name": "clipboard-copy",
      "version": "1.4.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/clipboard-copy"
    },
    {
      "action": "add",
      "name": "compare-versions",
      "version": "3.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/compare-versions"
    },
    {
      "action": "add",
      "name": "date-fns",
      "version": "1.29.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/date-fns"
    },
    {
      "action": "add",
      "name": "deepmerge",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/deepmerge"
    },
    {
      "action": "add",
      "name": "electron-installer-debian",
      "version": "0.5.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-debian"
    },
    {
      "action": "add",
      "name": "electron-installer-redhat",
      "version": "0.5.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-installer-redhat"
    },
    {
      "action": "add",
      "name": "electron-localshortcut",
      "version": "0.6.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-localshortcut"
    },
    {
      "action": "add",
      "name": "electron-squirrel-startup",
      "version": "1.0.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/electron-squirrel-startup"
    },
    {
      "action": "add",
      "name": "emoji-regex",
      "version": "6.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/emoji-regex"
    },
    {
      "action": "add",
      "name": "file-loader",
      "version": "0.11.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/file-loader"
    },
    {
      "action": "add",
      "name": "font-awesome",
      "version": "4.7.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/font-awesome"
    },
    {
      "action": "add",
      "name": "immutablediff",
      "version": "0.4.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/immutablediff"
    },
    {
      "action": "add",
      "name": "immutablepatch",
      "version": "0.2.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/immutablepatch"
    },
    {
      "action": "add",
      "name": "l20n",
      "version": "3.5.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/l20n"
    },
    {
      "action": "add",
      "name": "prettier-bytes",
      "version": "1.0.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/prettier-bytes"
    },
    {
      "action": "add",
      "name": "qr-image",
      "version": "3.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/qr-image"
    },
    {
      "action": "add",
      "name": "react",
      "version": "15.6.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/react"
    },
    {
      "action": "add",
      "name": "react-dnd",
      "version": "2.5.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/react-dnd"
    },
    {
      "action": "add",
      "name": "react-dnd-html5-backend",
      "version": "2.5.4",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/react-dnd-html5-backend"
    },
    {
      "action": "add",
      "name": "react-dom",
      "version": "15.6.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/react-dom"
    },
    {
      "action": "add",
      "name": "react-select",
      "version": "0.9.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/react-select"
    },
    {
      "action": "add",
      "name": "react-transition-group",
      "version": "2.2.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/react-transition-group"
    },
    {
      "action": "add",
      "name": "snazzy",
      "version": "7.1.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/snazzy"
    },
    {
      "action": "add",
      "name": "string.prototype.endswith",
      "version": "0.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/string.prototype.endswith"
    },
    {
      "action": "add",
      "name": "string.prototype.startswith",
      "version": "0.2.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/string.prototype.startswith"
    },
    {
      "action": "add",
      "name": "tablesort",
      "version": "5.0.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tablesort"
    },
    {
      "action": "add",
      "name": "tldjs",
      "version": "2.3.1",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/tldjs"
    },
    {
      "action": "add",
      "name": "url-loader",
      "version": "0.6.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/url-loader"
    },
    {
      "action": "add",
      "name": "v8-compile-cache",
      "version": "1.1.2",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/v8-compile-cache"
    },
    {
      "action": "add",
      "name": "webtorrent-remote",
      "version": "2.1.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/webtorrent-remote"
    },
    {
      "action": "add",
      "name": "brave",
      "version": "0.22.0",
      "path": "/Users/jeff/Documents/Projects/npm-dep-analyser/node_modules/brave"
    }
  ],
  "removed": [],
  "updated": [],
  "moved": [],
  "failed": [],
  "warnings": [
    "react-select@0.9.1 requires a peer of react@^0.14.1 but none is installed. You must install peer dependencies yourself.",
    "react-select@0.9.1 requires a peer of react-dom@^0.14.1 but none is installed. You must install peer dependencies yourself.",
    "babel-loader@7.1.4 requires a peer of webpack@2 || 3 || 4 but none is installed. You must install peer dependencies yourself."
  ],
  "elapsed": 107729
}

*/