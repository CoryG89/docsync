# docsync

This is an example project demonstrating how to setup an easy configuration for
keeping your `README.md` automatically synced with a GitHub Pages project
page created using [**one of the great layouts**][1] available when using
[**GitHub's Automatic Page Generator**][2].

## Background

If you haven't set up a project page for your GitHub repository yet, then you
can do so by following the [**instructions found here**][3]. GitHub will provide
a great feature and just before you pick your layout it will give you the chance
to load in your `README.md` for your master branch and edit it before using it
as the content in the layout. The problem I had with this in my project's is
that I wanted to use the `README.md` from my master branch, but I also wanted
it so the project page to stay updated and in sync with the `README.md` 
automatically.

## Relative Links

Here is a [**relative link to a doc file**][7] which should work on project page
as well. Here is [**another relative link to a doc**][8], check out the
[**GitHub Flavored Markup doc**][5] which shows off the stuff that will work if
you use the `markup: redcarpet` option in `_config.yml`.

## How to Easily Sync README.md to Project Page

This project contains a bash script which is used in your project as a 
[**git hook**][4]. Git has support for scripts to hook into and execute when
certain actions are taken on a local git repository. If you create a bash
script named `post-commit` and place it in the directory `.git/hooks/`
within your local repository, it will then be executed after every committ to
that repository.

The `post-commit` script contained in this project is a bash script so you
will need bash it in your path. If you are running Git on Windows, this is in
`bin` subdirectory within your Git program files directory. In order to use the
`post-commit` script here you must already have a project page created with
one of the layouts using the Automatic Page Generator and have set it up using
the following instructions:

 1. `git clone https://github.com/CoryG89/READMEsync.git`
 2. Open your local git repository and change to the `gh-pages` branch.
 3. Create a backup of `gh-pages` in case you botch this setup.
 3. Copy `_layouts` directory from READMEsync to your `gh-pages` branch.
 4. Copy `_config.yml` from READMEsync to your `gh-pages` branch.
 5. Change to `_layouts` directory and change the filename of the desired
    layout to `default.html`.
 6. Remove `index.html` from your `gh-pages` branch. Don't worry our
    `post-commit` script will regenerate our index from your `README.md` in
    your `master` branch.
 7. Add and commit changes to `gh-pages`, and switch to `master` branch.
 8. Copy `post-commit` script from READMEsync to your local repostory's
    `.git/hooks` directory.

That's it, now whenever you make a commit to the `master` branch, the
`README.md` file will automatically be synced to your project page.

[1]: https://github.com/blog/1081-instantly-beautiful-project-pages
[2]: https://help.github.com/articles/creating-pages-with-the-automatic-generator
[3]: https://help.github.com/articles/creating-pages-with-the-automatic-generator#the-automatic-page-generator
[4]: http://git-scm.com/book/en/Customizing-Git-Git-Hooks
[5]: docs/gfm.md
[6]: docs/source.txt
[7]: docs/other.md
[8]: docs/another.md
[9]: docs/gfm.md