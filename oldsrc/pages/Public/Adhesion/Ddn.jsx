import { Autocomplete, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { Field } from "formik";
import { useEffect, useState } from "react";

function Ddn({values,setFieldValue}) {
  const [data, setData] = useState([]);
  const [getCounty, setCounty] = useState([]);
  const [getState, setState] = useState([]);

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
    { id: 0, label: "Libreville", value: "Libreville", province: "G1-Estuaire"},
    { id: 100, label: "Akanda", value: "Akanda", province: "G1-Estuaire"},
    { id: 1, label: "Owendo", value: "Owendo", province: "G1-Estuaire" },
    { id: 2, label: "Ntoum", value: "Ntoum", province: "G1-Estuaire" },
    { id: 3, label: "Kango", value: "Kango", province: "G1-Estuaire" },
    { id: 4, label: "Ndzomoé", value: "Ndzomoé", province: "G1-Estuaire" },
    { id: 5, label: "Cocobeach", value: "Cocobeach", province: "G1-Estuaire" },
    
    { id: 6, label: "Franceville", value: "Franceville", province: "G2-Haut-Ogooué"},
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

  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((response) => {
        // console.log(response);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const country = [...new Set(provinces.map((item) => item.label))];
  //console.log(country);
  //console.log(getState)
  //console.log(data);

  const handleCountry = (event, value) => {
    let states = villes.filter((state) => state.province === value);
    states = [...new Set(states.map((item) => item.label))];
    states.sort();

    setState(states);
  };
// Top 5 Nigerian songs on Apple Music
const top5Songs = [
    { year:8,label: "Organize" },
    { year:9,label: "Joha" },
    { year:10,label: "Terminator" },
    { year:11,label: "Dull" },
    { year:12,label: "Nzaza" },
  ];
const top5Songs2 = [
    { title: "Organize" },
    { title: "Joha" },
    { title: "Terminator" },
    { title: "Dull" },
    { title: "Nzaza" },
  ];
  const [value, setValue] = useState(top5Songs[0].label);
  const [inputValue, setInputValue] = useState("");
  return (
    <Container>
      <Typography>Zone urbaine</Typography>
      
      <div className="my-4">
        <Stack spacing={2} width='500px'>
        <Autocomplete
            onChange={(event, value) => handleCountry(event, value)}
            id="country"
            getOptionLabel={(country) => `${country}`}
            options={country}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={"No Available Data"}
            renderOption={(props, country) => (
            <Box component="li" {...props} key={country} value={getCounty}>
                {country}
            </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Province où vous militez" />}
        />
        </Stack>
      </div>
      
      <div className="my-4">
      <Stack spacing={2} width='500px'>
      <Autocomplete
        id="city"
        getOptionLabel={(getState) => `${getState}`}
        options={getState}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        noOptionsText={"No Available User"}
        renderOption={(props, getState) => (
          <Box component="li" {...props} key={getState}>
            {getState}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Ville où vous militez" />}
      />    
      </Stack>
      
      </div>
      <Grid item xs={12}>
        <Grid container spacing={2} className="align-items-center">
            <Grid item xs={4}>
            <Field 
                    component={TextField} 
                    value={values.arrMilitantisme}
                    name="arrMilitantisme"
                    label="Arrondissement où vous militez"
                    onChange={(e)=>setFieldValue("arrMilitantisme",e.$d)}
                    //onChange={(e)=>console.log('___',e.$d)}
                    //helperText="Saisir votre nom"
            />   
            </Grid>
            <Grid item xs={8}>
                <Grid item  className='w-full'>
                    <Field
                    component={TextField}
                    name="quartierMilitantime"
                    value={values.quartierMilitantime}
                    label="Quartier où vous militez"
                    onChange={(e)=>setFieldValue("quartierMilitantime",e.$d)}
                    // helperText="Saisir votre lieu de naissance"
                    fullWidth
                    />
                </Grid>      
            </Grid>
        </Grid>
    </Grid>
      <Typography>Zone rurale</Typography>
      <div className="my-4">
        <Stack spacing={2} width='500px'>
        <Autocomplete
            onChange={(event, value) => handleCountry(event, value)}
            id="country"
            getOptionLabel={(country) => `${country}`}
            options={country}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={"No Available Data"}
            renderOption={(props, country) => (
            <Box component="li" {...props} key={country} value={getCounty}>
                {country}
            </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Province où vous militez" />}
        />
        </Stack>
      </div>
      
      <div className="my-4">
      <Stack spacing={2} width='500px'>
      <Autocomplete
        id="city"
        getOptionLabel={(getState) => `${getState}`}
        options={getState}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        noOptionsText={"No Available User"}
        renderOption={(props, getState) => (
          <Box component="li" {...props} key={getState}>
            {getState}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Ville où vous militez" />}
      />    
      </Stack>
      
      </div>
      {/* <Autocomplete /> */}
    </Container>
  );
}

export default Ddn;
