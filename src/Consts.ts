// Gateway API (api.quintilis.org)
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

// Auth Service (auth.quintilis.org) - Login, OAuth2, Register
// Acessado diretamente, sem passar pelo Gateway
export const AUTH_URL = import.meta.env.VITE_AUTH_URL || "http://localhost:9000";

// Forum Frontend (forum.quintilis.org)
export const FORUM_URL = import.meta.env.VITE_FORUM_URL || "http://localhost:3000";

// Map Frontend (map.quintilis.org)
export const MAP_URL = import.meta.env.VITE_MAP_URL || "http://localhost:3001";

// Rotas de API
export const API_AUTH_ROUTES = `${AUTH_URL}/auth`; // Direto no Auth Service (ex: /auth/register)
export const API_OAUTH2_ROUTES = `${AUTH_URL}/oauth2`; // Endpoints OAuth2 (ex: /oauth2/token)
export const API_FORUM_ROUTES = `${API_URL}/api/forum`; // Via Gateway
