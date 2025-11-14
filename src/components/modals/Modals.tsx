import { useReduxSelector } from "../../hooks/userRedux/UseRedux";
import AuthoriztionModal from "./authorization/Authorization";

const Modals = () => {
  const { authorizationModalVisibltiy } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <>{authorizationModalVisibltiy && <AuthoriztionModal />}</>;
};

export default Modals;
