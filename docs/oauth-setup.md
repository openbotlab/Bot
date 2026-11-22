# OpenBot OAuth setup

SetupBot is a static preview. Its GitHub Bot entry is part of the bot catalog. Configure OAuth in the OpenBot backend and use that repository to confirm environment variable names and callback paths.

| Integration | Provider configuration to verify |
| --- | --- |
| Gmail | Gmail API enabled in Google Cloud. Confirm the OAuth client and scopes for the Gmail actions OpenBot supports. |
| Google Drive | Google Drive API enabled in Google Cloud. Confirm the OAuth client and scopes for the Drive actions OpenBot supports. |
| Google Calendar | Google Calendar API enabled in Google Cloud. Confirm the OAuth client and scopes for the Calendar actions OpenBot supports. |
| GitHub | Confirm whether the backend expects a GitHub App or an OAuth App. Register its callback and configure its repository permissions or OAuth scopes. |

## Setup checklist

- [ ] Locate the authorization routes, callback handlers, and environment configuration in the OpenBot backend.
- [ ] Confirm whether the Google integrations share an OAuth client. Review consent screen settings and test-user access for each Google project in use.
- [ ] Register the backend callback URLs with each provider. Match the scheme, hostname, and path for each environment.
- [ ] Set the backend's required configuration in the deployment environment. Store client secrets server-side. Record variable names in the environment template and keep credential values out of source control.
- [ ] Test connect, callback, and an authorized API request for each integration. Test refresh and disconnect where the backend supports them.
