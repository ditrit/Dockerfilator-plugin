# Dockerfilator-plugin

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=alert_status)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=reliability_rating)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=sqale_rating)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=security_rating)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)

[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=code_smells)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=bugs)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=vulnerabilities)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=sqale_index)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=ncloc)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=coverage)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=ditrit_dockerfilator-plugin&metric=duplicated_lines_density)](https://sonarcloud.io/summary/overall?id=ditrit_dockerfilator-plugin)

[![](https://dcbadge.vercel.app/api/server/zkKfj9gj2C?style=flat&theme=default-inverted)](https://discord.gg/zkKfj9gj2C)

Plugin for managing Dockerfile files in [Leto-Modelizer](https://github.com/ditrit/leto-modelizer).

## Requirements

* node - [v18.4](https://nodejs.org/en/blog/release/v18.4.0)
* npm - [v8.19.3](https://www.npmjs.com/package/npm/v/8.19.3)

## Build your plugin

```
npm run build
```

## Development

### How to release

We use [Semantic Versioning](https://semver.org/spec/v2.0.0.html) as guideline for the version management.

Steps to release:
- Create a new branch labeled `release/vX.Y.Z` from the latest `main`.
- Improve the version number in `package.json`, `package-lock.json` and `changelog.md`.
- Verify the content of the `changelog.md`.
- Commit the modifications with the label `Release version X.Y.Z`.
- Create a pull request on github for this branch into `main`.
- Once the pull request validated and merged, tag the `main` branch with `vX.Y.Z`
- After the tag is pushed, make the release on the tag in GitHub

### Git: Default branch

The default branch is main. Direct commit on it is forbidden. The only way to update the application is through pull request.

Release tag are only done on the `main` branch.

### Git: Branch naming policy

`[BRANCH_TYPE]/[BRANCH_NAME]`

* `BRANCH_TYPE` is a prefix to describe the purpose of the branch. Accepted prefixes are:
  * `feature`, used for feature development
  * `bugfix`, used for bug fix
  * `improvement`, used for refacto
  * `library`, used for updating library
  * `prerelease`, used for preparing the branch for the release
  * `release`, used for releasing project
  * `hotfix`, used for applying a hotfix on main
* `BRANCH_NAME` is managed by this regex: `[a-z0-9._-]` (`_` is used as space character).
