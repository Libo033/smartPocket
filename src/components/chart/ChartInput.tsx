import React, { ChangeEvent, SetStateAction } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { TextField } from "@mui/material";
import styles from "./page.module.css";

const ChartInput: React.FC<{
  month: string;
  setMonth: React.Dispatch<SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<SetStateAction<string>>;
}> = ({ month, setMonth, year, setYear }) => {
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Mes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Mes"
          onChange={(e: SelectChangeEvent) =>
            setMonth(e.target.value as string)
          }
        >
          <MenuItem value={0}>Anual</MenuItem>
          <MenuItem value={1}>enero</MenuItem>
          <MenuItem value={2}>febrero</MenuItem>
          <MenuItem value={3}>marzo</MenuItem>
          <MenuItem value={4}>abril</MenuItem>
          <MenuItem value={5}>mayo</MenuItem>
          <MenuItem value={6}>junio</MenuItem>
          <MenuItem value={7}>julio</MenuItem>
          <MenuItem value={8}>agosto</MenuItem>
          <MenuItem value={9}>septiembre</MenuItem>
          <MenuItem value={10}>octubre</MenuItem>
          <MenuItem value={11}>noviembre</MenuItem>
          <MenuItem value={12}>diciembre</MenuItem>
        </Select>
      </FormControl>
      <TextField
        type="number"
        label="Año"
        autoComplete="off"
        value={parseInt(year)}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setYear(e.target.value as string)
        }
      />
      <button className={styles.ChartInput_Button}>Generar Chart</button>
    </>
  );
};

export default ChartInput;
