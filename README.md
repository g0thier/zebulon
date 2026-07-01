# zzzbre Website Content

This repository contains the Astro website and public content sources for zzzbre:
- [zzzbre.com](https://zzzbre.com)

## Description

This repository represents the public content foundation and Astro implementation of
zzzbre, a SaaS product dedicated to data-driven management for companies,
executives, leaders, and teams.

It centralizes the website structure, public content, shared shell content, and
editorial rules used to keep navigation, contact flows, and product messaging
consistent across the zzzbre website.

## Table of Contents

- [zzzbre Website Content](#zzzbre-website-content)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Objective](#objective)
  - [Target Audience](#target-audience)
  - [Current Content](#current-content)
  - [Repository Structure](#repository-structure)
  - [Usage](#usage)
  - [Editorial Guidelines](#editorial-guidelines)
  - [Security](#security)
  - [Changelog](#changelog)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)
  - [Author](#author)

## Objective

Provide clear authoritative public content sources for the zzzbre website,
including page hierarchy, product content, resource content, navigation
content, and contact-oriented layout blocks.

## Target Audience

- Editors working on zzzbre website content
- Product and marketing contributors maintaining public messaging
- Designers and developers integrating editorial content into layouts
- Agents generating or updating public content for zzzbre

## Current Content

- `Astro pages`: explicit public routes under `src/pages/`
- `Shared shell`: header, footer, and sidebar content in app-native modules
- `Article content`: Markdown retained only for dynamic Motivation articles
- `Astro`: layouts and components that can render or directly host public-facing copy
- `Agent Instructions`: editorial rules for producing directly publishable content

## Repository Structure

```text
zebulon/
├── src/
│   ├── components/
│   ├── content/
│   │   └── blog/
│   │       └── motivation/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── assets/
├── ACKNOWLEDGEMENTS.md
├── AGENTS.md
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE.md
├── SECURITY.md
└── README.md
```

## Usage

Install dependencies, then use Astro locally when needed:

```bash
npm install
astro dev --background
astro dev status
```

Update the authoritative source for the affected public surface. Depending on
the feature, that source is usually an Astro file under `src/pages/`,
`src/layouts/`, `src/components/`, or a typed module under `src/data/`.
Markdown is retained only for the dynamic Motivation article entries in
`src/content/blog/motivation/`. When transferring content between Markdown and
Astro files, preserve direct publishability and keep related links, navigation,
and shared copy consistent.

## Editorial Guidelines

Editorial rules are documented in [AGENTS.md](AGENTS.md).

Write final content that can be published directly. Avoid intent notes, design comments, internal explanations, and meta fields such as `Objective:`, `Positioning:`, `Text:`, or `Call to action:`.

## Security

Security reporting process is documented in [SECURITY.md](SECURITY.md).

## Changelog

Project changes are tracked in [CHANGELOG.md](CHANGELOG.md).

## Contributing

Contributions are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## License

License details are available in [LICENSE.md](LICENSE.md).

## Acknowledgements

Acknowledgements are available in [ACKNOWLEDGEMENTS.md](ACKNOWLEDGEMENTS.md).

## Author

Gauthier Rammault
