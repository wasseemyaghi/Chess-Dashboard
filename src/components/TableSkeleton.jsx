import React from "react";
import Skeleton from "@mui/material/Skeleton";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export default function TableSkeleton() {
  return (
    <>
      <TableRow sx={{ border: 0 }}>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50px" }} />
        </TableCell>

        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
      </TableRow>
      <TableRow sx={{ border: 0 }} className="club-row">
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50px" }} />
        </TableCell>

        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
      </TableRow>

      <TableRow sx={{ border: 0 }} className="club-row">
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50px" }} />
        </TableCell>

        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
      </TableRow>

      <TableRow sx={{ border: 0 }} className="club-row">
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "50px" }} />
        </TableCell>

        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
        <TableCell align="left" sx={{ border: 0 }}>
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "200px" }} />
        </TableCell>
      </TableRow>
    </>
  );
}
