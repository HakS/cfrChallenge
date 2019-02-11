# Docker instance for CFR Challenge

## Usage
Install Docker.
* Mac: https://store.docker.com/editions/community/docker-ce-desktop-mac

From the root of this directory, do
```
docker-compose -f docker-compose.yml up
```
This sets up a full Drupal site at http://localhost:8080

The admin user and password for the site are 'admin'.

The subtheme is "Bootstrap 3"

I pushed css/main.css, however if by some reason you want to verify if gulp is working, you can do
- npm install
- npm start
