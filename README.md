# HIWI_Interaktive_Grafik

## Getting started
These instructions will get you a copy of the project and show you how to running it on your local machine for development and testing purposes.

This project creates an interactive graphic from a data set. For security reasons most browsers will not allow loading data through external sources unless you're on a server. This forces you to set up a local server on your machine.

There are several ways to easily start a local server on your computer. Here two possible ways are described.

### 1. Use python
Make sure you've python and pip installed. Before you go any further, make sure you have Python and that it’s available from your command line. You can check this by simply running:

`python --version`

You should get some output like 3.6.2. If you do not have Python, please install the latest 3.x version from https://www.python.org

Additionally, you’ll need to make sure you have pip available. You can check this by running:

`pip --version`

If you installed Python from source, with an installer from python.org, you should already have pip.


Now open the command prompt and enter the follwing commands in your terminal:

#### Switch to project location
`cd src`
#### Run local server
`python -m http`

![alt Run Python server](https://github.com/19JeHe92/HIWI_Interaktive_Grafik/blob/master/howto/img/python_server.JPG)
### 2. Use XAMPP
Make sure you've XAMPP installed. If you do not have XAMPP, please install the latest version from https://www.apachefriends.org/de

#### Start Apache server
![alt Run Apache server](https://github.com/19JeHe92/HIWI_Interaktive_Grafik/blob/master/howto/img/apache_server.JPG)
#### Run local server
![alt Run Apache server](https://github.com/19JeHe92/HIWI_Interaktive_Grafik/blob/master/howto/img/apache_server(2).JPG)
#### Copy data into correct directory
![alt Copy data into correct directory](https://github.com/19JeHe92/HIWI_Interaktive_Grafik/blob/master/howto/img/apache_server_dir.JPG)
...

## Running the Application on browser
No matter which way you started the server, now enter URL `localhost:8000` (or only `localhost` when you're using XAMPP) into the address bar of your browser. (Localhost means the file is coming from your computer and not from an external server).

The project should now be displayed in the browser window.
![alt Project in browser](https://github.com/19JeHe92/HIWI_Interaktive_Grafik/blob/master/howto/img/browser_project.JPG)

## Change data
