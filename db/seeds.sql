INSERT INTO department ( name )
VALUES
    ( "Customer Service" ),
    -- 1
    ( "Human Resources" ),
    -- 2
    ( "Marketing" ),
    -- 3
    ( "Senior Management" ),
    -- 4
    ( "Traders");
    -- 5

INSERT INTO role ( title, salary, department_id )
VALUES
("phone operator", "50000", 1),
("phone operator", "50000", 1),
("customer relations ambassador", "55000", 1),
("customer relations ambassador", "55000", 1),
("complaints manager", "60000", 1),
("complaints manager", "60000", 1),

("internal disputes", "50000", 2),
("internal disputes", "50000", 2),
("hiring manager", "55000", 2),
("hiring manager", "55000", 2),
("legal", "60000" 2),
("legal", "60000" 2),

("social media manager", "50000", 3),
("social media manager", "50000", 3),
("graphic designer", "55000", 3),
("graphic designer", "55000", 3),
("sponsorship coordinator", "60000", 3),
("sponsorship coordinator", "60000", 3),

("customer service manager", "70000", 4),
("customer service manager", "70000", 4),
("hr manager", "70000", 4),
("hr manager", "70000", 4),
("marketing manager", "70000", 4),
("marketing manager", "70000", 4),
("trading manager", "70000", 4),
("trading manager", "70000", 4),

("pre-game Trader", "50000", 5),
("pre-game Trader", "50000", 5),
("in-game Trader", "55000", 5),
("in-game Trader", "55000", 5),
("trading control", "60000", 5),
("trading control", "60000", 5);



INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES
    ("Bernd", "Leno",1),
    ("Kieran", "Tierney",2),
    ("Ben", "White", 3),
    ("Thomas", "Partey",4 ),
    ("Gabriel", "Magalhaes", 5),
    ("Bukayo", "Saka",6),
    ("Martin", "Odegaard", 7),
    ("Alex", "Lacazette",8),
    ("Emile", "Smith-Rowe", 9),
    ("Pierre", "Aubameyang",10),
    ("Ainsley", "Maitland-Niles",11),
    ("Rob", "Holding",12),
    ("Cedric", "Soares", 13),
    ("Takehiro", "Tomiyasu",14 ),
    ("Nicolas", "Pepe", 15),
    ("Nuno", "Tavares",16),
    ("Calum", "Chambers", 17),
    ("Pablo", "Mari", 18),
    ("Albert", "Sambi-Lokonga", 19),
    ("Mohammed", "Elneny", 20);
    -- UPDATE employee SET manager_id=9 WHERE id!=9;