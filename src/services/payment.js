import { api } from "@/lib/axios";

export const createRegistration = async (payload) => {
  const { data } = await api.post("/payments/registration", payload);

  return data;
};

export const getRegistrationByOrderId = async (orderId) => {
  const { data } = await api.get(`/payments/registration/${orderId}`);
  return data;
};
