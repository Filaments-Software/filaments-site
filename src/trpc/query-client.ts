import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
import SuperJSON from "superjson";

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        // Increase staleTime to reduce unnecessary refetches
        staleTime: 60 * 1000, // 1 minute
        // Add caching for better performance
        gcTime: 5 * 60 * 1000, // 5 minutes
        refetchOnWindowFocus: process.env.NODE_ENV === "production",
        refetchOnReconnect: true,
      },
      dehydrate: {
        serializeData: SuperJSON.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        deserializeData: SuperJSON.deserialize,
      },
    },
  });
