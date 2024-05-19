export class User {
  id?: string;
  email?: string;
  password: string;
  name?: string;
  age?: number;
  height?: number;
  weight?: number;
  specialty?: string;
  userType: 'PATIENT' | 'PROFESSIONAL';
  patientIds?: string[];
}
