import { Configuration } from "~/bartender-client/runtime";

const BARTENDER_API_URL = "http://127.0.0.1:8000";

export function buildConfig(accessToken: string = '') {
    return new Configuration({
        basePath: BARTENDER_API_URL,
        accessToken: (name: string | undefined, scopes: string[] | undefined) => {
            if (name === 'OAuth2PasswordBearer') {
                return `Bearer ${accessToken}`
            }
            return accessToken
        }
      });
    }