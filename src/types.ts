/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PracticeCovered {
  id: string;
  name: string;
  category: 'Asana' | 'Pranayama & Mudra' | 'Mind & Reset';
  description: string;
  benefits: string[];
}

export interface BatchTiming {
  name: string;
  time: string;
  days: string;
  subtitle: string;
}

export interface OnlineProgramTier {
  name: string;
  oneMonthPrice: number;
  threeMonthPrice: number;
  sixMonthPrice?: number;
  features: string[];
  isPopular?: boolean;
}

export interface CoachingProgram {
  id: string;
  name: string;
  duration: string;
  sessions: string;
  frequency: string;
  outcomes: string[];
  investment: number;
  investmentUnit: string;
  tagline: string;
}

export interface CorporateProgram {
  title: string;
  subtitle: string;
  description: string;
  format: string[];
  outcomes: string[];
  pricing: Array<{
    range: string;
    halfDayPrice: number;
    fullDayPrice: number;
  }>;
}

export interface BookingSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  programType: 'yoga-online' | 'yoga-physical' | 'coaching' | 'corporate';
  selectedTierName: string;
  sessionPreference?: string;
  message?: string;
  submittedAt: string;
  status: 'Pending' | 'Confirmed';
}
