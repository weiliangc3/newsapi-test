# Newsapi Test

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses the news api to achieve a bunch of things.

## Getting Started

Create a file `.env.local` with the api key. An example has been provided in `.env.local-example`.

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Bootstrapped ✅
- See the latest news ❌
- Ability to filter by keywords (see everything endpoint api) ✅
- If the user clicks on a news item it will navigate to a page displaying the full news article selected. ❌
- Has tests (Interaction/e2e?) ✅

## Notes

I took some time bootstrapping this because I need to do this at some point for myself anyway. My other project doesn't use next, nor jest - so I'm going to fork this repo for myself to use as a springboard. (See [here](https://github.com/weiliangc3/nextjs-typescript-tooled)).

## Regarding tests

It takes too long to make production tier tests for all components for an exercise like this. For demonstration, I've added basic tests demonstrating routing and just sanity checks for pages at `__test__/pages`, a test for the api at `__test__/api`, and tests for a component under `components/atoms/Counter`. Tooling for cypress e2e testing may want to live in another repo, since the dependent api (in this case, newsapi) may want to trigger the cypress tests as well.

## Regarding styling

For demonstration I put time into the card and its parent component. The rest of the pages are very basic.

## Regarding api location

Location of API is defaulted to localhost:3000 (dev). Ideally should be an env variable, but for purposes of this exercise, is just local.
