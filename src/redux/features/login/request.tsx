import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * usuario que se esta intentando loguear
 */
export const userLogin = createAsyncThunk(
  "/usuario/userLogin",
  async (dataForm: object) => {
    try {
      const response = await axios.patch(
        `${process.env.BASE_URL}/usuario`,
        dataForm,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
