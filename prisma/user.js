"use server"

import prisma from "./prisma";

export async function createUser(userData) {
    try {
      const newUser = await prisma.user.create({
        data: userData,
      });
      return { newUser };
    } catch (error) {
      return { error: `Error creating user: ${error.message}` };
    }
  }
export  async function createUserIfNotExists(userData) {
    try {
      const existingUser = await prisma.User.findUnique({
        where: {
          userId:userData.userId,
        },
      });

      if (!existingUser) {
        const newUser = await prisma.User.create({
          data: {
            ...userData,
          },
        });

        console.log('New user created:', newUser);
        return { success: true, message: 'New user created.' };
      } else {
        return { success: false, message: 'User already exists.' };
      }
    } catch (error) {
      console.error('Error creating user:', error);
      return { success: false, message: 'Error creating user.' };
    }
  }
  // Read a specific user by ID
  export async function getUserById(id) {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });
      return { user };
    } catch (error) {
      return { error: `Error getting user by ID: ${error.message}` };
    }
  }
  
  // Update a user by ID
  export async function updateUserById(id, updatedUserData) {
    try {
      const updatedUser = await prisma.user.update({
        where: { id },
        data: updatedUserData,
      });
      return { updatedUser };
    } catch (error) {
      return { error: `Error updating user: ${error.message}` };
    }
  }
  
  // Delete a user by ID
  export async function deleteUserById(id) {
    try {
      const deletedUser = await prisma.user.delete({
        where: { id },
      });
      return { deletedUser };
    } catch (error) {
      return { error: `Error deleting user: ${error.message}` };
    }
  }