export type AsyncResourceState<T> = {
  data: T;
  error: string | null;
  isInitialLoading: boolean;
  isRefreshing: boolean;
  lastUpdated: Date | null;
  refresh: () => void;
};
