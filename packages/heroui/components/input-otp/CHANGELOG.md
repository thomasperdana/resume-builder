# @heroui/input-otp

## 2.1.24

### Patch Changes

- [#5517](https://github.com/heroui-inc/heroui/pull/5517) [`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with RA release (July 22, 2025)

- Updated dependencies [[`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b)]:
  - @heroui/form@2.1.24

## 2.1.23

### Patch Changes

- Updated dependencies []:
  - @heroui/form@2.1.23

## 2.1.22

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

- Updated dependencies [[`e489af8`](https://github.com/heroui-inc/heroui/commit/e489af83c189d0b42dca1b0afca1f5d003cd6033)]:
  - @heroui/shared-utils@2.1.10
  - @heroui/react-utils@2.1.12
  - @heroui/use-form-reset@2.0.1
  - @heroui/form@2.1.22

## 2.1.22-beta.4

### Patch Changes

- [#5466](https://github.com/heroui-inc/heroui/pull/5466) [`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32) Thanks [@wingkwong](https://github.com/wingkwong)! - add back RA deps (overlays & utils)

- Updated dependencies [[`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32)]:
  - @heroui/shared-utils@2.1.10-beta.7
  - @heroui/react-utils@2.1.12-beta.5
  - @heroui/form@2.1.22-beta.4

## 2.1.22-beta.3

### Patch Changes

- Updated dependencies []:
  - @heroui/form@2.1.22-beta.3

## 2.1.22-beta.2

### Patch Changes

- [`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8) Thanks [@wingkwong](https://github.com/wingkwong)! - trigger beta release

- Updated dependencies [[`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8)]:
  - @heroui/shared-utils@2.1.10-beta.6
  - @heroui/react-utils@2.1.12-beta.4
  - @heroui/use-form-reset@2.0.0-beta.3
  - @heroui/form@2.1.22-beta.2

## 2.1.22-beta.1

### Patch Changes

- Updated dependencies []:
  - @heroui/form@2.1.22-beta.1

## 2.1.22-beta.0

### Patch Changes

- [`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0) Thanks [@wingkwong](https://github.com/wingkwong)! - sync 2.7.11 release

- Updated dependencies [[`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0)]:
  - @heroui/shared-utils@2.1.10-beta.5
  - @heroui/react-utils@2.1.12-beta.3
  - @heroui/use-form-reset@2.0.0-beta.2
  - @heroui/form@2.1.22-beta.0
  - @heroui/system@2.4.19-beta.0

## 2.1.21

### Patch Changes

- [#5382](https://github.com/heroui-inc/heroui/pull/5382) [`7dff993`](https://github.com/heroui-inc/heroui/commit/7dff993e1d11e8f915d1e9c1201396e9b5b53dbf) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5374](https://github.com/heroui-inc/heroui/pull/5374) [`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed) Thanks [@wingkwong](https://github.com/wingkwong)! - bump system peer dependencies

- Updated dependencies [[`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed)]:
  - @heroui/form@2.1.21

## 2.1.20

### Patch Changes

- [#5361](https://github.com/heroui-inc/heroui/pull/5361) [`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5349](https://github.com/heroui-inc/heroui/pull/5349) [`ff4b1b2`](https://github.com/heroui-inc/heroui/commit/ff4b1b23936412fdb1c762434d673f7b6935ac51) Thanks [@anuj-kuralkar](https://github.com/anuj-kuralkar)! - fixed inconsistent isInvalid styling between Input, InputOtp and DateInput in faded variant (#5339)

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - consistent type imports

- Updated dependencies [[`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f), [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56), [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56)]:
  - @heroui/form@2.1.20
  - @heroui/react-utils@2.1.11

## 2.1.19

### Patch Changes

- [#5310](https://github.com/heroui-inc/heroui/pull/5310) [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- Updated dependencies [[`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88)]:
  - @heroui/form@2.1.19

## 2.1.18

### Patch Changes

- [`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - add default value for custom theme properties (#5194)

  v2.7.7

- Updated dependencies [[`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf)]:
  - @heroui/form@2.1.18
  - @heroui/react-utils@2.1.10
  - @heroui/shared-utils@2.1.9

## 2.1.17

### Patch Changes

- [#5186](https://github.com/heroui-inc/heroui/pull/5186) [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump (#5186)

- [#5179](https://github.com/heroui-inc/heroui/pull/5179) [`99a5bc2`](https://github.com/heroui-inc/heroui/commit/99a5bc2f4caa7d5468c629c30286935b5e5fa833) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed input-otp variants on segment background

- Updated dependencies [[`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e)]:
  - @heroui/shared-utils@2.1.8
  - @heroui/form@2.1.17
  - @heroui/react-utils@2.1.9

## 2.1.16

### Patch Changes

- [#5060](https://github.com/heroui-inc/heroui/pull/5060) [`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump

- Updated dependencies [[`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1)]:
  - @heroui/form@2.1.16

## 2.1.15

### Patch Changes

- [#4998](https://github.com/heroui-inc/heroui/pull/4998) [`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- Updated dependencies [[`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de)]:
  - @heroui/form@2.1.15

## 2.1.14

### Patch Changes

- v2.7.4

- Updated dependencies []:
  - @heroui/form@2.1.14
  - @heroui/react-utils@2.1.8
  - @heroui/shared-utils@2.1.7

## 2.1.13

### Patch Changes

- Updated dependencies []:
  - @heroui/form@2.1.13

## 2.1.12

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/shared-utils@2.1.6
  - @heroui/react-utils@2.1.7
  - @heroui/form@2.1.12

## 2.1.11

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/form@2.1.11
  - @heroui/react-utils@2.1.6
  - @heroui/shared-utils@2.1.5

## 2.1.10

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
- Updated dependencies [[`4ff87ca`](https://github.com/heroui-inc/heroui/commit/4ff87ca7afccd2c3db0b145156a8357b2b51e7b5)]:
  - @heroui/form@2.1.10
  - @heroui/react-utils@2.1.5
  - @heroui/shared-utils@2.1.4

## 2.1.9

### Patch Changes

- [#4594](https://github.com/heroui-inc/heroui/pull/4594) [`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Org name changed

- Updated dependencies [[`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e)]:
  - @heroui/shared-utils@2.1.3
  - @heroui/react-utils@2.1.4
  - @heroui/form@2.1.9

## 2.1.8

### Patch Changes

- Updated dependencies [[`e7ff673`](https://github.com/heroui-inc/heroui/commit/e7ff6730d7e891f1e9e3ca232b1faaebc5aedef2)]:
  - @heroui/react-utils@2.1.3
  - @heroui/form@2.1.8

## 2.1.7

### Patch Changes

- [#4411](https://github.com/heroui-inc/heroui/pull/4411) [`5f388fc`](https://github.com/heroui-inc/heroui/commit/5f388fc68c7db7f852432e73386686d919d44d31) Thanks [@macci001](https://github.com/macci001)! - Fix virtual keyboard to display the keys based on allowedKeys(#4408)

- [#4417](https://github.com/heroui-inc/heroui/pull/4417) [`93c9df1`](https://github.com/heroui-inc/heroui/commit/93c9df15d99cb7467927700f73b3a683f98f0ccf) Thanks [@Peterl561](https://github.com/Peterl561)! - fixed isRequired not showing error when validationBehavior=native is not explicitly set

- [#4338](https://github.com/heroui-inc/heroui/pull/4338) [`2f55ecb`](https://github.com/heroui-inc/heroui/commit/2f55ecb4b2e61fb9d9a91df9f4d7c1eff6b7b05e) Thanks [@macci001](https://github.com/macci001)! - Change ensures that the input value does not accept any disallowed characters when the value prop contains them (#4329)

- Updated dependencies [[`77206bc`](https://github.com/heroui-inc/heroui/commit/77206bc62596894d038b9715e40b361fec286c10), [`5f388fc`](https://github.com/heroui-inc/heroui/commit/5f388fc68c7db7f852432e73386686d919d44d31)]:
  - @heroui/shared-utils@2.1.2
  - @heroui/form@2.1.7
  - @heroui/react-utils@2.1.2

## 2.1.6

### Patch Changes

- [#4314](https://github.com/heroui-inc/heroui/pull/4314) [`5598806`](https://github.com/heroui-inc/heroui/commit/5598806216166dc9fff36cafd9112412486b747f) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies []:
  - @heroui/form@2.1.6

## 2.1.5

### Patch Changes

- [#4296](https://github.com/heroui-inc/heroui/pull/4296) [`1485eca`](https://github.com/heroui-inc/heroui/commit/1485eca48fce8a0acc42fe40590b828c1a90ff48) Thanks [@macci001](https://github.com/macci001)! - Fixing the autofocus functionality in input-otp component(#4250)

- Updated dependencies []:
  - @heroui/form@2.1.5

## 2.1.4

### Patch Changes

- [#4258](https://github.com/heroui-inc/heroui/pull/4258) [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

- Updated dependencies [[`b16291b`](https://github.com/heroui-inc/heroui/commit/b16291b2200229f0d0a9ea910e38f3f100f7931f), [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3)]:
  - @heroui/form@2.1.4

## 2.1.3

### Patch Changes

- [#4255](https://github.com/heroui-inc/heroui/pull/4255) [`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

- Updated dependencies [[`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050)]:
  - @heroui/form@2.1.3

## 2.1.2

### Patch Changes

- [#4247](https://github.com/heroui-inc/heroui/pull/4247) [`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

- Updated dependencies [[`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0)]:
  - @heroui/form@2.1.2

## 2.1.1

### Patch Changes

- [`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

- Updated dependencies [[`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af)]:
  - @heroui/form@2.1.1
  - @heroui/react-utils@2.1.1
  - @heroui/shared-utils@2.1.1

## 2.1.0

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

- Updated dependencies [[`26e478d`](https://github.com/heroui-inc/heroui/commit/26e478dd937dedcaf41110171d971a8a3cf2ff52), [`6c0213d`](https://github.com/heroui-inc/heroui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc), [`5786897`](https://github.com/heroui-inc/heroui/commit/5786897b9950d95c12351dacd2fb41bb1e298201)]:
  - @heroui/form@2.1.0
  - @heroui/react-utils@2.1.0
  - @heroui/shared-utils@2.1.0

## 2.0.1-beta.0

### Patch Changes

- [#4052](https://github.com/heroui-inc/heroui/pull/4052) [`1d5b2b6c1`](https://github.com/heroui-inc/heroui/commit/1d5b2b6c1f8672e7339a6f9dc66f0244d7bb2789) Thanks [@macci001](https://github.com/macci001)! - Adding new input-otp component.

- Updated dependencies [[`1d5b2b6c1`](https://github.com/heroui-inc/heroui/commit/1d5b2b6c1f8672e7339a6f9dc66f0244d7bb2789)]:
  - @heroui/theme@2.3.0-beta.17
