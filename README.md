# IBM Qiskit Fall Fest 2026 at UCF

**[Visit the website](https://neerpatel125.github.io/UCF-Qiskit-Fall-Fest/)**

Festival website for **November 9–16, 2026** at the **University of Central Florida**.

The site uses plain HTML, CSS, and JavaScript. No framework, package installation, build step, server, or secret is required. Registration opens the existing Google Form; Google Forms handles responses through its already configured Google Sheet.

## Edit the website

| File | Purpose |
| --- | --- |
| index.html | Event copy, layout, and registration links that work without JavaScript |
| styles.css | UCF black/gold theme, IBM color accents, mobile styles, and animations |
| app.js | Registration state and animation pause control |
| registration-config.js | Public Google Form responder URL |
| assets/ | Supplied, unedited official artwork and logos |
| .nojekyll | Serve the static website without Jekyll processing |

When changing registration to another Google Form, update its responder URL in both `registration-config.js` and all three registration anchors in `index.html`. Never use a form editor or response spreadsheet URL in public website files. Changing the response destination is managed separately inside Google Forms.

Keep local asset references relative (for example, `./assets/Picture1.png`), so they work when the website is hosted in a subdirectory. Do not change them to `/assets/...`, which would refer to the domain root.

## Brand assets

The supplied IBM Quantum, Qiskit, UCF, and festival artwork is copied without edits. Preserve every image's original bytes, colors, proportions, and complete composition. Do not crop, recolor, redraw, animate, or filter those assets. Decorative network paths are separate from the official artwork. Supplied marks remain subject to their owners' usage permissions; their presence does not grant permission for unrelated reuse.

