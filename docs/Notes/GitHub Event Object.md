# GitHub Event Object
*Created* : 15-05-2023 19:43
<br>*Tags* : #YAML #JSON #Events #GitHub #CICD #Actions 
---
## Sample
### Script
``` YAML title="context_ci.yml"
name: Print GitHub Event object

on:
  push:
    branches: "*"
  
  issues:
    types: [opened]

  workflow_dispatch:

jobs:
  print-event-object:
    runs-on: ubuntu-latest
    steps:
      - name: Print Github Context
        run: echo '${{ toJSON(github.event)}}' | jq
        shell: bash
```

### Output

``` JSON title="output.json"
{
    "after":"28755012b0e680c7278f903427d22d1425a14e1b",
    "base_ref":null,
    "before":"3af75458834c86178190127f3c89e8df63744948",
    "commits":[
        {
            "author":{
                "email":"12345678+USERNAME@users.noreply.github.com",
                "name":"USERNAME",
                "username":"USERNAME"
            },
            "committer":{
                "email":"noreply@github.com",
                "name":"GitHub",
                "username":"web-flow"
            },
            "distinct":true,
            "id":"28755012b0e680c7278f903427d22d1425a14e1b",
            "message":"Update context.yml",
            "timestamp":"2023-05-15T20:16:06+02:00",
            "tree_id":"9fe76a2692641426e65c3d511c37a7dc65c6c3f9",
            "url":"https://github.com/ORGANIZATION-NAME/REPOSITORY-NAME/commit/28755012b0e680c7278f903427d22d1425a14e1b"
        }
    ],
    "compare":"https://github.com/ORGANIZATION-NAME/REPOSITORY-NAME/compare/3af75458834c...28755012b0e6",
    "created":false,
    "deleted":false,
    "forced":false,
    "head_commit":{
        "author":{
            "email":"12345678+USERNAME@users.noreply.github.com",
            "name":"USERNAME",
            "username":"USERNAME"
        },
        "committer":{
            "email":"noreply@github.com",
            "name":"GitHub",
            "username":"web-flow"
        },
        "distinct":true,
        "id":"28755012b0e680c7278f903427d22d1425a14e1b",
        "message":"Update context.yml",
        "timestamp":"2023-05-15T20:16:06+02:00",
        "tree_id":"9fe76a2692641426e65c3d511c37a7dc65c6c3f9",
        "url":"https://github.com/ORGANIZATION-NAME/REPOSITORY-NAME/commit/28755012b0e680c7278f903427d22d1425a14e1b"
    },
    "organization":{
        "avatar_url":"https://avatars.githubusercontent.com/u/86059232?v=4",
        "description":"Facade automation",
        "events_url":"https://api.github.com/orgs/ORGANIZATION-NAME/events",
        "hooks_url":"https://api.github.com/orgs/ORGANIZATION-NAME/hooks",
        "id":86059232,
        "issues_url":"https://api.github.com/orgs/ORGANIZATION-NAME/issues",
        "login":"ORGANIZATION-NAME",
        "members_url":"https://api.github.com/orgs/ORGANIZATION-NAME/members{/member}",
        "node_id":"MDEyOk9yZ2FuaXphdGlvbjg2MDU5MjMy",
        "public_members_url":"https://api.github.com/orgs/ORGANIZATION-NAME/public_members{/member}",
        "repos_url":"https://api.github.com/orgs/ORGANIZATION-NAME/repos",
        "url":"https://api.github.com/orgs/ORGANIZATION-NAME"
    },
    "pusher":{
        "email":"12345678+USERNAME@users.noreply.github.com",
        "name":"USERNAME"
    },
    "ref":"refs/heads/main",
    "repository":{
        "allow_forking":false,
        "archive_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/{archive_format}{/ref}",
        "archived":false,
        "assignees_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/assignees{/user}",
        "blobs_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/git/blobs{/sha}",
        "branches_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/branches{/branch}",
        "clone_url":"https://github.com/ORGANIZATION-NAME/REPOSITORY-NAME.git",
        "collaborators_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/collaborators{/collaborator}",
        "comments_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/comments{/number}",
        "commits_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/commits{/sha}",
        "compare_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/compare/{base}...{head}",
        "contents_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/contents/{+path}",
        "contributors_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/contributors",
        "created_at":1676900866,
        "default_branch":"main",
        "deployments_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/deployments",
        "description":null,
        "disabled":false,
        "downloads_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/downloads",
        "events_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/events",
        "fork":true,
        "forks":0,
        "forks_count":0,
        "forks_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/forks",
        "full_name":"ORGANIZATION-NAME/REPOSITORY-NAME",
        "git_commits_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/git/commits{/sha}",
        "git_refs_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/git/refs{/sha}",
        "git_tags_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/git/tags{/sha}",
        "git_url":"git://github.com/ORGANIZATION-NAME/REPOSITORY-NAME.git",
        "has_discussions":false,
        "has_downloads":true,
        "has_issues":true,
        "has_pages":false,
        "has_projects":true,
        "has_wiki":false,
        "homepage":null,
        "hooks_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/hooks",
        "html_url":"https://github.com/ORGANIZATION-NAME/REPOSITORY-NAME",
        "id":604174499,
        "is_template":false,
        "issue_comment_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/issues/comments{/number}",
        "issue_events_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/issues/events{/number}",
        "issues_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/issues{/number}",
        "keys_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/keys{/key_id}",
        "labels_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/labels{/name}",
        "language":"C#",
        "languages_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/languages",
        "license":null,
        "master_branch":"main",
        "merges_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/merges",
        "milestones_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/milestones{/number}",
        "mirror_url":null,
        "name":"REPOSITORY-NAME",
        "node_id":"R_kgDOJAL4ow",
        "notifications_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/notifications{?since,all,participating}",
        "open_issues":0,
        "open_issues_count":0,
        "organization":"ORGANIZATION-NAME",
        "owner":{
            "avatar_url":"https://avatars.githubusercontent.com/u/86059232?v=4",
            "email":"info@nodoubts.de",
            "events_url":"https://api.github.com/users/ORGANIZATION-NAME/events{/privacy}",
            "followers_url":"https://api.github.com/users/ORGANIZATION-NAME/followers",
            "following_url":"https://api.github.com/users/ORGANIZATION-NAME/following{/other_user}",
            "gists_url":"https://api.github.com/users/ORGANIZATION-NAME/gists{/gist_id}",
            "gravatar_id":"",
            "html_url":"https://github.com/ORGANIZATION-NAME",
            "id":86059232,
            "login":"ORGANIZATION-NAME",
            "name":"ORGANIZATION-NAME",
            "node_id":"MDEyOk9yZ2FuaXphdGlvbjg2MDU5MjMy",
            "organizations_url":"https://api.github.com/users/ORGANIZATION-NAME/orgs",
            "received_events_url":"https://api.github.com/users/ORGANIZATION-NAME/received_events",
            "repos_url":"https://api.github.com/users/ORGANIZATION-NAME/repos",
            "site_admin":false,
            "starred_url":"https://api.github.com/users/ORGANIZATION-NAME/starred{/owner}{/repo}",
            "subscriptions_url":"https://api.github.com/users/ORGANIZATION-NAME/subscriptions",
            "type":"Organization",
            "url":"https://api.github.com/users/ORGANIZATION-NAME"
        },
        "private":true,
        "pulls_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/pulls{/number}",
        "pushed_at":1684174566,
        "releases_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/releases{/id}",
        "size":43630,
        "ssh_url":"git@github.com:ORGANIZATION-NAME/REPOSITORY-NAME.git",
        "stargazers":0,
        "stargazers_count":0,
        "stargazers_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/stargazers",
        "statuses_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/statuses/{sha}",
        "subscribers_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/subscribers",
        "subscription_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/subscription",
        "svn_url":"https://github.com/ORGANIZATION-NAME/REPOSITORY-NAME",
        "tags_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/tags",
        "teams_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/teams",
        "topics":[
            
        ],
        "trees_url":"https://api.github.com/repos/ORGANIZATION-NAME/REPOSITORY-NAME/git/trees{/sha}",
        "updated_at":"2023-02-20T16:38:34Z",
        "url":"https://github.com/ORGANIZATION-NAME/REPOSITORY-NAME",
        "visibility":"private",
        "watchers":0,
        "watchers_count":0,
        "web_commit_signoff_required":false
    },
    "sender":{
        "avatar_url":"https://avatars.githubusercontent.com/u/12345678?v=4",
        "events_url":"https://api.github.com/users/USERNAME/events{/privacy}",
        "followers_url":"https://api.github.com/users/USERNAME/followers",
        "following_url":"https://api.github.com/users/USERNAME/following{/other_user}",
        "gists_url":"https://api.github.com/users/USERNAME/gists{/gist_id}",
        "gravatar_id":"",
        "html_url":"https://github.com/USERNAME",
        "id":12345678,
        "login":"USERNAME",
        "node_id":"MDQ6VXNlcjUwNzAzNzcz",
        "organizations_url":"https://api.github.com/users/USERNAME/orgs",
        "received_events_url":"https://api.github.com/users/USERNAME/received_events",
        "repos_url":"https://api.github.com/users/USERNAME/repos",
        "site_admin":false,
        "starred_url":"https://api.github.com/users/USERNAME/starred{/owner}{/repo}",
        "subscriptions_url":"https://api.github.com/users/USERNAME/subscriptions",
        "type":"User",
        "url":"https://api.github.com/users/USERNAME"
    }
}
```


## References
1. [Bassem Dghaidi - Issue Comment](https://gist.github.com/Link-/f817f7523a3ac5de6861efd7be6bc3fb)

---
## Read Also
