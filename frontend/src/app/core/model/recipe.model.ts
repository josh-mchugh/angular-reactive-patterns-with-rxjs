export interface Recipe {
  id?: number;
  title?: string;
  category?: string;
  description?: string;
  ingredients?: string;
  tags?: string;
  imageUrl?: string;
  cookingTime?: number;
  prepTime?: number;
  yield?: number;
  steps?: string;
  rating?: number;
}
