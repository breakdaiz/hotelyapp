"use server";

import { currentUser } from "@clerk/nextjs";
import UserModel from "@/models/user-model";
import { connectMongoDB } from "@/config/db";

connectMongoDB();

export const GetCurrentUserFromMongoDB = async () => {
  try {
    const currentUserFromClerk = await currentUser();
    // check if user exist in DB return user data

    const user = await UserModel.findOne({
      clerkUserId: currentUserFromClerk?.id,
    });
    if (user) {
      console.log("current User", user);
      return {
        success: true,
        data: JSON.parse(JSON.stringify(user)),
      };
    }

    // if user does not exist in the database create a new user and return
    const newUser = new UserModel({
      name:
     currentUserFromClerk?.firstName + " " + currentUserFromClerk?.lastName,
      email: currentUserFromClerk?.emailAddresses[0].emailAddress,
      clerkUserId: currentUserFromClerk?.id,
      profilePic: currentUserFromClerk?.imageUrl,
      isActive: true,
      isAdmin: false,
    });

    await newUser.save();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(newUser)),
    };
  } catch (error) {
    console.log("error", error);
    return {
      success: false,
      error: error,
      messege: "Error while fetching user data from MongoDB "
    };
  }
};
