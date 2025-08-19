# @heroui/date-picker

## 2.3.25

### Patch Changes

- [#5517](https://github.com/heroui-inc/heroui/pull/5517) [`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with RA release (July 22, 2025)

- Updated dependencies [[`36eb421`](https://github.com/heroui-inc/heroui/commit/36eb421c66846d4fe6fb102c662ff6bf6149249b), [`5eb6868`](https://github.com/heroui-inc/heroui/commit/5eb686843bd277a33586a6ea9a11d240080e2c9d)]:
  - @heroui/date-input@2.3.24
  - @heroui/aria-utils@2.2.21
  - @heroui/calendar@2.2.24
  - @heroui/popover@2.3.24
  - @heroui/button@2.2.24
  - @heroui/form@2.1.24

## 2.3.24

### Patch Changes

- Updated dependencies []:
  - @heroui/button@2.2.23
  - @heroui/calendar@2.2.23
  - @heroui/date-input@2.3.23
  - @heroui/form@2.1.23
  - @heroui/popover@2.3.23

## 2.3.23

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
  - @heroui/shared-icons@2.1.10
  - @heroui/shared-utils@2.1.10
  - @heroui/date-input@2.3.22
  - @heroui/react-utils@2.1.12
  - @heroui/aria-utils@2.2.20
  - @heroui/calendar@2.2.23
  - @heroui/popover@2.3.23
  - @heroui/button@2.2.23
  - @heroui/form@2.1.22

## 2.3.23-beta.4

### Patch Changes

- [#5466](https://github.com/heroui-inc/heroui/pull/5466) [`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32) Thanks [@wingkwong](https://github.com/wingkwong)! - add back RA deps (overlays & utils)

- Updated dependencies [[`87f8a12`](https://github.com/heroui-inc/heroui/commit/87f8a12c279e06cab23d0b60ae35c96ee6d29f32)]:
  - @heroui/shared-icons@2.1.10-beta.6
  - @heroui/shared-utils@2.1.10-beta.7
  - @heroui/date-input@2.3.22-beta.4
  - @heroui/react-utils@2.1.12-beta.5
  - @heroui/aria-utils@2.2.20-beta.2
  - @heroui/calendar@2.2.23-beta.3
  - @heroui/popover@2.3.23-beta.2
  - @heroui/button@2.2.23-beta.2
  - @heroui/form@2.1.22-beta.4

## 2.3.23-beta.3

### Patch Changes

- Updated dependencies []:
  - @heroui/button@2.2.23-beta.1
  - @heroui/calendar@2.2.23-beta.2
  - @heroui/date-input@2.3.22-beta.3
  - @heroui/form@2.1.22-beta.3
  - @heroui/popover@2.3.23-beta.1

## 2.3.23-beta.2

### Patch Changes

- [`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8) Thanks [@wingkwong](https://github.com/wingkwong)! - trigger beta release

- Updated dependencies [[`3275e8c`](https://github.com/heroui-inc/heroui/commit/3275e8ca01e65a207e6a431dd40b949a22c1f1f8)]:
  - @heroui/shared-icons@2.1.10-beta.5
  - @heroui/shared-utils@2.1.10-beta.6
  - @heroui/date-input@2.3.22-beta.2
  - @heroui/react-utils@2.1.12-beta.4
  - @heroui/aria-utils@2.2.20-beta.1
  - @heroui/calendar@2.2.23-beta.2
  - @heroui/popover@2.3.23-beta.1
  - @heroui/button@2.2.23-beta.1
  - @heroui/form@2.1.22-beta.2

## 2.3.23-beta.1

### Patch Changes

- Updated dependencies [[`e3c2795`](https://github.com/heroui-inc/heroui/commit/e3c279514c289d1962dee9ef2055e3a88aa4f245), [`a95feca`](https://github.com/heroui-inc/heroui/commit/a95feca4586ca0a61e13ad03c16fab112160a02b)]:
  - @heroui/calendar@2.2.23-beta.1
  - @heroui/shared-icons@2.1.10-beta.4
  - @heroui/button@2.2.23-beta.0
  - @heroui/date-input@2.3.22-beta.1
  - @heroui/form@2.1.22-beta.1
  - @heroui/popover@2.3.23-beta.0

## 2.3.23-beta.0

### Patch Changes

- [`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0) Thanks [@wingkwong](https://github.com/wingkwong)! - sync 2.7.11 release

- Updated dependencies [[`1bca3f9`](https://github.com/heroui-inc/heroui/commit/1bca3f994655081f04714843047185aacdd481c0)]:
  - @heroui/shared-icons@2.1.10-beta.3
  - @heroui/shared-utils@2.1.10-beta.5
  - @heroui/date-input@2.3.22-beta.0
  - @heroui/react-utils@2.1.12-beta.3
  - @heroui/aria-utils@2.2.20-beta.0
  - @heroui/calendar@2.2.23-beta.0
  - @heroui/popover@2.3.23-beta.0
  - @heroui/button@2.2.23-beta.0
  - @heroui/form@2.1.22-beta.0
  - @heroui/system@2.4.19-beta.0

## 2.3.22

### Patch Changes

- [#5382](https://github.com/heroui-inc/heroui/pull/5382) [`7dff993`](https://github.com/heroui-inc/heroui/commit/7dff993e1d11e8f915d1e9c1201396e9b5b53dbf) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5374](https://github.com/heroui-inc/heroui/pull/5374) [`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed) Thanks [@wingkwong](https://github.com/wingkwong)! - bump system peer dependencies

- Updated dependencies [[`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed), [`7dff993`](https://github.com/heroui-inc/heroui/commit/7dff993e1d11e8f915d1e9c1201396e9b5b53dbf), [`be6a1db`](https://github.com/heroui-inc/heroui/commit/be6a1dbf40507af164ebdbe085eda6cceb98aeed)]:
  - @heroui/date-input@2.3.21
  - @heroui/calendar@2.2.22
  - @heroui/popover@2.3.22
  - @heroui/button@2.2.22
  - @heroui/form@2.1.21
  - @heroui/aria-utils@2.2.19

## 2.3.21

### Patch Changes

- [#5361](https://github.com/heroui-inc/heroui/pull/5361) [`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - consistent type imports

- [#5362](https://github.com/heroui-inc/heroui/pull/5362) [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56) Thanks [@wingkwong](https://github.com/wingkwong)! - remove unused dependencies

- Updated dependencies [[`1e23994`](https://github.com/heroui-inc/heroui/commit/1e2399434578827987aedc8ff3cc9cf6ccc99c5f), [`ff4b1b2`](https://github.com/heroui-inc/heroui/commit/ff4b1b23936412fdb1c762434d673f7b6935ac51), [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56), [`0d217e4`](https://github.com/heroui-inc/heroui/commit/0d217e466f3af30c85edc7d53638e031c8458c56)]:
  - @heroui/date-input@2.3.20
  - @heroui/aria-utils@2.2.18
  - @heroui/calendar@2.2.21
  - @heroui/popover@2.3.21
  - @heroui/button@2.2.21
  - @heroui/form@2.1.20
  - @heroui/shared-icons@2.1.9
  - @heroui/react-utils@2.1.11

## 2.3.20

### Patch Changes

- [#5317](https://github.com/heroui-inc/heroui/pull/5317) [`d40c744`](https://github.com/heroui-inc/heroui/commit/d40c744f46f14c2212bd4c9ba116bb866c368426) Thanks [@Vishvsalvi](https://github.com/Vishvsalvi)! - fix date-range-picker error state (#5309)

- [#5310](https://github.com/heroui-inc/heroui/pull/5310) [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- [#5287](https://github.com/heroui-inc/heroui/pull/5287) [`06fe3a3`](https://github.com/heroui-inc/heroui/commit/06fe3a3c4e7f2fdfb5fcbb2255c907280c892de9) Thanks [@wingkwong](https://github.com/wingkwong)! - bump framer-motion version

- Updated dependencies [[`8df9716`](https://github.com/heroui-inc/heroui/commit/8df9716dfa29926237682b73df59e8018843e9c0), [`1d62208`](https://github.com/heroui-inc/heroui/commit/1d62208642d06f7896724b2702ecb5a17931eb88), [`06fe3a3`](https://github.com/heroui-inc/heroui/commit/06fe3a3c4e7f2fdfb5fcbb2255c907280c892de9)]:
  - @heroui/shared-icons@2.1.8
  - @heroui/date-input@2.3.19
  - @heroui/aria-utils@2.2.17
  - @heroui/calendar@2.2.20
  - @heroui/popover@2.3.20
  - @heroui/button@2.2.20
  - @heroui/form@2.1.19

## 2.3.19

### Patch Changes

- [`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - add default value for custom theme properties (#5194)

  v2.7.7

- Updated dependencies [[`b9e94a2`](https://github.com/heroui-inc/heroui/commit/b9e94a21518ba18447603680055c3a7dad8372bf)]:
  - @heroui/button@2.2.19
  - @heroui/calendar@2.2.19
  - @heroui/date-input@2.3.18
  - @heroui/form@2.1.18
  - @heroui/popover@2.3.19
  - @heroui/aria-utils@2.2.16
  - @heroui/react-utils@2.1.10
  - @heroui/shared-icons@2.1.7
  - @heroui/shared-utils@2.1.9

## 2.3.18

### Patch Changes

- [#5186](https://github.com/heroui-inc/heroui/pull/5186) [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump (#5186)

- Updated dependencies [[`53295ca`](https://github.com/heroui-inc/heroui/commit/53295ca9dc7a1310485e1574fd28110b6cbf5ebd), [`500ed77`](https://github.com/heroui-inc/heroui/commit/500ed771e25b08038fdc0d9401bfac31a2d68c3e)]:
  - @heroui/button@2.2.18
  - @heroui/shared-utils@2.1.8
  - @heroui/date-input@2.3.17
  - @heroui/aria-utils@2.2.15
  - @heroui/calendar@2.2.18
  - @heroui/popover@2.3.18
  - @heroui/form@2.1.17
  - @heroui/react-utils@2.1.9

## 2.3.17

### Patch Changes

- [#5060](https://github.com/heroui-inc/heroui/pull/5060) [`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1) Thanks [@wingkwong](https://github.com/wingkwong)! - RA version bump

- Updated dependencies [[`3944e1a`](https://github.com/heroui-inc/heroui/commit/3944e1af4ad58e45e49c4f54c3562474092505b1), [`9247f74`](https://github.com/heroui-inc/heroui/commit/9247f7423334b8db4194f31488119efddc28961f)]:
  - @heroui/date-input@2.3.16
  - @heroui/aria-utils@2.2.14
  - @heroui/calendar@2.2.17
  - @heroui/popover@2.3.17
  - @heroui/button@2.2.17
  - @heroui/form@2.1.16

## 2.3.16

### Patch Changes

- [#4998](https://github.com/heroui-inc/heroui/pull/4998) [`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de) Thanks [@wingkwong](https://github.com/wingkwong)! - bump RA versions

- Updated dependencies [[`88f1641`](https://github.com/heroui-inc/heroui/commit/88f164116c2be75cd2de0a076f5ba0942a43e3de)]:
  - @heroui/date-input@2.3.15
  - @heroui/aria-utils@2.2.13
  - @heroui/calendar@2.2.16
  - @heroui/popover@2.3.16
  - @heroui/button@2.2.16
  - @heroui/form@2.1.15

## 2.3.15

### Patch Changes

- v2.7.4

- Updated dependencies []:
  - @heroui/button@2.2.15
  - @heroui/calendar@2.2.15
  - @heroui/date-input@2.3.14
  - @heroui/form@2.1.14
  - @heroui/popover@2.3.15
  - @heroui/aria-utils@2.2.12
  - @heroui/react-utils@2.1.8
  - @heroui/shared-icons@2.1.6
  - @heroui/shared-utils@2.1.7

## 2.3.14

### Patch Changes

- [#4901](https://github.com/heroui-inc/heroui/pull/4901) [`09a2b73`](https://github.com/heroui-inc/heroui/commit/09a2b7387056e176417404dbf7edb4cfb8c880a9) Thanks [@wingkwong](https://github.com/wingkwong)! - update peerDependencies (#4901)

- Updated dependencies [[`09a2b73`](https://github.com/heroui-inc/heroui/commit/09a2b7387056e176417404dbf7edb4cfb8c880a9)]:
  - @heroui/date-input@2.3.13
  - @heroui/button@2.2.14
  - @heroui/popover@2.3.14
  - @heroui/calendar@2.2.14
  - @heroui/form@2.1.13

## 2.3.13

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/shared-icons@2.1.5
  - @heroui/shared-utils@2.1.6
  - @heroui/date-input@2.3.12
  - @heroui/react-utils@2.1.7
  - @heroui/aria-utils@2.2.11
  - @heroui/calendar@2.2.13
  - @heroui/popover@2.3.13
  - @heroui/button@2.2.13
  - @heroui/form@2.1.12

## 2.3.12

### Patch Changes

- Fix v2.7.0 release

- Updated dependencies []:
  - @heroui/button@2.2.12
  - @heroui/calendar@2.2.12
  - @heroui/date-input@2.3.11
  - @heroui/form@2.1.11
  - @heroui/popover@2.3.12
  - @heroui/aria-utils@2.2.10
  - @heroui/react-utils@2.1.6
  - @heroui/shared-icons@2.1.4
  - @heroui/shared-utils@2.1.5

## 2.3.11

### Patch Changes

- [#4852](https://github.com/heroui-inc/heroui/pull/4852) [`446dd0b`](https://github.com/heroui-inc/heroui/commit/446dd0bfdede990c672e7b24fd10ac99fa8d4686) Thanks [@wingkwong](https://github.com/wingkwong)! - add `firstDayOfWeek`

- [`88b9cbe`](https://github.com/heroui-inc/heroui/commit/88b9cbeddde4fee3f84c5422d55cd9b64e9025e0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peer depts

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
- Updated dependencies [[`446dd0b`](https://github.com/heroui-inc/heroui/commit/446dd0bfdede990c672e7b24fd10ac99fa8d4686), [`88b9cbe`](https://github.com/heroui-inc/heroui/commit/88b9cbeddde4fee3f84c5422d55cd9b64e9025e0), [`4ff87ca`](https://github.com/heroui-inc/heroui/commit/4ff87ca7afccd2c3db0b145156a8357b2b51e7b5)]:
  - @heroui/calendar@2.2.11
  - @heroui/date-input@2.3.10
  - @heroui/button@2.2.11
  - @heroui/form@2.1.10
  - @heroui/popover@2.3.11
  - @heroui/aria-utils@2.2.9
  - @heroui/react-utils@2.1.5
  - @heroui/shared-icons@2.1.3
  - @heroui/shared-utils@2.1.4

## 2.3.10

### Patch Changes

- [#4594](https://github.com/heroui-inc/heroui/pull/4594) [`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Org name changed

- Updated dependencies [[`7ebe0e6`](https://github.com/heroui-inc/heroui/commit/7ebe0e664feb777fe0cad311312d0e02b899319e)]:
  - @heroui/shared-icons@2.1.2
  - @heroui/shared-utils@2.1.3
  - @heroui/date-input@2.3.9
  - @heroui/react-utils@2.1.4
  - @heroui/aria-utils@2.2.8
  - @heroui/calendar@2.2.10
  - @heroui/popover@2.3.10
  - @heroui/button@2.2.10
  - @heroui/form@2.1.9

## 2.3.9

### Patch Changes

- Updated dependencies [[`33e0418`](https://github.com/heroui-inc/heroui/commit/33e0418d08c29f829b00ee3bc41972dfce6a3370), [`e7ff673`](https://github.com/heroui-inc/heroui/commit/e7ff6730d7e891f1e9e3ca232b1faaebc5aedef2), [`fb46df2`](https://github.com/heroui-inc/heroui/commit/fb46df2430f95cddef0c25fce4639c2078b34f62)]:
  - @heroui/popover@2.3.9
  - @heroui/react-utils@2.1.3
  - @heroui/button@2.2.9
  - @heroui/calendar@2.2.9
  - @heroui/date-input@2.3.8
  - @heroui/form@2.1.8
  - @heroui/aria-utils@2.2.7

## 2.3.8

### Patch Changes

- Updated dependencies [[`c0e3dab`](https://github.com/heroui-inc/heroui/commit/c0e3dab5e8104b4f9335892e850b26359d33b3e8), [`77206bc`](https://github.com/heroui-inc/heroui/commit/77206bc62596894d038b9715e40b361fec286c10), [`5f388fc`](https://github.com/heroui-inc/heroui/commit/5f388fc68c7db7f852432e73386686d919d44d31)]:
  - @heroui/calendar@2.2.8
  - @heroui/shared-utils@2.1.2
  - @heroui/popover@2.3.8
  - @heroui/button@2.2.8
  - @heroui/date-input@2.3.7
  - @heroui/form@2.1.7
  - @heroui/aria-utils@2.2.6
  - @heroui/react-utils@2.1.2

## 2.3.7

### Patch Changes

- Updated dependencies [[`78c0928`](https://github.com/heroui-inc/heroui/commit/78c09280e30113bd648057ad64ad6198d1e5d58f)]:
  - @heroui/aria-utils@2.2.5
  - @heroui/button@2.2.7
  - @heroui/calendar@2.2.7
  - @heroui/popover@2.3.7
  - @heroui/form@2.1.6

## 2.3.6

### Patch Changes

- Updated dependencies [[`5598806`](https://github.com/heroui-inc/heroui/commit/5598806216166dc9fff36cafd9112412486b747f)]:
  - @heroui/button@2.2.6
  - @heroui/calendar@2.2.6
  - @heroui/form@2.1.6
  - @heroui/popover@2.3.6
  - @heroui/date-input@2.3.6

## 2.3.5

### Patch Changes

- Updated dependencies [[`dfefdd6`](https://github.com/heroui-inc/heroui/commit/dfefdd6250eb81ae653e611a8dff12b2ae29a09c)]:
  - @heroui/button@2.2.5
  - @heroui/calendar@2.2.5
  - @heroui/form@2.1.5
  - @heroui/popover@2.3.5
  - @heroui/date-input@2.3.5

## 2.3.4

### Patch Changes

- [#4258](https://github.com/heroui-inc/heroui/pull/4258) [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3) Thanks [@wingkwong](https://github.com/wingkwong)! - sync with upstream RA versions

- Updated dependencies [[`b16291b`](https://github.com/heroui-inc/heroui/commit/b16291b2200229f0d0a9ea910e38f3f100f7931f), [`1031e98`](https://github.com/heroui-inc/heroui/commit/1031e985b71e69b8a7189ea049b9616257f820b3)]:
  - @heroui/form@2.1.4
  - @heroui/date-input@2.3.4
  - @heroui/aria-utils@2.2.4
  - @heroui/calendar@2.2.4
  - @heroui/popover@2.3.4
  - @heroui/button@2.2.4

## 2.3.3

### Patch Changes

- [#4255](https://github.com/heroui-inc/heroui/pull/4255) [`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050) Thanks [@wingkwong](https://github.com/wingkwong)! - fixed incorrect peerDependencies for theme and system package (#4254)

- Updated dependencies [[`6a94a12`](https://github.com/heroui-inc/heroui/commit/6a94a125d4836b0a18d9cd2cb521c85a6bfa9050)]:
  - @heroui/date-input@2.3.3
  - @heroui/calendar@2.2.3
  - @heroui/popover@2.3.3
  - @heroui/button@2.2.3
  - @heroui/form@2.1.3
  - @heroui/aria-utils@2.2.3

## 2.3.2

### Patch Changes

- [#4247](https://github.com/heroui-inc/heroui/pull/4247) [`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix peerDeps & core package client on export \*

- Updated dependencies [[`551ab18`](https://github.com/heroui-inc/heroui/commit/551ab184060b24b2c3a89598f84d4c18599649d0)]:
  - @heroui/date-input@2.3.2
  - @heroui/calendar@2.2.2
  - @heroui/popover@2.3.2
  - @heroui/button@2.2.2
  - @heroui/form@2.1.2
  - @heroui/aria-utils@2.2.2

## 2.3.1

### Patch Changes

- [`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.6.2

- Updated dependencies [[`d6eee4a`](https://github.com/heroui-inc/heroui/commit/d6eee4a8767556152f47f06dcf04940951abc5af)]:
  - @heroui/button@2.2.1
  - @heroui/calendar@2.2.1
  - @heroui/date-input@2.3.1
  - @heroui/form@2.1.1
  - @heroui/popover@2.3.1
  - @heroui/aria-utils@2.2.1
  - @heroui/react-utils@2.1.1
  - @heroui/shared-icons@2.1.1
  - @heroui/shared-utils@2.1.1

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

### Patch Changes

- [#4207](https://github.com/heroui-inc/heroui/pull/4207) [`6bc616c`](https://github.com/heroui-inc/heroui/commit/6bc616caea948431d05eec33c1784e0560524e97) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix the "forwardRef render functions accept exactly two parameters: props and ref. Did you forget to use the ref parameter?" on next.js by changing the way we manage collection base components refs

- [#4224](https://github.com/heroui-inc/heroui/pull/4224) [`26e478d`](https://github.com/heroui-inc/heroui/commit/26e478dd937dedcaf41110171d971a8a3cf2ff52) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Added form support to input-otp, change default validationBehavior to "native" to avoid breaking changes, and fix select with form

- [#4226](https://github.com/heroui-inc/heroui/pull/4226) [`6c0213d`](https://github.com/heroui-inc/heroui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc) Thanks [@wingkwong](https://github.com/wingkwong)! - bump `@react-aria/utils` version (#4212)

- Updated dependencies [[`6bc616c`](https://github.com/heroui-inc/heroui/commit/6bc616caea948431d05eec33c1784e0560524e97), [`44958bf`](https://github.com/heroui-inc/heroui/commit/44958bf91a1677becd5e9f3c420b7956cf0244d8), [`26e478d`](https://github.com/heroui-inc/heroui/commit/26e478dd937dedcaf41110171d971a8a3cf2ff52), [`6c0213d`](https://github.com/heroui-inc/heroui/commit/6c0213dfc805aa3c793763c0b25f53b2b80c24dc), [`ffb1e55`](https://github.com/heroui-inc/heroui/commit/ffb1e554f7d6b5b1ede66d0838b3b1edeeccdf6b), [`5786897`](https://github.com/heroui-inc/heroui/commit/5786897b9950d95c12351dacd2fb41bb1e298201)]:
  - @heroui/date-input@2.3.0
  - @heroui/calendar@2.2.0
  - @heroui/popover@2.3.0
  - @heroui/form@2.1.0
  - @heroui/aria-utils@2.2.0
  - @heroui/button@2.2.0
  - @heroui/react-utils@2.1.0
  - @heroui/shared-icons@2.1.0
  - @heroui/shared-utils@2.1.0

## 2.2.0-beta.15

### Patch Changes

- Updated dependencies [[`004c4a4b3`](https://github.com/heroui-inc/heroui/commit/004c4a4b3e44477f148937b12bb542e4b27fd322)]:
  - @heroui/shared-icons@2.0.10-beta.8
  - @heroui/popover@2.2.0-beta.12
  - @heroui/button@2.1.0-beta.10
  - @heroui/calendar@2.1.0-beta.14
  - @heroui/date-input@2.2.0-beta.9

## 2.2.0-beta.14

### Patch Changes

- [#4161](https://github.com/heroui-inc/heroui/pull/4161) [`17bf65799`](https://github.com/heroui-inc/heroui/commit/17bf65799c39c2ee44ea9c0b23aa80315b2a5083) Thanks [@wingkwong](https://github.com/wingkwong)! - fix missing peer / dev dependency for framer-motion

- Updated dependencies [[`17bf65799`](https://github.com/heroui-inc/heroui/commit/17bf65799c39c2ee44ea9c0b23aa80315b2a5083)]:
  - @heroui/button@2.1.0-beta.10
  - @heroui/calendar@2.1.0-beta.13
  - @heroui/date-input@2.2.0-beta.9
  - @heroui/popover@2.2.0-beta.12
  - @heroui/form@2.0.1-beta.1
  - @heroui/aria-utils@2.1.0-beta.11

## 2.2.0-beta.13

### Patch Changes

- [`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27) Thanks [@wingkwong](https://github.com/wingkwong)! - bump version

- Updated dependencies [[`9869f2b91`](https://github.com/heroui-inc/heroui/commit/9869f2b91d0829f9c7f0500ba05745707820bf27)]:
  - @heroui/button@2.1.0-beta.9
  - @heroui/calendar@2.1.0-beta.12
  - @heroui/date-input@2.2.0-beta.9
  - @heroui/form@2.0.1-beta.1
  - @heroui/popover@2.2.0-beta.11
  - @heroui/aria-utils@2.1.0-beta.10
  - @heroui/react-utils@2.0.18-beta.8
  - @heroui/shared-icons@2.0.10-beta.7
  - @heroui/shared-utils@2.0.9-beta.8

## 2.2.0-beta.12

### Patch Changes

- [#3036](https://github.com/heroui-inc/heroui/pull/3036) [`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00) Thanks [@ryo-manba](https://github.com/ryo-manba)! - support server validation with form

- Updated dependencies [[`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00), [`eafdb7d47`](https://github.com/heroui-inc/heroui/commit/eafdb7d475a7fcaa7671af77e86fcdf62f14ae00)]:
  - @heroui/button@2.1.0-beta.8
  - @heroui/calendar@2.1.0-beta.11
  - @heroui/date-input@2.2.0-beta.8
  - @heroui/popover@2.2.0-beta.10
  - @heroui/aria-utils@2.1.0-beta.9
  - @heroui/form@2.0.1-beta.0

## 2.2.0-beta.11

### Patch Changes

- Updated dependencies [[`78a99b628`](https://github.com/heroui-inc/heroui/commit/78a99b628e3fde8808a0cce3c69059d727afd49b)]:
  - @heroui/calendar@2.1.0-beta.10
  - @heroui/button@2.1.0-beta.7
  - @heroui/date-input@2.2.0-beta.7
  - @heroui/popover@2.2.0-beta.9

## 2.2.0-beta.10

### Patch Changes

- Updated dependencies []:
  - @heroui/button@2.1.0-beta.7
  - @heroui/calendar@2.1.0-beta.9
  - @heroui/date-input@2.2.0-beta.7
  - @heroui/popover@2.2.0-beta.9
  - @heroui/aria-utils@2.1.0-beta.8

## 2.2.0-beta.9

### Patch Changes

- [#4092](https://github.com/heroui-inc/heroui/pull/4092) [`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Test new runner

- Updated dependencies [[`528668db8`](https://github.com/heroui-inc/heroui/commit/528668db85b98b46473cb1e214780b7468cdadba)]:
  - @heroui/button@2.1.0-beta.7
  - @heroui/calendar@2.1.0-beta.8
  - @heroui/date-input@2.2.0-beta.7
  - @heroui/popover@2.2.0-beta.8
  - @heroui/aria-utils@2.1.0-beta.7
  - @heroui/react-utils@2.0.18-beta.7
  - @heroui/shared-icons@2.0.10-beta.6
  - @heroui/shared-utils@2.0.9-beta.7

## 2.2.0-beta.8

### Patch Changes

- [#4086](https://github.com/heroui-inc/heroui/pull/4086) [`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Pnpm clean

- Updated dependencies [[`f69fe47b5`](https://github.com/heroui-inc/heroui/commit/f69fe47b5b8f6f3a77a7a8c20d8715263fa32acb)]:
  - @heroui/button@2.1.0-beta.6
  - @heroui/calendar@2.1.0-beta.7
  - @heroui/date-input@2.2.0-beta.6
  - @heroui/popover@2.2.0-beta.7
  - @heroui/aria-utils@2.1.0-beta.6
  - @heroui/react-utils@2.0.18-beta.6
  - @heroui/shared-icons@2.0.10-beta.5
  - @heroui/shared-utils@2.0.9-beta.6

## 2.2.0-beta.7

### Patch Changes

- [#4083](https://github.com/heroui-inc/heroui/pull/4083) [`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix build

- Updated dependencies [[`35058262c`](https://github.com/heroui-inc/heroui/commit/35058262c61628fb42907f529c4417886aa12bb2)]:
  - @heroui/button@2.1.0-beta.5
  - @heroui/calendar@2.1.0-beta.6
  - @heroui/date-input@2.2.0-beta.5
  - @heroui/popover@2.2.0-beta.6
  - @heroui/aria-utils@2.1.0-beta.5
  - @heroui/react-utils@2.0.18-beta.5
  - @heroui/shared-icons@2.0.10-beta.4
  - @heroui/shared-utils@2.0.9-beta.5

## 2.2.0-beta.6

### Patch Changes

- Updated dependencies [[`0f55c491b`](https://github.com/heroui-inc/heroui/commit/0f55c491b73da8944f9b38f2ad7486d1b89f8b7a)]:
  - @heroui/shared-icons@2.0.10-beta.3
  - @heroui/button@2.1.0-beta.4
  - @heroui/calendar@2.1.0-beta.5
  - @heroui/date-input@2.2.0-beta.4
  - @heroui/popover@2.2.0-beta.5

## 2.2.0-beta.5

### Patch Changes

- Updated dependencies [[`5339b2571`](https://github.com/heroui-inc/heroui/commit/5339b2571e6d73ca6efe2acd34d88669419db9f7)]:
  - @heroui/calendar@2.1.0-beta.4
  - @heroui/shared-utils@2.0.9-beta.4
  - @heroui/button@2.1.0-beta.4
  - @heroui/date-input@2.2.0-beta.4
  - @heroui/popover@2.2.0-beta.5
  - @heroui/aria-utils@2.1.0-beta.4
  - @heroui/react-utils@2.0.18-beta.4

## 2.2.0-beta.4

### Patch Changes

- [#4010](https://github.com/heroui-inc/heroui/pull/4010) [`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - framer-motion alpha version added

- Updated dependencies [[`ef432eb53`](https://github.com/heroui-inc/heroui/commit/ef432eb539714fded6cab86a2185956fb103e0df)]:
  - @heroui/button@2.1.0-beta.3
  - @heroui/calendar@2.1.0-beta.3
  - @heroui/date-input@2.2.0-beta.3
  - @heroui/popover@2.2.0-beta.4
  - @heroui/aria-utils@2.1.0-beta.3
  - @heroui/react-utils@2.0.18-beta.3
  - @heroui/shared-icons@2.0.10-beta.2
  - @heroui/shared-utils@2.0.9-beta.3

## 2.2.0-beta.3

### Patch Changes

- [#4008](https://github.com/heroui-inc/heroui/pull/4008) [`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - React 19 added to peerDeps

- Updated dependencies [[`7c1c0dd8f`](https://github.com/heroui-inc/heroui/commit/7c1c0dd8fef3ea72996c1095b919574c4b7f9b89)]:
  - @heroui/button@2.1.0-beta.2
  - @heroui/calendar@2.1.0-beta.2
  - @heroui/date-input@2.2.0-beta.2
  - @heroui/popover@2.2.0-beta.3
  - @heroui/aria-utils@2.1.0-beta.2
  - @heroui/react-utils@2.0.18-beta.2
  - @heroui/shared-icons@2.0.10-beta.1
  - @heroui/shared-utils@2.0.9-beta.2

## 2.2.0-beta.2

### Patch Changes

- Updated dependencies [[`563c1585a`](https://github.com/heroui-inc/heroui/commit/563c1585a3c1a32e8272ec4641cfabeaaac3296c)]:
  - @heroui/popover@2.2.0-beta.2

## 2.2.0-beta.1

### Patch Changes

- [#3990](https://github.com/heroui-inc/heroui/pull/3990) [`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Beta 1

- Updated dependencies [[`cb5bc4c74`](https://github.com/heroui-inc/heroui/commit/cb5bc4c74f00caaee80dca89c1f02038db315b85)]:
  - @heroui/button@2.1.0-beta.1
  - @heroui/calendar@2.1.0-beta.1
  - @heroui/date-input@2.2.0-beta.1
  - @heroui/popover@2.2.0-beta.1
  - @heroui/aria-utils@2.1.0-beta.1
  - @heroui/react-utils@2.0.18-beta.1
  - @heroui/shared-icons@2.0.10-beta.0
  - @heroui/shared-utils@2.0.9-beta.1

## 2.2.0-beta.0

### Minor Changes

- [#3732](https://github.com/heroui-inc/heroui/pull/3732) [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d) Thanks [@ryo-manba](https://github.com/ryo-manba)! - update react-aria version

### Patch Changes

- [#3773](https://github.com/heroui-inc/heroui/pull/3773) [`a4ab02006`](https://github.com/heroui-inc/heroui/commit/a4ab02006a63013e1a25c28c182d999e3d7c9eeb) Thanks [@macci001](https://github.com/macci001)! - Fixes getCalendarProps to propagate the classNames in the calendarProps. (#3769)

- [#3302](https://github.com/heroui-inc/heroui/pull/3302) [`a4a1d8fb6`](https://github.com/heroui-inc/heroui/commit/a4a1d8fb69dd7f496a179a66af072f72aae0ec17) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Add month and year picker to DateRangePicker and RangeCalendar (#3089, #3090)

- [#3248](https://github.com/heroui-inc/heroui/pull/3248) [`cb1b3135b`](https://github.com/heroui-inc/heroui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Add support for selectorButtonPlacement property (#3015)

- Updated dependencies [[`0cf91395c`](https://github.com/heroui-inc/heroui/commit/0cf91395c7c66a69fb05c7fca4a30cbad9e1e0f8), [`781b85566`](https://github.com/heroui-inc/heroui/commit/781b85566ee5eac3f505625462c4f5f14e36ed3a), [`67ea2f65e`](https://github.com/heroui-inc/heroui/commit/67ea2f65e17f913bdffae4690586a6ae202c8f7d), [`38a54ab49`](https://github.com/heroui-inc/heroui/commit/38a54ab497781e17799b37f0061ba50f2dc44e09), [`af3c4f706`](https://github.com/heroui-inc/heroui/commit/af3c4f706bb88eae02eee594a6db68cdd33bbe88), [`ae73de1a6`](https://github.com/heroui-inc/heroui/commit/ae73de1a61c26e78235ce2d4c38159d486b55d56), [`ad6393ab3`](https://github.com/heroui-inc/heroui/commit/ad6393ab33362119203455ef5c8ffbfe1ffa96a1), [`a4a1d8fb6`](https://github.com/heroui-inc/heroui/commit/a4a1d8fb69dd7f496a179a66af072f72aae0ec17), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`cb1b3135b`](https://github.com/heroui-inc/heroui/commit/cb1b3135bc7e811c9c2e163d4778f9f6eb2ef8c8), [`a5cac4561`](https://github.com/heroui-inc/heroui/commit/a5cac45619e529cf9850f02f416b6bc7cba77f3f), [`d90ad05b1`](https://github.com/heroui-inc/heroui/commit/d90ad05b13b36617009cb0e5f57f299aa7bb7bd0), [`a0d7141db`](https://github.com/heroui-inc/heroui/commit/a0d7141db314c6bea27df6b8beb15dae3b1bcb93), [`9f6839faf`](https://github.com/heroui-inc/heroui/commit/9f6839faf9fe05c766571bcb71028bd3236d6e3a), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`3f0d81b56`](https://github.com/heroui-inc/heroui/commit/3f0d81b560e7ef3eb315bd98407249c0eb4ed5eb), [`8a33eabb2`](https://github.com/heroui-inc/heroui/commit/8a33eabb2583202fcc8fbc33e8f2ed23bb45f1a4), [`559436d46`](https://github.com/heroui-inc/heroui/commit/559436d462bdb8739d8c817d1aa98607969d8a07)]:
  - @heroui/theme@2.3.0-beta.0
  - @heroui/button@2.1.0-beta.0
  - @heroui/calendar@2.1.0-beta.0
  - @heroui/date-input@2.2.0-beta.0
  - @heroui/popover@2.2.0-beta.0
  - @heroui/system@2.3.0-beta.0
  - @heroui/aria-utils@2.1.0-beta.0
  - @heroui/shared-utils@2.0.9-beta.0
  - @heroui/react-utils@2.0.18-beta.0

## 2.1.8

### Patch Changes

- [#3759](https://github.com/heroui-inc/heroui/pull/3759) [`229388422`](https://github.com/heroui-inc/heroui/commit/2293884229541e363b1983fea88ba6e3bee6be14) Thanks [@wingkwong](https://github.com/wingkwong)! - rollback pr3467. rescheduled to v2.5.0.

- Updated dependencies [[`4c01d1824`](https://github.com/heroui-inc/heroui/commit/4c01d1824d4dde22d89232968a3a4c48fe04678f), [`229388422`](https://github.com/heroui-inc/heroui/commit/2293884229541e363b1983fea88ba6e3bee6be14)]:
  - @heroui/popover@2.1.29
  - @heroui/aria-utils@2.0.26
  - @heroui/button@2.0.38
  - @heroui/calendar@2.0.12
  - @heroui/date-input@2.1.4

## 2.1.7

### Patch Changes

- [#3467](https://github.com/heroui-inc/heroui/pull/3467) [`123b7fbc9`](https://github.com/heroui-inc/heroui/commit/123b7fbc9fb51613d7568572a00982ad230d02ae) Thanks [@chirokas](https://github.com/chirokas)! - Refactor overlays to reduce its complexity, while improving stability.

- Updated dependencies [[`123b7fbc9`](https://github.com/heroui-inc/heroui/commit/123b7fbc9fb51613d7568572a00982ad230d02ae), [`19c331be7`](https://github.com/heroui-inc/heroui/commit/19c331be75f1d03048c7b2dc92c2c9b62865cc11), [`55c92981e`](https://github.com/heroui-inc/heroui/commit/55c92981e009b1721e8288341402feb1ebec08f3), [`f36df4362`](https://github.com/heroui-inc/heroui/commit/f36df4362f572e8e233d4357f43600265cd5b8d5)]:
  - @heroui/popover@2.1.28
  - @heroui/calendar@2.0.12
  - @heroui/shared-utils@2.0.8
  - @heroui/button@2.0.38
  - @heroui/date-input@2.1.4
  - @heroui/react-utils@2.0.17

## 2.1.6

### Patch Changes

- [#3512](https://github.com/heroui-inc/heroui/pull/3512) [`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34) Thanks [@wingkwong](https://github.com/wingkwong)! - fix conflicting versions in npm

- Updated dependencies [[`2d2d300a1`](https://github.com/heroui-inc/heroui/commit/2d2d300a12dbe20ca7ebd125daf3dce74efcbf34)]:
  - @heroui/button@2.0.37
  - @heroui/calendar@2.0.11
  - @heroui/date-input@2.1.3
  - @heroui/popover@2.1.27
  - @heroui/aria-utils@2.0.24
  - @heroui/react-utils@2.0.16
  - @heroui/shared-icons@2.0.9
  - @heroui/shared-utils@2.0.7

## 2.1.5

### Patch Changes

- Updated dependencies [[`1fdbf2ad2`](https://github.com/heroui-inc/heroui/commit/1fdbf2ad2020d91f257029e6a3f81406d5da109c)]:
  - @heroui/calendar@2.0.10
  - @heroui/button@2.0.36
  - @heroui/date-input@2.1.2
  - @heroui/popover@2.1.26

## 2.1.4

### Patch Changes

- Updated dependencies []:
  - @heroui/button@2.0.36
  - @heroui/calendar@2.0.9
  - @heroui/date-input@2.1.2
  - @heroui/popover@2.1.26
  - @heroui/aria-utils@2.0.23

## 2.1.3

### Patch Changes

- [#3258](https://github.com/heroui-inc/heroui/pull/3258) [`773f3004a`](https://github.com/heroui-inc/heroui/commit/773f3004a61966fea2cc14e2f22337ff72365100) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Fix calendar props on date-range-picker

- [#3283](https://github.com/heroui-inc/heroui/pull/3283) [`a164c26e9`](https://github.com/heroui-inc/heroui/commit/a164c26e96ac8d899ec457e35e22d9b22829c0fa) Thanks [@wingkwong](https://github.com/wingkwong)! - Fixed date picker closing issue after pressing selector button (#3282)

- [#3088](https://github.com/heroui-inc/heroui/pull/3088) [`134f37184`](https://github.com/heroui-inc/heroui/commit/134f371843e90f23c3f1816e8b9df328e21d6827) Thanks [@KumJungMin](https://github.com/KumJungMin)! - fix hours, month clear issue in `showMonthAndYearPickers` mode (#3072).

- Updated dependencies [[`3cdfb2afc`](https://github.com/heroui-inc/heroui/commit/3cdfb2afca15a49bed06356c42bd80036cb99387), [`60bb09fe6`](https://github.com/heroui-inc/heroui/commit/60bb09fe6455475a16225e776348e9acf0537f9b), [`fd4b7200d`](https://github.com/heroui-inc/heroui/commit/fd4b7200dd26eae53ce50e06610b34388e3fdc08), [`c1f05ecb4`](https://github.com/heroui-inc/heroui/commit/c1f05ecb4646fe99684efd88b9adb1abb7c709f7), [`0462dde0a`](https://github.com/heroui-inc/heroui/commit/0462dde0a752e5ee5341c372834be5496296a6cc), [`f5d94f96e`](https://github.com/heroui-inc/heroui/commit/f5d94f96e4cffed1d4aeef971c89f8d283effd49), [`444d320db`](https://github.com/heroui-inc/heroui/commit/444d320dbc146399eb937c219ce983d427675425), [`a164c26e9`](https://github.com/heroui-inc/heroui/commit/a164c26e96ac8d899ec457e35e22d9b22829c0fa), [`134f37184`](https://github.com/heroui-inc/heroui/commit/134f371843e90f23c3f1816e8b9df328e21d6827), [`5652e7bdd`](https://github.com/heroui-inc/heroui/commit/5652e7bddc498c7f7420a68c58f207ba4cbe3933)]:
  - @heroui/date-input@2.1.2
  - @heroui/aria-utils@2.0.22
  - @heroui/calendar@2.0.8
  - @heroui/popover@2.1.25
  - @heroui/shared-utils@2.0.6
  - @heroui/button@2.0.35
  - @heroui/react-utils@2.0.15

## 2.1.2

### Patch Changes

- [#3146](https://github.com/heroui-inc/heroui/pull/3146) [`3da81494c`](https://github.com/heroui-inc/heroui/commit/3da81494c37f26e9b0e76745e461ac091e7c03af) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Add support for apply styles to DateInput (#2770, #2895, #2998)

- [#3240](https://github.com/heroui-inc/heroui/pull/3240) [`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b) Thanks [@wingkwong](https://github.com/wingkwong)! - bump react-aria dependencies

- [#3112](https://github.com/heroui-inc/heroui/pull/3112) [`df0126f93`](https://github.com/heroui-inc/heroui/commit/df0126f93f0f9c2cfa0cbfa44f5abd394ebd48d0) Thanks [@ryo-manba](https://github.com/ryo-manba)! - chore(date): update errorMessageFunction story and docs for date libraries

- Updated dependencies [[`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`3500147d7`](https://github.com/heroui-inc/heroui/commit/3500147d7fbe53bc01ae24749fdeaf87c37c0d12), [`47c2472fb`](https://github.com/heroui-inc/heroui/commit/47c2472fb22bfe1c0c357b5ba12e5606eba0d65b), [`df0126f93`](https://github.com/heroui-inc/heroui/commit/df0126f93f0f9c2cfa0cbfa44f5abd394ebd48d0), [`b9bb06ff3`](https://github.com/heroui-inc/heroui/commit/b9bb06ff37f99bfc438e848706ec79b4c7b7c5d3)]:
  - @heroui/popover@2.1.24
  - @heroui/aria-utils@2.0.21
  - @heroui/shared-icons@2.0.8
  - @heroui/button@2.0.34
  - @heroui/calendar@2.0.7
  - @heroui/date-input@2.1.1
  - @heroui/react-utils@2.0.14

## 2.1.1

### Patch Changes

- Updated dependencies [[`685995a12`](https://github.com/heroui-inc/heroui/commit/685995a125cc3db26c6adb67ed9f7245b87e792a)]:
  - @heroui/button@2.0.33
  - @heroui/calendar@2.0.6
  - @heroui/popover@2.1.23
  - @heroui/aria-utils@2.0.20
  - @heroui/date-input@2.1.0

## 2.1.0

### Minor Changes

- [#2987](https://github.com/heroui-inc/heroui/pull/2987) [`540aa2124`](https://github.com/heroui-inc/heroui/commit/540aa2124b45b65a40e73f5aea2b90405fe1fe9a) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Change validationBehavior from native to aria by default, with the option to change via props.

### Patch Changes

- [#2889](https://github.com/heroui-inc/heroui/pull/2889) [`aba1716ed`](https://github.com/heroui-inc/heroui/commit/aba1716edc2a85c94e6baeb4acc481f67589d002) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Update React Aria packages

- [#2854](https://github.com/heroui-inc/heroui/pull/2854) [`3b14c21e0`](https://github.com/heroui-inc/heroui/commit/3b14c21e02fedf15d7d22e911109dac60c4e780e) Thanks [@wingkwong](https://github.com/wingkwong)! - Revise popover-based focus behaviours (#2849, #2834, #2779, #2962, #2872, #2974, #1920, #1287, #3060)

- [#3011](https://github.com/heroui-inc/heroui/pull/3011) [`ca8554ccf`](https://github.com/heroui-inc/heroui/commit/ca8554ccff143c49aea535b98e4ffdbcd0040a26) Thanks [@wingkwong](https://github.com/wingkwong)! - add missing ref to input wrapper (#3008)

- [#2845](https://github.com/heroui-inc/heroui/pull/2845) [`6bbd234aa`](https://github.com/heroui-inc/heroui/commit/6bbd234aa23fa594a191e39265296c3be09fda7f) Thanks [@chirokas](https://github.com/chirokas)! - Fix calendar header controlled state on DatePicker.

- [#2929](https://github.com/heroui-inc/heroui/pull/2929) [`422770cc6`](https://github.com/heroui-inc/heroui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Add support for disabling the animations globally.

- [#2908](https://github.com/heroui-inc/heroui/pull/2908) [`2a2a0692c`](https://github.com/heroui-inc/heroui/commit/2a2a0692ca81ea575d2328d933d775ccbd43ac1c) Thanks [@wingkwong](https://github.com/wingkwong)! - keep date picker style consistent for different variants (#2901)

- [#3014](https://github.com/heroui-inc/heroui/pull/3014) [`20ba81948`](https://github.com/heroui-inc/heroui/commit/20ba81948d86ccc7ea4269cceb06e04899903b0e) Thanks [@winchesHe](https://github.com/winchesHe)! - add the correct peerDep version

- Updated dependencies [[`aba1716ed`](https://github.com/heroui-inc/heroui/commit/aba1716edc2a85c94e6baeb4acc481f67589d002), [`3b14c21e0`](https://github.com/heroui-inc/heroui/commit/3b14c21e02fedf15d7d22e911109dac60c4e780e), [`bf68c91b9`](https://github.com/heroui-inc/heroui/commit/bf68c91b9a5be2014830859b0be2127d657ba90f), [`c83ff382b`](https://github.com/heroui-inc/heroui/commit/c83ff382b9e5deaa08ed7e64eee484cc4904704d), [`422770cc6`](https://github.com/heroui-inc/heroui/commit/422770cc6bcdd1d4c51257654ab718f3c19d6cb2), [`540aa2124`](https://github.com/heroui-inc/heroui/commit/540aa2124b45b65a40e73f5aea2b90405fe1fe9a), [`20ba81948`](https://github.com/heroui-inc/heroui/commit/20ba81948d86ccc7ea4269cceb06e04899903b0e)]:
  - @heroui/calendar@2.0.5
  - @heroui/date-input@2.1.0
  - @heroui/popover@2.1.22
  - @heroui/aria-utils@2.0.19
  - @heroui/button@2.0.32

## 2.0.7

### Patch Changes

- [#2832](https://github.com/heroui-inc/heroui/pull/2832) [`1cc5215ce`](https://github.com/heroui-inc/heroui/commit/1cc5215ce6026da7e7736d74a5479b2f5b86c1ff) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Fixed missing aria labels in date range picker (#2804)

- [#2833](https://github.com/heroui-inc/heroui/pull/2833) [`308b32c0f`](https://github.com/heroui-inc/heroui/commit/308b32c0f1611ecc72d8cf3b91a4481cc0fc09a5) Thanks [@ryo-manba](https://github.com/ryo-manba)! - Fixed console errors for non-DOM props in DatePicker (#2823)

- Updated dependencies [[`e9fef9bd9`](https://github.com/heroui-inc/heroui/commit/e9fef9bd922ae1efdf3f796cfe88a579bf693c1d)]:
  - @heroui/calendar@2.0.4
  - @heroui/popover@2.1.21
  - @heroui/button@2.0.31
  - @heroui/date-input@2.0.3

## 2.0.6

### Patch Changes

- Updated dependencies [[`183a4a6cf`](https://github.com/heroui-inc/heroui/commit/183a4a6cfda193a076a4a30550ab93b72d51002d), [`eccc2f2f3`](https://github.com/heroui-inc/heroui/commit/eccc2f2f3d856eefb2cc7c07b94e1c4cefd4d7d0)]:
  - @heroui/popover@2.1.20
  - @heroui/react-utils@2.0.13
  - @heroui/button@2.0.30
  - @heroui/calendar@2.0.3
  - @heroui/date-input@2.0.3

## 2.0.5

### Patch Changes

- Updated dependencies [[`9e5dd8ce3`](https://github.com/heroui-inc/heroui/commit/9e5dd8ce37c94c9ca1ba7b2049a6e55f1803fee9)]:
  - @heroui/popover@2.1.19

## 2.0.4

### Patch Changes

- Updated dependencies [[`f89356691`](https://github.com/heroui-inc/heroui/commit/f89356691cecb8e54f5f820b2b4491537e7c11f3)]:
  - @heroui/popover@2.1.18

## 2.0.3

### Patch Changes

- [#2744](https://github.com/heroui-inc/heroui/pull/2744) [`158c2aa00`](https://github.com/heroui-inc/heroui/commit/158c2aa004f0080449321f84b0efd37762e8adc0) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Refactor calendar cell tab index, add calendar default width

- Updated dependencies [[`158c2aa00`](https://github.com/heroui-inc/heroui/commit/158c2aa004f0080449321f84b0efd37762e8adc0)]:
  - @heroui/calendar@2.0.2
  - @heroui/button@2.0.29
  - @heroui/date-input@2.0.2
  - @heroui/popover@2.1.17
  - @heroui/react-utils@2.0.12

## 2.0.2

### Patch Changes

- [#2737](https://github.com/heroui-inc/heroui/pull/2737) [`fdbfa1f29`](https://github.com/heroui-inc/heroui/commit/fdbfa1f2999e3a6304c7cf36fd73ce5e4ef3fe50) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - Static props removed from date range input picker field

## 2.0.1

### Patch Changes

- [#2618](https://github.com/heroui-inc/heroui/pull/2618) [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14) Thanks [@jrgarciadev](https://github.com/jrgarciadev)! - v2.3.0

- Updated dependencies [[`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`dc0bcf13a`](https://github.com/heroui-inc/heroui/commit/dc0bcf13a5e9aa0450938bcca47cd4c696066f14), [`a05aef0ac`](https://github.com/heroui-inc/heroui/commit/a05aef0acb5a7b000c8131e8ba4f50f0adec01e5), [`2b9f89023`](https://github.com/heroui-inc/heroui/commit/2b9f89023ac087016083dcc205703ae1b2bc9cb8), [`c5049edfd`](https://github.com/heroui-inc/heroui/commit/c5049edfde7edaee2081d70e581739be9dcae2f9), [`8761168d3`](https://github.com/heroui-inc/heroui/commit/8761168d3459cd83ce571f4e65eb8ea6db8516ef), [`eb51bf226`](https://github.com/heroui-inc/heroui/commit/eb51bf226170e4bb37ae30990d1c3aa26d8c504b), [`7263daca0`](https://github.com/heroui-inc/heroui/commit/7263daca08674338eb28529315070337ba0dfc17), [`2894aecca`](https://github.com/heroui-inc/heroui/commit/2894aecca1a2ef0dfb3066b9b8df24ce48c99dae)]:
  - @heroui/button@2.0.28
  - @heroui/calendar@2.0.1
  - @heroui/date-input@2.0.1
  - @heroui/popover@2.1.16
  - @heroui/react-utils@2.0.11
  - @heroui/shared-icons@2.0.7
  - @heroui/shared-utils@2.0.5
