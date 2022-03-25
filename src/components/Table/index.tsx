import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { getOrderComparator } from "../../helpers/functions/dataTransformation";

type DataTableProps<Data, Headers extends string & Partial<keyof Data>> = {
  data: Data[];
  headers: {
    id: string & Partial<Headers>;
    label: string;
    typeVar: Data[Headers];
    signif?: number;
  }[];
};

export const DataTable = <
  Data extends { [n: string]: string | number },
  TableHeaders extends string & Partial<keyof Data>
>({
  data,
  headers,
}: DataTableProps<Data, TableHeaders>) => {
  const [order, setOrder] = React.useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = React.useState(headers[0].id);
  const createSortHandler = (property) => (event) => {
    (() => {
      const isAsc = orderBy === property && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      setOrderBy(property);
    })();
  };
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, i) => (
              <TableCell
                key={`${header.id}${i}`}
                align={header.typeVar === "number" ? "right" : "left"}
                padding={"none"}
                sortDirection={orderBy === header.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === header.id}
                  direction={orderBy === header.id ? order : "asc"}
                  onClick={createSortHandler(header.id)}
                  sx={{ fontWeight: 600 }}
                >
                  {header.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...data]
            .sort(
              getOrderComparator(
                order,
                orderBy,
                headers.filter((header) => header.id === orderBy)[0].typeVar
              )
            )
            .map((row, i) => (
              <TableRow hover key={`${row.bohf}${i}`}>
                {headers.map((cell, ind) => (
                  <TableCell
                    key={`${row.bohf}${i}${ind}`}
                    component={ind === 0 ? "th" : "td"}
                    scope="row"
                    sx={{ paddingTop: "2px" }}
                    padding="none"
                    align={cell.typeVar === "number" ? "right" : "left"}
                  >
                    {row[cell.id]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
