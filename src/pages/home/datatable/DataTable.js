import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import username from '../../../assets/image/icons/user-thumb.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
function createData(lorem,name, email, date, status,icon) {
    return {
      lorem,
      name,
      email,
      date,
      status,
      icon
    };
  }

  const rows = [
    createData('#8763622', 'Arrora Jani', 'arrorajani@gmail.com', '11 AUG, 2022'),
    createData('#876364', 'Rahul', 'Rahul@gmail.com', '9 AUG, 2022'),
    createData('#876365', 'Vishal Tomar','Vishal@gmail.com', '21 AUG, 2022'),
    createData('#876366', 'Munesh Singh','Munesh@gmail.com', '14 AUG, 2022'),
    createData('#876366', 'Sanjeev Singh', 'Sanjeev@gmail.com', '13 AUG, 2022'),
    createData('#876367', 'Prem Chopra', 'Prem@gmail.com', '23 AUG, 2022'),
    createData('#876368', 'Manpreet Singh', 'Manpreet@gmail.com','16 AUG, 2022'),
    createData('#876369', 'Kumar Baldev','Kumar@gmail.com', '24 AUG, 2022'),
    createData('#8763622', 'Manish Thakur', 'Manish@gmail.com', '8 AUG, 2022'),
    createData('#876361', 'Sanjay Patel', 'Sanjay@gmail.com','12 AUG, 2022'),
    createData('#876362', 'Rakhi Singh', 'Rakhi@gmail.com', '30 AUG, 2022'),
    createData('#8763611', 'Vijay Mandal','Vijay@gmail.com', '29 AUG, 2022'),
    createData('#8763612', 'Shami', 'Shami@gmail.com', '1 AUG, 2022'),
  ];
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'lorem',
    numeric: true,
    disablePadding: false,
    label: 'Lorem',
  },
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Name',
    },
    {
      id: 'email',
      numeric: true,
      disablePadding: false,
      label: 'Email',
    },
    {
      id: 'date',
      numeric: true,
      disablePadding: false,
      label: 'Date',
    },
    
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'Status',
    },
    {
      id: 'icon',
      numeric: true,
      disablePadding: false,
      label:<DeleteIcon/> ,
      icon: null,
    },
  ];
function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                 
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : ''}
                        sortDirection={orderBy === headCell.id ? order : false}
                        className="custom-sort-cell"
                       
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                          
                        >
                           
                            {orderBy === headCell.id ? (
                                <Box component="span">
                                    {order === 'desc' ? (
                                        <ArrowDropDownIcon fontSize="small"  sx={{display:'inline-block', verticalAlign:'middle'}}/>
                                    ) : (
                                        <ArrowDropUpIcon fontSize="small" sx={{display:'inline-block', verticalAlign:'middle'}} /> 
                                    )}
                                </Box>
                            ) : null}
                             {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                    
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};
export default function Datatable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('email');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

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
                selected.slice(selectedIndex + 1),
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

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <div className='datatable_main'>
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                <div className='tablebox'>
                    <Table
                        sx={{ minWidth: 950 }}
                        aria-labelledby="tableTitle"
                        className="custom-table"
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
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
                                        sx={{ cursor: 'pointer',marginBottom:'10px !important' }}
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
                                        <TableCell align="left">{row.lorem}</TableCell>
                                        <TableCell
                                           
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                         <img src={username} alt="Description of the image" />
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="left"><MailOutlineIcon className='mailicon' />{row.email}</TableCell>
                                        <TableCell align="left"><DateRangeIcon className='daterange' />{row.date}</TableCell>
                              
                                        <TableCell align="left"><Button className='btnstatus'>IN USE</Button></TableCell>
                                        <TableCell align="left"><MoreHorizIcon sx={{color:'#DD6362'}}/></TableCell>
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
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={{fontSize:'13px'}}
                    className='tablepagination'
                />
            </Paper>
        </Box>
       </div>
    );
}
