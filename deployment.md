# Marketing Website Code Deployment process on server
1. Go to Master Branch in your local repo
2. Take a Git pull and update your local code
3. Now You need any FTP client to connect to server (Recommended FileZila or
Winscp)
1. Create a new site in FTP
2. Add host- `3.15.8.255 (Production)`
3. Add `username- ubuntu , port- 22`
4. Browse .PEM or .PPK to supply credentials
5. Hit save and then connect
6. Now you will enter into the server where you have to get into `/var/www/html`
7. Then upload the code from your local repo to inside the /html folder on the
server
