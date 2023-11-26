import { NextResponse } from 'next/server';
import acceptLanguage from 'accept-language';
import { fallbackLng, languages, cookieName } from './app/i18n/settings';
import { authMiddleware } from '@clerk/nextjs';

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

const customBeforeAuth = (req, res) => {
    if (req.nextUrl.pathname.startsWith('/')) {
      let lng;
      if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value);
      if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
      if (!lng) lng = fallbackLng;

      // Redirect if lng in path is not supported
      if (
        !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
      ) {
        return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
      }

      if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer'));
        const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
        const response = NextResponse.next();
        if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
        return response;
    }

    // If the conditions aren't met, allow the request to proceed
    NextResponse.next();
  };
};

export default authMiddleware({
  publicRoutes: ['/'],
  beforeAuth: customBeforeAuth,
});
