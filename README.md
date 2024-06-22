<!-- markdownlint-disable-next-line -->

<h1 align="center">User Management Service</h1>

<div align="center">

[![NodeJS](https://img.shields.io/badge/NodeJS-v20.12.2-darkgreen)](https://nodejs.org/en)
[![ExpressJS](https://img.shields.io/badge/ExpressJS-v4.19.2-lightgrey)](https://expressjs.com/)
[![codecov](https://codecov.io/gh/arashmad/user-management-service/branch/solve_issue_1/graph/badge.svg?token=SH4KKTQLZ3)](https://codecov.io/gh/arashmad/user-management-service)

</div>

<hr />

**User Management Service** is a node/express application that helps us to manage user access to other resources.

### Build docker image

```bash
cd /path/to/repository/root
docker build -t user-management-server:<version> .
```

### Run docker image

```bash
docker run -it -p 3300:3300 user-management-server:<version> .

```
