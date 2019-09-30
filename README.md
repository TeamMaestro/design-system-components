<p align="center">
    <img width="150px" src="https://user-images.githubusercontent.com/13732623/63229908-7d8a8100-c1d3-11e9-955e-31aff33d07e1.png">
</p>

# Design System Components

A collection of curated web components to streamline documenting your design systems. Our components are built by developers for developers; to reduce repetitive interactions (such as looking up color codes).

### Live Design System

Preview the list of existing design system components at your disposal for documentation.

[Design System Components (Design System)](https://upbeat-bhaskara-2c6a30.netlify.com)

## Getting Started

Please note that @teamhive/design-system-components is in **active development**. This is public for community feedback.

#### 1. Install the design system web components into your application.

`npm i @teamhive/design-system-components`

#### 2. Initialize the web component loader

In this example are integrating into StoryBook. We are applying this sample in `config.js` in the `configure` callback.

```
require('@teamhive/design-system-components/dist/cjs/loader.cjs').defineCustomElements(window);
```

#### 3. Start using `sb-` components.

All web components are prefixed with `sb-` to help separate storybook documentation components away from the rest of your custom components. Look at any available stories in the live design system for examples on getting started.

### Contributors

[<img alt="Sean Perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=4&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
