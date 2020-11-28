# Merge back bot

Automatically merge back commits from your primary branch into other branches.

## Current status: in development

This project is not working yet, at all. Please come back later.

# Configuration

You need to run the `enrise/merge-back-bot:latest` container. Configuration is done via environment variables.

## Environment variables

| Environment variable  | Default value    | Example value                                 |
| --------------------- | ---------------- | --------------------------------------------- |
| `MBB_GIT_REPO`        | -                | `git@github.com:my-user/my-project.git`       |
| `MBB_GIT_BRANCH`      | `master`         | `main`                                        |
| `MBB_GIT_NAME`        | `Merge Back Bot` | `MyBot`                                       |
| `MBB_GIT_EMAIL`       | -                | `my-git-email@my-email.com`                   |
| `MBB_GIT_PRIVATE_KEY` | -                | [private key example](https://bit.ly/2Va0yGy) |

## .gitlab-ci.yml example

In your .gitlab-ci.yml, add the following stage:

```yml
stages:
    # All your previous stages go here
    - merge back # End with a merge-back
```

And the following job in that stage:

```yml
# ======================
# Merge back master
# ======================

update branches:
    image: enrise/merge-back-bot:latest
    stage: merge back
    only:
        - master # add: "@namespace/project-name" to it to make sure it doesn't run on forks
    script:
        - merge-back-bot
```

# Plugins

You can optionally run extra plugins to be better notified about the status of the merge back bot. Enable plugins via
environment variables.

## Slack notifications (not working yet)

Post a summary of branches merged back by the bot. Failed branches will be highlighted.

| Environment variable | Default value | Example value                                    |
| -------------------- | ------------- | ------------------------------------------------ |
| `MBB_SLACK_ENABLED`  | `false`       | `true`                                           |
| `MBB_SLACK_WEBHOOK`  | -             | `"https://hooks.slack.com/services/xxx/xxx/xxx"` |
| `MBB_SLACK_CHANNEL`  | -             | `"#my-project"`                                  |

## GitLab MR comments (not working yet)

Leaves a comment on your MR when the merge back has failed. This could happen when there's a merge conflict.

| Environment variable    | Default value | Example value                     |
| ----------------------- | ------------- | --------------------------------- |
| `MBB_GITLAB_ENABLED`    | `false`       | `true`                            |
| `MBB_GITLAB_API_URL`    | -             | `"https://gitlab.com/api/v4/"`    |
| `MBB_GITLAB_PROJECT_ID` | -             | `123`                             |
| `MBB_GITLAB_USERNAME`   | -             | `"my-username"`                   |
| `MBB_GITLAB_PASSWORD`   | -             | `"my-password"` (or access token) |
