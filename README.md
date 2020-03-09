
react-animated-routes
=====================

This repository is a playground for trying to get dynamically animated routes
(ie: animation changes based on which routes we are going to/from) with
react-router and code-split files working.  There seems to be a combination of
several bits and pieces needed to get it to behave nicely, so this is my attempt
at it.

I've been fairly successful and have managed to implement it in some UIs during
my time at Xero.  I'm going to try create some standalone packages to share so
that I (or others out there) don't need to try go through this pain again 😬

Node modules built as a result of this proof-of-concept:

### [react-dynamic-router](https://github.com/ultraq/react-dynamic-router)

The main component responsible for putting the right CSS class on the component
being transitioned to.

### [react-async-component](https://github.com/ultraq/react-async-component)

General purpose component for loading other components asynchronously.

### [react-async-transition-component](https://github.com/ultraq/react-async-transition-component)

Specialist component for loading other components asynchronously with an
animated transition, holding out on performing said transition until the target
component is available.
