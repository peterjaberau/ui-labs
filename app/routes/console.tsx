import experienceStyle from "~/internals/development/console-app/styles/console.css?url";
import React from "react"
import { Outlet } from "@remix-run/react";
import { cssBundleHref } from "@remix-run/css-bundle";

export const links = () => {
  const styles = [
    { rel: "stylesheet", href: experienceStyle },
  ];
  return [
    cssBundleHref && { rel: "stylesheet", href: cssBundleHref },
    ...styles,
  ].filter(Boolean);
};


export default function Console() {
  return <Outlet />;
}
