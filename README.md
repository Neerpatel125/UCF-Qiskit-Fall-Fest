# IBM Qiskit Fall Fest 2026 at UCF

**[Visit the website](https://neerpatel125.github.io/UCF-Qiskit-Fall-Fest/)**

Festival website for **November 9–18, 2026** at the **University of Central Florida**.

The site uses plain HTML, CSS, and JavaScript. No framework, package installation, build step, server, or secret is required. Registration is currently closed. When open, registration uses the existing Google Form; Google Forms handles responses through its already configured Google Sheet.

## Edit the website

| File | Purpose |
| --- | --- |
| index.html | Event copy, layout, and registration-closed fallback that works without JavaScript |
| styles.css | UCF black/gold theme, IBM color accents, mobile styles, and animations |
| app.js | Registration state and animation pause control |
| registration-config.js | Registration availability and public Google Form responder URL |
| assets/ | Supplied, unedited official artwork and logos |
| .nojekyll | Serve the static website without Jekyll processing |

Set `isOpen` in `registration-config.js` to control registration availability. It is currently `false`: the website shows “Registration is closed” and does not link to the form. The HTML also defaults to the closed state when JavaScript is unavailable. To reopen registration, set `isOpen` to `true` and verify `formUrl`; JavaScript will restore the form links and open-registration copy.

When changing registration to another Google Form, update `formUrl` in `registration-config.js`. Never use a form editor or response spreadsheet URL in public website files. Accepting responses and changing the response destination are managed separately inside Google Forms; the website setting does not change the form itself.

Keep local asset references relative (for example, `./assets/Picture1.png`), so they work when the website is hosted in a subdirectory. Do not change them to `/assets/...`, which would refer to the domain root.

## Brand assets

The supplied IBM Quantum, Qiskit, UCF, and festival artwork is copied without edits. Preserve every image's original bytes, colors, proportions, and complete composition. Do not crop, recolor, redraw, animate, or filter those assets. Decorative network paths are separate from the official artwork. Supplied marks remain subject to their owners' usage permissions; their presence does not grant permission for unrelated reuse.

