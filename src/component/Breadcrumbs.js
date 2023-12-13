import React from "react";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumbs } from "@mui/material";

const BreadcrumbsMain = (props) => {
  const navigate = useNavigate();

  // Check if props.location exists and has a pathname
  const pathnames = (props.location && props.location.pathname) ? 
    props.location.pathname.split("/").filter((x) => x) : [];
  console.log(pathnames);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/" onClick={() => navigate("/")}>
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLastLink = index === pathnames.length - 1;
        return isLastLink ? (
          <Typography key={name}>{name}</Typography>
        ) : (
          <Link
            to={routeTo}
            key={name}
            onClick={() => navigate(routeTo)}
          >
            {name}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default BreadcrumbsMain;
