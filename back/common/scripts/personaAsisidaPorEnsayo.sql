SELECT historicalattendance.id, musician.name,rehearsal.date, rehearsal.start_time, rehearsal.end_time FROM `historicalattendance` inner join musician on musician.id = historicalattendance.idMusician INNER JOIN rehearsal on historicalattendance.idRehearsal = rehearsal.id WHERE 1 /* SELECT clientes.nombre, pedidos.fecha_pedido, pedidos.total FROM clientes INNER JOIN pedidos ON clientes.cliente_id = pedidos.cliente_id; */;
