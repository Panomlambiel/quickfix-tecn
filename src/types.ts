/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: string;
  eta: string;
  category: 'laptop' | 'software' | 'network' | 'speed' | 'optimization' | 'misc';
  remoteSupportAvailable?: boolean;
}

export interface Booking {
  id: string;
  customerName: string;
  email: string;
  deviceType: string;
  issueDescription: string;
  status: 'pending' | 'diagnosing' | 'repairing' | 'completed';
  createdAt: string;
}

export type Theme = 'light' | 'dark';
