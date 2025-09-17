import { Server } from 'bun';
import { Elysia } from 'elysia';

const app = new Elysia();

app.get('/', () => 'Hello Elysia');

app.listen(3333, (server: Server) => {
  console.log(`🦊 Elysia is running at ${server.url.href}`);
});
