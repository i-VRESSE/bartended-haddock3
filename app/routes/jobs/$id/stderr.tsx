import { type LoaderArgs } from "@remix-run/node";
import { getAccessToken } from "~/cookies.server";
import {  getJobStderr } from "~/models/job.server";

export const loader = async ({ params, request }: LoaderArgs) => {
    const job_id = params.id || "";
    const access_token = await getAccessToken(request)
    if (access_token === undefined) {
      throw new Error('Unauthenticated')
    }
    return await getJobStderr(parseInt(job_id), access_token);
};
