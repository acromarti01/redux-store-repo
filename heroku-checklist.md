# Heroku Deployment Checklist

## Steps

- `git init` => initialize empty git repo
- `process.env.PORT || 3000` ensure port is setup dynamically
- `heroku create` creates a new herok app
- `git remote -v` ensure that heroku is listed as a remote (both push/fetch)
- `git status --ignored` ensure node_modules are ignored
- `git add -A`
- `git commit -m "initial commit"`
- `git push heroku main` push to the heroku remote/deploy app
- `heroku open` will open the app in the browser
- if there are errors => `heroku logs` will show the details you need
