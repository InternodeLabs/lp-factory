export interface AuthorProfile {
  id: string;
  name: string;
  role: string;
  url: string;
  linkedin: string;
  bio: string;
}

export const AUTHORS: Record<string, AuthorProfile> = {
  istvan: {
    id: "istvan",
    name: "Istvan Lorincz",
    role: "Co-founder and CEO",
    url: "https://internode.ai",
    linkedin: "https://www.linkedin.com/in/lorinczistvan/",
    bio: "Istvan co-founded Internode to give teams a real organizational memory that AI agents can read, write, and reason over. He writes about decision memory, memory-aware drafting, and the gap between vector-database retrieval and structured team context.",
  },
  sean: {
    id: "sean",
    name: "Sean Shadmand",
    role: "Co-founder and President",
    url: "https://internode.ai",
    linkedin: "https://www.linkedin.com/in/seanshadmand/",
    bio: "Sean co-founded Internode and focuses on how organizational memory changes the way teams coordinate across meetings, calls, and chat. He writes about institutional memory, the economics of knowledge loss, and why bolt-on AI on top of legacy knowledge tools keeps failing.",
  },
  balazs: {
    id: "balazs",
    name: "Balazs Ketyi",
    role: "Co-founder and CPO",
    url: "https://internode.ai",
    linkedin: "https://www.linkedin.com/in/balazsketyi/",
    bio: "Balazs co-founded Internode and leads product. He writes about agent memory, work-breakdown structures grounded in org knowledge, and what has to be true for AI to genuinely assist project managers instead of generating more text to read.",
  },
};

export const FOUNDERS: AuthorProfile[] = [AUTHORS.istvan, AUTHORS.sean, AUTHORS.balazs];

export function getAuthorByName(name: string): AuthorProfile | undefined {
  const match = Object.values(AUTHORS).find(
    (author) => author.name.toLowerCase() === name.toLowerCase(),
  );
  return match;
}

export function getAuthorById(id: string): AuthorProfile | undefined {
  return AUTHORS[id as keyof typeof AUTHORS];
}
