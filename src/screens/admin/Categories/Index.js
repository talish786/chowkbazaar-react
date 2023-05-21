import React from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../../components/Admin/ScreenHeader";
import { Link } from "react-router-dom";
import { IoAdd } from "react-icons/io5";
const Index = () => {
  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link
            to="/dashboard/category/create"
            className="btn-dark inline-flex items-baseline" >
            <span className="mr-2">Add Categories</span>
            <IoAdd className="text-sm text-white mt-0 ml-1" />
          </Link>
        </ScreenHeader>
        All Categories
      </Wrapper>
    </>
  );
};

export default Index;
