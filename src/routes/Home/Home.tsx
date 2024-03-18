import Table from "@mui/material/Table";
import data from "../../data";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";

const Home = () => {
  return (
    <div>
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
          {data.map((item) => (
            <TableRow
              key={item.first_name}
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
