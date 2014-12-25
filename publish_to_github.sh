# to delete the remote branch when it cannot be pushed (rejected)
#git push origin `git subtree split --prefix dist gh-pages`:gh-pages --force
git subtree push --prefix dist origin gh-pages
