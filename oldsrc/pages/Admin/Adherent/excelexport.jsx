import { Button, Tooltip } from "@mui/material"; 
import * as FileSaver from "file-saver";
import { writeFileXLSX,utils } from "xlsx";
//import {XLSX} from "sheetjs-style";
//import {XLSX} from "xlsx-js-style";

//writeXLSX
import FileDownloadIcon from "@mui/icons-material/FileDownload";


//import { writeXLSX } from "xlsx-js-style";
const ExportExcel = ({ excelData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToExcel = async (excelData,fileName) => {
   


   let data = excelData.reduce((tab,elm)=>{
        let {photo,signature,...reste} = elm
        return [...tab,reste]
    },[])

    console.log('exportToExcel__',data)
    /* dynamically import the SheetJS Wrapper */

    const wb = utils.book_new();
    const ws = utils.json_to_sheet(data);
    utils.book_append_sheet(wb, ws, "data");
    writeFileXLSX(wb, fileName + fileExtension);
  };

  return (
    <>
      <Tooltip title="Excel Export">
        <Button
          variant="contained"
          onClick={(e) => exportToExcel(excelData,fileName)}
          color="primary"
          style={{ cursor: "pointer", fontSize: 14 }}
          startIcon={<FileDownloadIcon />}
        >
          TELECHARGEZ AU FORMAT EXCEL
        </Button>
      </Tooltip>
    </>
  );
};

export default ExportExcel;

