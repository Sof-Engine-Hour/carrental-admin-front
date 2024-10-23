type VehicleType = {
  id: number;
  matricule: string;
  brand: {
    tenantId: string;
    maxLength: number;
    minLength: number;
    id: number;
    name: string;
    countryOfOrigin: string;
    parentCompany: string;
    website: string;
  };
  color: string;
  mileage: number;
  price: number;
};

export type { VehicleType };
