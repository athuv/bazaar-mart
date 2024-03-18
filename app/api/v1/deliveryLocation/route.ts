export async function GET() {
  const res = await fetch("http://ip-api.com/json/");
  const data = await res.json();

  return Response.json({ data });
}
