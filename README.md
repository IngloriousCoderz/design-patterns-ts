# Design Patterns - TypeScript edition

This repo works as reference code for a workshop I do about design patterns. Slides are [here](https://docs.google.com/presentation/d/1pEjJbZNEWTDUMcBf0Ewgsdi5Pp81OL0vUBmc5ClitBI/).

The main concepts described are:

1. Inheritance is overrated;
2. Composition, if done wrong, is even worse than inheritance;
3. Inversion of control, especially through the Decorator or Proxy pattern, is probably the best way to do composition;
4. The Observer pattern decouples objects nicely, especially in an MVC context.

The three projects listed are the following:

## Mario

The first case study, shown on slide no. 24. We can implement the different kinds of Mario and the transition between them in at least four different ways: some of them look more convenient than others.

## Calculator

A smaller example, usually given as homework, which shows the slight difference between State and Strategy, and Decorator and Proxy, respectively.

## MVC

The second case study, shown on slide no. 32. It features the Observer Pattern, The MVVM pattern (in which the ViewModel knows both Model and View), and the MVC pattern which uses Observer to let the Model update the View. A Model becomes Observable using the four different ways discussed in the previous examples.

# Installation

Type

```
npm install
```

to install all required packages.

# Usage

Type

```
npm test
```

to run all tests.
