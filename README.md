# MeloraLiving

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.2.4.

## Development server

Run these commands from the project folder. On a fresh clone, install dependencies first:

```bash
npm ci
```

To start the website locally:

```bash
npx ng serve --open
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Publish updates to GitHub Pages

After making and checking changes locally, build the latest website and publish it:

```bash
npx ng build --configuration production --base-href=/melora-living/
npx angular-cli-ghpages --dir=dist/melora-living/browser
```

Run the deployment command only after the build succeeds. Git must be authenticated with permission to push to the repository's `origin` remote.

The website is available at [https://zebdron.github.io/melora-living/](https://zebdron.github.io/melora-living/). Wait for GitHub Pages to finish publishing, then refresh the page.

In the GitHub repository's **Settings → Pages**, keep these settings:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

Keep source code on `main`; the deployment command publishes the compiled website to `gh-pages`. Pushing source changes to `main` does not publish them. No custom pipeline is required.

Commit and push your source changes separately to keep them backed up on GitHub.

### When using meloraliving.in

Once the custom domain and its DNS records are configured, use these commands instead:

```bash
npx ng build --configuration production --base-href=/
npx angular-cli-ghpages --dir=dist/melora-living/browser --cname=meloraliving.in
```

Keep using `--cname=meloraliving.in` on subsequent deployments to preserve the custom-domain file.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
