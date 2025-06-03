
// Core LMS Data Models for Adorzia Academy Platform

export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type CategoryType = 'Fashion Design' | 'Pattern Making' | 'Textile Design' | 'Business' | 'Technology' | 'Sustainability';
export type SubmissionFormat = 'image' | 'document' | 'video' | '3d-file' | 'pdf' | 'sketch';
export type ContentStatus = 'draft' | 'review' | 'published' | 'archived';
export type UserRole = 'learner' | 'instructor' | 'reviewer' | 'admin';
export type ReviewType = 'automated' | 'manual' | 'peer-review';

// Asset and Badge Management
export interface BadgeAsset {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  criteria: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CertificateAsset {
  id: string;
  templateUrl: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

// Certification Management
export interface CertificationPrerequisite {
  certificationId: string;
  title: string;
  required: boolean;
}

export interface CertificationVersion {
  id: string;
  version: string;
  changes: string[];
  createdAt: string;
  createdBy: string;
  status: ContentStatus;
}

export interface Certification {
  id: string;
  title: string;
  acronym: string; // e.g., ACFD, ACTI
  description: string;
  detailedDescription?: string;
  difficultyLevel: DifficultyLevel;
  category: CategoryType;
  trackAssignment?: string;
  
  // Relationships
  moduleIds: string[];
  prerequisites: CertificationPrerequisite[];
  
  // Assets
  badgeAsset?: BadgeAsset;
  certificateAsset?: CertificateAsset;
  
  // Metadata
  estimatedDuration: number; // in hours
  status: ContentStatus;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  
  // Versioning
  currentVersion: string;
  versions: CertificationVersion[];
  
  // Settings
  passingScore: number; // percentage
  allowRetakes: boolean;
  maxRetakes?: number;
  validityPeriod?: number; // in months
}

// Theory Content Types
export interface TheoryContent {
  id: string;
  type: 'text' | 'image' | 'video' | 'pdf' | 'external-link';
  title: string;
  content: string; // HTML content or URL
  duration?: number; // for videos, in minutes
  downloadable: boolean;
  order: number;
}

export interface LearningObjective {
  id: string;
  description: string;
  order: number;
  assessable: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  questions: QuizQuestion[];
  passingScore: number;
  timeLimit?: number; // in minutes
  attemptsAllowed: number;
  shuffleQuestions: boolean;
  showCorrectAnswers: boolean;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer' | 'essay';
  question: string;
  options?: string[]; // for multiple choice
  correctAnswer: string | number;
  explanation?: string;
  points: number;
  order: number;
}

export interface MicroTask {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  estimatedTime: number; // in minutes
  order: number;
}

// Module Management
export interface ModuleVersion {
  id: string;
  version: string;
  changes: string[];
  createdAt: string;
  createdBy: string;
  status: ContentStatus;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  learningObjectives: LearningObjective[];
  
  // Content
  theoryContent: TheoryContent[];
  quizzes: Quiz[];
  microTasks: MicroTask[];
  externalResources: ExternalResource[];
  
  // StyleBox Integration
  styleBoxChallengeIds: string[];
  
  // Metadata
  estimatedDuration: number; // in hours
  order: number;
  status: ContentStatus;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  
  // Versioning
  currentVersion: string;
  versions: ModuleVersion[];
  
  // Prerequisites
  prerequisiteModuleIds: string[];
  
  // Completion Requirements
  requiredTheoryCompletion: number; // percentage
  requiredQuizScore: number; // percentage
  requiredTasksCompletion: number; // percentage
}

export interface ExternalResource {
  id: string;
  title: string;
  description?: string;
  url: string;
  type: 'article' | 'video' | 'website' | 'tool';
  order: number;
}

// StyleBox Challenge Management
export interface ScoringRubric {
  id: string;
  criteria: string;
  description: string;
  maxPoints: number;
  levels: RubricLevel[];
}

export interface RubricLevel {
  level: string; // e.g., "Excellent", "Good", "Needs Improvement"
  points: number;
  description: string;
}

export interface Deliverable {
  id: string;
  title: string;
  description: string;
  format: SubmissionFormat;
  required: boolean;
  maxFileSize?: number; // in MB
  order: number;
}

export interface StyleBoxChallenge {
  id: string;
  title: string;
  difficulty: DifficultyLevel;
  category: CategoryType;
  scenarioDescription: string;
  instructions: string[];
  
  // Deliverables and Submission
  deliverables: Deliverable[];
  submissionFormats: SubmissionFormat[];
  
  // Timing
  timeLimit?: number; // in hours
  deadline?: string; // ISO date string
  
  // Review and Scoring
  reviewType: ReviewType;
  scoringRubrics: ScoringRubric[];
  passingScore: number;
  
  // Relationships
  linkedModuleIds: string[];
  linkedCertificationIds: string[];
  
  // Metadata
  isStandalone: boolean;
  status: ContentStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  
  // Versioning
  currentVersion: string;
  
  // Settings
  allowLateSubmission: boolean;
  lateSubmissionPenalty?: number; // percentage deduction
  maxAttempts: number;
}

// User Progress and Tracking
export interface UserProgress {
  id: string;
  userId: string;
  
  // Certification Progress
  certificationProgress: CertificationProgress[];
  
  // Module Progress
  moduleProgress: ModuleProgress[];
  
  // StyleBox Progress
  styleBoxProgress: StyleBoxProgress[];
  
  // Overall Stats
  totalPointsEarned: number;
  badgesEarned: BadgeAsset[];
  certificatesEarned: CertificateAsset[];
  
  // Timestamps
  lastActivityAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface CertificationProgress {
  certificationId: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'failed' | 'expired';
  enrolledAt: string;
  startedAt?: string;
  completedAt?: string;
  currentModuleId?: string;
  overallScore?: number;
  attempts: number;
  timeSpent: number; // in minutes
  certificateIssued?: boolean;
  certificateIssuedAt?: string;
  expiresAt?: string;
}

export interface ModuleProgress {
  moduleId: string;
  certificationId?: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'failed';
  startedAt?: string;
  completedAt?: string;
  
  // Content Progress
  theoryProgress: TheoryProgress[];
  quizResults: QuizResult[];
  taskProgress: TaskProgress[];
  
  // Overall Module Stats
  overallScore?: number;
  timeSpent: number; // in minutes
  attempts: number;
}

export interface TheoryProgress {
  contentId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  timeSpent: number; // in minutes
  completedAt?: string;
  lastAccessedAt: string;
}

export interface QuizResult {
  quizId: string;
  attempt: number;
  score: number;
  maxScore: number;
  passed: boolean;
  completedAt: string;
  timeSpent: number; // in minutes
  answers: QuizAnswer[];
}

export interface QuizAnswer {
  questionId: string;
  answer: string | number;
  isCorrect: boolean;
  pointsEarned: number;
}

export interface TaskProgress {
  taskId: string;
  status: 'not-started' | 'in-progress' | 'completed';
  startedAt?: string;
  completedAt?: string;
  submissionUrl?: string;
  feedback?: string;
  score?: number;
}

export interface StyleBoxProgress {
  challengeId: string;
  moduleId?: string;
  certificationId?: string;
  status: 'not-started' | 'in-progress' | 'submitted' | 'under-review' | 'completed' | 'failed' | 'revision-needed';
  
  // Attempt Info
  attempt: number;
  startedAt?: string;
  submittedAt?: string;
  reviewedAt?: string;
  completedAt?: string;
  
  // Submission
  submissions: StyleBoxSubmission[];
  
  // Scoring
  totalScore?: number;
  maxScore: number;
  passed?: boolean;
  
  // Feedback
  feedback?: StyleBoxFeedback;
  
  // Timing
  timeSpent: number; // in minutes
  deadlineExtension?: string;
}

export interface StyleBoxSubmission {
  id: string;
  deliverableId: string;
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSize: number;
  submittedAt: string;
  version: number;
}

export interface StyleBoxFeedback {
  id: string;
  reviewerId: string;
  reviewerName: string;
  overallScore: number;
  rubricScores: RubricScore[];
  generalComments: string;
  strengthsHighlighted: string[];
  improvementSuggestions: string[];
  createdAt: string;
}

export interface RubricScore {
  rubricId: string;
  score: number;
  level: string;
  comments?: string;
}

// User Management
export interface LMSUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar?: string;
  role: UserRole;
  
  // Profile
  bio?: string;
  location?: string;
  timezone: string;
  language: string;
  
  // Preferences
  emailNotifications: boolean;
  pushNotifications: boolean;
  
  // Stats
  totalCertifications: number;
  completedModules: number;
  averageScore: number;
  totalTimeSpent: number; // in minutes
  
  // Account Status
  isActive: boolean;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

// Notification System
export interface Notification {
  id: string;
  userId: string;
  type: 'module-release' | 'deadline-reminder' | 'certification-eligible' | 'feedback-received' | 'badge-earned';
  title: string;
  message: string;
  actionUrl?: string;
  isRead: boolean;
  createdAt: string;
  scheduledFor?: string; // for future notifications
}

// Import/Export Types
export interface CertificationExport {
  certifications: Certification[];
  modules: Module[];
  styleBoxChallenges: StyleBoxChallenge[];
  exportedAt: string;
  version: string;
}

export interface BulkImportResult {
  success: boolean;
  imported: number;
  failed: number;
  errors: ImportError[];
}

export interface ImportError {
  row: number;
  field: string;
  message: string;
  data: any;
}
