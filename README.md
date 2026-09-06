# IBM Qiskit Fall Fest 2026 at UCF

Festival website for **November 9–16, 2026** at the **University of Central Florida**. Planned activities are an IBM guest speaker, an introduction to quantum computing and Qiskit, and a hackathon. The exact schedule and rooms remain tentative; the event is currently planned in person.

The site uses plain HTML, CSS, and JavaScript. No framework, package installation, build step, server, or secret is required. Registration opens the existing Google Form; Google Forms handles responses through its already configured Google Sheet.

## Enable GitHub Pages

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **Deploy from a branch**.
3. Select **main** and **/(root)**, then **Save**.
4. Wait for the Pages deployment to finish. GitHub will display the published URL in Settings → Pages.
5. Open that URL in a signed-out browser, check the layout and logos, and use Register to submit one test response. Confirm it appears in the response Sheet.

With this repository's current name, the default URL will be:

`https://neerpatel125.github.io/UCF-Qiskit-Fall-Fest/`

The repository was private when the files were added. GitHub Pages supports private source repositories on eligible paid plans such as GitHub Pro. On GitHub Free, change the repository to public before enabling Pages. The published site is public even when an eligible source repository stays private. This repository has only website content, supplied brand assets, and the attendee-facing registration URL. It does not include attendee records, Google Form editor links, response Sheet links, ChatGPT hosting configuration, or credentials.

Pages settings and repository visibility must be changed in GitHub; uploading these files alone does not activate hosting. Enabling GitHub Pages does not alter the privacy settings of the separate ChatGPT-hosted site or the Google response Sheet.

## Shorter URL and future websites

GitHub project Pages use the repository name as the URL path. For exactly `/qiskit-fall-fest/`, rename this repository to **qiskit-fall-fest** in **Settings → General → Repository name** before enabling Pages. The asset links here are relative and work with either name. Use the URL GitHub displays after publication, and do not rely on old Pages links redirecting after a rename.

| Repository | Default Pages URL |
| --- | --- |
| UCF-Qiskit-Fall-Fest | `https://neerpatel125.github.io/UCF-Qiskit-Fall-Fest/` |
| qiskit-fall-fest, if renamed | `https://neerpatel125.github.io/qiskit-fall-fest/` |
| research-project-1, if created later | `https://neerpatel125.github.io/research-project-1/` |
| neerpatel125.github.io, optional future homepage | `https://neerpatel125.github.io/` |

Each project website can live in its own repository. You do not need a homepage repository to publish this festival site. No research project or homepage repository is created by this setup.

## Edit the website

| File | Purpose |
| --- | --- |
| index.html | Event copy, layout, and registration links that work without JavaScript |
| styles.css | UCF black/gold theme, IBM color accents, mobile styles, and animations |
| app.js | Registration state and animation pause control |
| registration-config.js | Public Google Form responder URL |
| assets/ | Supplied, unedited official artwork and logos |
| .nojekyll | Serve the static website without Jekyll processing |

After Pages is enabled, committing changes to **main** republishes the site automatically.

When changing registration to another Google Form, update its responder URL in both `registration-config.js` and all three registration anchors in `index.html`. Never use a form editor or response spreadsheet URL in public website files. Changing the response destination is managed separately inside Google Forms.

Keep local asset references relative (for example, `./assets/Picture1.png`), so they work beneath a GitHub project path. Do not change them to `/assets/...`, which would refer to the domain root.

## Brand assets

The supplied IBM Quantum, Qiskit, UCF, and festival artwork is copied without edits. Preserve every image's original bytes, colors, proportions, and complete composition. Do not crop, recolor, redraw, animate, or filter those assets. Decorative network paths are separate from the official artwork. Supplied marks remain subject to their owners' usage permissions; their presence does not grant permission for unrelated reuse.

## Official GitHub references

- [GitHub Pages project-site URLs and plan availability](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Configure Pages to deploy from a branch](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
