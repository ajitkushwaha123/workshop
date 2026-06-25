"use client";

import { useEffect } from "react";
import { getPlan } from "@/services/plan";
import { useQuery } from "@tanstack/react-query";
import { useAppConfigStore } from "@/stores/app-config.store";

export const usePlan = (slug) => {
  const setPlan = useAppConfigStore((state) => state.setPlan);

  const query = useQuery({
    queryKey: ["plan", slug],
    queryFn: () => getPlan(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    if (query.data) {
      setPlan(query.data);
    }
  }, [query.data, setPlan]);

  return query;
};
