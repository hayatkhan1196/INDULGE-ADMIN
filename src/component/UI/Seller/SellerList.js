import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import OrderDeatail from '../../OrderDetail/OrderDeatail';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import { getService } from '../../../Services/services';

// const Alert = React.forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });
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
    backgroundColor: '#fbbe36',
    color: theme.palette.common.black,
  },

}));

// const columns = [

//   {
//     id: "firstName",
//     label: "first Name",
//     minWidth: 150,
//     align: "center"
//   },
//   {
//     id: "lastName",
//     label: "last Name",
//     minWidth: 150,
//     align: "center"
//   },
//   {
//     id: "userName",
//     label: "user Name",
//     minWidth: 150,
//     align: "center"
//   },
//   {
//     id: "Email",
//     label: "Email",
//     minWidth: 150,
//     align: "center"
//   },
//   {
//     id: "category",
//     label: "Category",
//     minWidth: 150,
//     align: "center"
//   },
//   // {
//   //   id: "user_detail",
//   //   label: "User Detail",
//   //   minWidth: 170,
//   //   align: 'center'
//   // },
// ];
// const columns = [
//   {
//     id: "sellername",
//     label: "Seller Name",
//     minWidth: 150,
//     align: "center"
//   },
//   {
//     id: "productname",
//     label: "Product Name",
//     minWidth: 150,
//     align: "center"
//   },

//   {
//     id: "productprice",
//     label: "Product price",
//     minWidth: 150,
//     align: "center"
//   },
//   {
//     id: "productDate",
//     label: "Product Date",
//     minWidth: 130,
//     align: "center"
//   },

//   // {
//   //   id: "order_detail",
//   //   label: "Order Detail",
//   //   minWidth: 170,
//   //   align:'center'
//   // },
// ];
const columns = [

  // {
  //   id: "firstName",
  //   label: "first Name",
  //   minWidth: 150,
  //   align: "center"
  // },
  // {
  //   id: "lastName",
  //   label: "last Name",
  //   minWidth: 150,
  //   align: "center"
  // },
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
function createData(Sellers_id, Sellers_name, location, email_id, order_detail) {
  //   const orderd_item = location / email_id;
  return { Sellers_id, Sellers_name, location, email_id, order_detail };
}


const SellerList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(0);
  const [rows, setrows] = React.useState([])

  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };
  //  const handleClose = () => {
  //   setState({ ...state, open: false });
  // };
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
      items.Admin == true

    )
    setrows(updatedList)
  };
  useEffect(() => {
    // if(!openPopup){
    getAllUsers()
    // }
  }, [])

  // const order_detail = (
  //   <Button variant="contained" onClick={handleOpen} size="small" style={{ background: "green" }}>Seller Detail</Button>
  // )
  // const block_button =( <Button
  //          onClick={handleClick({
  //        vertical: 'top',
  //           horizontal: 'center',
  //         })}
  //         variant="contained"
  //         size='small'
  //          className="reject_button" >Block</Button>)
  // const rows = [
  //   createData('01475', 'Joe', 'street 21', 'ali@gmail.com', order_detail),
  //   createData('02351', 'Max Marsh', 'Hall Street', 'max@gmail.como', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail
  //   ),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail
  //   ),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  //   createData('12123', 'Herry Fries', 'JK Road', 'herry@gmail.com', order_detail),
  // ];


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderDeatail />
        </Box>
      </Modal>
      <Typography variant="h6" gutterBottom component="div">
        SELLERS LIST
      </Typography>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
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
                      key={row.Salers_name}
                    >
                      {columns.map((column) => {
                        let value = row[column.id];
                        if (column.id == "productDate") {

                          value = (new Date(value.toDate())).toDateString()
                        }
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
      {/* <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        // message="Do you want to reject this Order?"
        key={vertical + horizontal}
      > */}
      {/* <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
    Do you want to Block this Customer?
    <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px'}}> 
        <Button variant="contained" size='small' style={{background:'#ffff', color:'black'}} >Yes</Button>
        <Button variant="contained" size='small' style={{background:'#ffff', color:'black'}}>No</Button>
         </div>
  </Alert> */}
      {/* </Snackbar> */}
    </div>
  );
};

export default SellerList;
