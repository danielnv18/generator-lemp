# <%= appName %>

## Description
Here goes you project description

## Requirements
- docker
- docker-composer

## Installation
Next, put your <%= projectType %> application into `docroot` folder and do not forget to add `<%= appName %>.dev` in your `hosts` file.

Make sure you adjust `database_host` in your configuration file to the database container alias "db"

Then, run:

```bash
$ docker-compose up
```

You are done, you can visit your <%= projectType %> application on the following URL: `http://<%= appName %>.dev`

_Note :_ you can rebuild all Docker images by running:

```bash
$ docker-compose build
```
