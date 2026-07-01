<!--
Sync Impact Report
Version change: 1.0.0 -> 2.0.0
Modified principles:
- I. Publishable Editorial Source of Truth -> I. Publishable Public Content Sources
Added sections:
- None
Removed sections:
- None
Templates requiring updates:
- ✅ .specify/templates/plan-template.md
- ✅ .specify/templates/spec-template.md
- ✅ .specify/templates/tasks-template.md
- ✅ .specify/templates/commands/*.md (directory absent; no command templates to update)
Runtime guidance reviewed:
- ✅ README.md
- ✅ AGENTS.md
- ✅ CONTRIBUTING.md
- ✅ SECURITY.md
Follow-up TODOs:
- None
-->

# Zebulon Constitution

## Core Principles

### I. Publishable Public Content Sources
Public-facing content MUST remain final, user-facing, and directly publishable
wherever it is authored, including `src/content/`, Astro pages, layouts,
components, or other implementation files explicitly documented by the active
spec or plan. Contributors MUST preserve the intended website structure,
navigation, and shared layout copy across those sources and MUST avoid internal
notes, positioning labels, meta commentary, or placeholder copy in any
authoritative public content source. Rationale: zzzbre's product experience
depends on clear ownership of public copy, but that ownership MUST not be tied
to a single file format.

### II. Astro-First Website Implementation
Website behavior MUST be implemented with Astro project conventions before adding
new frameworks or custom infrastructure. Pages, layouts, components, content
collections, styling, and internationalization work MUST follow the relevant
Astro documentation and the existing project structure. The development server
MUST be started with `astro dev --background` and managed with `astro dev stop`,
`astro dev status`, and `astro dev logs`. Rationale: a small Astro surface is
easier to maintain when contributors extend the platform already chosen.

### III. Spec-Driven, Independently Testable Work
Every material feature or editorial workflow change MUST begin with a Spec Kit
spec that defines prioritized user stories, acceptance scenarios, measurable
success criteria, and assumptions. Plans and tasks MUST preserve traceability
from each story to implementation and validation work, and each story MUST remain
independently demonstrable without depending on lower-priority stories.
Rationale: independent slices keep editorial and website changes reviewable,
shippable, and reversible.

### IV. Quality Gates Before Delivery
Changes MUST pass the smallest meaningful set of quality gates before delivery:
content review for editorial changes, `astro build` for website changes, targeted
tests or checks for changed behavior, and quickstart or manual verification for
user-facing flows. If a gate cannot be run, the reason and residual risk MUST be
recorded in the plan, task, or final delivery note. Rationale: quality evidence
must travel with the change, even when the right evidence is manual review rather
than a large automated suite.

### V. Security, Privacy, and Dependency Hygiene
Contributors MUST avoid committing secrets, credentials, private user data, or
unreviewed third-party scripts. Dependency changes MUST respect the supported
Node engine in `package.json`, keep the lockfile synchronized, and be justified
by the feature plan. Security vulnerabilities MUST follow `SECURITY.md` and MUST
not be disclosed through public issue content. Rationale: zzzbre is a SaaS
product surface, so editorial, configuration, and dependency mistakes can create
real trust and privacy risk.

## Editorial and Technical Constraints

Content changes MUST identify their authoritative public content source in the
spec, plan, or task set, whether that source is Markdown, Astro, or another
repository file type. Moving content between Markdown files and Astro files MUST
preserve titles, paragraphs, labels, CTAs, links, and other user-visible
meaning unless the change explicitly intends to edit that copy. French-language
editorial content MUST remain consistent in tone, terminology, and link targets
across related pages. Public-facing copy MUST use final text, not
implementation notes.

Astro changes MUST fit the current source layout (`src/pages`, `src/layouts`,
`src/components`, `src/assets`, and `public`) unless the implementation plan
documents why a new structure is necessary. New dependencies, integrations, or
framework components MUST be listed in the plan with their purpose, operational
impact, and validation approach.

## Development Workflow

Specs MUST capture user value and acceptance criteria before implementation
planning. Plans MUST include a Constitution Check covering authoritative public
content sources, Astro fit, story traceability, quality gates, and
security/privacy impact. Tasks MUST be grouped by independently testable user
story and include explicit validation steps before a story is marked complete.

Pull requests and agent deliveries MUST summarize changed files, quality gates
run, gates not run, and any follow-up risk. Contributors MUST keep unrelated
refactors out of feature work unless the plan explicitly identifies them as
required for the feature.

## Governance

This constitution supersedes conflicting project practices. Amendments require a
documented rationale, an explicit semantic version bump, and updates to affected
Spec Kit templates or runtime guidance in the same change.

Versioning follows semantic versioning:
- MAJOR: incompatible principle removals, replaced governance rules, or changes
  that invalidate existing compliant workflows.
- MINOR: new principles, new required sections, or materially expanded guidance.
- PATCH: clarifications, wording refinements, typo fixes, or non-semantic
  template alignment.

Every implementation plan MUST pass the Constitution Check before Phase 0
research and again after Phase 1 design. Reviews MUST verify that specs, plans,
tasks, and final delivery notes provide evidence for every applicable principle.
When compliance is intentionally deferred, the responsible contributor MUST
record the reason, owner, and follow-up trigger.

**Version**: 2.0.0 | **Ratified**: 2026-07-01 | **Last Amended**: 2026-07-02
