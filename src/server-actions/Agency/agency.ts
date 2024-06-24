"use server";

import { base } from "@/utils/config";
import { getSession } from "../auth";

export async function getAgencies() {
  try {
    const res = await fetch(`${base.URL}/api/agency/getAllAgencies`, {
      headers: {
        "Content-Type": "application/json",
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
    const res = await fetch(`${base.URL}/api/user/getAgency`, {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": session?.user?.token,
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
      },
      body: JSON.stringify({
        agencyName: agencyName,
        companyEmail,
        city,
        agencyAddress,
        description,
      }),
    });

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return {
      error: "An error occurred while updating agency info",
    };
  }
}

export async function updateAgencyOwnerInfo(
  prevState: any,
  formData: FormData
) {
  try {
    const session = await getSession();
    console.log(formData);
    console.log(formData.get("ownerName"));
    console.log(formData.get("message"));
    console.log(formData.get("profile-image"));
    const ownerName = formData.get("ownerName");
    const message = formData.get("message");
    const ownerPicture = formData.get("profile-image");

    // const res = await fetch(`${base.URL}/api/user/addOrUpdateAgencyOwner`, {
    //   method: "POST",
    //   headers: {
    //     "x-access-token": session?.user?.token,
    //   },
    //   body: JSON.stringify({
    //     ownerName,
    //     message,
    //     ownerPicture,
    //   }),
    // });

    // const data = await res.json();
    // console.log(data);
    // return data;
    return {
      success: true,
      message: "Owner Profile updated successfully",
    };
  } catch (error) {
    return {
      error: "An error occurred while updating agency owner info",
    };
  }
}
