import { Provider } from "react-redux";
import Modals from "../../components/modals/Modals";
import { store } from "../../redux/Redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { PropTypes } from "../../@types/types";

const ProviderConf = ({ children }: PropTypes) => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          {children}
          <Modals />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default ProviderConf;
