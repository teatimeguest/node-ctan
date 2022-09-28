#!/usr/bin/env bash
set -euo pipefail

readonly version="v${npm_package_version}"

npm run build-docs
git add docs package-lock.json package.json
git commit -m "chore(release): prepare for ${version}"
git cliff --config .config/cliff.toml --unreleased --tag "${version}" |
  git tag "${version}" --cleanup=whitespace -F -
git show --no-patch "${version}"
echo
