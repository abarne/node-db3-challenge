-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

select Product.ProductName, Product.*
from Product
join Category on Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

select o.Id, s.CompanyName, o.ShippedDate
from [Order] as o
join Shipper as s
on o.ShipVia = s.Id
where o.ShippedDate < '2012-09-08 00:00:00'
order by o.ShippedDate;

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select p.ProductName, o.Quantity
from OrderDetail as o
join Product as p
on o.ProductId = p.Id
where o.OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select o.Id as [Order Id], c.CompanyName as [Company Name], e.LastName as [Last Name]
from [Order] as o
join Customer as c on o.CustomerId = c.Id
join Employee as e on o.EmployeeId = e.Id; 