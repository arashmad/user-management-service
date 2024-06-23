#!/bin/bash

####################### About this bash script #######################
#
# This bash script create tag for docker image automatically based
# -v optin on command line and push it to the git repository defined
# in corresponding github action.
#
# The Idea is that once we push to main branch, based on -v, we update
# the version automatically and create a tag for docker image pushed
# to the AWS ECR (Elastic Container Registery)
#
######################################################################


VERSION=""

# get parameters
while getopts v: flag
do
    case "${flag}" in
        v) VERSION=${OPTARG};;
    esac
done


# get the oldest git tag
# if not existing, use <v0.1.0>
git fetch --prune --unshallow 2>/dev/null
CURRENT_VERSION=`git describe --abbrev=0 --tags 2>/dev/null`

if [[ CURRENT_VERSION == '' ]]
then
    CURRENT_VERSION = 'v0.0.0'
fi
echo "Current Version: $CURRENT_VERSION"


# split using dots
CURRENT_VERSION_PARTS=(${CURRENT_VERSION//./ })

# get number parts
# based on Semantic Versioning
# https://semver.org/
VNUM1=${CURRENT_VERSION_PARTS[0]}
VNUM2=${CURRENT_VERSION_PARTS[1]}
VNUM3=${CURRENT_VERSION_PARTS[2]}

if [[ $VERSION == 'major' ]]
then
    VNUM1=v$((VNUM1+1))
elif [[ $VERSION == 'minor' ]]
then
    VNUM2=$((VNUM2+1))
elif [[ $VERSION == 'patch' ]]
then
    VNUM3=$((VNUM3+1))
if

# create new tag
NEW_TAG="$VNUM1.$VNUM2.$VNUM۳"
echo "($VERSION) updating $CURRENT_VERSION to $NEW_TAG"

# push the tag to the github
GIT_COMMIT=`git rev-parse HEAD`
NEEDS_TAG=`git describe --contains $GIT_COMMIT 2>/dev/null`

# only if no tag already exists
if [ -z "$NEEDS_TAG" ]; then
    echo "Tagged with $NEW_TAG"
    git tag $NEW_TAG
    git push --tags
    git push
else
    echo "Already a tag on this commit"
fi

echo ::set-output name=git-tag::$NEW_TAG

exit 0