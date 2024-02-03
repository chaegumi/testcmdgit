@echo off
:: git add .
:: git commit -m "更新"
:: git branch -M main
:: git remote set-url origin git@github.com:chaegumi/testcmdgit.git
set GIT_SSH_COMMAND=ssh -i "F:\upupw\htdocs\id_rsa"
"H:\Program Files\Git\bin\git.exe" push -u origin main
pause