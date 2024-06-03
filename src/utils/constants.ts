export interface CONST {
  readonly APP_NAME: string;
  readonly APP_LOGO: string;
  readonly DEFAULT_USER_IMAGE: string;

  readonly ENCRYPT_KEY: string;

  readonly RUN_MODE: {
    readonly PRODUCTION: string;
    readonly STAGING: string;
    readonly DEVELOPMENT: string;
  };
  readonly APP_ROUTES: {
    readonly BASE: string;
    // readonly DEFAULT: string;
  };
}

export const CONST: CONST = {
  APP_NAME: "Zameen Visit",
  APP_LOGO: "",
  DEFAULT_USER_IMAGE:
    "https://chatapp-storage-2022.s3.us-west-2.amazonaws.com/user_pic.jpg",
  ENCRYPT_KEY: "ZAMEEN_VISIT_2024",
  RUN_MODE: {
    PRODUCTION: "PRODUCTION",
    STAGING: "STAGING",
    DEVELOPMENT: "DEVELOPMENT",
  },
  APP_ROUTES: {
    BASE: "https://zameen-server.onrender.com", // ! for non-null assertion
    // DEFAULT: "/user/login",
  },
};
