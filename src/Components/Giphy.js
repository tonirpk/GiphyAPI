import React from "react";
import { useGlobalContext } from "./AxiosGiphy";
import ErrorPage from "./ErrorPage";
import GifsList from "./GifsList";
import LoadingPage from "./LoadingPage";
import NavigationBar from "./NavigationBar";
import PaginateComponent from "./PaginateComponent";

const Giphy = () => {
  const { loading, error } = useGlobalContext();

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <NavigationBar />
      <PaginateComponent />
      <GifsList />
    </>
  );
};

export default Giphy;
