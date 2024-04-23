import { Country } from "country-list";
import { Dispatch, SetStateAction } from "react";

export interface Image {
  id: string;
  alt: string;
  src: string;
}

export interface ResponsiveImage {
  sliderImageId: number;
  imageAlt: string;
  imageMobile: string;
  imageDesktop: string;
}

export interface FeaturedImage {
  slider: ResponsiveImage[];
}

export interface ScrollImage {
  scroll: Image[];
}

export interface ProductList {
  id: string;
  title: string;
  amount: number;
  cents: number;
  price: number;
  discountPercentage: number;
  image: Image;
}

export interface Product {
  productList: ProductList[];
}

export interface DeliveryLocation {
  setShowCountries: Dispatch<SetStateAction<boolean>>;
  showCountries: boolean;
  country: Country;
  setCountry: Dispatch<SetStateAction<Country>>;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export interface Category {
  categoryId: number;
  categoryName: string;
  parentId: number | null;
  iconDataURL: string;
}

export type GetMainCategories = {
  limit?: number;
};
