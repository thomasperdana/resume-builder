# @heroui/use-aria-multiselect

## 2.4.17

### Patch Changes

- [#5517](https://github.com/heroui-inc/heroui/pull/5517) [`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with RA release (July 22, 2025)

## 2.4.16

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

## 2.4.16-beta.2

### Patch Changes

- [#5466](https://github.com/heroui-inc/heroui/pull/5466) [`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32) Thanks [@wingkwong](https://github.com/wingkwong)! - add back RA deps (overlays & utils)

## 2.4.16-beta.1

### Patch Changes

- [`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8) Thanks [@wingkwong](https://github.com/wingkwong)! - trigger beta release

## 2.4.16-beta.0

### Patch Changes

- [`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0) Thanks [@wingkwong](https://github.com/wingkwong)! - sync 2.7.11 release

## 2.4.15

### Patch Changes

- [#5382](https://github.com/heroui-inc/heroui/pull/5382) [`7dff993`](https://github.com/heroui-inc/heroui/commit/7dff993e1d11e8f915d1e9c1201396e9b5b53dbf) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

## 2.4.14

### Patch Changes

- [#5361](https://github.com/heroui-inc/heroui/pull/5361) [`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - consistent type imports

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - remove unused dependencies

## 2.4.13

### Patch Changes

- [#5310](https://github.com/heroui-inc/heroui/pull/5310) [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

## 2.4.12

### Patch Changes

- [`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - add default value for custom theme properties (#5194)

  v2.7.7

## 2.4.11

### Patch Changes

- [#5186](https://github.com/heroui-inc/heroui/pull/5186) [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump (#5186)

## 2.4.10

### Patch Changes

- [#5060](https://github.com/heroui-inc/heroui/pull/5060) [`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump

## 2.4.9

### Patch Changes

- [#4998](https://github.com/heroui-inc/heroui/pull/4998) [`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

## 2.4.8

### Patch Changes

- v2.7.4

## 2.4.7

### Patch Changes

- Fix v2.7.0 release

## 2.4.6

### Patch Changes

- Fix v2.7.0 release

## 2.4.5

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

## 2.4.4

### Patch Changes

- [#4594](https://github.com/heroui-inc/heroui/pull/4594) [`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Org name changed

## 2.4.3

### Patch Changes

- [#4427](https://github.com/heroui-inc/heroui/pull/4427) [`f7e1b17`](https://github.com/heroui-inc/heroui/commit/f7e1b17c40f448670cc6feda6c6c90d1195ac724) Thanks [@Peterl561](https://github.com/Peterl561)! - fixed validationBehavior=native showing browser ui error for select component (#3913)
  fixed select not committing error message when validationBehavior=native

## 2.4.2

### Patch Changes

- [#4258](https://github.com/heroui-inc/heroui/pull/4258) [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

## 2.4.1

### Patch Changes

- [`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

## 2.4.0

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

### Patch Changes

- [#4224](https://github.com/heroui-inc/heroui/pull/4224) [`26e478d`](https://github.com/heroui-inc/heroui/commit/26e478dd937dedcaf41110171d971a8a3cf2ff52) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Added form support to input-otp, change default validationBehavior to "native" to avoid breaking changes, and fix select with form

- [#4226](https://github.com/heroui-inc/heroui/pull/4226) [`6c0213d`](https://github.com/heroui-inc/heroui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version (#4212)

- [#4219](https://github.com/heroui-inc/heroui/pull/4219) [`1855ba4`](https://github.com/heroui-inc/heroui/commit/1855ba4390186f701c793f76593f31a5dce6da70) Thanks [@Peterl561](https://github.com/Peterl561)! - add hideEmptyContent API to select

## 2.3.0-beta.8

### Patch Changes

- [`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

## 2.3.0-beta.7

### Patch Changes

- [#3036](https://github.com/heroui-inc/heroui/pull/3036) [`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

## 2.3.0-beta.6

### Patch Changes

- [#4092](https://github.com/heroui-inc/heroui/pull/4092) [`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

## 2.3.0-beta.5

### Patch Changes

- [#4086](https://github.com/heroui-inc/heroui/pull/4086) [`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

## 2.3.0-beta.4

### Patch Changes

- [#4083](https://github.com/heroui-inc/heroui/pull/4083) [`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

## 2.3.0-beta.3

### Patch Changes

- [#4010](https://github.com/heroui-inc/heroui/pull/4010) [`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

## 2.3.0-beta.2

### Patch Changes

- [#4008](https://github.com/heroui-inc/heroui/pull/4008) [`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

## 2.3.0-beta.1

### Patch Changes

- [#3990](https://github.com/heroui-inc/heroui/pull/3990) [`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

## 2.3.0-beta.0

### Minor Changes

- [#3732](https://github.com/heroui-inc/heroui/pull/3732) [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

## 2.2.5

### Patch Changes

- [#3759](https://github.com/heroui-inc/heroui/pull/3759) [`229388422`](https://github.com/heroui-inc/heroui/commit/2293884229541e363b1983fea88ba6e3bee6be14) Thanks [@wingkwong](https://github.com/wingkwong)! - rollback pr3467. rescheduled to v2.5.0.

## 2.2.4

### Patch Changes

- [#3467](https://github.com/heroui-inc/heroui/pull/3467) [`123b7fbc9`](https://github.com/heroui-inc/heroui/commit/123b7fbc9fb51613d7568572a00982ad230d02ae) Thanks [@chirokas](https://github.com/chirokas)! - Refactor overlays to reduce its complexity, while improving stability.

## 2.2.3

### Patch Changes

- [#3512](https://github.com/heroui-inc/heroui/pull/3512) [`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

## 2.2.2

### Patch Changes

- [#3240](https://github.com/heroui-inc/heroui/pull/3240) [`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump react-aria dependencies

## 2.2.1

### Patch Changes

- [#3119](https://github.com/heroui-inc/heroui/pull/3119) [`685995a12`](https://github.com/heroui-inc/heroui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version to `3.24.1` and bump `@react-types/shared` to `3.23.1`

## 2.2.0

### Minor Changes

- [#2987](https://github.com/heroui-inc/heroui/pull/2987) [`540aa2124`](https://github.com/heroui-inc/heroui/commit/540aa2124b45b65a40e73f5aea2b90405fe1fe9a) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Change validationBehavior from native to aria by default, with the option to change via props.

### Patch Changes

- [#2953](https://github.com/heroui-inc/heroui/pull/2953) [`c8f792ccd`](https://github.com/heroui-inc/heroui/commit/c8f792ccd78a80000e6f5b15e6f22cac947fd531) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Fix update type definition to prevent primitive values as items (#2938)

- [#2937](https://github.com/heroui-inc/heroui/pull/2937) [`a2133009f`](https://github.com/heroui-inc/heroui/commit/a2133009f73aa728a0e5deeb9b742aa1defd4de2) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Fix onSelectionChange can handle number (#2926)

## 2.1.5

### Patch Changes

- [#2618](https://github.com/heroui-inc/heroui/pull/2618) [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.3.0

- [#2618](https://github.com/heroui-inc/heroui/pull/2618) [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - - Calendar component added

  - objectToDeps function applied all across components
  - `useMeasure` hook added
  - `useIntersectionObserver` hook added
  - `framer-transitions` renamed to `framer-utils`
  - `ResizablePanel` component added to `framer-utils`
  - `test-utils` updated

- [#2589](https://github.com/heroui-inc/heroui/pull/2589) [`a60c2d7b2`](https://github.com/heroui-inc/heroui/commit/a60c2d7b22b3335084b4a846f9d39f00751e8c24) Thanks [@wingkwong](https://github.com/wingkwong)! - Handle numeric selectedKeys in Select

- [#2648](https://github.com/heroui-inc/heroui/pull/2648) [`abf532b54`](https://github.com/heroui-inc/heroui/commit/abf532b548235689fb37a3e79f07776ff52f6caf) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed an issue where a warning was triggered in the Select component when `defaultSelectedKeys` were used and items were still loading (#2605).

## 2.1.4

### Patch Changes

- [#2377](https://github.com/heroui-inc/heroui/pull/2377) [`d8b0ef528`](https://github.com/heroui-inc/heroui/commit/d8b0ef528b341b25c2032fdc4530956d1d15a5ba) Thanks [@sudongyuer](https://github.com/sudongyuer)! - fix won't display warning when placeholder (#2346)

## 2.1.3

### Patch Changes

- [`25e86fb41`](https://github.com/heroui-inc/heroui/commit/25e86fb41770d3cdae6dfdb79306b78fa02d8187) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New version v2.2.0

## 2.1.2

### Patch Changes

- [`8b3998909`](https://github.com/heroui-inc/heroui/commit/8b39989090d9cd577e886edde01b081d37e65bb7) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Exported types fixed

- [#1600](https://github.com/heroui-inc/heroui/pull/1600) [`b1b30b797`](https://github.com/heroui-inc/heroui/commit/b1b30b7976f1d6652808fbf12ffde044f0861572) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix npm deploy

## 2.1.1

### Patch Changes

- [#1589](https://github.com/heroui-inc/heroui/pull/1589) [`1612532ee`](https://github.com/heroui-inc/heroui/commit/1612532eeeabbc49165546b1a2e7aebf89e7a1c2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React aria packages upgraded

## 2.1.0

### Minor Changes

- [#1313](https://github.com/heroui-inc/heroui/pull/1313) [`baec5502`](https://github.com/heroui-inc/heroui/commit/baec55029de7f17ba84d3e6c8c98358fd1f2695e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - New components:

  - Select
  - Listbox
  - ScrollShadow
