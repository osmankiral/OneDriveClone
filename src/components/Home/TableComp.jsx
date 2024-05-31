import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Belgeler", "25.05.2021", "41.9 MB", "Özel"),
  createData("Ekler", "30.07.2023", "3.9 GB", "Özel"),
  createData("Masaüstü", "02.03.2024", "917.8 MB", "Özel"),
  createData("Resimler", "12.11.2022", "182.5 MB", "Özel"),
];

const TableComp = () => {
  return (
    <div className="mt-20">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell sx={{ fontSize: '0.875rem', fontWeight: '600' }}>Ad</TableCell>
              <TableCell sx={{ fontSize: '0.875rem', fontWeight: '600' }} align="right">Değiştirme Tarihi</TableCell>
              <TableCell sx={{ fontSize: '0.875rem', fontWeight: '600' }} align="right">Dosya Boyutu</TableCell>
              <TableCell sx={{ fontSize: '0.875rem', fontWeight: '600' }}align="right">Paylaşım</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComp;
