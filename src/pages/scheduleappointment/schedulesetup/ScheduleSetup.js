import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Grid } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
library.add(faTrashCan, faPenToSquare);
function createData(lorem, name, email, date, status, icon) {
  return {
    lorem,
    name,
    email,
    date,
    status,
    icon,
  };
}
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '22ch',
      },
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: 'flex',
  alignItems: 'flex-start',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));
const rows = [
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
  createData('Josh Clark', 'Measure 1', 'Lorem ipsum', 'All'),
];

const headCells = [
  {
    id: 'Client name',
    numeric: true,
    disablePadding: false,
    label: 'Client name',
  },
  {
    id: 'Measure',
    numeric: false,
    disablePadding: true,
    label: 'Measure',
  },
  {
    id: 'Description',
    numeric: true,
    disablePadding: false,
    label: 'Description',
  },
  {
    id: 'Applicable Provider',
    numeric: true,
    disablePadding: false,
    label: 'Applicable Provider',
  },
  {
    id: 'Active Flag',
    numeric: true,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'icon',
    numeric: true,
    disablePadding: false,
    label: 'Action',
    icon: null,
  },
];

export default function Datatable() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [newRecord, setNewRecord] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const handleAddNewRecord = () => {
    const id = `#${Math.floor(Math.random() * 10000000)}`;
    const name = 'New User';
    const email = 'newuser@example.com';
    const date = '1 SEP, 2022';
    const status = '';
    const icon = null;

    const newRow = createData(id, name, email, date, status, icon);
    setNewRecord(newRow);
  };

  // Filter data based on the search input
  const handleSearch = () => {
    const filtered = rows.filter((row) =>
      Object.values(row).some((value) =>
        value !== undefined && value.toString().toLowerCase().includes(searchInput.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };
  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    handleSearch(); // Call the search function on input change
  };
  const handleAlert = () => {
    alert('hlo')
  }

  const visibleRows = newRecord
    ? [...rows, newRecord]
    : filteredData.length > 0
      ? filteredData
      : rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    
    <Grid container>
      <Grid item xs={11} sm={12} md={12} lg={12} xl={12}>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <div className="tablebox2">
                <div className='serchbarbxschedule'>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                      <Item>
                        <Search>
                          <SearchIconWrapper>
                            <SearchIcon className='searchicon' />
                          </SearchIconWrapper>
                          <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            className='inpitserach'
                            onChange={handleInputChange}
                            value={searchInput}
                          />
                        </Search>
                      </Item>
                    </Grid>
                    <Grid item xs={6} md={4}>
                      <Item className='add_record_schedule'><Button onClick={handleAddNewRecord} className='from-right'>Add new Client</Button></Item>
                    </Grid>
                  </Grid>
                </div>
                <Table
                  sx={{ minWidth: 950 }}
                  aria-labelledby="tableTitle"
                  className="custom-table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          indeterminate={
                            selected.length > 0 && selected.length < rows.length
                          }
                          checked={rows.length > 0 && selected.length === rows.length}
                          onChange={handleSelectAllClick}
                          inputProps={{
                            'aria-label': 'select all desserts',
                          }}
                        />
                      </TableCell>
                      {headCells.map((headCell) => (
                        <TableCell
                          key={headCell.id}
                          align={headCell.numeric ? 'right' : ''}
                          className="custom-sort-cell"
                        >
                          {headCell.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {visibleRows.map((row, index) => {
                      const isItemSelected = isSelected(row.name);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          onClick={(event) => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                          sx={{
                            cursor: 'pointer',
                            marginBottom: '10px !important',
                          }}
                          className="custom-row"
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                'aria-labelledby': labelId,
                              }}
                            />
                          </TableCell>
                          <TableCell align="center">{row.lorem}</TableCell>
                          <TableCell
                            id={labelId}
                            scope="row"
                            padding="none"
                          >
                            {row.name}
                          </TableCell>
                          <TableCell align="center">
                            {row.email}
                          </TableCell>
                          <TableCell align="center">
                            {row.date}
                          </TableCell>
                          <TableCell align="center">
                            <Button className="btnactiveflag">
                              In Active
                            </Button>
                          </TableCell>
                          <TableCell align="center">
                            <Button className='actionbutton'>
                              <RemoveRedEyeOutlinedIcon className='visibleicon' onClick={handleAlert} />
                            </Button>
                            <Button className='actionbutton'>
                              <FontAwesomeIcon icon={faPenToSquare} className='editicon' size='sm' />
                            </Button>
                            <Button className='actionbutton'>
                              <FontAwesomeIcon icon={faTrashCan} className="fa-xs deleteicon" size='sm' />
                            </Button>


                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={visibleRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{ fontSize: '13px' }}
              className="tablepagination"
            />
          </Paper>

        </Box>
      </Grid>
    </Grid>
  );
}
