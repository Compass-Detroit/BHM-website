# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Navbar mobile menu: `.nav-menu-expanded` with `max-height: calc(100vh - 80px)`, `overflow-y: auto`, and `-webkit-overflow-scrolling: touch` so the menu never exceeds viewport height
- WCAG 1.4.10 Reflow: media query at `max-width: 480px` and `max-height: 400px` to un-stick the header (`position: absolute`) and reduce padding so content is not blocked at high zoom or small viewports

### Changed

- **Navbar**: Removed pathway/route-link logic; Navbar now only shows section (anchor) links; route links like Previous Events remain in Footer only

## [0.2.0] - 2026-02-13

### Changed

- **Fork & rebrand**: Repurposed from Compass Detroit / Michigan DevFest for the Black History Month Innovation Summit (BHM-website)
- Updated package.json: name to `bhm-website`, repository to `Compass-Detroit/BHM-website`, added description
- Updated README, CONTRIBUTING, ACCESSIBILITY docs for Black History Month Innovation Summit
- Updated Docker documentation and image naming to `bhm-website`
- Updated index.html metadata, site.webmanifest, and GitHub issue templates
- Updated CHANGELOG links to point to BHM-website repository

## [0.1.2] - 2026-02-01

### Added

- Hash-based smooth scroll: Navbar `useEffect` scrolls to section when navigating to `/#section-id` from any page (Navbar or Footer), with retry until the home section is in the DOM
- Add new tab in navigation, "Pathways"
- Careers Hub, Connections, and Media grouped under a single “Pathways” item with caret
- Golden (primary) underline on hover for Pathways subnav items (desktop)
- Mobile: active pathway page highlighted with yellow (primary) background; Pathways section auto-expands when on a pathway page

### Changed

- **Pathways dropdown accessibility**: Focus-based open/close (`onBlur` on container); keyboard support (Enter/Space toggle, Arrow Down/Up open and focus first/last item, Escape close and return focus to trigger, Arrow keys move between items); `aria-haspopup="menu"`; removed `preventDefault` from button click; mouse leave only closes when focus is outside the dropdown
- **Footer**: Section links always use `/#section-id`; removed Footer’s own scroll logic so smooth scrolling is handled by the Navbar’s hash-based effect for both Navbar and Footer links
- Navbar z-index raised (z-30) so it stays in front of LandingSection and other content
- Removed overflow-hidden from nav and inner grid so Pathways dropdown is no longer clipped
- Pathways trigger aligned with other nav items (items-baseline, inline-flex) so “Pathways” sits on the same line
- Pathways dropdown panel nudged up slightly (-mt-0.5) for cleaner alignment

## [0.1.1] - 2026-01-30

### Added

- New pages: Connections, Media, Careers Hub
- Media section and Connections page
- Community and membership content on home

### Changed

- Navigation and copyright updates; navbar items reorganized
- Home section and sub-sections restructured
- Broader description area on home
- Team section migrated to leadership with new tabs
- Partners section refactored
- Speakers section refactored
- Remove Past Events page and redirect to Previous Events page

## [0.1.0] - 2026-01-28

### Added

- Initial Compass Detroit website setup
- Yoda404 component with floating animation
- Custom Tailwind color palette (primary, charcoal, pumpkin, burnt, lime, indigo)
- Custom font families (Montserrat, BioRhyme, Orbitron, Asimovian)
- Accessibility documentation (ACCESSIBILITY.md, CONTRAST-ANALYSIS.md)
- Git hooks for linting, formatting, and commit message validation
- ESLint and Prettier configuration
- VS Code extension recommendations

### Fixed

- Fixed git remote configuration (origin now points to Compass-Detroit/compass-website)
- Fixed Montserrat font weight to use Medium (500) instead of Thin (100)
- Fixed incorrect variable name usage

[Unreleased]: https://github.com/Compass-Detroit/BHM-website/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/Compass-Detroit/BHM-website/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/Compass-Detroit/BHM-website/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Compass-Detroit/BHM-website/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Compass-Detroit/BHM-website/releases/tag/v0.1.0
