import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
//import { mockDataTeam } from "./mockData";
import ExportExcel from "./excelexport";
import { IconButton, Tooltip } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import RefreshIcon from "@mui/icons-material/Refresh";
import { MRT_Localization_FR } from "material-react-table/locales/fr";
import * as FileSaver from "file-saver";
//import XLSX from "sheetjs-style";
import { useMemo, } from "react";
import {MaterialReactTable} from "material-react-table";


import {
  Box,

  Button,

 // useMediaQuery,
} from "@mui/material";
import Header from "./Header";
import { writeFileXLSX,utils } from "xlsx";

const fileExtension = ".xlsx";
const fileName = "Export Excel";
const exportToExcel = async (excelData) => {
  /* dynamically import the SheetJS Wrapper */
  const wb = utils.book_new();
  const ws = utils.json_to_sheet(excelData);
  utils.book_append_sheet(wb, ws, "data");
  writeFileXLSX(wb, fileName + fileExtension);
};





const Adherent = ({categ,champ,titre,url}) => {
 // const { data, isLoading } = useGetProductsQuery();
 // const isNonMobile = useMediaQuery("(min-width: 1000px)");
  


  const [columnFilters, setColumnFilters] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  //const [dataTeam, setDataTeam] = useState(mockDataTeam);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 20,
  });

  const columns = useMemo(
    () => champ,
    [champ]
  );
const { data, isLoading, isError, refetch, isFetching } = useQuery({
  queryKey: [
    "team",
    columnFilters, //refetch when columnFilters changes
    globalFilter, //refetch when globalFilter changes
    pagination.pageIndex, //refetch when pagination.pageIndex changes
    pagination.pageSize, //refetch when pagination.pageSize changes
    sorting, //refetch when sorting changes
  ],
  queryFn: async () => {
    const fetchURL = new URL(url);
    fetchURL.searchParams.set(
      'start',
      `${pagination.pageIndex * pagination.pageSize}`,
    );
    fetchURL.searchParams.set('size', `${pagination.pageSize}`);
    fetchURL.searchParams.set('filters', JSON.stringify(columnFilters ?? []));
    fetchURL.searchParams.set('globalFilter', globalFilter ?? '');
    fetchURL.searchParams.set('sorting', JSON.stringify(sorting ?? []));

    const response = await fetch(fetchURL.href);
    const json = await response.json();
    return json;
  },
  keepPreviousData: true,//Promise.reject("Un problème est survenu. Nous verifions..."), //
   
});


console.log('data_____________',data)
  return (
    <Box m="1.5rem 2.5rem">
      <Box
              sx={{
                display: "flex",
                gap: "1rem",
                p: "0.5rem",
                flexWrap: "wrap",
              }}
            >

              <ExportExcel excelData={data?.data} fileName={"Excel Export"} />

              
            </Box>
    </Box>
  );
};

export default Adherent;
