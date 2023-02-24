import { json, type LinksFunction, type LoaderArgs, type MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getAccessToken } from "./cookies.server";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Haddock3",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  return json({
    access_token: await getAccessToken(request),
  });
}

export default function App() {
  return (
    <html lang="en" data-theme="bonvinlab">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
