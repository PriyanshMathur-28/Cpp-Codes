CREATE TABLE Employee (
    FName VARCHAR(15),       -- First Name (variable character, max 15 characters)
    MName CHAR(2),           -- Middle Name (fixed 2 characters)
    LName VARCHAR(15),       -- Last Name (variable character, max 15 characters)
    SSN CHAR(9) PRIMARY KEY, -- Social Security Number (fixed 9 characters, Primary Key)
    BDate DATE,              -- Birthday 
    Address VARCHAR(50),     -- Address (variable character, max 50 characters)
    Sex CHAR(1),             -- Sex (single character: M or F)
    Salary NUMBER(7),        -- Salary (up to 7 digits)
    SuperSSN CHAR(9),        -- Supervisor's SSN 
    DepNo NUMBER(5)          -- Department Number
);

desc Employee;