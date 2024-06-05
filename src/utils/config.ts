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
  MAP_TOKEN: string;
}

// Define base configuration with actual types
const base: BaseConfig = {
  version: CONST.RUN_MODE.PRODUCTION,
  URL: CONST.APP_ROUTES.BASE,
  MAP_TOKEN:
    "pk.eyJ1IjoiemVlZTk5IiwiYSI6ImNsd3Rqc2ZzNzAzeHYyb3IxMm9xanFrdGwifQ.rTUqcwbx5ehH3YvrizHfug",
  RUNNING: process.env.REACT_APP_NODE_ENV!,
  DEV_TOOLS: process.env.REACT_APP_NODE_ENV === "development",
};

export { base };
