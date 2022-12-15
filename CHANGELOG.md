## [0.3.2] (2022-12-15)

BUG FIXES:

* Improve attribute name matching [syntax#49](https://github.com/hashicorp/syntax/pull/49)

ENHANCEMENTS:

* telemetry: track `.tflint.hcl` [#182](https://github.com/hashicorp/vscode-hcl/pull/182)

## [0.3.1] (2022-11-24)

BUG FIXES:

* Update icon for HCL files [#174](https://github.com/hashicorp/vscode-hcl/pull/174)
* Telemetry: Fix product detection [#176](https://github.com/hashicorp/vscode-hcl/pull/176)

ENHANCEMENTS:

* Readme: Add section to mention telemetry [#173](https://github.com/hashicorp/vscode-hcl/pull/173)

## [0.3.0] (2022-11-14)

ENHANCEMENTS:

* Add icon for HCL files [#151](https://github.com/hashicorp/vscode-hcl/pull/151)
* Add Sentinel to telemetry [#162](https://github.com/hashicorp/vscode-hcl/pull/162)

INTERNAL:

* Update MPL-2.0 LICENSE [#166](https://github.com/hashicorp/vscode-hcl/pull/166)

## [0.2.1] (2022-07-08)

INTERNAL:

 - telemetry: Measure Terraform usage ([#123](https://github.com/hashicorp/vscode-hcl/pull/123))
 - telemetry: Further break down language IDs ([#134](https://github.com/hashicorp/vscode-hcl/pull/134))
 - build(deps-dev): bump @vscode/test-electron from 2.1.4 to 2.1.5 ([#129](https://github.com/hashicorp/vscode-hcl/pull/129))
 - build(deps-dev): bump eslint from 8.16.0 to 8.17.0 ([#119](https://github.com/hashicorp/vscode-hcl/pull/119))
 - build(deps-dev): bump eslint from 8.17.0 to 8.18.0 ([#126](https://github.com/hashicorp/vscode-hcl/pull/126))
 - build(deps-dev): bump eslint from 8.18.0 to 8.19.0 ([#133](https://github.com/hashicorp/vscode-hcl/pull/133))
 - build(deps-dev): bump eslint-plugin-prettier from 4.0.0 to 4.1.0 ([#130](https://github.com/hashicorp/vscode-hcl/pull/130))
 - build(deps-dev): bump eslint-plugin-prettier from 4.1.0 to 4.2.1 ([#131](https://github.com/hashicorp/vscode-hcl/pull/131))
 - build(deps-dev): bump prettier from 2.6.2 to 2.7.0 ([#122](https://github.com/hashicorp/vscode-hcl/pull/122))
 - build(deps-dev): bump prettier from 2.7.0 to 2.7.1 ([#124](https://github.com/hashicorp/vscode-hcl/pull/124))
 - build(deps-dev): bump ts-loader from 9.3.0 to 9.3.1 ([#128](https://github.com/hashicorp/vscode-hcl/pull/128))
 - build(deps-dev): bump ts-node from 10.8.0 to 10.8.1 ([#121](https://github.com/hashicorp/vscode-hcl/pull/121))
 - build(deps-dev): bump ts-node from 10.8.1 to 10.8.2 ([#132](https://github.com/hashicorp/vscode-hcl/pull/132))
 - build(deps-dev): bump typescript from 4.7.3 to 4.7.4 ([#125](https://github.com/hashicorp/vscode-hcl/pull/125))
 - build(deps-dev): bump vsce from 2.9.1 to 2.9.2 ([#127](https://github.com/hashicorp/vscode-hcl/pull/127))
 - build(deps-dev): bump webpack-cli from 4.9.2 to 4.10.0 ([#120](https://github.com/hashicorp/vscode-hcl/pull/120))

## [0.2.0] (2022-06-13)

BUG FIXES:

 - Variables with no space between them break syntax highlighting ([syntax#34](https://github.com/hashicorp/syntax/pull/34))
 - Fix parsing block with dash in name ([syntax#42](https://github.com/hashicorp/syntax/pull/42))

ENHANCEMENTS:

 - Enable github.dev and vscode.dev support ([#114](https://github.com/hashicorp/vscode-hcl/pull/114))

INTERNAL:

 - Measure usage of known products ([#117](https://github.com/hashicorp/vscode-hcl/pull/117))

## [0.1.1] (2022-05-20)

BUG FIXES:

 - Variables with no space between them break syntax highlighting ([syntax#34](https://github.com/hashicorp/syntax/pull/34))

ENHANCEMENTS:

 - Use theme-universal icon with solid background ([#90](https://github.com/hashicorp/vscode-hcl/pull/90))

INTERNAL:

 - build(deps-dev): bump glob from 7.2.0 to 7.2.3 ([#83](https://github.com/hashicorp/vscode-hcl/pull/83))
 - build(deps-dev): bump @typescript-eslint/eslint-plugin from 5.23.0 to 5.25.0 ([#87](https://github.com/hashicorp/vscode-hcl/pull/87))
 - build(deps-dev): bump @typescript-eslint/parser from 5.23.0 to 5.25.0 ([#88](https://github.com/hashicorp/vscode-hcl/pull/88))
 - build(deps-dev): bump vsce from 2.7.0 to 2.8.0 ([#89](https://github.com/hashicorp/vscode-hcl/pull/89))

## [0.1.0] (2022-05-13)

ENHANCEMENTS:

 - Scaffold extension ([#2](https://github.com/hashicorp/vscode-hcl/pull/2))
 - Give credit to William Holroyd for extension ([#33](https://github.com/hashicorp/vscode-hcl/pull/33))
 - Correct link to wholroyd.hcl ([#70](https://github.com/hashicorp/vscode-hcl/pull/70))
 - Download hashicorp/syntax files on build ([#22](https://github.com/hashicorp/vscode-hcl/pull/22))
 - Brand Marketplace Entry for publishing ([#23](https://github.com/hashicorp/vscode-hcl/pull/23))
 - Brand Extension packaging ([#69](https://github.com/hashicorp/vscode-hcl/pull/69))
 - Walk back Language activationEvents ([#71](https://github.com/hashicorp/vscode-hcl/pull/71))
 - Update README content ([#73](https://github.com/hashicorp/vscode-hcl/pull/73))
 - Fix Publish Action ([#81](https://github.com/hashicorp/vscode-hcl/pull/81))

<!-- Links to tag comparisons -->
[Unreleased]: https://github.com/hashicorp/vscode-hcl/compare/v0.3.2...main
[0.3.2]: https://github.com/hashicorp/vscode-hcl/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/hashicorp/vscode-hcl/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/hashicorp/vscode-hcl/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/hashicorp/vscode-hcl/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/hashicorp/vscode-hcl/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/hashicorp/vscode-hcl/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/hashicorp/vscode-hcl/commits/v0.1.0
