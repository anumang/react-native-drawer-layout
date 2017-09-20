## Description
  Overlay z-index problem fixed for WPF applications. Overlay feature is removed for WPF.

## Restrictions
- Currently, there is no support for setting the status bar color in iOS. If you know any workaround, we would be glad to see an idea or a PR.
- The overlay to close the drawer has a `zIndex` of 1000 so setting a higher `zIndex` somewhere else may lead to inconsistencies.

