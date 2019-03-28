# Front-end Development Project -Ally

## Project Dependencies

Following are the dependencies and packages used in developing this website:

* [Git](http://git-scm.com/) - Source Code Management
* [NodeJS](http://nodejs.org/) - Server-Side JavaScript
* [Gulp](http://gulpjs.com/) - A JavaScript Task Runner
* [jQuery](http://jquery.com/) - The Write Less, Do More JavaScript Library
* [Modernizr](http://modernizr.com/) - Detects HTML5 and CSS3 features in the user’s browser
* [SASS](http://sass.org/) - CSS Pre-Processor

## Setting Up A Development Environment

Not much is needed to get started building inside this project other than a text editor and a
web server, but there are a few prerequisites that you'll have to install to use the build tools.

### Installing Git - only if contributing
Visit the [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)downloads page and
select the installer for your particular environment. Run the installer and you're all set to
start using the Git version control system.

Once you have installed Git, you will need to checkout the source code into your local web root.
For more information on finding your web root, please see the section titled [Viewing Your Local
Website](#lws) below. Once you have identified your web root, open a command-line terminal and
enter the following command:

    $> cd <YOUR_WEB_ROOT>
    $> git clone https://github.com/markjmoyer/mjmoyer-ally

### Installing NodeJS and NPM
Visit the [NodeJS](http://nodejs.org/) website and download the installer for your particular
environment. Run the installer, then verify that Node is installed by running the command
`node -v` from the command-line terminal. NPM, the Node Package Manager, is installed by default
with NodeJS. Once installed, you can install Node Packages using the `npm install` command.

### Installing Gulp
To install Gulp, open a command-line terminal and run the command `npm install --global gulp-cli`. For a more
complete guide to setting up Gulp, visit [Getting Started](https://gulpjs.com/docs/en/getting-started/quick-start) guide. Gulp is used to perform all of the tasks that help make modern websites work: Minification, Concatenation,
Pre-Processing, Linting, Test Running, etc.

    $> npm install -global gulp-cli

### Finishing Your install
Once you have installed Node and Gulp, you're ready to initialize your project by running
"npm install" from the command line inside your target directory.

    $> npm install

### Viewing Your Local Website
Assuming you have setup a local webserver, and assuming that you have cloned the source code for
this project into your web root, you should be able to access the website at:

* [http://127.0.0.1:8080/dist/](http://localhost:8080/dist/index.html)

## Using Gulp Task Runner

### Configuring Gulp
Gulp uses the "gulpfile.js" file located in the root to configure the actions performed when the
`gulp` command is run. Gulp uses the "package.json" file located in the root to set the Application
Name, Version Number and the package dependencies that exist for supporting the commands in the
gulpfile.

### Building with Gulp
From the command-line, in the root directory of the project, run the command `gulp`
Once completed, this task will perform the following actions:

* Compile SASS/SCSS into CSS
* [Lint](http://csslint.net/) your Compiled CSS
* Minify the Compiled CSS into a *.min.css file
* [Lint](http://jshint.com/) your JavaScript
* Concatenate all of the JS into a single file
* Uglify (minify) the JS into a *.min.js file

To run your Gulp tasks, simply do the following:

    $> cd <DIRECTORY_PATH_TO_YOUR_GULPFILE.JS>
    $> gulp

Once executed, Gulp will run through all of the tasks that you have configured, and will output the
results for each step into the command line window.

### Developing with Gulp
While developing applications and websites using Gulp, it's useful to automatically run Gulp tasks
when certain files are modified. In this project, we use "grunt watch" to look for changes in
specific files and perform Grunt build tasks when they are modified. For example, if you edit a
*.scss file in the __/src/assets/scss/__ directory, then the watcher will automatically compile the
SCSS code into CSS, then generate the file into the target distribution directory. When you reload
your browser, your changes are immediately visible as they have been compiled and built in the background.

In order to launch Grunt watch, all you need to do is open a command-line terminal, cd to your working
directory and type `gulp watch`:

    $> cd /Library/WebServer/Documents/nascar-html-cutups/default/
    $> gulp watch
    $> Running "watch" task
    $> Waiting for changes...

&nbsp;

## Website Structure

### Assets
Website resources such as images, stylesheets, JavaScripts, etc. are all located in the Assets
directory in the root of the project. Within the Assets directory, you will find sub-directories
for each of these resources:

#### DIST (Distribution)
Files that have been concatenated, minified and prepared for final inclusion in the website are
stored here in context-specific directories. Files are written here by the Gulp tasks described
above. When authoring CSS or JavaScript, you should never write files directly into this directory.
You will use /src directory instead.

#### SCSS / CSS
When authoring CSS for this project, you should be authoring using SCSS or SASS - writing \*.scss
files into the __/src/assets/scss/__ directory. These files are then parsed into CSS by the Gulp
tasks described above.

#### JavaScript
When authoring JavaScript files for this project, you should be saving those files into the
__/src/assets/js/__ directory, with each file being named appropriate to its behavior or purpose.
When it's time to deploy, these files will be concatenated and minified into one single file,
complete with a version number and stored in the __/dist/assets/dist/js/__ directory.

#### Images
Nothing really special about images in this website, but you should be using \*.png
files as a default. Sometimes a \*.gif or \*.jpg may be required, but by and large
you should be building with \*.png's.

### Node Modules
When you install Node Packages using NPM, those resources will be installed in the __/node_modules/__
directory. For example, the Gulp package that you installed with NPM lives in this location.

### HTML
Your HTML resources are stored in the __/src/__ directory of the website, and once the HTML includes
parser runs, the files are copied into the __/dist/__ directory for deployment. This project uses the
[Gulp Simple Include](https://www.npmjs.org/package/grunt-simple-include) package to enable the use
of includes in static HTML files. By using a similar syntax to the Bower Components declarations, you
can inject HTML or other content directly into your templates during the build process.

    <html>
    <head>
      <title>Page Title</title>
    </head>
    <body>
      <!-- include: 'includes/meta.html' -->
      <!-- include: 'includes/header.html' -->
      <!-- include: 'includes/footer.html' -->
    </body>
    </html>


#### Variables in HTML
You can write variables into your templates. Using the example include
above, we could write the following content into the __meta.html__ file:

    <title>@@title</title>
    <meta name="description" content="@@description">
    <meta name="keywords" content="@@keywords">

Simply by defining the values in our __package.json__ file:

    "title": "NASCAR HTML Cutups",
    "description": "This is an HTML Generator for the NASCAR HTML Cutups",
    "keywords": "NASCAR,nascar.com,HTML,templates",

&nbsp;

#### Issues and/or Corruption
In most cases, simply deleting the entire __/dist/__ folder and running 'gulp' in the command line
will create another __/dist/__ folder. When nothing seems to work, do this. If a new folder is not
created, the issue will undoubtedly be in gulpfile.js

#### Deploying Code

Once Gulp has completed, the code inside the __/dist/__ folder is ready for deployment. Run index.html
from __/dist/__
