export interface BuildingDto {
  id: number;
  name: string;
  restrooms?: RestroomDto[];
  createdAt: string;
  floors: number[];
  recommendedRestroom?: RestroomDto;
}

export interface ApiResponse {
  buildings: BuildingDto[];
}

export interface RestroomDto {
  id: number;
	alias?: string;
	floor: number;
  location: string;
  isMale: boolean;
  rating: number;
  congestion: number;
  vanity: boolean;
  bidet: boolean;
  disabled: boolean;
  extra: string;
  building?: BuildingDto;
  createdAt: string;
	facilities: Facility[]
}

export type Facility = 'vanity' | 'disabled' | 'bidet'

