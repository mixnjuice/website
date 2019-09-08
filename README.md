# Mixnjuice - Website

This code generates a static website that serves as the main landing page for the project from the Internet. Its job is to inform, document, and guide users looking to use or contribute to the project.

## Usage

On first install or when dependencies change in `package.json`, run

```sh
npm install
```

To start a local development server on port 8000, run

```sh
npm start
```

To create a production build in the `public/` directory, run

```sh
npm run build
```

## Docker

You need to execute `npm run build` once before running the compose script.

```sh
./init-docker.sh
docker-compose up -d
```

The site should now be available at [http://localhost](http://localhost) and [https://localhost](https://localhost).

### TLS

TLS is available with automatic Let's Encrypt certificate request and renewal. Change `VIRTUAL_HOST=localhost` in `.env`, replacing localhost with your FQDN.

## Libraries

- [Gatsby](https://www.gatsbyjs.org/docs/)
- [Redux](https://redux.js.org/introduction/getting-started)
- [React](https://reactjs.org/docs/getting-started.html#learn-react)
- [bootswatch](https://bootswatch.com/) - currently using the Lux theme
- [redux-saga](https://github.com/redux-saga/redux-saga#getting-started)
- [bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction/)
