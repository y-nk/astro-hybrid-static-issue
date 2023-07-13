import type { APIRoute } from "astro";

export const prerender = false;

export const get: APIRoute = () => {
  return new Response("hello");
};
