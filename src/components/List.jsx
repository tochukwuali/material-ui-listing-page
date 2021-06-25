import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "clientName", headerName: "Client Name", width: 170 },
  { field: "clientEmail", headerName: "Email", width: 150 },
  { field: "clientWorkPhone", headerName: "Phone", width: 130 },
  { field: "clientIndustry", headerName: "Industry", width: 130 },
  { field: "clientPocName", headerName: "Point of Contact", width: 200 },
  { field: "clientWebsite", headerName: "Website", width: 150 },
  { field: "edit", headerName: "", width: 130 },
];

const List = ({ rows, search }) => {
  console.log(rows);
  return (
    <div style={{ height: 500, width: "100%" }}>
      {rows ? (
        <DataGrid
          filterModel={{
            items: [
              {
                columnField: "clientName",
                operatorValue: "contains",
                value: search,
              },
            ],
          }}
          rows={rows}
          columns={columns}
          pageSize={9}
          checkboxSelection
        />
      ) : null}
    </div>
  );
};

export default List;
