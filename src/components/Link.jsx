import React from "react";

import qs from "query-string";

import { Link as GatsbyRouterLink } from "gatsby";

import { usePlatforms, getQueryStringValue } from "hooks";

export const Link = ({ to, platform, children, ...props }) => {
  const { currentPlatform } = usePlatforms();

  let nextPlatform;

  if (!platform) {
    nextPlatform = currentPlatform;
  } else {
    nextPlatform = platform;
  }

  return (
    <GatsbyRouterLink to={`${to}?platform=${nextPlatform}`} {...props}>
      {children}
    </GatsbyRouterLink>
  );
};
