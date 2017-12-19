Typescript playground
=====================

This is a ts/tsx playground. While it may be started up and will serve the site
on the usual port 8080, it is not really meant to be looked at, rather played with.

## linting

Tslint is good. Eslint for ts files? Not so good.

`tslint:recommended` seems to be a sane default, but it feels so different
from the standard/semistandard world.

`"extends": "tslint-config-semistandard"` works, but feels sloppy and triggers
warnings during script execution (unrelated to the code itself).

Probably typescript people (with their c# and java friends) and javascript people
(with their lumbersexual beards) should just sit down and battle it out.

## random notes

Don't forget to use target `es6` in tsconfig (es5 target will break with es6 language features,
like `Set` for example... probably because life would've been way too fucking easy without babel) - and no,
`@types/es6-shim` and `es6-shim` will not help [see here](https://github.com/Microsoft/TypeScript/issues/6842)
(because _"TypeScript is a syntactic superset of JavaScript, not a functional superset."_).

For `TS7026: JSX element implicitly has type 'any' because no interface 'JSX.IntrinsicElements' exists.`
errors do install the appropriate type definition (`npm i -S @types/react @types/react-dom`);
these may sound optional, but for tsc these are __not__.

If you want `array.includes` then don't forget to add the es7 option to tsconfig (`lib: ['es7']`)

Enterprise people may want to forbid implicit `any` types with `noImplicitAny: true` in tsconfig.
Can I haz more java in javascript please?

Webstorm 2017.3 shits itself on plain js files in the project (like the webpack config), this seems
to be a bug in Webstorm (builtin jslint+jshint combo ignoring js language version). Use eslint
(along with tslint) and disable the old and obscure stuff. Or just use notepad.
