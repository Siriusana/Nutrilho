import { Hono, type Context } from "hono"; 
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get('/:userId', async (c: Context) => {
  return c.json({ status: "ok" });
});

// Endpoint para salvar dados do usuário
app.post("/make-server-c3d27de3/user/save", async(c: Context) => {
  try {
    const body = await c.req.json();
    const { userId, data } = body;

    if (!userId) {
      return c.json({ error: "userId is required" }, 400);
    }

    // Salvar dados do usuário no KV store
    await kv.set(`user:${userId}`, data);

    return c.json({ 
      success: true, 
      message: "Dados salvos com sucesso" 
    });
  } catch (error: any) {
    console.error("Error saving user data:", error);
    return c.json({ 
      error: "Failed to save user data",
      details: error.message 
    }, 500);
  }
});

// Endpoint para recuperar dados do usuário
app.get("/make-server-c3d27de3/user/:userId", async(c: Context) => {
  try {
    const userId = c.req.param("userId");

    if (!userId) {
      return c.json({ error: "userId is required" }, 400);
    }

    // Recuperar dados do usuário do KV store
    const userData = await kv.get(`user:${userId}`);

    if (!userData) {
      return c.json({ 
        success: true,
        data: null,
        message: "User not found" 
      });
    }

    return c.json({ 
      success: true,
      data: userData 
    });
  } catch (error: any) {
    console.error("Error retrieving user data:", error);
    return c.json({ 
      error: "Failed to retrieve user data",
      details: error.message 
    }, 500);
  }
});

// Endpoint para salvar progresso de atividade
app.post("/make-server-c3d27de3/activity/progress", async (c: Context) => {
  try {
    const body = await c.req.json();
    const { userId, activityId, progress } = body;

    if (!userId || !activityId) {
      return c.json({ error: "userId and activityId are required" }, 400);
    }

    // Salvar progresso da atividade
    await kv.set(`activity:${userId}:${activityId}`, {
      progress,
      lastUpdated: new Date().toISOString()
    });

    return c.json({ 
      success: true, 
      message: "Progresso salvo com sucesso" 
    });
  } catch (error: any) {
    console.error("Error saving activity progress:", error);
    return c.json({ 
      error: "Failed to save activity progress",
      details: error.message 
    }, 500);
  }
});

Deno.serve(app.fetch);