'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-lemp:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        phpVersion: '7.0',
        projectType: 'drupal'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'docker-compose.yml',
      'nginx/Dockerfile',
      'nginx/nginx.conf',
      'nginx/drupal.conf',
      'php/Dockerfile',
      'php/drupal.pool.conf',
      'php/php.ini'
    ]);
  });
});
