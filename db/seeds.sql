INSERT INTO department ( id, name )
VALUES
    (1, "Customer Service" ),
    -- 1
    (2, "Human Resources" ),
    -- 2
    (3, "Marketing" ),
    -- 3
    (4, "Traders"),
    -- 4
    (5, "Senior Management" );
    -- 5

SELECT * FROM department;

INSERT INTO roles ( title, salary, department_id )
VALUES
-- Customer Service
("phone operator", 50000, 1),
("customer relations ambassador", 55000, 1),
("complaints manager", 60000, 1),
-- Human Resources
("internal disputes", 50000, 2),
("hiring manager", 55000, 2),
("legal", 60000, 2),
-- Marketing
("social media manager", 50000, 3),
("graphic designer", 55000, 3),
("sponsorship coordinator", 60000, 3),
-- Traders
("pre-game trader", 50000, 4),
("in-game trader", 55000, 4),
("trading control", 60000, 4),
-- Senior Management
("customer service manager", 70000, 5),
("hr manager", 70000, 5),
("marketing manager", 70000, 5),
("trading manager", 70000, 5),
("COO", 80000, 5),
("CEO", 90000, 5);


SELECT * FROM roles;


INSERT INTO employeesdata ( first_name, last_name, role_id, manager_id )
VALUES
    ("Bernd", "Leno", 1, 13),
    ("Kieran", "Tierney", 1, 13),
    ("Ben", "White", 2, 13),
    ("Thomas", "Partey", 2, 13),
    ("Gabriel", "Magalhaes", 3, 13),
    ("Bukayo", "Saka", 3, 13),

    ("Martin", "Odegaard", 4, 14),
    ("Alex", "Lacazette", 4, 14),
    ("Emile", "Smith-Rowe", 5, 14),
    ("Pierre", "Aubameyang", 5, 14),
    ("Ainsley", "Maitland-Niles", 6, 14),
    ("Rob", "Holding", 6, 14),

    ("Cedric", "Soares", 7, 15),
    ("Takehiro", "Tomiyasu", 7, 15 ),
    ("Nicolas", "Pepe", 8, 15),
    ("Nuno", "Tavares", 8, 15),
    ("Calum", "Chambers", 9, 15),
    ("Pablo", "Mari", 9, 15),

    ("Albert", "Sambi-Lokonga", 10, 16),
    ("Mohammed", "Elneny", 10, 16),
    ("Folarin", "Balogun", 11, 16),
    ("Eddie", "Nketiah", 11, 16),
    ("Sead", "Kolasinac", 12, 16),
    ("Aaron", "Ramsdale", 12, 16),

    ("Arthur", "Okonkwo", 13, NULL),
    ("Granit", "Xhaka", 14, NULL),
    ("Gabriel", "Martinelli", 15, NULL),
    ("William", "Saliba", 16, NULL),
    ("Reiss", "Nelson", 17, NULL),
    ("Konnen", "Hannaford", 18, NULL);
    -- UPDATE employee SET manager_id=9 WHERE id!=9;

SELECT * FROM employeesdata;
