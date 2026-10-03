# Hi-Tech Diagnostic & Pathology Laboratory

Responsive website for the laboratory in Talod, Gujarat, built with HTML, CSS and JavaScript.

Website: https://manan-ajmera.github.io/Hi-Tech-Laboratory-Website/

## Project files

The website files are located in `docs/`.

| File | Purpose |
| --- | --- |
| `docs/index.html` | Website content and sections |
| `docs/styles.css` | Styling and responsive layouts |
| `docs/script.js` | Mobile navigation and WhatsApp enquiry links |
| `docs/assets/` | Logo, images and favicon |
| `docs/.nojekyll` | Static publishing configuration |

## Local preview

1. Open the `Hi-Tech-Laboratory-Website` repository folder in VS Code.
2. Open `docs/index.html`.
3. Right-click the file and select **Open with Live Server**. Install the Live Server extension if needed.

Alternatively, open `docs/index.html` directly in a browser. No dependency installation or build command is required.

## Editing

- Update text, services, packages and contact information in `docs/index.html`.
- Update colours, spacing and layouts in `docs/styles.css`.
- Update navigation behaviour and WhatsApp enquiry messages in `docs/script.js`.
- Replace images in `docs/assets/`, keeping the filenames or updating their paths in the HTML.
- When changing the WhatsApp number, update it in both `index.html` and `script.js`.

Preview changes on desktop and mobile, and check navigation, images and contact links before publishing.

## Publishing updates

Run these commands from the repository's outer folder:

```bash
git add docs/
git commit -m "Update website"
git push
```

To upload a change to this README, save it in `docs/README.md` and use the same commands.

## GitHub Pages configuration

In the repository, open **Settings → Pages** and use:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/docs`

Save the settings. Changes pushed to `main` trigger a deployment. Check the **Actions** tab for its status and open the published website after deployment completes.
