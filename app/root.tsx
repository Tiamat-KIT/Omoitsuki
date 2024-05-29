import { cssBundleHref } from '@remix-run/css-bundle';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import {
  Links,
  /* LiveReload, */
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { UIProvider, createColorModeManager } from '@yamada-ui/react';
import { ColorModeScript, defaultConfig } from '@yamada-ui/react';
import { json, LoaderFunction } from '@remix-run/node';

export const loader: LoaderFunction = async ({ request }) => {
  const cookies = request.headers.get('Cookie');

  return json({ cookies });
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
];

export default function layout() {
  const { cookies } = useLoaderData<{ cookies: string }>();

  const colorModeManager = createColorModeManager('ssr', cookies);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ColorModeScript
          type="cookie"
          nonce="testing"
          initialColorMode={defaultConfig.initialColorMode}
        />
        <UIProvider colorModeManager={colorModeManager}>
          <Outlet />
        </UIProvider>
        <ScrollRestoration />
        <Scripts />
        {/* <LiveReload /> */}
      </body>
    </html>
  );
}
