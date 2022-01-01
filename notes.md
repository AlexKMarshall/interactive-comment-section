set up storybook with next
make sure to use webpack 5, and install it as a dev dependency to force the correct version
allow relative paths to be used by setting up `tsconfig-paths-webpack-plugin`
install vanilla extract
install vanilla extract webpack plugin and `mini-css-extract-plugin`
add these to the storybook webpack config. This caused a bunch of build errors, so maybe go one
step at a time to make sure each is working

install jest and testing library etc
make sure to exclude stories from test coverage

building stores you can set up the default props
spread those default props onto other stories, and then change the values as needed
in the story meta -> argTypes -> for a particular argument you can set an object with options if it's a finite array value. That way it will become a dropdown in story book and allow for easier manipulation

set up chromatic. If you publish to chromatic on build it will take a visual snapshot of every story and diff them on each PR.

using `composeStories` from `@storybook/testing-react` you can bundle together each story with its props/decorators etc as its own component. Then in a testing library interaction test you can render that story rather than the raw component and having to set up the props twice etc. You can override any props you need

On CI we can set up install caching so we can have separate steps (e.g. visual tests, interaction tests, e2e tests) that run in parallel, and show up on the PR as separate checkmarks. But we only install once.

Jest Axe can be used to pass the rendered component output to its function to test for simple accessibility violations. To do that need to extend expect in the jest config:

```
import { toHaveNoViolations } from 'jest-axe'
expect.extend(toHaveNoViolations)
```

Can also add the `@storybook/addon-a11y` plugin. This gives a little tab in the storybook control panel that
shows any accessibility violations like low contrast etc. It's easy to then tab through them. Not sure if any violations get picked up in chromatic or not

use the addon `storybook-addon-pseudo-states` to make stories that display hover/focus etc. Can use this to generate the snapshots in chromatic

## backend

install prisma, set up schema
install nexus and apollo server micro etc. There are currently some type issues as nexus doesn't support graphql 16 so pin it at ^15.8.0
Installing genql to do the querying on the frontend. the genql cli has a dependency on graphql@\* so this always instlals latest version. That then conflicts with 15.8.0, so we have to use a yarn resolution to downgrade the one genql uses
