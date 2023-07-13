# astro-hybrid-static-issue

## What is the issue

-> https://github.com/withastro/astro/issues/7636

When using static mode, images loaded with @astrojs/image are processed statically.
When using hybrid mode with `prerender = true`, the expected behavior is the same as above although the actual behavior is to process the images at runtime.

## How to test

1. `npm run compare`
2. inspect the `./__static-build/index.html`` and notice the `src` of the `<img />`. it is static.
3. inspect the `./hybrid-build/client/index.html`` and notice the `src` of the `<img />`. it is **NOT** static.

## Conclusions

It seems `@astrojs/image` does not behave according to hybrid mode expected behavior
