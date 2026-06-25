import { api } from "@/lib/axios";

export const getPlan = async (slug) => {
  const { data } = await api.get(`/plans/${slug}`);

  if (!data.success) {
    throw new Error(data.message);
  }
  return data.data;
};
