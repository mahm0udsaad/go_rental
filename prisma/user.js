"use server"

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