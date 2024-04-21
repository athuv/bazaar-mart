import FeaturedCarousel from "@/app/_components/molecules/FeaturedCarousel";

async function getCarouselImage() {
  const response = await fetch(
    `${process.env.BASE_URL}api/v1/carouselContent/`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  return data;
}

async function FeaturedCarouselSection() {
  const carouselImages = await getCarouselImage();

  return (
    <section className="w-full">
      <FeaturedCarousel slider={carouselImages.slider} />
    </section>
  );
}

export default FeaturedCarouselSection;
