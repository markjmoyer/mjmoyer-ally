# Front-end Development Project by Mark

## Project Dependencies

Following are the dependencies and packages used in developing this website:

* [Git](http://git-scm.com/) - Source Code Management
* [NodeJS](http://nodejs.org/) - Server-Side JavaScript
* [Gulp](http://gulpjs.com/) - A JavaScript Task Runner
* [jQuery](http://jquery.com/) - The Write Less, Do More JavaScript Library
* [jQuery Cookie](https://github.com/carhartl/jquery-cookie) - A jQuery Plugin by Klaus Hartl
* [Modernizr](http://modernizr.com/) - Detects HTML5 and CSS3 features in the user’s browser
* [SASS](https://sass-lang.com/) - CSS Pre-Processor utilizing SCSS Syntax

## Setting Up A Development Environment

Not much is needed to get started building inside this project other than a text editor and a
web server, but there are a few prerequisites that you'll have to install to use the build tools.

### Installing Git - only if cloning or contributing
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

    $> npm install -g gulp-cli

### Finishing Your install
Once you have installed Node and Gulp, you're ready to initialize your project by running
"npm install" from the command line inside your target directory. As long as the package.json is
located in the root of your project, npm install will recognize and install each dependency listed.

    $> npm install

### Viewing Your Local Website
I prefer to use an NPM package server called http-server(https://www.npmjs.com/package/http-server). Once
you run the command http-server, the command line will give you the server IP Address(s) which to use.
Assuming you have setup a local webserver, and assuming that you have cloned the source code for
this project into your web root, you should be able to access the website at:

* [http://127.0.0.1:8080/dist/](http://localhost:8080/dist/index.html)

## Using Gulp Task Runner

### Configuring Gulp
Gulp uses "gulpfile.js" located in the root to configure the actions performed when the
`gulp` command is run. Gulp uses the "package.json" file located in the root to set the Application
Name, Version Number and package dependencies that exist for supporting the commands in
gulpfile.js.

### Building with Gulp
From the command-line, in the root directory of the project, run the command `gulp`
Once completed, this task will perform the following actions:

* Compile SASS/SCSS into CSS
* [Lint](http://csslint.net/) your Compiled CSS
* [Minify] the Compiled CSS into a *.min.css file - NOT USED FOR THIS PROJECT
* [Lint](http://jshint.com/) your JavaScript
* [Concatenate] all of the JS into a single file - NOT USED FOR THIS PROJECT
* [Uglify] (minify) the JS into a *.min.js file

To run your Gulp tasks, simply do the following:
    $> cd <DIRECTORY_PATH_TO_YOUR_GULPFILE.JS>
    $> Run `gulp` command

Once executed, Gulp will run through all of the tasks configured, and will output the results for each
step into the command line window. A wonderful perspective.

### Developing with Gulp
While developing applications and websites using Gulp, it's useful to automatically run Gulp tasks
when certain files are modified. In this project, we use "gulp watch" to look for changes in
specific files and perform Gulp build tasks when they are modified. For example, if you edit a
*.scss file in the __/src/assets/scss/__ directory, then the watcher will automatically compile the
SCSS code into CSS, then generate the file into the target distribution __/dist/__ directory. When you reload
your browser, your changes are immediately visible as they have been compiled and built in the background.
Cacheing can be an issue. With debugger window window open, right click the refresh icon in Chrome browser
and click `Empty Cache and Hard Reload`.

I've configured this to run the watch task only by running `gulp' not `gulp watch`. In order to launch gulp
watch, all you need to do is open a command-line terminal, cd to your working directory and type `gulp`,
`gulp watch` is not off limits:

    $> cd / into your project directory /
    $> run `gulp` or `gulp watch`...
    $> Task "watch" running...
    $> Waiting for changes...

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
sass task described above.

#### Data (JSON)
The data consumed by this website. The __/src/__ data folder and contents are copied to __/dist/__

#### JavaScript
When authoring JavaScript files for this project, you should be saving those files into the
__/src/assets/js/__ directory, with each file being named appropriate to its behavior or purpose.
When it's time to deploy, these files will be concatenated and minified into one single file.

#### Images
Nothing really special about images in this website. The __/src/__ image folder and contents are copied
to __/dist/__

### Node Modules
When you install Node Packages using NPM, those resources will be installed in the __/node_modules/__
directory. For example, the Gulp package that you installed with NPM lives in this location. The
node_modules folder is ignored by git. Use your package.json and npm install to get up and running.

### HTML
Your HTML resources are stored in the __/src/__ directory of the website, and once the tasks are run,
the files are copied into the __/dist/__ directory for deployment.

#### Issues and/or Corruption
In most cases, simply deleting the entire __/dist/__ folder and running 'gulp' in the command line
will create another __/dist/__ folder and fix the issue. When nothing seems to work, do this. If a
new folder is not created, the issue will be in gulpfile.js

#### Deploying Code

Once Gulp has completed, the code inside the __/dist/__ folder is ready for deployment. Run index.html
from __/dist/__ ALWAYS TO SEE THE PROJECT. DEVELOP FROM __/src/__.
