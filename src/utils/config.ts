/**
 * Configuration settings for different server environments.
 * The selected configuration is exported as 'base'.

 */

import { CONST } from "@/utils/constants";

// Interface for base configuration properties
interface BaseConfig {
  version: string;
  URL: string;
  RUNNING: string;
  DEV_TOOLS: boolean;
}

// Define base configuration with actual types
const base: BaseConfig = {
  version: CONST.RUN_MODE.PRODUCTION,
  URL: CONST.APP_ROUTES.BASE,
  RUNNING: process.env.REACT_APP_NODE_ENV!,
  DEV_TOOLS: process.env.REACT_APP_NODE_ENV === "development",
};



export { base};
