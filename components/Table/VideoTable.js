import * as React from "react";

import Box from "@mui/material/Box";
import CardVideoThumbnail from "components/Cards/CardVideoThumbnail";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import Paper from "@mui/material/Paper";
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
import { formatDate } from "lib/utils";
import { visuallyHidden } from "@mui/utils";

const headCells = [
  {
    id: "no",
    numeric: true,
    label: "No.",
    align: "right",
    sortable: true,
    getOrderValue: (video) => video.no,
  },
  {
    id: "thumbnail",
    numeric: false,
    label: "サムネイル",
    align: "center",
    sortable: false,
    getOrderValue: (video) => video.id,
  },
  {
    id: "calories",
    numeric: false,
    label: "概要欄",
    align: "left",
    sortable: false,
    getOrderValue: (video) => video.name,
  },
  {
    id: "nickname",
    numeric: true,
    label: "投稿日",
    align: "left",
    sortable: true,
    getOrderValue: (video) => new Date(video.published_at),
  },
  {
    id: "carbs",
    numeric: true,
    label: "長さ",
    align: "left",
    sortable: true,
    getOrderValue: (video) =>
      parseInt(video.duration.slice(0, 2)) * 60 +
      parseInt(video.duration.slice(3, 5)),
  },
  {
    id: "protein",
    numeric: true,
    label: "ともだち",
    align: "center",
    sortable: true,
    getOrderValue: (video) => video.getPokemons.length,
  },
  {
    id: "ev",
    numeric: true,
    label: "しんか",
    align: "center",
    sortable: true,
    getOrderValue: (video) => video.evoPokemons.length,
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

function VideoTableHead(props) {
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

VideoTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const VideoTable = ({
  videos,
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - videos.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <InputBase
            className="ml-1 w-full px-1"
            placeholder="動画でともだちになった「ポケモン」か「なまえ」を入力"
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
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table
            stickyHeader
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"medium"}
          >
            <VideoTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={videos.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(
                filterText.length > 0
                  ? videos.filter(
                      (video) =>
                        video.getPokemons.some(
                          (pokemon) =>
                            pokemon.name.includes(filterText) ||
                            pokemon.nickname.includes(filterText)
                        ) ||
                        video.evoPokemons.some(
                          (pokemon) =>
                            pokemon.name.includes(filterText) ||
                            pokemon.nickname.includes(filterText)
                        )
                    )
                  : videos,
                getComparator(order, getOrderValue)
              )
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((video, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={video.no}>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        align="right"
                      >
                        {video.no}
                      </TableCell>
                      <TableCell align="center">
                        <CardVideoThumbnail
                          id={video.id}
                          videoNo={video.no}
                          duration={video.duration}
                          style={{ width: "120px" }}
                        />
                      </TableCell>
                      <TableCell align="left">
                        {video.description.slice(0, 50)}...
                      </TableCell>
                      <TableCell align="left">
                        {formatDate(new Date(video.published_at))}
                      </TableCell>
                      <TableCell align="left">{video.duration}</TableCell>
                      <TableCell align="right">
                        <div className="flex flex-wrap items-center justify-center">
                          {video.getPokemons.map((pokemon) => (
                            <PokemonIcon
                              pokemon={pokemon}
                              disableLink={true}
                              className="flex flex-1 m-1"
                              imgProps={
                                filterText.length > 0 &&
                                (pokemon.nickname.includes(filterText) ||
                                  pokemon.name.includes(filterText)) && {
                                  style: {
                                    backgroundColor: "red",
                                    borderRadius: "100%",
                                  },
                                }
                              }
                            />
                          ))}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        <div className="flex flex-wrap items-center justify-center">
                          {video.evoPokemons.map((pokemon) => (
                            <PokemonIcon
                              pokemon={pokemon}
                              disableLink={true}
                              className="flex flex-1 m-1"
                              imgProps={
                                filterText.length > 0 &&
                                (pokemon.nickname.includes(filterText) ||
                                  pokemon.name.includes(filterText)) && {
                                  style: {
                                    backgroundColor: "red",
                                    borderRadius: "100%",
                                  },
                                }
                              }
                            />
                          ))}
                        </div>
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
          count={videos.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

VideoTable.propTypes = {
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  defaultRowsPerPage: PropTypes.number,
};

VideoTable.defaultProps = {
  rowsPerPageOptions: [10, 50, 150],
  defaultRowsPerPage: 150,
};

export default VideoTable;
