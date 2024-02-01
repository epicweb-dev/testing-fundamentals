<div>
  <h1 align="center">Testing Fundamentals</h1>
  <strong>
    Learn the fundamentals of automated testing in JavaScript.
  </strong>
  <p>
    In this workshop, we will build our own version of <a href="https://vitest.dev/">Vitest</a> and learn the essential mental models and best practices behind any automated test.
  </p>
</div>

<hr />

<!-- prettier-ignore-start -->
<!-- [![Build Status][build-badge]][build] -->
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

You don't have to have any prior experience with automated testing to complete
this workshop. Having a **basic experience with JavaScript**, however, is
required as we won't be covering things like objects, functions, imports/exports
as a part of this workshop.

## Pre-workshop Resources

Feel free to go through the additional resources below before, during, or after
the workshop. They are here to set you on the right track of thinking about
automated testing, as well as expand on the concepts and practices we will be
covering during the workshop.

- [**The True Purpose of Testing**](https://www.epicweb.dev/the-true-purpose-of-testing)
- [Anatomy of a Test](https://www.epicweb.dev/anatomy-of-a-test)
- [The Golden Rule of Assertions](https://www.epicweb.dev/the-golden-rule-of-assertions)

## System Requirements

- [git][git] v2.18 or greater;
- [NodeJS][node] v20 or greater;
- [npm](https://www.npmjs.com/) v8 or greater.

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

Follow these steps to get this set up:

```sh nonumber
git clone --depth 1 https://github.com/epicweb-dev/testing-fundamentals.git
cd testing-fundamentals
npm run setup
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

## Exercises

You will find all the exercises in the `exercises` directory. You will be
progressing through the workshop in the workshop app (more on that below) and
working on every exercise in your code editor of choice.

Note that the purpose of the exercise is **not** to skim through it and
continue. In every exercise, you will get a real-world problem and _you_ will be
tasked with fixing it. There will be plenty of information and hints to assist
you on your path but it is by tackling the problems head-on what will make those
learnings stick.

## Running the App

To get the app up and running, run:

```sh
npm start
```

Open the address printed in the terminal in the browser, and you're good to go!

## The Workshop App

Learn all about the workshop app on the
[Epic Web Getting Started Guide](https://www.epicweb.dev/get-started).

[![Kent with the workshop app in the background](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/280407082-0e012138-e01d-45d5-abf2-86ffe5d03c69.png)](https://www.epicweb.dev/get-started)

<!-- prettier-ignore-start -->
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/testing-fundamentals/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/testing-fundamentals/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/testing-fundamentals/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/testing-fundamentals/issues/new
<!-- prettier-ignore-end -->
