# Hi-Tech Laboratory website

A responsive, single-page website for Hi-Tech Diagnostic & Pathology Laboratory, Talod. Original HTML, CSS and JavaScript, inspired by the structure of https://www.newjigarmedical.in/ and using the attached company brief. No npm install, build step, paid service or backend is needed.

## 1. Open and preview in VS Code

1. Extract `Hi-Tech-Laboratory-Website.zip` on your computer.
2. Open VS Code → File → Open Folder → select the extracted `hi-tech-lab` folder. You should see `index.html` immediately inside that folder.
3. To preview immediately, double-click `index.html` in File Explorer. The site supports direct file opening.
4. For automatic refresh while editing, open VS Code Extensions (`Ctrl+Shift+X`), find **Live Server by Ritwick Dey**, and install it from the official VS Code marketplace. Right-click `index.html` → **Open with Live Server**. Keep VS Code open while using the preview.
5. Edit `index.html` for content, `styles.css` for design, and `script.js` for mobile navigation and WhatsApp enquiries. Save with `Ctrl+S`.

Alternative local server if Python is installed: open Terminal → New Terminal in this folder, run `python -m http.server 5500`, then visit `http://localhost:5500`. Stop with `Ctrl+C`.

## 2. Publish the code to your GitHub account from VS Code

Your intended GitHub account is **manan-ajmera**. This download has not created or modified a GitHub repository.

1. Ensure Git is installed: run `git --version` in the VS Code terminal. If not found, install Git from https://git-scm.com/downloads and restart VS Code.
2. Open Source Control (`Ctrl+Shift+G`) → **Initialize Repository**. Initialise the `hi-tech-lab` folder, not its parent Downloads folder.
3. If Git asks for an identity, run `git config --global user.name "Manan Ajmera"` and set `git config --global user.email "YOUR_GITHUB_EMAIL"` using your actual GitHub email or GitHub-provided noreply address. A Git commit identity is separate from authentication.
4. Stage all website files with the `+` beside Changes. Enter **Initial Hi-Tech laboratory website** and click **Commit**.
5. Press `Ctrl+Shift+P` → run **Publish to GitHub**. If prompted, sign in through your browser using **manan-ajmera**. Do not paste passwords or tokens into source files.
6. Name the new repository **hi-tech-lab**. Choose **Publish to GitHub public repository** for the straightforward free GitHub Pages setup. Public repositories expose the website source and included images.
7. Include the website files and assets. Open the published repository on GitHub and verify that `index.html`, `styles.css`, `script.js`, and `assets` are at the repository root. Include `.nojekyll` too.

If you already have a repository for this website, clone that specific repository through `Git: Clone`, open it, copy these website files into the checkout, then commit and push. Do not initialise a nested repository or overwrite an unrelated project.

## 3. Put the website online with GitHub Pages

1. Open your new **hi-tech-lab** repository on GitHub.
2. Select **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Choose your published branch (normally `main`) and **/(root)**, then **Save**.
5. Wait for the Pages deployment to complete; check the repository Actions tab if needed. Settings → Pages will display the published URL and **Visit site**.
6. With account `manan-ajmera` and repository `hi-tech-lab`, the expected project URL is `https://manan-ajmera.github.io/hi-tech-lab/`. This is an expected future address, not a site already published by this download.

If your default branch is named `master`, select that instead; the Pages source must match the branch that contains these files. The download uses relative asset paths, so it works inside a GitHub Pages repository subfolder.

## 4. Update later

Edit and save in VS Code → Source Control → stage changed files → enter a commit message → Commit → Sync Changes (or Push). GitHub Pages deploys changes from the selected source branch automatically. Refresh after deployment; use `Ctrl+F5` if your browser shows an older version.

## What's included

- `index.html`: the website, with semantic sections and editable company copy.
- `styles.css`: responsive layout, blue/purple/teal styling, focus states and reduced-motion support.
- `script.js`: collapsible mobile navigation, enquiry-specific WhatsApp links, current footer year.
- `assets/`: company logo, two supplied reference images, and a simple favicon.
- `.nojekyll`: tells GitHub Pages to serve the plain static files.
- `.gitignore`: excludes common temporary files and secrets.

## Contact actions and scope

Phone: +91 78018 01418. WhatsApp: same number. Email: hitechlabtalod@outlook.com.
Address: 3rd Floor, K K Mart Complex, Himatnagar Road, near Sadguru Hospital, Talod, Gujarat – 383215.

Call links open the device's calling app. Email links open an email app. WhatsApp links open a draft enquiry; the patient sends it themselves. They do not automatically send messages or confirm appointments. No contact form, patient database, payment workflow or medical-report storage is included.

Google Maps opens an address/name search, not a verified business pin. Replace it with the laboratory's verified Maps share link when supplied. Desktop computers may need a calling/email application configured.

No online-report portal URL was supplied, so there is no View Reports button. Add the verified external portal link only after the laboratory provides it. Do not add public patient reports to this repository.

## Content to confirm before public launch

The company brief explicitly says the test menu, packages, equipment and collection details need laboratory confirmation. The site uses enquiry language accordingly. Confirm service availability and package inclusions before launch. Package prices, guaranteed reporting times, accreditation claims and opening hours have not been invented.

The brief's laboratory and equipment images are reference illustrations, not verified photographs of the premises or exact installed models. The site labels them as such. Replace them with approved original photos when available, keeping the filenames or updating the image paths. The logo is extracted from the document and has the resolution provided there.

The brief mentions consultation and ECG conditionally; the site asks patients to check availability separately. Test-specific preparation is confirmed with the lab rather than treating a single fasting rule as universal.

## Official setup references

- VS Code: https://code.visualstudio.com/docs/sourcecontrol/repos-remotes
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
