export async function GET() {
  const slider = [
    {
      id: "001",
      alt: "image-01",
      srcMobile: "/images/featured/1.webp",
      srcDesktop: "/images/featured/d1.webp",
    },
    {
      id: "002",
      alt: "image-02",
      srcMobile: "/images/featured/2.webp",
      srcDesktop: "/images/featured/d2.webp",
    },
    {
      id: "003",
      alt: "image-03",
      srcMobile: "/images/featured/3.jpeg",
      srcDesktop: "/images/featured/d3.webp",
    },
    {
      id: "004",
      alt: "image-04",
      srcMobile: "/images/featured/4.webp",
      srcDesktop: "/images/featured/d4.webp",
    },
  ];
  return Response.json({ slider });
}
