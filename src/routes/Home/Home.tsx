import Table from "@mui/material/Table";
import data from "../../data";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const uniqueNames = [...new Set(data.map((item) => item.first_name))];

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={uniqueNames}
        sx={{ width: 300 }}
        onInputChange={(_, value) => setSearch(value)}
        onChange={(_, value) => setSearch(value ? value.toLowerCase() : "")}
        onFocus={() => setSearch("")}
        renderInput={(params) => (
          <TextField {...params} label="Pesquise por pessoas" />
        )}
      />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align="right">Sobrenome</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.first_name}
                </TableCell>
                <TableCell align="right">{item.last_name}</TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.phone}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
