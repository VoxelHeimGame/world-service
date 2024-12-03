import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "World Service").listen(3001);

console.log(
  `🗺️ World Service is running at ${app.server?.hostname}:${app.server?.port}`
);
