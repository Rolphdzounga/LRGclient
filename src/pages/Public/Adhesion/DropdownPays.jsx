import { Autocomplete, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { Field } from "formik";

import React, { useEffect, useState } from "react";


const provinces = [
  { id: 1, label: "G1-Estuaire", value: "G1-Estuaire" },
  { id: 2, label: "G2-Haut-Ogooué", value: "G2-Haut-Ogooué" },
  { id: 3, label: "G3-Moyen-Ogooué", value: "G3-Moyen-Ogooué" },
  { id: 4, label: "G4-Ngounié", value: "G4-Ngounié" },
  { id: 5, label: "G5-Nyanga", value: "G5-Nyanga" },
  { id: 6, label: "G6-Ogooué-Ivindo", value: "G6-Ogooué-Ivindo" },
  { id: 7, label: "G7-Ogooué-Lolo", value: "G7-Ogooué-Lolo" },
  { id: 8, label: "G8-Ogooué-Maritime", value: "G8-Ogooué-Maritime" },
  { id: 9, label: "G9-Woleu-Ntem", value: "G9-Woleu-Ntem" }
];
const top100Films = [
  { id: 1, label: "G1-Estuaire", value: "G1-Estuaire" },
  { id: 2, label: "G2-Haut-Ogooué", value: "G2-Haut-Ogooué" },
  { id: 3, label: "G3-Moyen-Ogooué", value: "G3-Moyen-Ogooué" },
  { id: 4, label: "G4-Ngounié", value: "G4-Ngounié" },
  { id: 5, label: "G5-Nyanga", value: "G5-Nyanga" },
  { id: 6, label: "G6-Ogooué-Ivindo", value: "G6-Ogooué-Ivindo" },
  { id: 7, label: "G7-Ogooué-Lolo", value: "G7-Ogooué-Lolo" },
  { id: 8, label: "G8-Ogooué-Maritime", value: "G8-Ogooué-Maritime" },
  { id: 9, label: "G9-Woleu-Ntem", value: "G9-Woleu-Ntem" }
];

const departements = [
  { id: 1, label: "Komo Mondah", value: "Komo Mondah", province: "G1-Estuaire" },
  { id: 2, label: "Como", value: "Como", province: "G1-Estuaire" },
  { id: 3, label: "Como Océan", value: "Como Océan", province: "G1-Estuaire" },
  { id: 4, label: "Noya", value: "Noya", province: "G1-Estuaire" },
  
  { id: 6, label: "Franceville", value: "Franceville", province: "G2-Haut-Ogooué" },
  { id: 7, label: "Moanda", value: "Moanda", province: "G2-Haut-Ogooué" },
  { id: 8, label: "Bongoville", value: "Bongoville", province: "G2-Haut-Ogooué" },
  { id: 9, label: "Léconi", value: "Léconi", province: "G2-Haut-Ogooué" },
  { id: 10, label: "Ngouoni", value: "Ngouoni", province: "G2-Haut-Ogooué" },
  { id: 11, label: "Akiéni", value: "Akiéni", province: "G2-Haut-Ogooué" },
  { id: 12, label: "Okondja", value: "Okondja", province: "G2-Haut-Ogooué" },
  { id: 13, label: "Onga", value: "Onga", province: "G2-Haut-Ogooué" },
  { id: 14, label: "Aboumi", value: "Aboumi", province: "G2-Haut-Ogooué" },
  { id: 15, label: "Boumango", value: "Boumango", province: "G2-Haut-Ogooué" },
  { id: 16, label: "Bakoumba", value: "Bakoumba", province: "G2-Haut-Ogooué" },

  { id: 17, label: "Lambarerné", value: "Lambarerné", province: "G3-Moyen-Ogooué" },
  { id: 18, label: "Ndjolé", value: "Ndjolé", province: "G3-Moyen-Ogooué" },

  { id: 19, label: "Mouila", value: "Mouila", province: "G4-Ngounié" },
  { id: 20, label: "Ndéndé", value: "Ndéndé", province: "G4-Ngounié" },
  { id: 21, label: "Fougamou", value: "Fougamou", province: "G4-Ngounié" },
  { id: 22, label: "Malinga", value: "Malinga", province: "G4-Ngounié" },
  { id: 23, label: "Lébamba", value: "Lébamba", province: "G4-Ngounié" },
  { id: 24, label: "Guiétsou", value: "Guiétsou", province: "G4-Ngounié" },
  { id: 25, label: "Mbigou", value: "Mbigou", province: "G4-Ngounié" },
  { id: 26, label: "Mimongo", value: "Mimongo", province: "G4-Ngounié" },
  
  { id: 27, label: "Tchibanga", value: "Tchibanga", province: "G5-Nyanga" },
  { id: 28, label: "Moabi", value: "Moabi", province: "G5-Nyanga" },
  { id: 29, label: "Mayumba", value: "Mayumba", province: "G5-Nyanga" },
  { id: 30, label: "Ndindi", value: "Ndindi", province: "G5-Nyanga" },
  { id: 31, label: "Mabanda", value: "Mabanda", province: "G5-Nyanga" },
  { id: 32, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G5-Nyanga" },
  
  { id: 33, label: "Makokou", value: "Makokou", province: "G6-Ogooué-Ivindo" },
  { id: 34, label: "Mékambo", value: "Mékambo", province: "G6-Ogooué-Ivindo" },
  { id: 35, label: "Ovan", value: "Ovan", province: "G6-Ogooué-Ivindo" },
  { id: 36, label: "Booué", value: "Booué", province: "G6-Ogooué-Ivindo" },

  { id: 37, label: "Koulamoutou", value: "Koulamoutou", province: "G7-Ogooué-Lolo" },
  { id: 38, label: "Lastoursville", value: "Lastoursville", province: "G7-Ogooué-Lolo" },
  { id: 39, label: "Pana", value: "Pana", province: "G7-Ogooué-Lolo" },
  { id: 40, label: "Iboundji", value: "Iboundji", province: "G7-Ogooué-Lolo" },
  
  
  { id: 41, label: "Port-Gentil", value: "Port-Gentil", province: "G8-Ogooué-Maritime" },
  { id: 42, label: "Gamba", value: "Gamba", province: "G8-Ogooué-Maritime" },
  { id: 43, label: "Omboué", value: "Omboué", province: "G8-Ogooué-Maritime" },

  { id: 44, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G8-Ogooué-Maritime" },
  { id: 45, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G8-Ogooué-Maritime" },
  { id: 46, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G8-Ogooué-Maritime" },
  
  { id: 47, label: "Oyem", value: "Oyem", province: "G9-Woleu-Ntem" },
  { id: 48, label: "Bitam", value: "Bitam", province: "G9-Woleu-Ntem" },
  { id: 49, label: "Mitzic", value: "Mitzic", province: "G9-Woleu-Ntem" },
  { id: 50, label: "Minvoul", value: "Minvoul", province: "G9-Woleu-Ntem" },
  { id: 51, label: "Medouneu", value: "Medouneu", province: "G9-Woleu-Ntem" },


];
const villes = [
  { id: 0, label: "Libreville", value: "Libreville", province: "G1-Estuaire" },
  { id: 1, label: "Akanda", value: "Akanda", province: "G1-Estuaire" },
  { id: 2, label: "Ntoum", value: "Ntoum", province: "G1-Estuaire" },
  { id: 3, label: "Kango", value: "Kango", province: "G1-Estuaire" },
  { id: 4, label: "Ndzomoé", value: "Ndzomoé", province: "G1-Estuaire" },
  { id: 5, label: "Cocobeach", value: "Cocobeach", province: "G1-Estuaire" },
  
  { id: 6, label: "Franceville", value: "Franceville", province: "G2-Haut-Ogooué" },
  { id: 7, label: "Moanda", value: "Moanda", province: "G2-Haut-Ogooué" },
  { id: 8, label: "Bongoville", value: "Bongoville", province: "G2-Haut-Ogooué" },
  { id: 9, label: "Léconi", value: "Léconi", province: "G2-Haut-Ogooué" },
  { id: 10, label: "Ngouoni", value: "Ngouoni", province: "G2-Haut-Ogooué" },
  { id: 11, label: "Akiéni", value: "Akiéni", province: "G2-Haut-Ogooué" },
  { id: 12, label: "Okondja", value: "Okondja", province: "G2-Haut-Ogooué" },
  { id: 13, label: "Onga", value: "Onga", province: "G2-Haut-Ogooué" },
  { id: 14, label: "Aboumi", value: "Aboumi", province: "G2-Haut-Ogooué" },
  { id: 15, label: "Boumango", value: "Boumango", province: "G2-Haut-Ogooué" },
  { id: 16, label: "Bakoumba", value: "Bakoumba", province: "G2-Haut-Ogooué" },

  { id: 17, label: "Lambarerné", value: "Lambarerné", province: "G3-Moyen-Ogooué" },
  { id: 18, label: "Ndjolé", value: "Ndjolé", province: "G3-Moyen-Ogooué" },

  { id: 19, label: "Mouila", value: "Mouila", province: "G4-Ngounié" },
  { id: 20, label: "Ndéndé", value: "Ndéndé", province: "G4-Ngounié" },
  { id: 21, label: "Fougamou", value: "Fougamou", province: "G4-Ngounié" },
  { id: 22, label: "Malinga", value: "Malinga", province: "G4-Ngounié" },
  { id: 23, label: "Lébamba", value: "Lébamba", province: "G4-Ngounié" },
  { id: 24, label: "Guiétsou", value: "Guiétsou", province: "G4-Ngounié" },
  { id: 25, label: "Mbigou", value: "Mbigou", province: "G4-Ngounié" },
  { id: 26, label: "Mimongo", value: "Mimongo", province: "G4-Ngounié" },
  
  { id: 27, label: "Tchibanga", value: "Tchibanga", province: "G5-Nyanga" },
  { id: 28, label: "Moabi", value: "Moabi", province: "G5-Nyanga" },
  { id: 29, label: "Mayumba", value: "Mayumba", province: "G5-Nyanga" },
  { id: 30, label: "Ndindi", value: "Ndindi", province: "G5-Nyanga" },
  { id: 31, label: "Mabanda", value: "Mabanda", province: "G5-Nyanga" },
  { id: 32, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G5-Nyanga" },
  
  { id: 33, label: "Makokou", value: "Makokou", province: "G6-Ogooué-Ivindo" },
  { id: 34, label: "Mékambo", value: "Mékambo", province: "G6-Ogooué-Ivindo" },
  { id: 35, label: "Ovan", value: "Ovan", province: "G6-Ogooué-Ivindo" },
  { id: 36, label: "Booué", value: "Booué", province: "G6-Ogooué-Ivindo" },

  { id: 37, label: "Koulamoutou", value: "Koulamoutou", province: "G7-Ogooué-Lolo" },
  { id: 38, label: "Lastoursville", value: "Lastoursville", province: "G7-Ogooué-Lolo" },
  { id: 39, label: "Pana", value: "Pana", province: "G7-Ogooué-Lolo" },
  { id: 40, label: "Iboundji", value: "Iboundji", province: "G7-Ogooué-Lolo" },
  
  
  { id: 41, label: "Port-Gentil", value: "Port-Gentil", province: "G8-Ogooué-Maritime" },
  { id: 42, label: "Gamba", value: "Gamba", province: "G8-Ogooué-Maritime" },
  { id: 43, label: "Omboué", value: "Omboué", province: "G8-Ogooué-Maritime" },

  { id: 44, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G8-Ogooué-Maritime" },
  { id: 45, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G8-Ogooué-Maritime" },
  { id: 46, label: "Mouléngui Binza", value: "Mouléngui Binza", province: "G8-Ogooué-Maritime" },
  
  { id: 47, label: "Oyem", value: "Oyem", province: "G9-Woleu-Ntem" },
  { id: 48, label: "Bitam", value: "Bitam", province: "G9-Woleu-Ntem" },
  { id: 49, label: "Mitzic", value: "Mitzic", province: "G9-Woleu-Ntem" },
  { id: 50, label: "Minvoul", value: "Minvoul", province: "G9-Woleu-Ntem" },
  { id: 51, label: "Medouneu", value: "Medouneu", province: "G9-Woleu-Ntem" },


];
const cities = [
  { id: 1, label: "Los Angeles", value: "Los Angeles", country: "USA" },
  { id: 2, label: "Dubai", value: "Dubai", country: "UAE" },
  { id: 3, label: "Torento", value: "Torento", country: "Canada" },
  { id: 4, label: "Washington", value: "Washington", country: "USA" },
  { id: 5, label: "London", value: "London", country: "England" },
  { id: 6, label: "Franceville", value: "Franceville", country: "Gabon" }
];

export default function DropdownPays() {
  const [selectedProvince, setSelectedProvinces] = useState(provinces[1].label);
  const [selectedVille, setSelectedVille] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [villeItems, setVilleItems] = useState([]);
  const [cityItems, setCityItems] = useState([]);

  useEffect(() => {
    setVilleItems([]); // reset select
    setCityItems([]); // reset select
    setSelectedVille(""); // reset select
    console.log('_______setSelectedVille("")_________')
    setSelectedCity(""); // reset select
    selectedProvince &&
      setVilleItems(villes.filter((c) => c.province === selectedProvince));
  }, [selectedProvince,selectedVille]);

  useEffect(() => {
    setCityItems([]); // reset select
    setSelectedCity(""); // reset select

    selectedVille &&
    setSelectedVille(villes.filter((c) => c.country === selectedVille));
  }, [selectedVille]);

  return (
    
<Grid container spacing={2} className="align-items-center">
      <Grid item xs={4}>
      <FormControl fullWidth>
      <Stack spacing={2} width='250px'>
            <Autocomplete
            freeSolo
          disablePortal
          id="combo-box"
          options={provinces}
          value={selectedProvince}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choisir une province" />}
        />
        </Stack>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Stack spacing={2} width='250px my-10'>
              <Autocomplete
              freeSolo
            disablePortal
            id="combo-box-demo"
            options={villeItems}
            value={selectedVille}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Choisir une ville" />}
          />
          </Stack>
      </Grid>
      <Grid item xs={4}>


      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choisir une ville</InputLabel>
        <Select

          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedCity?.id}
          label="Choisir une ville"
          onChange={(e) => setSelectedVille(e.target.value)}
          defaultValue=""
        >
        {villeItems.length === 0 ? (
                        <MenuItem disabled value=''>
                            <em>Choisir une ville</em>
                        </MenuItem>
                    ) : (
                      villeItems.map((product) => {
                            return (
                                <MenuItem key={product.id} value={product.label}>
                                    {product.label}
                                </MenuItem>
                            );
                        })
                    )}
        </Select>
      </FormControl>
      </Grid>
      

      

      

      <button
        className="bg-green-500 rounded-md shadow-sm my-10"
        onClick={() =>
          console.log({
            planet: selectedProvince,
            country: selectedVille,
            city: selectedCity
          })
        }
      >
        log selcets
      </button>
    </Grid>
    
    
  );
}