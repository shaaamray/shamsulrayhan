# Md Shamsul Rayhan Chy — Portfolio

A single page portfolio site built with plain HTML, CSS and JavaScript.
No build step, no framework, no dependencies to install. It is ready to
push straight to GitHub Pages.

## What is in this repository

```
index.html          The page structure
css/styles.css       All styling
js/data.js           Every piece of editable content lives here
js/main.js           Renders the page from js/data.js (you should not need to touch this)
assets/profile.jpg   Your photo
```

## Updating content

Open `js/data.js`. Every section of the site (your bio, experience,
education, projects, publications, certifications, and your email,
LinkedIn and GitHub links) is a plain JavaScript object or array near
the top of that file, with comments explaining each field. Edit the
text, save, commit and push. GitHub Pages rebuilds the live site
automatically within a minute or two.

You do not need to know HTML or CSS to keep this site current. You
only need to edit `js/data.js`.

### Changing the photo

1. Add the new image file into the `assets` folder.
2. In `js/data.js`, set `PROFILE.photo` to that file's name (for
   example `"assets/new-photo.jpg"`).

### Adding a project

Copy one of the existing entries in `FEATURED_PROJECTS` or
`MORE_PROJECTS` inside `js/data.js` and change the values. Leave
`repo` as an empty string for any project that is not public.

### Adding a publication

Copy one of the entries in `PUBLICATIONS` and fill in the title,
venue and a link. Google Scholar does not allow automated reading of
its pages, so the two publications currently listed are the ones
confirmed through other academic indexes (dblp and the ACM digital
library). Open your Scholar profile, and add any remaining papers to
this array the same way.

## Previewing changes on your own computer

No server or build tool is required. Open `index.html` directly in a
browser, or, if you have Python installed, run this from inside the
project folder and visit `http://localhost:8000`:

```
python3 -m http.server 8000
```

## Publishing on GitHub Pages

### 1. Create the repository

Go to [github.com/new](https://github.com/new) while signed in as
`shaaamray`. Note that a repository name does not need to match your
GitHub username. Since your username is `shaaamray`, a repository
literally named `shaamsulrayhan` will not publish at the site root;
it will publish at a sub path instead. The clean option is a
repository named `shamsulrayhan` (matching your name, without
repeating letters), which gives you this address once Pages is
turned on:

```
https://shaaamray.github.io/shamsulrayhan/
```

You already have an existing, largely empty repository called
`shamsulrayhan.github.io` in your account. You could push into that
one instead, but its name will publish your site inside a
`.github.io` folder path (a slightly confusing double `.github.io`
in the address). Creating a fresh repository named `shamsulrayhan`
is the tidier route, and is what these steps assume. Either way
works, choose whichever you prefer.

When creating the repository:
- Name: `shamsulrayhan`
- Visibility: Public (GitHub Pages on a free account requires a
  public repository)
- Do not initialize with a README, license or .gitignore. This
  project already includes its own files.

### 2. Push this project to the new repository

From inside this project folder, run:

```
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/shaaamray/shamsulrayhan.git
git push -u origin main
```

If this is the first time pushing from this computer, GitHub will
ask you to sign in. Use a personal access token as the password if
prompted, since GitHub no longer accepts account passwords over the
command line. You can create one at
[github.com/settings/tokens](https://github.com/settings/tokens).

### 3. Turn on GitHub Pages

1. Open the repository on GitHub.
2. Go to Settings, then Pages, in the left sidebar.
3. Under Build and deployment, set Source to "Deploy from a branch."
4. Set Branch to `main` and the folder to `/ (root)`.
5. Select Save.

GitHub will build the site within a minute or two. Refresh the Pages
settings screen and it will show the live address:

```
https://shaaamray.github.io/shamsulrayhan/
```

### 4. Future updates

Any time you edit a file and want the live site to reflect it:

```
git add .
git commit -m "Describe what changed"
git push
```

The live site updates automatically after each push, usually within
a minute.

## Notes on the current content

- AccessForge is listed as a private repository since it is not
  currently public on GitHub. If you make it public later, add its
  repository link into `js/data.js` and the "Private repository"
  label will be replaced automatically with a working link.
- The publications section lists your two confirmed first author
  papers. Add the remaining papers from your Scholar profile using
  the same format.
- The AISC 2027 paper is shown as current research rather than as a
  formal citation, since it has not been submitted yet.
