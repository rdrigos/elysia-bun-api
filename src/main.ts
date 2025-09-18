import { env } from '@/infrastructure/environment';
import { swagger } from '@elysiajs/swagger';
import { Server } from 'bun';
import { Elysia } from 'elysia';

const app = new Elysia();

app.use(
  swagger({
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
  console.log(`🦊 Elysia is running at ${server.url.href}`);
});
