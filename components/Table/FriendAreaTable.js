import * as React from "react";

import Box from "@mui/material/Box";
import CardFriendAreaThumbnail from "components/Cards/CardFriendAreaThumbnail";
// import CardFriendAreaThumbnail from "components/Cards/CardFriendAreaThumbnail";
import FilterListIcon from "@mui/icons-material/FilterList";
import FriendAreaLink from "components/Link/FriendAreaLink";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import PokemonAutocomplete from "components/Pokemon/PokemonAutocomplete";
import PokemonIcons from "components/Pokemon/PokemonIcons";
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
import { formatDate } from "lib/utils";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  {
    id: "cover",
    numeric: false,
    label: "画像",
    align: "center",
    sortable: false,
    getOrderValue: (friendArea) => friendArea.name,
  },
  {
    id: "name",
    numeric: false,
    label: "名前",
    align: "center",
    sortable: false,
    getOrderValue: (friendArea) => friendArea.name,
  },
  {
    id: "description",
    numeric: false,
    label: "説明",
    align: "left",
    sortable: false,
    getOrderValue: (friendArea) => friendArea.name,
  },
  {
    id: "area",
    numeric: true,
    label: "エリア",
    align: "left",
    sortable: true,
    getOrderValue: (friendArea) => friendArea.category,
  },
  {
    id: "bgm",
    numeric: true,
    label: "BGM",
    align: "left",
    sortable: true,
    getOrderValue: (friendArea) => friendArea.bgm,
  },
  {
    id: "friends",
    numeric: true,
    label: "ともだち",
    align: "center",
    sortable: true,
    getOrderValue: (friendArea) => friendArea.pokemons.length,
  },
  {
    id: "capacity",
    numeric: true,
    label: "数",
    align: "center",
    sortable: true,
    getOrderValue: (friendArea) => friendArea.pokemons.length,
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

function FriendAreaTableHead(props) {
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

FriendAreaTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const FriendAreaTable = ({
  friendAreas,
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

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - friendAreas.length) : 0;

  return (
    <Box className="w-full">
      <Paper className="w-full mb-2">
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <PokemonAutocomplete
            inputValue={filterText}
            setInputValue={setFilterText}
            textFieldProps={{
              label: "「ポケモン」か「なまえ」を入力",
              inputProps: {
                className: "focus:ring-0 bg-gray-100",
              },
            }}
            className="ml-1 w-full px-1"
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
            <FriendAreaTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={friendAreas.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(
                filterText.length > 0
                  ? friendAreas.filter((friendArea) =>
                      friendArea.pokemons.some((pokemon) =>
                        pokemon.name.includes(filterText)
                      )
                    )
                  : friendAreas,
                getComparator(order, getOrderValue)
              )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((friendArea, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={friendArea}>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="center"
                      >
                        <CardFriendAreaThumbnail
                          friendArea={friendArea}
                          style={{ width: "160px" }}
                          imgProps={{
                            className: "object-cover",
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">{friendArea.name}</TableCell>
                      <TableCell align="left">
                        {friendArea.description.replaceAll("\n", " ")}
                      </TableCell>
                      <TableCell align="right">{friendArea.category}</TableCell>
                      <TableCell align="left">{friendArea.bgm}</TableCell>
                      <TableCell align="center">
                        <PokemonIcons pokemons={friendArea.pokemons} />
                      </TableCell>
                      <TableCell align="right">
                        {friendArea.pokemons.length}
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
          count={friendAreas.length}
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

FriendAreaTable.propTypes = {
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  defaultRowsPerPage: PropTypes.number,
};

FriendAreaTable.defaultProps = {
  rowsPerPageOptions: [10, 30, 60],
  defaultRowsPerPage: 60,
};

export default FriendAreaTable;
