@echo off
setlocal
cd /d "%~dp0"

git add -A
git diff --cached --quiet
if %errorlevel%==0 exit /b 0

git commit -m "Mise a jour automatique"
if errorlevel 1 exit /b 1

git push origin main
exit /b %errorlevel%