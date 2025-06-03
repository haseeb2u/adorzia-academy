// Legacy course types - keeping for backward compatibility
// New LMS types are in src/types/lms.ts

import { Certification, Module as LMSModule, StyleBoxChallenge as LMSStyleBoxChallenge } from './lms';

export interface LearningResource {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'quiz' | 'challenge';
  content: string;
  duration?: number; // in minutes
  url?: string;
}

export interface VideoLecture extends LearningResource {
  type: 'video';
  transcript?: string;
}

export interface ReadingMaterial extends LearningResource {
  type: 'reading';
  author?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation?: string;
}

export interface Quiz extends LearningResource {
  type: 'quiz';
  questions: QuizQuestion[];
  passingScore: number;
}

export interface StyleBoxChallenge extends LearningResource {
  type: 'challenge';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  requirements: string[];
  evaluation: {
    autoFeedback?: boolean;
    peerReview?: boolean;
    expertAssessment?: boolean;
  };
}

export interface ModuleBadge {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface ModuleComment {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  content: string;
  timestamp: string;
  likes: number;
  replies?: ModuleComment[];
}

export interface EnhancedModule {
  id: string;
  title: string;
  description: string;
  resources: LearningResource[];
  videoLectures: VideoLecture[];
  readings: ReadingMaterial[];
  quizzes: Quiz[];
  challenge: StyleBoxChallenge;
  badge?: ModuleBadge;
  forum?: {
    discussions: ModuleComment[];
    liveQAsessions?: {
      id: string;
      date: string;
      time: string;
      host: string;
      topic: string;
    }[];
  };
  completed?: boolean;
  evaluationSystem: {
    autoFeedback: boolean;
    peerReview: boolean;
    expertAssessment: boolean;
  };
  duration: number; // in hours
  order: number;
}

export interface EnhancedCourse {
  id: string;
  title: string;
  level: string;
  emoji: string;
  objective: string;
  access: {
    type: 'Registered' | 'Paid' | 'Exclusive';
    description: string;
  };
  modules: EnhancedModule[];
  certification: boolean;
  progress?: number;
  communityForums?: boolean;
  liveQAsessions?: boolean;
  badgesSystem?: boolean;
  instructors?: {
    id: string;
    name: string;
    avatar: string;
    bio: string;
    expertise: string[];
  }[];
}

// Adorzia Certification Courses - Legacy type, migrate to new Certification type
export interface AdorziaCourse {
  id: string;
  title: string;
  acronym: string; // e.g., ACFD, ACTI, etc.
  description: string;
  level: 'Professional';
  duration: string; // e.g., "16 weeks"
  category: 'Certification' | 'Masterclass' | 'Pro';
  features: string[];
  styleBoxChallenges: string[];
}

export interface User {
  name: string;
  email: string;
  role: 'admin' | 'student' | 'guest';
}

// Interface for Auth context
export interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
}

// Type for module form data (needed for ModuleFormList.tsx)
export interface ModuleFormData {
  id: string;
  title: string;
  description: string;
  duration: number;
  order: number;
}

// Type aliases for migration to new LMS system
export type LMSCertification = Certification;
export type LMSModule = LMSModule;
export type LMSStyleBoxChallenge = LMSStyleBoxChallenge;
