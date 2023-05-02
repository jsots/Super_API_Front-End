import api from "./apiConfig.js";

export const getCharacters = async () => {
  try {
    const response = await api.get("/characters");
    return response.data;
  } catch (error) {
    console.error(`Failed to get characters - error: ${error}`);
    throw error;
  }
};

export const getCharacter = async (id) => {
  try {
    const response = await api.get(`/characters/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to get character - error: ${error}`);
    throw error;
  }
};

export const createCharacter = async (charData) => {
  try {
    const response = await api.post("/characters", charData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCharacter = async (id, charData) => {
  try {
    const response = await api.put(`/characters/${id}`, charData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCharacter = async (id) => {
  try {
    const response = await api.delete(`/characters/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
