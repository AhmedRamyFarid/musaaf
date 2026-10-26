export interface GuideStep {
  number: number;
  title: string;
  description: string;
  warning?: string;
}

export interface GuideSource {
  title: string;
  url: string;
  lastReviewed: string;
  pendingReview?: boolean;
}

export interface Guide {
  id: string;
  slug: string;
  title: string;
  category: GuideCategory;
  icon: string;
  color: string;
  intro: string;
  emergencySummary: string;
  steps: GuideStep[];
  warnings: string[];
  avoidList: string[];
  whenToSeekHelp: string;
  sources: GuideSource[];
}

export type GuideCategory =
  | 'bleeding'
  | 'burns'
  | 'nosebleed'
  | 'choking'
  | 'fainting'
  | 'sprains'
  | 'allergy'
  | 'cpr';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  wrongExplanations: string[];
}

export interface KitItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

