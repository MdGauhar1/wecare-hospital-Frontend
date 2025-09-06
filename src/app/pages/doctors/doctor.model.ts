export interface Doctor {
  id?: number;
  name: string;
  yearsOfExperience: number;
  languages: string[];
  location: string;
  availableDays: string[];
  specialty: {
    id: number;
    name?: string;
  };
}
