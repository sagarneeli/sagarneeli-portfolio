export type ApiProfile = {
  name: string;
  title: string;
  summary: string;
  location: string;
  availability: string;
  contact: { email: string; linkedin: string; github: string };
};

export type ApiExperience = {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
};

export type ApiProject = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  impact: string;
  type: "ai" | "backend" | "fullstack" | string;
};

export type ApiSkills = Record<string, string[]>;

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
  const url = `${baseUrl}${path}`;
  const res = await fetch(url, { cache: "no-store", ...init });
  if (!res.ok) throw new Error(`API ${path} failed: ${res.status}`);
  return (await res.json()) as T;
}

export async function getProfile() {
  return fetchJson<ApiProfile>("/api/v1/portfolio/profile");
}

export async function getExperiences() {
  return fetchJson<{ experience: ApiExperience[] }>(
    "/api/v1/portfolio/experience",
  );
}

export async function getProjects() {
  return fetchJson<{ projects: ApiProject[] }>("/api/v1/portfolio/projects");
}

export async function getSkills() {
  return fetchJson<ApiSkills>("/api/v1/portfolio/skills");
}
