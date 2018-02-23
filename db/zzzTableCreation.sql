create table houser(
    id serial primary key,
    username text
)

create table properties(
    userid integer references houser(id),
    propertyName text,
    propertyDesc text,
    address text,
    city text,
    stateof text,
    zip integer,
    imageurl text,
    loanamount decimal,
    monthlymortgage decimal,
    desiredrent decimal
)