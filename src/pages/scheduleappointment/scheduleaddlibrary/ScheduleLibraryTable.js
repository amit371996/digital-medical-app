import React, { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Grid,
  TableContainer,
  Paper,
  Checkbox

} from '@mui/material';
import { useNavigate } from "react-router-dom";
import { Librarydata } from './ScheduleLibraryData';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import TuneIcon from '@mui/icons-material/Tune';
import { useDispatch, useSelector } from 'react-redux';
import { updateLibraryData, addRowToMeasureTable } from '../../../component/store/userSlice';

library.add(faTrashCan, faPenToSquare);

const ScheduleLibraryTable = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const libraryTabledata = useSelector((state) => state.appointments.librarydata) || [];
  const scheduleTabledata = useSelector((state) => state.appointments.scheduledashboard) || [];
  const scheduleTabledataRef = useRef();

  useEffect(() => {
    dispatch(updateLibraryData(Librarydata));
    scheduleTabledataRef.current = scheduleTabledata;
  }, [scheduleTabledata])

  const handleDeleteRow = useCallback(
    (row) => {
      const shouldDelete = window.confirm(`Are you sure you want to delete ${row.getValue('firstName')}`);
      if (shouldDelete) {
        const updatedTableData = libraryTabledata.filter((item, index) => index !== row.index);
        dispatch(updateLibraryData(updatedTableData));
      }
    },
    [libraryTabledata, dispatch]
  );
  const handleViewRow = (row) => {
    navigate('../ScheduleView');
  };
 const handleCheckboxChange = useCallback(
  (row) => {
    const isCheckboxChecked = checkedRows.includes(row.id);
    const isRowAlreadyExists = scheduleTabledataRef.current.some(item => item.Measure === row.Measure);
    if (isCheckboxChecked) {
      const updatedRows = checkedRows.filter((id) => id !== row.id);
      setCheckedRows(updatedRows);
      dispatch(updateLibraryData(updatedRows)); 
    } else {
      if(isRowAlreadyExists){
        alert('Measure All ready in table');
      } else{
        const updatedRows = [...checkedRows, row.id];
        setCheckedRows(updatedRows);
        dispatch(addRowToMeasureTable(row));
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }
     
    }
  },
  [checkedRows, scheduleTabledata, dispatch, updateLibraryData, addRowToMeasureTable]
);
  

  const columns = useMemo(
    () => [
      {
        accessorKey: 'checkbox', 
        header: '',
        size: 5,
        minSize: 10,
        enableColumnFilter: false,
        maxSize: 10,
        Cell: ({ row }) => (
          <Checkbox
            color="primary"
            checked={checkedRows.includes(row.id)}
            onChange={() => handleCheckboxChange(row.original)}  
          />
        ),
      },
      {
        accessorKey: 'Measure',
        header: 'Measure',
        size: 5,
        minSize: 10,
        maxSize: 10,
        menu: false,
      },
      {
        accessorKey: 'Description',
        header: 'Description',
        size: 10,
        minSize: 10,
        maxSize: 10,

      },
      {
        accessorKey: 'ApplicableProvider',
        header: 'Applicable Provider',
        size: 10,
        minSize: 10,
        maxSize: 10,
        enableColumnFilter: false

      },
      {
        accessorKey: 'Eligibilitycriteria',
        header: 'Eligibility Criteria',
        size: 10,
        minSize: 10,
        maxSize: 10,
        enableColumnFilter: false

      },
      {
        accessorKey: 'Closurecriteria',
        header: 'Closure Criteria',
        size: 10,
        minSize: 10,
        maxSize: 10,
        enableColumnFilter: false

      },
      {
        accessorKey: 'action',
        header: 'Action',
        enableColumnFilter: false,
        size: 10,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => handleViewRow(row)}>
                <RemoveRedEyeOutlinedIcon className='visibleicon' />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ],
    [handleDeleteRow]

  );

  return (
    <Grid container>
      <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <div className="tablebox2 addlibrarytable">
                <MaterialReactTable
                  columns={columns}
                  data={libraryTabledata}
                  enableColumnOrdering={false}
                  enableEditing={false}
                  enableDensityToggle={false}
                  enableFullScreenToggle={false}
                  enableSorting={false}
                  enableHiding={false}
                  enableExpandAll={false}
                  enableColumnActions={false}
                  positionGlobalFilter="left"
                  muiTablePaperProps={{
                    elevation: 0,
                    sx: {
                      borderRadius: '0',
                      border: '1px dashed #e0e0e0',
                    },
                  }}
                  muiSearchTextFieldProps={{
                    placeholder: 'Search Measure',
                    sx: { minWidth: '20px', borderRadius: '50px' },
                    variant: 'outlined',

                  }}
                  initialState={{
                    showGlobalFilter: true, //show the global filter by default

                  }}
                  globalFilter={(rows, columns, filterValue) => {
                    if (filterValue) {
                      const measureColumn = columns.find((col) => col.accessorKey === 'Measure');
                      if (measureColumn) {
                        return rows.filter((row) => {
                          const cellValue = row.original[measureColumn.accessorKey];
                          return cellValue.toLowerCase().includes(filterValue.toLowerCase());
                        });
                      }
                    }
                    return rows;
                  }}
                  defaultColumn={{
                    minSize: 20,
                    maxSize: 9001,
                    size: 10,
                  }}
                  muiTableHeadCellProps={{
                    sx: {
                      flex: '0 0 auto',
                    },
                  }}
                  icons={{
                    FilterListIcon: (props) => (<TuneIcon {...props} value={'icon'} sx={{ color: '#0D6DAE !important' }} />),
                  }}
                  muiTablePaginationProps={{
                    rowsPerPageOptions: false,
                    showFirstButton: false,
                    showLastButton: false,
                    positionPagination: 'top'
                  }}
                />

              </div>
            </TableContainer>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};
export default ScheduleLibraryTable;