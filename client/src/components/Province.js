import React from 'react'
import {Table,TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
// import MaUTable from '@material-ui/core/Table'



export default function Province({provinceData}) {
    
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'Tên Tỉnh/ TP',
                accessor: 'province'
            },
            {
                Header: 'Tổng số ca',
                accessor: 'cases'
            },
              {
                Header: 'Nhiễm trong ngày',
                accessor: 'casesToday',
              },
              {
                Header: 'Tử vong',
                accessor: 'death',
              },
        ]
      )

    //   console.log({provinceData})

      const data = React.useMemo(()=> {
        return provinceData && provinceData.length > 0 ? provinceData : []
      },[provinceData]) 

    return (
       
       <Table >
            <TableHead >
                <TableRow >
                {
                    columns.map((col)=>{
                        return (<TableCell style={{fontWeight:'bold'}} key={col.accessor}>{col.Header}</TableCell>)
                    })
                }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map(row =>{
                       return ( <TableRow> 
                                    
                                    <TableCell> {row.name}</TableCell>
                                    <TableCell> {row.cases.toLocaleString()}</TableCell>
                                    <TableCell style={{color: 'red', fontWeight:'bold'}}> + {row.casesToday.toLocaleString()}</TableCell>
                                    <TableCell> {row.death.toLocaleString()}</TableCell>
                                </TableRow>
                                
                       )
                    })
                }
            </TableBody>
        </Table>
       
    )
}
