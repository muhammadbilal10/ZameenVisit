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
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_API_SECRET: string;
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
}

// Define base configuration with actual types
const base: BaseConfig = {
  version: CONST.RUN_MODE.PRODUCTION,
  URL: CONST.APP_ROUTES.BASE,
  MAP_TOKEN:
    "pk.eyJ1IjoiemVlZTk5IiwiYSI6ImNsd3Rqc2ZzNzAzeHYyb3IxMm9xanFrdGwifQ.rTUqcwbx5ehH3YvrizHfug",
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dosndnyp5",
  CLOUDINARY_API_KEY: "817347555493295",
  CLOUDINARY_API_SECRET: "CmMgWFCTBqRNdms3r3LafnLaB68",
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    "pk_test_51Muy0GHaLC1wsFOqorxn0RwhJjTHSN3c0w3PoHcbCYxBvK7QFw1IjYPdD6bR3DCItDcedt6WIlPmpiQa7Q6CWD1e00oYFh4MMi",
  RUNNING: process.env.REACT_APP_NODE_ENV!,
  DEV_TOOLS: process.env.REACT_APP_NODE_ENV === "development",
};

export { base };
