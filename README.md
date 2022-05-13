# HCL Extension for Visual Studio Code

<img alt="HashiCorp HCL" src="assets/hashicorp_banner_light.png" width="600px">

The [HashiCorp HCL Extension](https://marketplace.visualstudio.com/items?itemName=hashicorp.hcl) for Visual Studio Code (VS Code) adds syntax highlighting for [HCL](https://www.hashicorp.com) files.

## Quick Start

1. Install the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=hashicorp.hcl)
1. Open your desired workspace and/or the root folder containing your [HCL](https://github.com/hashicorp/hcl#hcl) files.

## Features

This extension provides generic [HCL](https://github.com/hashicorp/hcl#hcl) syntax highlighting for files that use `.hcl` as the file extension.

HashiCorp products that use HCL as a configuration format:

- Boundary
- Nomad
- Packer
- Waypoint

## Usage

The [HashiCorp HCL Extension](https://marketplace.visualstudio.com/items?itemName=hashicorp.HCL) is a grammar only extension targeted to provide generic HCL syntax highlighting for files not already accounted for by a more specific HashiCorp extension. For example, Terraform syntax highlighting is already provided by the official [HashiCorp Terraform Extension](https://marketplace.visualstudio.com/items?itemName=hashicorp.terraform) for VS Code.

Current Terraform users can install the HCL extension alongside the Terraform Extension and find that they can use HCL files without conflict. Users can also install the HCL Extension separately from the Terraform Extension if they only want HCL support.

For more information about HCL visit https://github.com/hashicorp/hcl-lang#what-is-hcl.

## Credits

 - We thank [William Holroyd](https://github.com/wholroyd) for creation and past maintenance of [`wholroyd.HCL`](https://marketplace.visualstudio.com/items?itemName=wholroyd.HCL) VS Code extension and for agreeing to the extension namespace transfer to make the transition conflict-less and easy for existing users
