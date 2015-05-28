# Laravel 5.0 Boilerplate With Bower, BrowserSync, Bootstrap-SASS and Mailcatcher

This is the Laravel 5.0 boilerplate I work with on my internal projects. It includes:

  - Bower for front end package management. Files are placed in the /resources/assets/bower directory
  - BrowserSync for rapid application development and testing. See below for setup instructions.
  - Bootstrap-SASS - prefer SASS implementation over LESS, installed via bower and can be easily removed.
  - Mailcatcher - Catches outbound email - see below for usage instructions.
  - Standard files - CHANGELOG.md and README.md
  
It is intended to be used with Homestead, but should be fairly compatible across any VM / LAMP installation.

## Project Setup and Usage

To use this boilerplate, do the following: 

1. Clone the repo.
2. Alter `CHANGELOG.md` and `README.md`.
3. Update `gulpfile.js` with correct hostname for site.
4. Copy `.env.example` file to `.env` and update vars as appropriate.
5. SSH into installation
6. Run `$ ./setup.sh` to setup Mailcatcher
7. Run `$ npm install` to install dependancies.
8. Run `$ gulp watch` to start developing.
9. To run Mailcatcher - `$ mailcatcher --ip 192.168.10.10`

### Version
1.0.0