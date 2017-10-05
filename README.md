# dataviz-styleguide
UNHCR branding guidelines and best practices for data visualisation. 

Have a look at the style guide document here: https://unhcr.github.io/dataviz-styleguide/index.html

# Development Workflow

In this project, we use GitHub Issues to track tasks, and Pull Requests to organize and review changes.

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
