#!/bin/bash

set -o errexit -o nounset -o pipefail
command -v shellcheck >/dev/null && shellcheck "$0"

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
DIRS="cosmos cosmos_proto desmos gogoproto google ibc"

for dir in $DIRS; do
  rm -rf "$SCRIPT_DIR/../$dir"
  cp -R "$SCRIPT_DIR/../build/$dir" "$SCRIPT_DIR/../."
done