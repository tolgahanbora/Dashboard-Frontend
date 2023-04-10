import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import logoYatay from '../../../assets/logoYatay.svg'
import DüzLogo_Trans from '../../../assets/DüzLogo_Trans.svg'
export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={DüzLogo_Trans} alt="Refine" width="98px" />
        ) : (
          <img src={logoYatay} alt="BoraTech" width="150px" />
        )}
      </Link>
    </Button>
  );
};
