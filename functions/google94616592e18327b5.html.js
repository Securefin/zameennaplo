// Cloudflare Pages ".html" URLs ko bina-extension wale URL par redirect karta hai.
// Google Search Console ki verification file ko exact URL par (bina redirect) dikhane ke liye.
export function onRequest() {
  return new Response('google-site-verification: google94616592e18327b5.html', {
    headers: { 'content-type': 'text/html; charset=utf-8' },
  });
}
