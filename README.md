# dataviz-styleguide
UNHCR branding guidelines and best practices for data visualisation. 

Have a look at the style guide document here: https://unhcr.github.io/dataviz-styleguide/index.html

# Development Workflow

In this project, we use GitHub Issues to track tasks, and Pull Requests to organize and review changes.

To see the site locally, you'll need a local HTTP server, which you can set up with the following steps:

```
npm install http-server -g
cd dataviz-styleguide
http-server
```

Navigate to http://localhost:8080 to view the site. Be sure to open the Chrome developer tools and make sure the cache is disabled (in the Network tab). Otherwise you may be loading old versions of files via browser cache, and not see the latest updates.

## Making a Pull Request

These instructions assume you have access to push this repository.

First, clone this repository to your computer with the following command

`git clone git@github.com:unhcr/dataviz-styleguide.git`

If you haven't already, you'll need to [set up an SSH key in GitHub](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) in order to push your changes back later.

After you've cloned the repository and chosen an issue to work on, create a branch for your work:

`git checkout -b my-branch-name` (replacing "my-branch-name" with your own branch name)

Now you can make changes and commit to this branch. For the commit that closes the issue, you can have the issue automatically close by referencing the issue using the keyword "Closes" followed by the issue number as follows:

```
git add .
git commit -m "Finished doing the thing. Closes #42"
```

To push your branch to the main repository, try the command

`git push`

You will be prompted with a more involved command, which you can use to push that branch. It will look something like this:

`git push --set-upstream origin my-branch`

After this, you can create a new Pull Request by clicking on the button that appears at the top of the README when you view the page. You can also navigate to the branch, and create a Pull Request from there.

For more detailed instructions, see this video [GitHub Collaboration Tutorial](https://www.youtube.com/watch?v=jLWZaFzPS6Q).

## Customizing Semantic UI

Our Semantic UI customizations should be made in files under `semantic/src/themes/unhcr`.

After making any changes, you'll need to run a build step to compile the Semantic UI source into CSS. Here's how to set up your system and run the build step:

```
cd dataviz-styleguide
npm install
cd semantic
gulp build
```

Each time after you make a change, you'll need to run `gulp build`, then refresh the page (make sure cache is turned off so you see the latest).

Each user interface element has its own variables that can be tweaked. For example, variables for buttons can be modified in `semantic/src/themes/unhcr/elements/button.variables`. Here's an [example pull request that customises horizontal padding of buttons](https://github.com/unhcr/dataviz-styleguide/pull/65/files#diff-9407611038769d05929dc94fd85bb090R19). Here's another [example pull request that customises the radio buttons appearance](https://github.com/unhcr/dataviz-styleguide/pull/54/files#diff-36a058ed3b22a726f7b396d03f3b5400R11).

Each element also has an "overrides" file, in which you can add your own CSS rules related to that element. Here's an [example pull request that overrides the color of header and h1 elements](https://github.com/unhcr/dataviz-styleguide/pull/65/files#diff-9e65d7a27b59b21f3bdaf6a590bfaba6R9).

Variables that apply to the entire theme, rather than a specific element, can be found in `semantic/src/themes/unhcr/globals/site.variables`. Here's an [example pull request that modifies the global border radius](https://github.com/unhcr/dataviz-styleguide/pull/53/files).

If you want to see how the variables are being translated into CSS, have a look at the "definitions", for example `semantic/src/definitions/elements/button.less`. Typically we will not need to modify these definition files, only variables, but it's useful to reference these to see how variables are being used.
