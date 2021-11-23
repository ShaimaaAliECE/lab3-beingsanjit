//sshar374 Lab3

const newConnection = require("./DBConnection");

let conn = newConnection();
conn.connect();

//Drop existing table if one exists
conn.query("DROP TABLE Availability", (err, rows, fields) => {
    if (err) console.log(err);
    else console.log("Table Dropped");
});

//Create new table
conn.query(
    `
    CREATE TABLE Availability 
    (
      Name varchar(100) NOT NULL PRIMARY KEY, 
      LastUpdated timestamp, 
      TimesAvailable json
    )
`,
    (err, rows, fields) => {
        if (err) console.log(err);
        else console.log("Table Created");
    }
);

//Insert row for up to 10 time slots
conn.query(
    `
    INSERT INTO Availability VALUES ("admin", CURRENT_TIME(), '["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]')
    `,
    (err, rows, fields) => {
        if (err) console.log(err);
        else console.log("One row inserted");
    }
);

conn.query(
    `
    INSERT INTO Availability VALUES ("Bobby Joe", CURRENT_TIME(), '{"08:00":false, "09:00":true, "10:00":true, "11:00":true, "12:00":true, "13:00":false, "14:00":true, "15:00":true, "16:00":true, "17:00":true}')
    `,
    (err, rows, fields) => {
        if (err) console.log(err);
        else console.log("One row inserted");
    }
);

/*Select the created row
conn.query("SELECT * FROM Availability", (err, rows, fields) => {
  if (err) console.log(err);
  else console.log("One row selected");
  for (r of rows) console.log(r);
});
this code is giving an error, so going to try commenting it out
*/

conn.end();