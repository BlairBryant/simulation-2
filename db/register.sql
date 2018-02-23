insert into houser (username) values ($1);

select * from houser
where username = $1;