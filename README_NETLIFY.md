Netlify CMS integration - setup notes
====================================

Files added:
- /admin/index.html
- /admin/config.yml
- /products/example-product.html   (example content file)

How Netlify CMS works (quick):
1. Push this repository to GitHub (or GitLab/Bitbucket).
2. Create a new site on Netlify and connect the repository.
3. In Netlify dashboard: go to 'Identity' and enable Netlify Identity. Under 'Services' enable 'Git Gateway' (or enable Git Gateway via Netlify UI).
4. In 'Identity' settings, enable registration or invite users. Under 'Identity' > 'Services' turn on Git Gateway and configure it to use your repo/branch.
5. Visit https://<your-site>.netlify.app/admin/ — this loads the Netlify CMS UI.
6. Log in (Netlify Identity). You can now add Products using the 'Products' collection; images uploaded will go to /images/ and products will be created as files under /products/<slug>.html

Notes on product templates:
- The CMS creates files in /products/ with frontmatter containing fields (title, price, currency, images, etc.) and the body (markdown).
- Your site can either use the existing client-side product loader (data/products.json) or be modified to read per-product pages.
- If you prefer to keep a single /data/products.json file updated instead, Netlify CMS can be configured to write JSON to that file instead of creating individual HTML files. Tell me if you want that alternative and I'll change config.yml accordingly.

Security:
- Netlify Identity + Git Gateway handles authentication and commits for you. No server required.

If you'd like, I can also:
- Configure the CMS to update /data/products.json instead of creating files.
- Add a small script/action to generate a JSON index from /products files automatically.
