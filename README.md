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

 - Here is a [**relative link to a doc file**][7] which should work on project
   page as well. 
 - Here is [**another relative link to a doc**][8].
 - Check out the [**GitHub Flavored Markup doc**][5] which shows off the
   markup that will work if using the `markup: redcarpet` option in
   `_config.yml`.

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

 1. If you already have a gh-pages branch, create a backup in case you botch 
    this setup.
 2. If you don't already have a gh-pages branch go to your repostory page's
    Settings tab and use the [**Automatic Page Generator**][2] to create
    it.
 3. Change to your local repostory's directory and checkout the `gh-pages`
    branch.
 4. Create the directory `_layouts` within your gh-pages branch and move
    `index.html` to the new directory.
 5. Open `index.html` and locate the HTML from the rendered markdown content.
    It is usually located between `<section>` tags or between `<article>`
    tags, delete this text and replace it with the text `{{ content }}`.
 6. Copy the `process-rel-links.js` file from the `docsync` directory to 
    in the `javascripts` directory.
 7. Add the following lines to your `index.html` file. The top jquery script
    is only needed if jquery is not already included in your layout's
    `index.html` already.

    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script src="javascripts/process-rel-links.js" type="text/javascript"></script>

 8. Copy the `index.html` file and use it to create two new files 
    `readme.html` and `docs.html`, these will be the two layouts we will
    use to render our `README.md` file and our other markdown documentation
    in our `docs/*` directory in the `master` branch.
 9. The `readme.html` file will use our base layout, so it will not need any
    modification. However, in order to make relative linking work right, we
    need to open `docs.html` and find the `link` and `script` tags where
    css and javascript files are loaded from the `stylesheets` and
    `javascripts` directories. Because these pages will be in a `docs`
    subdirectory we will have to prepend the text `../` to the path of each of
    the assets.
 10. Add and commit changes to `gh-pages`, and switch to `master` branch.
 11. Copy the `post-commit` script found here in [**CoryG89/docsync**][1]
     to your local repostiory's `.git/hooks` directory.


That's it, now whenever you make a commit to the `master` branch, the
`README.md` file and all the markdown in the `docs` directory of your master
branch will be synced up with the  will automatically be synced to your
project page.

[1]: https://github.com/blog/1081-instantly-beautiful-project-pages
[2]: https://help.github.com/articles/creating-pages-with-the-automatic-generator
[3]: https://help.github.com/articles/creating-pages-with-the-automatic-generator#the-automatic-page-generator
[4]: http://git-scm.com/book/en/Customizing-Git-Git-Hooks
[5]: docs/gfm.md
[6]: docs/source.txt
[7]: docs/other.md
[8]: docs/another.md
[9]: docs/gfm.md