// URL de base de ton backend Django
// En dev : http://localhost:8000/api
// En prod : https://ton-domaine.com/api
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// ─── Helpers ────────────────────────────────────────────

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem("access_token");

  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ detail: "Erreur réseau" }));
    throw new Error(error.detail || `Erreur ${res.status}`);
  }

  return res.json();
}

// ─── Authentification ───────────────────────────────────

export interface LoginResponse {
  access: string;
  refresh: string;
}

export interface UserProfile {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
}

export const auth = {
  login: (email: string, password: string) =>
    request<LoginResponse>("/auth/login/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  register: (data: {
    nom: string;
    prenom: string;
    email: string;
    telephone: string;
    password: string;
  }) =>
    request<UserProfile>("/auth/register/", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  },

  getProfile: () => request<UserProfile>("/auth/profile/"),

  isLoggedIn: () => !!localStorage.getItem("access_token"),

  saveTokens: (tokens: LoginResponse) => {
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);
  },
};

// ─── E-books ────────────────────────────────────────────

export interface Ebook {
  id: number;
  title: string;
  description: string;
  price: number;
  cover_url?: string;
}

export const ebooks = {
  list: () => request<Ebook[]>("/ebooks/"),

  get: (id: number) => request<Ebook>(`/ebooks/${id}/`),

  /** E-books achetés par l'utilisateur connecté */
  myEbooks: () => request<Ebook[]>("/ebooks/mes-ebooks/"),
};

// ─── Rendez-vous ────────────────────────────────────────

export interface Appointment {
  id: number;
  motif: string;
  date: string;
  heure: string;
  status: string;
}

export const appointments = {
  create: (data: { motif: string; date: string; heure: string }) =>
    request<Appointment>("/rendez-vous/", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  list: () => request<Appointment[]>("/rendez-vous/"),
};
