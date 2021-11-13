INSERT INTO department ( name )
VALUES
    ( "Customer Service" ),
    -- 2
    ( "Human Resources" ),
    -- 2
    ( "Marketing" ),
    -- 3
    ( "Traders"),
    -- 4
    ( "Senior Management" );
    -- 5

INSERT INTO role ( title, salary, department_id )
VALUES
-- Customer Service
("phone operator", "50000", 1),
("phone operator", "50000", 1),
("customer relations ambassador", "55000", 1),
("customer relations ambassador", "55000", 1),
("complaints manager", "60000", 1),
("complaints manager", "60000", 1),
-- Human Resources
("internal disputes", "50000", 2),
("internal disputes", "50000", 2),
("hiring manager", "55000", 2),
("hiring manager", "55000", 2),
("legal", "60000" 2),
("legal", "60000" 2),
-- Marketing
("social media manager", "50000", 3),
("social media manager", "50000", 3),
("graphic designer", "55000", 3),
("graphic designer", "55000", 3),
("sponsorship coordinator", "60000", 3),
("sponsorship coordinator", "60000", 3),
-- Traders
("pre-game trader", "50000", 4),
("pre-game trader", "50000", 4),
("in-game trader", "55000", 4),
("in-game trader", "55000", 4),
("trading control", "60000", 4),
("trading control", "60000", 4);
-- Senior Management
("customer service manager", "70000", 5),
("hr manager", "70000", 5),
("marketing manager", "70000", 5),
("trading manager", "70000", 5),
("COO", "80000", 5),
("CEO", "90000", 5),




INSERT INTO employee ( first_name, last_name, role_id, manager_id )
VALUES
    ("Bernd", "Leno", 1),
    ("Kieran", "Tierney", 2),
    ("Ben", "White", 3),
    ("Thomas", "Partey", 4 ),
    ("Gabriel", "Magalhaes", 5),
    ("Bukayo", "Saka", 6),

    ("Martin", "Odegaard", 7),
    ("Alex", "Lacazette", 8),
    ("Emile", "Smith-Rowe", 9),
    ("Pierre", "Aubameyang", 10),
    ("Ainsley", "Maitland-Niles", 11),
    ("Rob", "Holding", 12),

    ("Cedric", "Soares", 13),
    ("Takehiro", "Tomiyasu", 14 ),
    ("Nicolas", "Pepe", 15),
    ("Nuno", "Tavares", 16),
    ("Calum", "Chambers", 17),
    ("Pablo", "Mari", 18),

    ("Albert", "Sambi-Lokonga", 19),
    ("Mohammed", "Elneny", 20),
    ("Folarin", "Balogun", 21),
    ("Eddie", "Nketiah", 22),
    ("Sead", "Kolasinac", 23),
    ("Aaron", "Ramsdale", 24 ),

    ("Arthur", "Okonkwo", 25, NULL),
    ("Granit", "Xhaka", 26, NULL),
    ("Gabriel", "Martinelli", 27, NULL),
    ("William", "Saliba", 28, NULL),
    ("Reiss", "Nelson", 29, NULL),
    ("Konnen", "Hannaford", 30, NULL);
    -- UPDATE employee SET manager_id=9 WHERE id!=9;

