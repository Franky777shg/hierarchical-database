-- CREATE
insert into category(name) values('fashion');
insert into category(name, parent_id) values('atasan', 1), ('bawahan', 1);
insert into category(name, parent_id) values('shirt', 2), ('jacket', 2), ('jeans', 3), ('shoes', 3);
insert into category(name, parent_id) values('short', 3);

-- UPDATE
update category set name='sandals' where id = 7;

-- DELETE
delete from category where id = 8;