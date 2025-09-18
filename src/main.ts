import { env } from '@/infrastructure/environment';
import { openapi } from '@elysiajs/openapi';
import { Server } from 'bun';
import { Elysia } from 'elysia';
import util from 'node:util';

const app = new Elysia();

app.use(
  openapi({
    documentation: {
      info: {
        title: env.NAME,
        description: env.DESCRIPTION,
        version: env.VERSION,
        license: {
          name: 'MIT',
          url: 'https://opensource.org/license/mit/',
        },
        contact: {
          name: 'Rafael Cristian Drigo',
          email: 'rafaeldrigo.rds@gmail.com',
          url: 'https://www.linkedin.com/in/rafaeldrigo/',
        },
      },
    },
  })
);

app.get('/', () => 'Hello Elysia');

app.listen({ port: env.PORT }, (server: Server) => {
  console.log(util.format('🦊 Elysia is running at %s', server.url.href));
});
