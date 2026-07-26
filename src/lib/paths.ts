// Astro's `base` config (GitHub Pages project site is served under /sanandsemi/) is not
// automatically prepended to hand-written `href="/…"` links — this helper does that.
// See https://docs.astro.build/en/guides/deploy/github/#github-pages-project-site
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const clean = path.replace(/^\//, '');
	return clean ? `${base}/${clean}` : `${base}/`;
}

// Inverse of withBase — strips the base prefix off Astro.url.pathname for comparisons.
export function stripBase(pathname: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
	return stripped.startsWith('/') ? stripped : `/${stripped}`;
}
