import React from "react";
//import styles from "./Username.module.css";
import { Avatar, Grid } from "@mui/material";


export const adherentGrid = [
  {
    accessorKey: "photo", 
    header: "PHOTO",
    Cell: ({ renderedCellValue }) => <div className='profile flex justify-center'>
      <Avatar alt="photo" src={renderedCellValue ||JSON.stringify(renderedCellValue)} sx={{ width: 60, height: 60 }} />
      </div>,
    size: 130,
    muiTableBodyCellProps: {
      align: "center",
      sx: {
        borderRight: "1px solid rgba(224,224,224,1)",
      },
    },
  },
    {
        accessorKey: "noms", 
        header: "NOMS",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 180,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "prenoms", 
        header: "PRENOMS",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 180,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "email", 
        header: "EMAIL",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 180,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "datenaissance", 
        header: "DATE NAISS",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 300,
        flex:1,
        muiTableBodyCellProps: {
          align: "center",
          
          sx: {
            
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "lieunaissance", 
        header: "LIEU NAISS",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 300,
        flex:1,
        muiTableBodyCellProps: {
          align: "center",
          
          sx: {
            
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
      accessorKey: "telephone", 
      header: "PHONE",
      Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
      size: 130,
      muiTableBodyCellProps: {
        align: "center",
        sx: {
          borderRight: "1px solid rgba(224,224,224,1)",
        },
      },
  },
 
    {
        accessorKey: "provincemilitantisme", 
        header: "province Militantisme",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "communemilitantisme", 
        header: "COMMUNE Militantisme",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "arrmilitantisme", 
        header: "ARR Militantisme",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "departementmilitantime", 
        header: "DEPARTEMENT Militantisme",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "centrevotemilitantisme", 
        header: "CENTRE DE VOTE",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "sexe", 
        header: "SEXE",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "adresse", 
        header: "ADRESSE",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    {
        accessorKey: "montantquotisation", 
        header: "MONTANT QUOTISATION",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
    /*{
        accessorKey: "periodeVersement", 
        header: "PERIODE VERSEMENT",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },*/
    {
        accessorKey: "profession", 
        header: "PROFESSION",
        Cell: ({ renderedCellValue }) => <span>{renderedCellValue}</span>,
        size: 200,
        muiTableBodyCellProps: {
          align: "left",
          sx: {
            borderRight: "1px solid rgba(224,224,224,1)",
          },
        },
    },
  ]