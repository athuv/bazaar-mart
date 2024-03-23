export interface Image {
  id: string;
  alt: string;
  src: string;
}

export interface FeaturedImage {
  slider: Image[];
  scroll: Image[];
}

export interface ScrollImage {
  scroll: Image[];
}
