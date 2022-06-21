import React, { useEffect } from "react";
import "../../../style/menu.scss";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Sidebar from '../../SideBarLogo/Sidebar'
import { getService, updateService } from '../../../Services/services';
import { SimpleImageSlider } from 'react-simple-image-slider';
import { db } from "../../../config/Fibase/firebase";
import { collection } from 'firebase/firestore';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #fbbe36",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: '#ca2129',
    backgroundColor: "#fbbe36",
    color: theme.palette.common.black,
  },
}));

const columns = [
  {
    id: "sellerName",
    label: "Seller Name",
    minWidth: 190
  },

  {
    id: "productdec",
    label: "Product Description",
    minWidth: 150,
    // align: "right",,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "postName",
    label: "Post Name",
    minWidth: 150,
    // align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "productPrice",
    label: "Product Price",
    minWidth: 150,
    // align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "category",
    label: "Category",
    minWidth: 150,
    // align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "postTime",
    label: "Post Date",
    minWidth: 130,
    align: "center"
  },

  // {
  //   id: "delete",
  //   label: "Delete",
  //   minWidth: 150,
  //   // align: "right",
  //   format: (value) => value.toFixed(2),
  // },

];


const ProductList = () => {

  const [page, setPage] = React.useState(0);
  const [rows, setrows] = React.useState([])
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [_open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const _handleClose = () => setOpen(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;
  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };
  // const handleClose = () => {
  //   setState({ ...state, open: false });
  // };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let allList = []
  const getAllProducts = async () => {
    let list = []

    // setLoading(true)
    const querySnapshot = await getService("posts")

    querySnapshot.forEach((doc) => {
      list.push({
        id: doc.id,
        ...doc.data()
      })
    });
    list.map((item) => {
      item?.products.map((subitems) => {
        allList.push(subitems)
      })
    })

    setrows(allList)

    // setLoading(false)
  };

  //     const handleDelete = async (id) => {
  //       // db.doc("posts").doc(id).updateService();
  //       // setrows(allList)
  //       // console.log("🚀 ~ file: ProductList.js ~ line 166 ~ handleDelete ~ allList", allList)
  //       const arr=rows.filter((i) => i.id != id)
  //      setrows(arr);

  // }

  // const edit_button = (
  //   <Button
  //     // onClick={handleOpen}
  //     variant="contained"
  //     size='small'
  //     style={{ color: "black", backgroundColor: "#fbbe36", }}>Edit</Button>
  // )
  // const delete_button = (
  //   <Button
  //     onClick={handleClick({
  //       vertical: 'top',
  //       horizontal: 'center',
  //     })}
  //     variant="contained"
  //     size='small'
  //     style={{ color: "#ffff", backgroundColor: "#ca2129", }}>Delete</Button>
  // )

  useEffect(() => {
    // if(!openPopup){
    getAllProducts()
    // }
  }, [])

  return (
    <div className="menu_div">
      <Sidebar />
      <Typography variant="h6" gutterBottom component="div">
        PRODUCT LIST
      </Typography>
      <Divider />
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead style={{ color: "red" }}>
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
            <TableBody>     {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.product_id}

                  >
                    {columns.map((column) => {

                      let value = row[column.id];
                      if (column.id == "postTime") {

                        value = (new Date(value.toDate())).toDateString()
                      }
                      return (
                        <>
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}

                          </TableCell>
                          {/* {column.id =='category' && <Button  onClick={()=>handleDelete(row.id)} variant="contained" color="error">
                              Success
                            </Button>} */}
                        </>
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
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
          Do you want to Delete this Product??
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <Button variant="contained" size='small' style={{ background: '#ffff', color: 'black' }} >Yes</Button>
            <Button variant="contained" size='small' style={{ background: '#ffff', color: 'black' }}>No</Button>
          </div>
        </Alert>
      </Snackbar> */}
    </div>
  );
};

export default ProductList;
