import { Country } from "country-list";
import { Dispatch, SetStateAction } from "react";

export interface Image {
  id: string;
  alt: string;
  src: string;
}

export interface ResponsiveImage {
  sliderImageId: string;
  imageAlt: string | null;
  imageMobile: string | null;
  imageDesktop: string | null;
}

export interface ScrollImage {
  scroll: Image[];
}

export interface BasicProductList {
  productId: string;
  title: string;
  priceInAmount: number;
  totalReviews: number;
  discountPercentage: number;
  discountAmount: number;
  finalPrice: number;
  averageReview: number;
  primaryImageUrl: string;
  primaryImageAlt: string;
}

export interface Category {
  categoryId: string;
  categoryName: string;
  parentId: string | null;
  iconDataURL: string | null;
  children?: Category[];
}

export type GetMainCategories = {
  limit?: number;
};

export interface CategoriesHook {
  mainCategories: Category[];
  categoriesTree: Category[];
}
