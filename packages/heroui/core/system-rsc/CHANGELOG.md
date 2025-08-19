# @heroui/system-rsc

## 2.3.17

### Patch Changes

- [#5531](https://github.com/heroui-inc/heroui/pull/5531) [`2f414a8`](https://github.com/heroui-inc/heroui/commit/2f414a8926854d0c936584be2269fdb454a3c4ec) Thanks [@wingkwong](https://github.com/wingkwong)! - use outline-solid outline-transparent to perverse focus ring styles (#5530)

- [#5538](https://github.com/heroui-inc/heroui/pull/5538) [`139fc94`](https://github.com/heroui-inc/heroui/commit/139fc94e2ac0a4a112fdb18bb340994dc3656f70) Thanks [@wingkwong](https://github.com/wingkwong)! - bump tailwind-variants version

- [#5517](https://github.com/heroui-inc/heroui/pull/5517) [`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with RA release (July 22, 2025)

## 2.3.16

### Patch Changes

- [`e489af8`](https://github.com/heroui-inc/heroui/commit/e489af83c189d0b42dca1b0afca1f5d003cd6033) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - ## Consolidated Changes

  ### Major Update

  - TailwindCSS v4

  ### Bug Fixes & Improvements

  #### Theme & Styling

  - fix rotate transition (#5441)
  - fix incorrect target theme (#5469)
  - fixed missing radius styles in th and td in Table (#4988)
  - fixed transition (#5409)
  - fix text selection in table (#5413)
  - Fix transition scale (#5271)
  - fix outline styles (#5266)

  #### Components

  **Toast**

  - Renaming loadingIcon to loadingComponent
  - Fix toast items closing in reverse order. Toasts now close in proper FIFO instead of LIFO (#5096)
  - Remove the bottom extension of the toast (#5231)
  - Enable programmatically closing a toast with a specific key (#5084)

  **Slider**

  - introduce `getTooltipValue` prop for custom tooltip value (#4741)
  - fixed slider component NaN values when min and max are the same value (#5014)

  **Select**

  - add `isClearable` and `onClear` prop to Select component (#2239)

  **Calendar**

  - Replace rectangle intersection detection with center-point distance calculation to make the calendar picker more resilient when browser zoom is changed. The new approach finds the closest picker item to the highlight element's center, preventing mismatches between displayed and selected year / month. (#5117)

  **Input**

  - fix `Input` accessibility label duplication (#5150)

  **Date Input**

  - add 'outside-top' prop to input (#3058)

  **Table**

  - support custom sort icon in Table (#5223)
  - remove `removeWrapper` from virtualized table (#4995)

  **Autocomplete**

  - do not render selector button if selector icon is null (#5423)

  **Image & Avatar**

  - fixed image src double fetch issue (#3847)

  #### System & Core

  - add useInputLabelPlacement
  - remove `@heroui/aria-utils` dependency

  #### Hooks & Utilities

  - fix use-theme logic
  - Fix skeleton animate
  - bump RA versions
  - Draggable modal will be scrollable in mobile devices (#5280)
  - refactor: overlay & interactOutside

## 2.3.16-beta.5

### Patch Changes

- [#5466](https://github.com/heroui-inc/heroui/pull/5466) [`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32) Thanks [@wingkwong](https://github.com/wingkwong)! - add back RA deps (overlays & utils)

## 2.3.16-beta.4

### Patch Changes

- [`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8) Thanks [@wingkwong](https://github.com/wingkwong)! - trigger beta release

## 2.3.16-beta.3

### Patch Changes

- [`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0) Thanks [@wingkwong](https://github.com/wingkwong)! - sync 2.7.11 release

## 2.3.16-beta.2

### Patch Changes

- [#5401](https://github.com/heroui-inc/heroui/pull/5401) [`a2c4745`](https://github.com/heroui-inc/heroui/commit/a2c4745f078b2fe30890149d336b1a19a09d394d) Thanks [@wingkwong](https://github.com/wingkwong)! - remove `@heroui/aria-utils` dependency

## 2.3.16-beta.1

### Patch Changes

- [#5398](https://github.com/heroui-inc/heroui/pull/5398) [`9c3e4d9`](https://github.com/heroui-inc/heroui/commit/9c3e4d97377706162a5e3145a1429fdb2e5db3be) Thanks [@wingkwong](https://github.com/wingkwong)! - remove RA dependencies (overlays & utils)

## 2.3.16-beta.0

### Patch Changes

- [#5392](https://github.com/heroui-inc/heroui/pull/5392) [`0001ab7`](https://github.com/heroui-inc/heroui/commit/0001ab794bd83f141d82d91d205f8391f5d98d9b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5274](https://github.com/heroui-inc/heroui/pull/5274) [`a8ef824`](https://github.com/heroui-inc/heroui/commit/a8ef8241faf896ce980998e563d805fcf7132a7a) Thanks [@winchesHe](https://github.com/winchesHe)! - TailwindCSS v4

- [#5274](https://github.com/heroui-inc/heroui/pull/5274) [`a8ef824`](https://github.com/heroui-inc/heroui/commit/a8ef8241faf896ce980998e563d805fcf7132a7a) Thanks [@winchesHe](https://github.com/winchesHe)! - Fix skeleton animate

- Updated dependencies [[`0001ab7`](https://github.com/heroui-inc/heroui/commit/0001ab794bd83f141d82d91d205f8391f5d98d9b), [`2bf0a42`](https://github.com/heroui-inc/heroui/commit/2bf0a4243a4e02356477a8da2275dba4e299e55f), [`a8ef824`](https://github.com/heroui-inc/heroui/commit/a8ef8241faf896ce980998e563d805fcf7132a7a), [`851d411`](https://github.com/heroui-inc/heroui/commit/851d411ef90c7b1fdf504752ad81e0eb5e2edf4f), [`a8ef824`](https://github.com/heroui-inc/heroui/commit/a8ef8241faf896ce980998e563d805fcf7132a7a)]:
  - @heroui/theme@2.4.18-beta.0

## 2.3.15

### Patch Changes

- [#5361](https://github.com/heroui-inc/heroui/pull/5361) [`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - consistent type imports

## 2.3.14

### Patch Changes

- [#5310](https://github.com/heroui-inc/heroui/pull/5310) [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

## 2.3.13

### Patch Changes

- [`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - add default value for custom theme properties (#5194)

  v2.7.7

## 2.3.12

### Patch Changes

- [#5186](https://github.com/heroui-inc/heroui/pull/5186) [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump (#5186)

## 2.3.11

### Patch Changes

- [#4998](https://github.com/heroui-inc/heroui/pull/4998) [`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

## 2.3.10

### Patch Changes

- v2.7.4

## 2.3.9

### Patch Changes

- Fix v2.7.0 release

## 2.3.8

### Patch Changes

- Fix v2.7.0 release

## 2.3.7

### Patch Changes

- [`4ff87ca`](https://github.com/heroui-inc/heroui/commit/4ff87ca7afccd2c3db0b145156a8357b2b51e7b5) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.7.0
  - Tailwind variants upgraded to the latest version, classnames adjusted, tests fixed
  - Bump RA versions
  - Various package updates and improvements across the HeroUI component library
  - Fixed reversed navigation behavior of nextButton and prevButton in the RTL calendar (#4541)
  - Adding support for global labelPlacement prop (ENG-1694)
  - Avoid showing onClick deprecation warning for internal onClick (#4549, #4546)
  - Fixed unexpected scrollShadow on virtualized listbox (#4553)
  - Fix SelectItem, ListboxItem, and AutocompleteItem not to accept value props (#2283)
  - New Components and Features:
    - Introduce NumberInput component
    - Introduce Toast component (#2560)
  - Various improvements and bug fixes across components:
    - Enhanced accessibility features and ARIA support
    - Updated component styling and theme configurations
    - Performance optimizations and code cleanup
    - RTL support improvements
    - Better type safety and prop validation

## 2.3.6

### Patch Changes

- [#4594](https://github.com/heroui-inc/heroui/pull/4594) [`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Org name changed

## 2.3.5

### Patch Changes

- [#4291](https://github.com/heroui-inc/heroui/pull/4291) [`76a72a9`](https://github.com/heroui-inc/heroui/commit/76a72a9d1c8400d23b3f948670cb6844d9728b2a) Thanks [@shlyamster](https://github.com/shlyamster)! - Fix data type returned by the extendVariants function (#4269)

## 2.3.4

### Patch Changes

- [#4258](https://github.com/heroui-inc/heroui/pull/4258) [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

## 2.3.3

### Patch Changes

- [#4255](https://github.com/heroui-inc/heroui/pull/4255) [`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

## 2.3.2

### Patch Changes

- [#4247](https://github.com/heroui-inc/heroui/pull/4247) [`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

## 2.3.1

### Patch Changes

- [`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

## 2.3.0

### Minor Changes

- [`5786897`](https://github.com/heroui-inc/heroui/commit/5786897b9950d95c12351dacd2fb41bb1e298201) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - This release includes several improvements and bug fixes:

  - Updated react-aria version across all components
  - Improved Drawer styles and transitions
  - Fixed missing peer dependencies for framer-motion
  - Fixed menu item classNames functionality
  - Added isClearable prop to Textarea component
  - Fixed label placement issues in Input and Select components
  - Improved table keyboard navigation with new isKeyboardNavigationDisabled prop
  - Fixed UI sliding issues with helper wrapper in Input and Select
  - Updated use-image hook to avoid Next.js hydration issues
  - Replaced RTL-specific styles with logical properties
  - Fixed textarea label squish issue
  - Bumped tailwind-merge version
  - Applied tw nested group fixes
  - Fixed fullWidth variant in input and select components
  - Moved circular-progress tv to progress
  - Changed ListboxItem key to optional
  - Fixed autocomplete clear button behavior
  - Updated Select label placement logic
  - Added missing framer-motion peer dependencies
  - Removed layoutNode prop from Table due to react-aria update
  - Virtualization added to Autocomplete

## 2.2.0-beta.8

### Patch Changes

- [`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

## 2.2.0-beta.7

### Patch Changes

- [#3036](https://github.com/heroui-inc/heroui/pull/3036) [`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

## 2.2.0-beta.6

### Patch Changes

- [#4092](https://github.com/heroui-inc/heroui/pull/4092) [`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

## 2.2.0-beta.5

### Patch Changes

- [#4086](https://github.com/heroui-inc/heroui/pull/4086) [`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

## 2.2.0-beta.4

### Patch Changes

- [#4083](https://github.com/heroui-inc/heroui/pull/4083) [`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

## 2.2.0-beta.3

### Patch Changes

- [#4010](https://github.com/heroui-inc/heroui/pull/4010) [`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

## 2.2.0-beta.2

### Patch Changes

- [#4008](https://github.com/heroui-inc/heroui/pull/4008) [`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

## 2.2.0-beta.1

### Patch Changes

- [#3990](https://github.com/heroui-inc/heroui/pull/3990) [`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

## 2.2.0-beta.0

### Minor Changes

- [#3732](https://github.com/heroui-inc/heroui/pull/3732) [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

### Patch Changes

- Updated dependencies [[`0cf91395c`](https://github.com/heroui-inc/heroui/commit/0cf91395c7c66a69fb05c7fca4a30cbad9e1e0f8), [`781b85566`](https://github.com/heroui-inc/heroui/commit/781b85566ee5eac3f505625462c4f5f14e36ed3a), [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d), [`38a54ab49`](https://github.com/heroui-inc/heroui/commit/38a54ab497781e17799b37f0061ba50f2dc44e09), [`af3c4f706`](https://github.com/heroui-inc/heroui/commit/af3c4f706bb88eae02eee594a6db68cdd33bbe88), [`ae73de1a6`](https://github.com/heroui-inc/heroui/commit/ae73de1a61c26e78235ce2d4c38159d486b55d56), [`ad6393ab3`](https://github.com/heroui-inc/heroui/commit/ad6393ab33362119203455ef5c8ffbfe1ffa96a1), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`cb1b3135b`](https://github.com/heroui-inc/heroui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8), [`a5cac4561`](https://github.com/heroui-inc/heroui/commit/a5cac45619e529cf9850f02f416b6bc7cba77f3f), [`d90ad05b1`](https://github.com/heroui-inc/heroui/commit/d90ad05b13b36617009cb0e5f57f299aa7bb7bd0), [`a0d7141db`](https://github.com/heroui-inc/heroui/commit/a0d7141db314c6bea27df6b8beb15dae3b1bcb93), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`8a33eabb2`](https://github.com/heroui-inc/heroui/commit/8a33eabb2583202fcc8fbc33e8f2ed23bb45f1a4), [`559436d46`](https://github.com/heroui-inc/heroui/commit/559436d462bdb8739d8c817d1aa98607969d8a07)]:
  - @heroui/theme@2.3.0-beta.0

## 2.1.6

### Patch Changes

- [#3559](https://github.com/heroui-inc/heroui/pull/3559) [`44e89a077`](https://github.com/heroui-inc/heroui/commit/44e89a0779c1c98fe275c864fe12834d19302b9c) Thanks [@awesome-pro](https://github.com/awesome-pro)! - added missing `StringToBoolean<keyof V[K]>[]` (#3530)

## 2.1.5

### Patch Changes

- [#3512](https://github.com/heroui-inc/heroui/pull/3512) [`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

## 2.1.4

### Patch Changes

- [#3503](https://github.com/heroui-inc/heroui/pull/3503) [`5591138bf`](https://github.com/heroui-inc/heroui/commit/5591138bff4a393f614c4cb0d505901560c4ceea) Thanks [@wingkwong](https://github.com/wingkwong)! - handled defaultVariants null case in extendVariants (#3502)

## 2.1.3

### Patch Changes

- [#3336](https://github.com/heroui-inc/heroui/pull/3336) [`0cdfdb48b`](https://github.com/heroui-inc/heroui/commit/0cdfdb48bcb7eecb752fc6a3033d3bdd2335872b) Thanks [@winchesHe](https://github.com/winchesHe)! - Fix onSelectionChange type incorrect (#2512)

- [#3299](https://github.com/heroui-inc/heroui/pull/3299) [`f785d1fb0`](https://github.com/heroui-inc/heroui/commit/f785d1fb0460df73912bcd6614bc78d46db14e6b) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed `extendVariants` when having `defaultVariants` (#3009)

## 2.1.2

### Patch Changes

- [#2915](https://github.com/heroui-inc/heroui/pull/2915) [`e3afa4789`](https://github.com/heroui-inc/heroui/commit/e3afa4789a1ac0fa929b2acaca5bd9c520567ab8) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - The `cn` utility was moved the `theme` package and updated to support NextUI custom classes.

- [#3018](https://github.com/heroui-inc/heroui/pull/3018) [`1109baea6`](https://github.com/heroui-inc/heroui/commit/1109baea6ac6aa3feb2be90ef065f61b2c2a06a9) Thanks [@wingkwong](https://github.com/wingkwong)! - fix incorrect tailwind classnames

## 2.1.1

### Patch Changes

- [#2758](https://github.com/heroui-inc/heroui/pull/2758) [`74eda3128`](https://github.com/heroui-inc/heroui/commit/74eda312883b2e17df26f71442aba9fb3cd240be) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Named exports for rsc packages, "use client;" directive added to "@heroui/react" package

## 2.1.0

### Minor Changes

- [#2618](https://github.com/heroui-inc/heroui/pull/2618) [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.3.0

### Patch Changes

- [#2618](https://github.com/heroui-inc/heroui/pull/2618) [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - Calendar component added

  - objectToDeps function applied all across components
  - `useMeasure` hook added
  - `useIntersectionObserver` hook added
  - `framer-transitions` renamed to `framer-utils`
  - `ResizablePanel` component added to `framer-utils`
  - `test-utils` updated

- [#2522](https://github.com/heroui-inc/heroui/pull/2522) [`c5049edfd`](https://github.com/heroui-inc/heroui/commit/c5049edfde7edaee2081d70e581739be9dcae2f9) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed unexpected props on a DOM element (#2474)

## 2.0.11

### Patch Changes

- [#1936](https://github.com/heroui-inc/heroui/pull/1936) [`a978687b0`](https://github.com/heroui-inc/heroui/commit/a978687b0736d1e15943ef46628fc4fa0723ddc7) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix #1935 size prop added to the omitted HTMLNextUIProps

## 2.0.10

### Patch Changes

- [#1927](https://github.com/heroui-inc/heroui/pull/1927) [`6ecdc278a`](https://github.com/heroui-inc/heroui/commit/6ecdc278aba927ee38a799679b8eb99cba99cab9) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix #1921 `extendVariants` function adapted to consider props variants over `defaultVariants`.

## 2.0.9

### Patch Changes

- [#1877](https://github.com/heroui-inc/heroui/pull/1877) [`44ed1056e`](https://github.com/heroui-inc/heroui/commit/44ed1056e717c56633f60cf289f78e9c7b83b648) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated, changeset config changed to update peer dependencies only when out of range

## 2.0.8

### Patch Changes

- [#1874](https://github.com/heroui-inc/heroui/pull/1874) [`38af48faf`](https://github.com/heroui-inc/heroui/commit/38af48faf5b62d2f81f2402f3d83d78991eb46e0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Peer dependencies updated to avoid the peer conflicts issue.

## 2.0.7

### Patch Changes

- [`25e86fb41`](https://github.com/heroui-inc/heroui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New version v2.2.0

- Updated dependencies [[`25e86fb41`](https://github.com/heroui-inc/heroui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187)]:
  - @heroui/theme@2.1.10

## 2.0.6

### Patch Changes

- [#1642](https://github.com/heroui-inc/heroui/pull/1642) [`f6531c5f6`](https://github.com/heroui-inc/heroui/commit/f6531c5f603d7f6308a597962ec6fab62c92fa93) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix #1541 `extendVariants`function gives more priority to final component props over the `extendVariants` props

## 2.0.5

### Patch Changes

- [#1600](https://github.com/heroui-inc/heroui/pull/1600) [`b1b30b797`](https://github.com/heroui-inc/heroui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix npm deploy

## 2.0.4

### Patch Changes

- [#1555](https://github.com/heroui-inc/heroui/pull/1555) [`d61428d9e`](https://github.com/heroui-inc/heroui/commit/d61428d9e6c1c0590593fb1f0136e226051b7e23) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Tailwind variants upgraded to the latest version v0.1.14

## 2.0.3

### Patch Changes

- [`e3e13a09`](https://github.com/heroui-inc/heroui/commit/e3e13a095f2347ff279c85e6a5d3798f36c6533f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New package created to exports system RSC-compatible functions
  Component exports changed to named exports
