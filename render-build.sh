#!/usr/bin/env bash
set -o errexit

# Update and install dependencies for Chrome
apt-get update -y && apt-get install -y wget gnupg2

# Add Google Chrome's GPG key and repository
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | tee /etc/apt/sources.list.d/google-chrome.list
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome.gpg

# Install Google Chrome
apt-get update -y && apt-get install -y google-chrome-stable