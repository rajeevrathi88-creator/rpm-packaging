import { createActor } from "@/backend";
import type { Lead, LeadRequest, SubmitLeadResult } from "@/backend.d";
import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetAllLeads() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<Lead[]>({
    queryKey: ["leads"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllLeads();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitLead() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation<SubmitLeadResult, Error, LeadRequest>({
    mutationFn: async (req: LeadRequest) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitLead(req);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
}
