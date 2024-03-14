"use server";

export default async function search(formData: FormData) {
  const name = formData.get("keyword");
  console.log(name);
}
