/**
 * This file contains all common types that are used throughout
 * the application.
 */

import React from "react";

/* Use this with all page-level components */
export type TReactComponentWithLayout = React.FunctionComponent & { Layout: React.FunctionComponent };