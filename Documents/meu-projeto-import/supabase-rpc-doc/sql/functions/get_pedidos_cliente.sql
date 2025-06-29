create or replace function get_pedidos_cliente()
returns table (
  id_pedido int,
  data_criacao timestamp,
  total numeric
)
language sql
security definer
as $$
  select
    p.id_pedido,
    p.data_pedido,
    p.valor_total
  from pedidos p
  where p.user_id = auth.uid();
$$;
