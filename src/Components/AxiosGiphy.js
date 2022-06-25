import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const Context = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const res = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "b0k2a3oDSMonmeqsHjZQuBGdmanANzy4",
            limit: 50,
          },
        });
        setData(res.data.data);
        console.log(res.data.data);
      } catch (err) {
        setError(true);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const openModalHandler = () => {
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    try {
      const res = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "b0k2a3oDSMonmeqsHjZQuBGdmanANzy4",
          q: search,
        },
      });
      setData(res.data.data);
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  };

  const submitOnKeyPresshandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitHandler(e);
    }
  };

  const pageSelectHandler = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <Context.Provider
      value={{
        data,
        loading,
        error,
        modalOpen,
        search,
        currentPage,
        itemsPerPage,
        openModalHandler,
        closeModalHandler,
        changeHandler,
        submitHandler,
        submitOnKeyPresshandler,
        pageSelectHandler,
        currentItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(Context);
};
