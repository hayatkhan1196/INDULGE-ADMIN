import React from 'react'
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import '../../../style/order.scss'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Snackbar from '@mui/material/Snackbar';
import AllUsersDeatail from '../../AllUsers/AllUsersDetails';
import Sidebar from '../../SideBarLogo/Sidebar';
import { getService } from '../../../Services/services';
import { useEffect } from 'react';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  border: "2px solid #fbbe36",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fbbe36",
    color: theme.palette.common.black,
  },
}));

const columns = [

  {
    id: "firstName",
    label: "first Name",
    minWidth: 150,
    align: "center"
  },
  {
    id: "lastName",
    label: "last Name",
    minWidth: 150,
    align: "center"
  },
  {
    id: "userName",
    label: "user Name",
    minWidth: 150,
    align: "center"
  },
  {
    id: "Email",
    label: "Email",
    minWidth: 150,
    align: "center"
  },
  {
    id: "category",
    label: "Category",
    minWidth: 150,
    align: "center"
  },
  // {
  //   id: "user_detail",
  //   label: "User Detail",
  //   minWidth: 170,
  //   align: 'center'
  // },
];

// function createData(order_id, order_name, customer_name, location, user_detail) {
//   return { order_id, order_name, customer_name, location, user_detail };
// }

const AllUserList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setrows] = React.useState([])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const getAllUsers = async () => {
    let list = []

    // setLoading(true)
    const querySnapshot = await getService("userData")

    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,

        ...doc.data()
      })
    });
    const newList = list.map(({ categories, ...rest }) =>
      ({ ...rest, category: categories.map(el => el.category).join(',') }))


    // setLoading(false)
    const updatedList = newList.filter((items) =>
      items.Admin != true

    )
    setrows(updatedList)
  };
  useEffect(() => {
    // if(!openPopup){
    getAllUsers()
    // }
  }, [])
  // const user_detail = (
  //   <Button variant="contained" onClick={handleOpen} size="small" style={{ background: "green" }}>User Detail</Button>
  // )

  // const rows = [
  //   createData("1", "khan", 'khan Leo', "New Town", user_detail),
  //   createData("2", "khan", 'khan Leo', "New Town", user_detail),
  //   createData("3", "khan", 'khan Leo', "Islambad", user_detail),
  //   createData("4", "khan", 'khan Leo', "Peshawar", user_detail),
  //   createData("5", "khan", 'khan Leo', "Lahore", user_detail),
  //   createData("6", "khan", 'khan Leo', "Karachi", user_detail),
  //   createData("7", "khan", 'khan Leo', "Faisalababd", user_detail),
  //   createData("8", "khan", 'khan Leo', "Lahore", user_detail),
  //   createData("9", "khan", 'khan Leo', "M Ibrahim", user_detail),
  //   createData("10", "khan", 'khan Leo', "New Town", user_detail),
  //   createData("11", "khan", 'khan Leo', "New Town", user_detail),
  //   createData("12", "khan", 'khan Leo', "New Town", user_detail),
  //   createData("13", "khan", 'khan Leo', "New Town", user_detail),
  //   createData("14", "khan", 'khan Leo', "New Town", user_detail),
  //   createData("15", "khan ", 'khan Leo', "New Town", user_detail),
  //   createData("16", "ALI", 'khan Leo', "New Town", user_detail),


  // ];

  return (
    <div className="menu_div">
      <Sidebar />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AllUsersDeatail />
        </Box>
      </Modal>
      <div className="order_head">
        <Typography variant="h6" component="div" gutterBottom>
          All Users
        </Typography>
      </div>
      <Divider />
      <div style={{ padding: '30px' }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }} >
          <TableContainer sx={{ maxHeight: 640 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <StyledTableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}

                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.order_id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}

                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  )
}

export default AllUserList
