import axios from "axios";

async function getProducts() {
  try {
    const response = await axios.get("http://localhost:7070/api/services");
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      // обработка ошибки 500
    }
    // обработка других ошибок
    throw error;
  }
}

async function getProductById(id) {
  try {
    const response = await axios.get(
      `http://localhost:7070/api/services/${id}`
    );
    return response.data;
  } catch (error) {
    if (error.response.status === 500) {
      // обработка ошибки 500
    }
    // обработка других ошибок
    throw error;
  }
}

export { getProducts, getProductById };
