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

The subtheme is "Bootstrap 3", install it and set as default

I pushed `css/main.css`, however if by some reason you want to verify if gulp is working, you can do
- `npm install`
- `npm start`

## Solving the challenge

### Create a Drupal 8 theme that uses Drupal Bootstrap as a base theme.
- Installed Drupal Bootstrap (this theme uses Bootstrap 3, for Bootstrap 4 another base theme is recommended)
- Created an NPM workspace with Bootstrap Sass as dependency, and Gulp
- Created a Gulp configuration file to build and watch SCSS files

### Make the background for the site light blue with a gradient to dark blue at the bottom of the page.
- Created a folder and a file dedicated only to custom CSS `_bs3.scss`
- Used _default_variables to override whatever colors I could override
- In `_bs3.scss` I wrote the background styles

### Change the title for all pages that display a non-blank title (e.g. node pages) to "This page is named: [page title]"
- I duplicated `page-title.html.twig` to determine when to render the title
- The thing is : there are some pages that doesn't have a title, yet twig still considers there is one even if its empty (this still requires fix)

### On Article pages, there is an image field provided. Mask the main image with a grey box.  When the mouse hovers over the image, remove the mask.
- I created the styles for this to work at `_bs3.scss`
