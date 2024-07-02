"use server";

import { base } from "@/utils/config";
import { getSession } from "../auth";
import { revalidateTag } from "next/cache";

export async function getAgencies() {
  try {
    const res = await fetch(`${base.URL}/api/agency/getAllAgencies`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["Agency"],
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "An error occurred while fetching agencies",
    };
  }
}

export async function getAllTitaniumAgencies() {
  try {
    const res = await fetch(
      `${base.URL}/api/agency/getAllAgencies?category=tItanium`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["Agency"],
        },
      }
    );

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "An error occurred while fetching titanium agencies",
    };
  }
}

export async function getAgencyById(id: number) {
  try {
    const res = await fetch(`${base.URL}/api/agency/getAgencyById`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
      next: {
        tags: ["Agency"],
      },
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {
      error: "An error occurred while fetching agency by id",
    };
  }
}

export async function getAgencyInfo() {
  try {
    const session = await getSession();
    const res = await fetch(`${base.URL}/api/user/getUserAgency`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
      },
      next: {
        tags: ["Agency"],
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "An error occurred while fetching agency info",
    };
  }
}

export async function updateAgencyInfo(prevState: any, formData: FormData) {
  let data;
  try {
    const session = await getSession();
    console.log(formData.get("agencyName"));
    console.log(formData.get("companyEmail"));
    console.log(formData.get("city"));
    console.log(formData.get("agencyAddress"));
    console.log(formData.get("description"));
    console.log(formData.get("profile-image"));
    const agencyName = formData.get("agencyName");
    const companyEmail = formData.get("companyEmail");
    const city = formData.get("city");
    const agencyImage = formData.get("profile-image");
    const agencyAddress = formData.get("agencyAddress");
    const description = formData.get("description");

    const res = await fetch(`${base.URL}/api/user/addOrUpdateAgency`, {
      method: "POST",
      headers: {
        "x-access-token": session?.user?.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agencyName: agencyName,
        companyEmail,
        city,
        agencyAddress,
        description,
        agencyImage,
      }),
    });

    data = await res.json();
    console.log(data);
  } catch (error) {
    return {
      error: "An error occurred while updating agency info",
    };
  }
  revalidateTag("Agency");
  return data;
}

export async function updateAgencyOwnerInfo(
  prevState: any,
  formData: FormData
) {
  let data;
  try {
    const session = await getSession();
    console.log(formData);
    console.log(formData.get("ownerName"));
    console.log(formData.get("message"));
    console.log(formData.get("profile-image"));
    const ownerName = formData.get("ownerName");
    const message = formData.get("message");
    const ownerPicture = formData.get("profile-image");
    const designation = formData.get("designation");

    const res = await fetch(`${base.URL}/api/user/addOrUpdateAgency`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
      },
      body: JSON.stringify({
        ownerName,
        message,
        ownerPicture,
        designation,
      }),
    });

    data = await res.json();
    console.log(data);
  } catch (error) {
    return {
      error: "An error occurred while updating agency owner info",
    };
  }
  revalidateTag("Agency");
  return data;
}

export async function getAgenciesByCity(city: string) {
  console.log(city);
  try {
    const session = await getSession();
    const res = await fetch(
      `${base.URL}/api/agency/getAllAgencies?city=${city}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["Agency"],
        },
      }
    );

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "An error occurred while fetching agencies by city",
    };
  }
}

export async function getAllAgenciesAddress(city: string) {
  try {
    const res = await fetch(
      `${base.URL}/api/agency/findAgencyAddressAndCompanyByCity`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["Agency"],
        },
        body: JSON.stringify({
          city,
        }),
      }
    );

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "An error occurred while fetching agencies address",
    };
  }
}

export async function getAgencyCities() {
  try {
    const res = await fetch(`${base.URL}/api/agency/getAllAgenciesCities`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["Agency"],
      },
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "An error occurred while fetching cities",
    };
  }
}
