import React, { useCallback, useEffect, useMemo, useState } from 'react';
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
import { data } from './MeasureDataTable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import TuneIcon from '@mui/icons-material/Tune';
import { useDispatch, useSelector } from 'react-redux';
import { updateCheckDashboard, updateScheduleDashboard } from '../../component/store/userSlice';
import ScheduleAddLibrary from './scheduleaddlibrary/SchedleAddLibrary';
library.add(faTrashCan, faPenToSquare);

const MeasureSetUp = () => {
  const [checkboxValues, setCheckboxValues] = useState({
    requiresScheduling: false,
    requiresVisit: false,
    requiresTemplate: false,
  });
  const handleCheckboxChange = (checkboxName) => {
    setCheckboxValues((prevCheckboxValues) => {
      const newValue = !prevCheckboxValues[checkboxName];
      const updatedCheckboxValues = {
        ...prevCheckboxValues,
        [checkboxName]: newValue,
      };
  
      // Update the Redux state for the specific checkbox
      dispatch(updateCheckDashboard(updatedCheckboxValues));
  
      return updatedCheckboxValues;
    });
  };
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dashboardTableData = useSelector((state) => state.appointments.scheduledashboard)|| [];
  const validDashboardTableData = Array.isArray(dashboardTableData) ? dashboardTableData : [];
  useEffect(() => {
    dispatch(updateScheduleDashboard(data));
  }, [])

  const handleDeleteRow = useCallback(
    (row) => {
      const shouldDelete = window.confirm(`Are you sure you want to delete ${row.getValue('firstName')}`);
      if (shouldDelete) {
        const updatedTableData = dashboardTableData.filter((item, index) => index !== row.index);
        dispatch(updateScheduleDashboard(updatedTableData));
      }
    },
    [dashboardTableData, dispatch]
  );
  const handleEditRow = (row) => {
    navigate('../ScheduleEdit');
  };
  const handleViewRow = (row) => {
    navigate('../ScheduleView');
  };
  const handleNewClient = (row) => {
    navigate('../ScheduleAddNewClient');
  };

  const columns = useMemo(
    () => [
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
        accessorKey: 'RequiresScheduling',
        header: 'Requires Scheduling',
        size: 10,
        minSize: 10,
        maxSize: 10,
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', }}>
            <Tooltip arrow placement="left" title="Checked">
              <Checkbox
                color="primary"
                // checked={checkboxValues.requiresScheduling}
                onChange={() => handleCheckboxChange('requiresScheduling')}
              />
            </Tooltip>

          </Box>
        ),
      },
      {
        accessorKey: 'RequiresVisit',
        header: 'Requires  Pre Visit',
        size: 10,
        minSize: 10,
        maxSize: 10,
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', }}>
            <Tooltip arrow placement="left" title="Checked">
              <Checkbox
                color="primary"
                // checked={checkboxValues.requiresVisit}
              onChange={() => handleCheckboxChange('requiresVisit')}
              />
            </Tooltip>

          </Box>
        ),
      },
      {
        accessorKey: 'RequiresTemplate',
        header: 'Requires Template',
        size: 10,
        minSize: 10,
        maxSize: 10,
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', }}>
            <Tooltip arrow placement="left" title="Checked">
              <Checkbox
                color="primary"
                // checked={checkboxValues.requiresTemplate}
              onChange={() => handleCheckboxChange('requiresTemplate')}
              />
            </Tooltip>

          </Box>
        ),

      },
      {
        accessorKey: 'ActiveFlag',
        header: 'Active Flag',
        size: 10,
        minSize: 10,
        maxSize: 10,
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'center', }}>
            <Tooltip arrow placement="left">
              <Button className="btnactiveflag">
                Active
              </Button>
            </Tooltip>

          </Box>
        ),

      },
      {
        accessorKey: 'action',
        header: 'Action',
        enableColumnFilter: false,
        size: 10,
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', gap: '1rem',justifyContent: 'center' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => handleViewRow(row)}>
                <RemoveRedEyeOutlinedIcon className='visibleicon' />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => handleEditRow(row)}>
                <FontAwesomeIcon icon={faPenToSquare} className='editicon' size='sm' />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <FontAwesomeIcon icon={faTrashCan} className="fa-xs deleteicon" size='sm' />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ],
    [handleDeleteRow, checkboxValues]

  );

  return (
    <Grid container>
      <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
        <Box sx={{ width: '100%' }}>
          <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
              <div className="tablebox2">
                <MaterialReactTable
                  columns={columns}
                  data={validDashboardTableData}
                  enableColumnOrdering={false}
                  enableEditing={false}
                  enableDensityToggle={false}
                  enableFullScreenToggle={false}
                  enableSorting={false}
                  enableHiding={false}
                  enableExpandAll={false}
                  enableRowSelection
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
                  renderTopToolbarCustomActions={() => (
                    <Button
                      color="secondary"
                      onClick={handleNewClient}
                      variant="contained"
                      className='add_record_schedule'
                    >
                      + Add New Measure
                    </Button>
                  )}
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
                    FilterListIcon: (props) => (<TuneIcon {...props} value={'icon'} />),
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
      <Grid Item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
        <ScheduleAddLibrary/>
      </Grid>
    </Grid>
  );
};
export default MeasureSetUp;