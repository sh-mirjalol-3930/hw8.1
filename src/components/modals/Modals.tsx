import { useReduxSelector } from "../../hooks/userRedux/UseRedux";
import AuthoriztionModal from "./authorization/Authorization";
import Profile from "./profile/Profile";

const Modals = () => {
  const { authorizationModalVisibltiy } = useReduxSelector(
    (state) => state.modalSlice
  );
  return (
    <>
      {authorizationModalVisibltiy && <AuthoriztionModal />}
      <Profile />
    </>
  );
};

export default Modals;
