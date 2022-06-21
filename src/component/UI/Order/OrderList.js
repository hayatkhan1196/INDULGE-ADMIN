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
// import AddProduct from "./AddProduct";
import Box from "@mui/material/Box";
import OrderDetail from '../../OrderDetail/OrderDeatail'
import Snackbar from '@mui/material/Snackbar';
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
    id: "sellername",
    label: "Seller Name",
    minWidth: 150,
    align: "center"
  },
  {
    id: "productname",
    label: "Product Name",
    minWidth: 150,
    align: "center"
  },

  {
    id: "productprice",
    label: "Product price",
    minWidth: 150,
    align: "center"
  },
  {
    id: "productDate",
    label: "Product Date",
    minWidth: 130,
    align: "center"
  },

  // {
  //   id: "order_detail",
  //   label: "Order Detail",
  //   minWidth: 170,
  //   align:'center'
  // },
];


const OrderList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [rows, setrows] = React.useState([])

  const handleClose = () => setOpen(false);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getAllOrders = async () => {
    let list = []

    // setLoading(true)
    const querySnapshot = await getService("OrderHistory")

    querySnapshot.forEach((doc) => {
      list.push({
        ...doc.data(),
        id: doc.id,


      })


    });


    setrows(list[1].History)

    // setLoading(false)
  };
  useEffect(() => {
    // if(!openPopup){
    getAllOrders()
    // }
  }, [])

  // const order_detail = (
  //   <Button variant="contained" onClick={handleOpen} size="small" style={{background:"green"}}>Order Detail</Button>
  // )



  return (
    <div className="order">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderDetail />
        </Box>
      </Modal>
      <div className="order_head">
        <Typography variant="h6" component="div" gutterBottom>
          ORDER LIST
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
                          let value = row[column.id]
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
      </div>
    </div>
  )
}

export default OrderList
