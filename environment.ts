import * as dotenv from "dotenv";

dotenv.config({ path: `.env` });

interface EnvironmentValues {
  baseUrl: string;
  reportPortalApiKey: string;
}

const environmentValues: EnvironmentValues = {
  baseUrl: process.env.BASE_URL as string,
  reportPortalApiKey: process.env.API_KEY_REPORT_PORTAL as string,
};

export default environmentValues;
