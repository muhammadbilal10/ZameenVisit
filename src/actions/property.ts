"use server";

export async function addProperty(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  //api.example.com/articles/${articleId}/comments
  const response = await fetch(
    `https://zameen-server.onrender.com/api/auth/user/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
}

export async function getProperty() {
  const response = await fetch(
    `https://zameen-server.onrender.com/api/property/get`
  );
  const result = await response.json();
  console.log(result);
  return result;
}
