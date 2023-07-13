# astro-hybrid-static-issue

## How to test

1. `npm run compare`
2. inspect the `./__static-build/index.html`` and notice the `src` of the `<img />`. it is static.
3. inspect the `./hybrid-build/client/index.html`` and notice the `src` of the `<img />`. it is **NOT** static.

## Conclusions

It seems `@astrojs/image`` does not behave according to hybrid mode expected behavior
