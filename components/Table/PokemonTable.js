/**
 * @file Pokemontable Components
 * @author p0kem0nEmerald <https://github.com/p0kem0nEmerald>
 * @copyright エメラルドを風化させないChannel 2021
 * @license MIT
 */
 
import * as React from "react";

import Box from "@mui/material/Box";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import PokemonAutocomplete from "components/Pokemon/PokemonAutocomplete";
import PokemonIcon from "components/Pokemon/PokemonIcon";
import PokemonLink from "components/Link/PokemonLink";
import PropTypes from "prop-types";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import VideoLink from "components/Link/VideoLink";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  {
    id: "no",
    numeric: true,
    label: "No.",
    align: "right",
    sortable: true,
    getOrderValue: (pokemon) => pokemon.no,
  },
  {
    id: "icon",
    numeric: false,
    label: "すがた",
    align: "center",
    sortable: false,
    getOrderValue: (pokemon) => pokemon.name,
  },
  {
    id: "calories",
    numeric: true,
    label: "ポケモン",
    align: "left",
    sortable: true,
    getOrderValue: (pokemon) => pokemon.name,
  },
  {
    id: "nickname",
    numeric: true,
    label: "なまえ",
    align: "left",
    sortable: true,
    getOrderValue: (pokemon) => pokemon.nickname,
  },
  {
    id: "carbs",
    numeric: true,
    label: "かんじ",
    align: "left",
    sortable: true,
    getOrderValue: (pokemon) => pokemon.kanji || "",
  },
  {
    id: "protein",
    numeric: true,
    label: "であった",
    align: "right",
    sortable: true,
    getOrderValue: (pokemon) => pokemon.getVideoNo,
  },
  {
    id: "protein2",
    numeric: true,
    label: "しんか",
    align: "right",
    sortable: true,
    getOrderValue: (pokemon) => pokemon.evoVideoNo,
  },
];

const descendingComparator = (a, b, getOrderValue) => {
  if (getOrderValue(b) < getOrderValue(a)) {
    return -1;
  }
  if (getOrderValue(b) > getOrderValue(a)) {
    return 1;
  }
  return 0;
};

const getComparator = (order, getOrderValue) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, getOrderValue)
    : (a, b) => -descendingComparator(a, b, getOrderValue);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

function PokemonTableHead(props) {
  const { order, orderBy, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={"normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.sortable ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            ) : (
              <>{headCell.label}</>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

PokemonTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const PokemonTable = ({
  pokemons,
  defaultRowsPerPage,
  rowsPerPageOptions,
  ...props
}) => {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("no");
  const [getOrderValue, setGetOrderValue] = React.useState(() => (val) => val);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage);
  const [filterText, setFilterText] = React.useState("");

  const handleRequestSort = (_, headCell) => {
    const isAsc = orderBy === headCell.id && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(headCell.id);
    setGetOrderValue(() => headCell.getOrderValue);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredPokemons = pokemons.filter(
    (pokemon) =>
      pokemon.name.includes(filterText) || pokemon.nickname.includes(filterText)
  );

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - filteredPokemons.length)
      : 0;

  return (
    <Box className="w-full">
      <Paper className="w-full mb-2">
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <InputBase
            className="ml-1 w-full px-1"
            placeholder="「ポケモン」か「なまえ」を入力"
            inputProps={{ className: "focus:ring-0 bg-gray-100" }}
            value={filterText}
            onChange={(e) => {
              setFilterText(e.target.value);
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
          <Tooltip title="まだ使えません。">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer sx={{ height: "calc(100vh - 300px)" }}>
          <Table
            stickyHeader
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <PokemonTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={filteredPokemons.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(filteredPokemons, getComparator(order, getOrderValue))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((pokemon, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={pokemon.base}>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        {pokemon.no}
                      </TableCell>
                      <TableCell align="center">
                        <PokemonIcon
                          pokemon={pokemon}
                          imgProps={{ className: "mx-auto" }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        <PokemonLink pokemon={pokemon}>
                          {pokemon.name}
                        </PokemonLink>
                      </TableCell>
                      <TableCell align="left">
                        <PokemonLink pokemon={pokemon}>
                          {pokemon.nickname}
                        </PokemonLink>
                      </TableCell>
                      <TableCell align="left">{pokemon.kanji}</TableCell>
                      <TableCell align="right">
                        <VideoLink videoNo={pokemon.getVideoNo}>
                          <span style={{ color: "#065fd4" }}>
                            #{pokemon.getVideoNo}
                          </span>
                        </VideoLink>
                      </TableCell>
                      <TableCell align="right">
                        <VideoLink videoNo={pokemon.evoVideoNo}>
                          <span style={{ color: "#065fd4" }}>
                            #{pokemon.evoVideoNo}
                          </span>
                        </VideoLink>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={filteredPokemons.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className="border-t"
        />
      </Paper>
    </Box>
  );
};

PokemonTable.propTypes = {
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  defaultRowsPerPage: PropTypes.number,
};

PokemonTable.defaultProps = {
  rowsPerPageOptions: [50, 150, 450],
  defaultRowsPerPage: 450,
};

export default PokemonTable;
