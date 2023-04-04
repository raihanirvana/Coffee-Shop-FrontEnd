import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.data.token);
  React.useEffect(() => {
    if (!token) {
      navigate("/", { replace: true });
    }
  }, []);

  return <>{children}</>;
}

function TokenNotAvail({ children }) {
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.data.token);
  React.useEffect(() => {
    if (token) {
      navigate("/product", { replace: true });
    }
  }, []);

  return <>{children}</>;
}

export { PrivateRoute, TokenNotAvail };
