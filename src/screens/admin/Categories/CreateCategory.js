import React from "react";
import Wrapper from "../Wrapper";
import ScreenHeader from "../../../components/Admin/ScreenHeader";
import { IoArrowBack } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCreateMutation } from "../../../store/services/categoryService";
import { Switch } from "@headlessui/react";

const CreateCategory = () => {
  const [state, setState] = useState({
    parentcategory: "",
    categoryname: "",
    enabled: "",
    inmenu: "",
  });

  const [enabled, setEnabled] = useState(false);
  const [inMenu, setInMenu] = useState(false);
  const [saveCategory, data] = useCreateMutation();
  console.log(data);
  const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
  const submitCategory = (e) => {
    e.preventDefault();
    if (enabled) {
      state.enabled = 1;
    } else {
      state.enabled = 0;
    }

    if (inMenu) {
      state.inmenu = 1;
    } else {
      state.inmenu = 0;
    }

    if (!state.parentcategory.length > 0) {
      state.parentcategory = 0;
    }

    saveCategory(state);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (data?.isSuccess) {
      navigate("/dashboard/categories");
    }
  }, [data?.isSuccess]);
  return (
    <>
      <Wrapper>
        <ScreenHeader>
          <Link
            to="/dashboard/categories"
            className="btn-dark inline-flex items-center"
          >
            <IoArrowBack className="text-sm text-white mt-0 mr-1" />
            <span className="mr-2">All Categories</span>
          </Link>
        </ScreenHeader>
        <h3 className="text-lg capitalize mb-3">Create Category</h3>
        <div className="flex justify-center items-center">
          <form className="w-full md:w-6/12" onSubmit={submitCategory}>
            {errors.length > 0 &&
              errors.map((error, key) => (
                <div className="mb-6">
                  <p className="alert-danger" key={key}>
                    {error.msg}
                  </p>
                </div>
              ))}
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Parent Category</label>
              <select
                className="text-sm rounded-lg block w-full form-control flex-1"
                name="parentcategory"
                value={state.parentcategory}
                onChange={(e) =>
                  setState({ ...state, parentcategory: e.target.value })
                }
              >
                <option value="">No Parent Categroy</option>
              </select>
            </div>
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Category Name</label>
              <input
                type="text"
                name="categoryname"
                className="form-control flex-1"
                placeholder="Category Name..."
                value={state.categoryname}
                onChange={(e) =>
                  setState({ ...state, categoryname: e.target.value })
                }
              />
            </div>
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Enable Category</label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? "bg-teal-900" : "bg-gray-700"}
    relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-4" : "translate-x-0"}
      pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <div className="flex items-center mb-6">
              <label className="w-1/3 mr-2">Include in Menu</label>
              <Switch
                checked={inMenu}
                onChange={setInMenu}
                className={`${inMenu ? "bg-teal-900" : "bg-gray-700"}
    relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${inMenu ? "translate-x-4" : "translate-x-0"}
      pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Create Category"
                className="btn-indigo"
              />
            </div>
          </form>
        </div>
      </Wrapper>
    </>
  );
};

export default CreateCategory;
