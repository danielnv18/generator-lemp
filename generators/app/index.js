'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ace ' + chalk.red('LEMP') + ' generator!'
    ));

    var prompts = [
      {
        type: 'list',
        name: 'phpVersion',
        message: 'Which version of php you like to to use?',
        choices: ['7.0', '5.6', '5.5'],
        default: '7.0'
      },
      {
        type: 'list',
        name: 'projectType',
        message: 'Which version of php you like to to use?',
        choices: ['drupal', 'symfony'],
        default: 'drupal'
      },
      {
        type: 'input',
        name: 'mysqlDatabase',
        message: 'What\'s the name of your database?',
        default: this.appname
      }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    // Docker
    this.fs.copyTpl(
      this.templatePath('docker-compose.yml'),
      this.destinationPath('docker-compose.yml'),
      {
        mysqlDatabase: this.props.mysqlDatabase,
        appName: this.appname
      }
    );

    // NGINX
    this.fs.copyTpl(
      this.templatePath('nginx/Dockerfile'),
      this.destinationPath('nginx/Dockerfile'),
      {projectType: this.props.projectType}
    );
    this.fs.copyTpl(
      this.templatePath('nginx/lemp.conf'),
      this.destinationPath('nginx/' + this.props.projectType + '.conf'),
      {
        projectType: this.props.projectType,
        appName: this.appname
      }
    );
    this.fs.copy(
      this.templatePath('nginx/nginx.conf'),
      this.destinationPath('nginx/nginx.conf')
    );

    // PHP
    this.fs.copyTpl(
      this.templatePath('php/Dockerfile'),
      this.destinationPath('php/Dockerfile'),
      {
        projectType: this.props.projectType,
        phpVersion: this.props.phpVersion
      }
    );
    this.fs.copyTpl(
      this.templatePath('php/lemp.pool.conf'),
      this.destinationPath('php/' + this.props.projectType + '.pool.conf'),
      {projectType: this.props.projectType}
    );
    this.fs.copy(
      this.templatePath('php/php.ini'),
      this.destinationPath('php/php.ini')
    );
  }
});
