import React from "react";
import {
    Button,
    CircularProgress,
    createStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme,
    withStyles
} from "@material-ui/core";
import {Cabang} from "../type/TypeList";
import {getAllLokasi} from "../util/client";
import {useAsync} from "react-async";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.grey[100],
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);


export function LocationTable(){
    const {data, error, isLoading} = useAsync({promiseFn: getAllLokasi})
    if (isLoading) {
        return (
            <CircularProgress style={{marginTop:"20%",marginLeft:"50%"}}/>
        )
    }

    if(error){
        return (<div> ini err </div>)
    }

    if ((data)) {

        const dataTable = data.map(value => 
            LocationTableRow(value)
            );
        return (
            <TableContainer component={Paper}>
                <Table size="medium">
                    <TableHead component="thead">
                        <TableRow style={{background:"#11111"}}>
                            <StyledTableCell>No</StyledTableCell>
                            <StyledTableCell>Nama</StyledTableCell>
                            <StyledTableCell>Alamat</StyledTableCell>
                            <StyledTableCell>Koordinat</StyledTableCell>
                            <StyledTableCell>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTable}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
    return (<div>
        Ini loading
    </div>)
}

export function LocationTableRow(cabang: Cabang) {
    return (      <TableRow key={cabang.id}>
            <TableCell component="th" scope="row">{cabang.id}</TableCell>
            <TableCell>{cabang.name}</TableCell>
            <TableCell>{cabang.addres}</TableCell>
            <TableCell>{cabang.latitude},{cabang.longitude}</TableCell>
            <TableCell><Button>Edit</Button></TableCell>
        </TableRow>);
    
}
