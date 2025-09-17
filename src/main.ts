import { env } from '@/infrastructure/environment';
import { swagger } from '@elysiajs/swagger';
import { Server } from 'bun';
import { Elysia } from 'elysia';

const app = new Elysia();

app.use(swagger());

app.get('/', () => 'Hello Elysia');

app.listen({ port: env.PORT }, (server: Server) => {
  console.log(`🦊 Elysia is running at ${server.url.href}`);
});
