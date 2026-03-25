export type View = 'tavern' | 'quests' | 'guild' | 'diary' | 'loot' | 'profile' | 'register';

export interface Quest {
  id: string;
  day: string;
  title: string;
  description: string;
  time: string;
  difficulty: string;
  tag: string;
  status: 'live' | 'scheduled';
  image: string;
  reminder: boolean;
}

export interface Member {
  id: string;
  name: string;
  role: string;
  title: string;
  description: string;
  avatar: string;
  status: string;
  type: 'council' | 'kingdom';
  tags: string[];
}

export interface LootItem {
  id: string;
  title: string;
  priority: 'critical' | 'normal' | 'low';
  status: 'ideas' | 'editing' | 'ready';
  image: string;
  assignee?: string;
  progress?: number;
  time?: string;
}
