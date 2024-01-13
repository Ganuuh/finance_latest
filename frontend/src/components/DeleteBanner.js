"use client";

import { useAuth } from "@/app/layout";
import { api } from "@/common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DeleteBanner = () => {
  const { deleteBanner, setDeleteBanner, deletingRecordId, setRecordAdded } =
    useAuth();

  const deleteRecord = async (id) => {
    try {
      const res = await api.post("/delete-record", { id });

      setRecordAdded((prev) => !prev);

      toast.info(res.data.message);

      setDeleteBanner(false);
    } catch (error) {
      toast.info(error);
    }
  };
  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-30"
      style={{ display: deleteBanner ? "flex" : "none" }}
    >
      <ToastContainer />
      <div
        className="w-full h-full bg-[#00000080]"
        onClick={() => {
          setDeleteBanner(false);
        }}
      ></div>
      <div className="w-[500px] h-[150px] absolute rounded-md bg-[#fff] flex flex-col justify-center items-center gap-8 p-8">
        <p className="w-fit h-fit text-[20px] text-[#000] font-semibold">
          Are you sure to delete this record ?
        </p>
        <div className="w-[50%] h-fit flex justify-between ">
          <div
            className="w-[70px] h-[30px] border-1 bg-[#0166FF] rounded-md flex justify-center items-center"
            onClick={() => {
              deleteRecord(deletingRecordId);
            }}
          >
            <p className="text-[#fff] text-[16px] font-medium">Yes</p>
          </div>
          <div
            className="w-[70px] h-[30px] border-1 bg-[#0166FF] rounded-md flex justify-center items-center"
            onClick={() => {
              setDeleteBanner(false);
            }}
          >
            <p className="text-[#fff] text-[16px] font-medium">No</p>
          </div>
        </div>
      </div>
    </div>
  );
};
