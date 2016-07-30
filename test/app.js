'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-lemp:app', function () {
  describe('LEMP enviroment for drupal using php 7.0', function () {
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
        'php/php.ini',
        'README.md'
      ]);
    });
  });

  describe('LEMP enviroment for drupal using php 5.6', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          phpVersion: '5.6',
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
        'php/php.ini',
        'README.md'
      ]);
    });
  });

  describe('LEMP enviroment for drupal using php 5.5', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          phpVersion: '5.5',
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
        'php/php.ini',
        'README.md'
      ]);
    });
  });

  describe('LEMP enviroment for symfony using php 7.0', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          phpVersion: '7.0',
          projectType: 'symfony'
        })
        .toPromise();
    });

    it('creates files', function () {
      assert.file([
        'docker-compose.yml',
        'nginx/Dockerfile',
        'nginx/nginx.conf',
        'nginx/symfony.conf',
        'php/Dockerfile',
        'php/symfony.pool.conf',
        'php/php.ini',
        'README.md'
      ]);
    });
  });

  describe('LEMP enviroment for symfony using php 5.6', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          phpVersion: '5.6',
          projectType: 'symfony'
        })
        .toPromise();
    });

    it('creates files', function () {
      assert.file([
        'docker-compose.yml',
        'nginx/Dockerfile',
        'nginx/nginx.conf',
        'nginx/symfony.conf',
        'php/Dockerfile',
        'php/symfony.pool.conf',
        'php/php.ini',
        'README.md'
      ]);
    });
  });

  describe('LEMP enviroment for symfony using php 5.5', function () {
    before(function () {
      return helpers.run(path.join(__dirname, '../generators/app'))
        .withPrompts({
          phpVersion: '5.5',
          projectType: 'symfony'
        })
        .toPromise();
    });

    it('creates files', function () {
      assert.file([
        'docker-compose.yml',
        'nginx/Dockerfile',
        'nginx/nginx.conf',
        'nginx/symfony.conf',
        'php/Dockerfile',
        'php/symfony.pool.conf',
        'php/php.ini',
        'README.md'
      ]);
    });
  });
});
